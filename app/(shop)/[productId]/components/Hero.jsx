

import Footer from "./Footer";
import realeted from "@/assets/realeted.svg";
import CarouselThumbs from "./CarouselThumbs";
import Product from "./Product";
import {getProductId} from "../../actions/getProductId";
import { useParams } from "next/navigation";
import getPublicity from "@/app/actions/getPublicity";
export default async function Hero({ params }) {
  const { productId } = params;
  console.log("********************************** ",productId);
  const product = await getProductId(productId);
  const publicity=await getPublicity()
  console.log("********************************** ");
  console.log("product with id from supabase ", product);
  console.log("********************************** ");
  const gallery = product.images;
  

  return (
     <div className="m-6">
      <div className="md:flex md:gap-8">
        <div className="flex flex-col md:flex-row gap-[20px] md:col-span-2 md:w-6/12">
          <CarouselThumbs gallery={gallery} />
        </div>

        <Product product={product} />
      </div>

      <Footer publicity={publicity} />
    </div>
  );
}
