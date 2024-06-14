'use server';
import { supabase } from '@/app/db/supabase';
import { supabaseServerClient } from '@/app/db/supaBaseServer';

export async function getProducts() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    // Fetch products
    let { data: products, error: productsError } = await supabase
        .from('products')
        .select('* , categories (categoryName)')
        .eq('sellerId', user.id);

    if (productsError) {
        console.error('Error fetching products:', productsError);
        return null;
    }

    // Fetch ratings for all products
    let { data: ratings, error: ratingsError } = await supabase
        .from('ratings')
        .select('*');

    if (ratingsError) {
        console.error('Error fetching ratings:', ratingsError);
        return products; // Return products without ratings if there's an error
    }

    // Calculate average rating for each product
    const productRatings = ratings.reduce((acc, rating) => {
        if (!acc[rating.product_id]) {
            acc[rating.product_id] = { total: 0, count: 0 };
        }
        acc[rating.product_id].total += rating.rating;
        acc[rating.product_id].count += 1;
        return acc;
    }, {});

    // Assign ratings to products
    products = products.map((product) => ({
        ...product,
        avgRating: productRatings[product.id]
            ? productRatings[product.id].total /
              productRatings[product.id].count /
              5
            : 0,
    }));

    return products;
}
