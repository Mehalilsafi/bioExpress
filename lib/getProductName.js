import gridImage from "@/assets/gridImage.svg";

export default function getProductName( productName=null) {
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

  
  if (productName) {
    const product = products.find(
      (product) => product.productName == productName
    );
    return product;
  } else {
    return products;
  }
}