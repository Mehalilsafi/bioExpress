import Image from "next/image";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import getPublicity from "./actions/getPublicity";
export default async function Home() {
  const publicity = await getPublicity();
   console.log('this is publicity come from supabase ',publicity)
  return (
    <>
    
      {/* Your application components */}
      <Nav />
      <div className="grid grid-cols-5  mx-auto px-4 mt-5 ">
        <div
          className=" col-span-5  md:col-span-1  "
          style={{ minWidth: "30%" }}
        >
          <SideBar publicity={publicity} />
        </div>
        <div
          className=" col-span-5 md:col-span-4 bg-[#EBF1E1] rounded-md border border-gray-200 border-solid mt-[70px]"
          style={{ minWidth: "70%" }}
        >
          <Hero publicity={publicity}/>
        </div>
      </div>
   
    </>
  );
}
