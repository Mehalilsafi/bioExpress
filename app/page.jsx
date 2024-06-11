import Image from "next/image";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import getPublicity from "./actions/getPublicity";
import getCategories from "./actions/getCategories";
import Product from "./actions/getProduct";
import getFilterProudct from "./actions/getFilterProudct";

export const revalidate = 0;
export default async function Home() {
  const publicity = await getPublicity();
  const categories = await getCategories();
  const proudct = await Product();
  //const FilterProduct = await getFilterProudct();

  return (
    <>
      {/* Your application components */}
      <Nav />
      <div className="grid grid-cols-5  mx-auto px-4 mt-5 ">
        <div
          className=" col-span-5  md:col-span-1  "
          style={{ minWidth: "30%" }}
        >
          <SideBar
            publicity={publicity}
            categories={categories}
            //FilterProduct={FilterProduct}
          />
        </div>
        <div
          className=" col-span-5 md:col-span-4 bg-[#EBF1E1] rounded-md border border-gray-200 border-solid mt-[70px]"
          style={{ minWidth: "70%" }}
        >
          <Hero publicity={publicity} proudct={proudct} />
        </div>
      </div>
    </>
  );
}
