import Image from "next/image";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="grid grid-cols-5  mx-auto px-4 mt-5 ">
      <div className="col-span-1  " style={{ minWidth: "30%" }}>
        <SideBar />
      </div>
      <div className="col-span-4 bg-[#EBF1E1] rounded-md border border-gray-200 border-solid mt-[70px]" style={{ minWidth: "70%" }}>
        <Hero/>
      </div>
    </div>
  );
}
