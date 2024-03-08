
import gridImage from "@/assets/gridImage.svg";

export default  function getProduct(productId = null) {
  const products = [
    {
      productId: 1,
      productName: "Jam",
      productPrice: 10.99,
      url: gridImage,
    },
    {
      productId: 2,
      productName: "orange",
      productPrice: 15.99,
      url: gridImage,
    },
    {
      productId: 3,
      productName: "cheese",
      productPrice: 20.49,
      url: gridImage,
    },
    {
      productId: 4,
      productName: "meat",
      productPrice: 18.49,
      url: gridImage,
    },
    {
      productId: 5,
      productName: "banana",
      productPrice: 12.99,
      url: gridImage,
    },
  ];

  if (productId) {
    // If productId is provided, find and return the specific product
    const product = products.find((product) => product.productId == productId);
    return product;
  } else {
    // If productId is not provided, return the whole array of products
    return products;
  }
}

