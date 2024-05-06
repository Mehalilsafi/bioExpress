
import React from "react";
import SideBar from "@/app/components/SideBar";
import { useParams } from "next/navigation";
import Hero from "./components/Hero";
import getPublicity from "@/app/actions/getPublicity";

import getCategories from '@/app/actions/getCategories';

export const revalidate=0
export default async function page({ params }) {
  const categories=await getCategories()
  const publicity = await getPublicity();
  console.log('this is publicity come from supabase ',publicity)
  return (
    <div className="grid grid-cols-5  mx-auto px-4 mt-5 ">
      <div className=" col-span-5  md:col-span-1  " style={{ minWidth: "30%" }}>
        <SideBar publicity={publicity} categories={categories}/>
      </div>
      <div
        className=" col-span-5 md:col-span-4 bg-[#EBF1E1] rounded-md border border-gray-200 border-solid mt-[70px]"
        style={{ minWidth: "70%" }}
      >
        <Hero params={params} />

      </div>
    </div>
  );
}