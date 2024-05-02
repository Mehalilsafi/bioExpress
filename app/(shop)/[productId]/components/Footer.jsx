import React from "react";
import footer from "@/assets/footer.svg";
import orange from "@/assets/orange.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function Footer({publicity}) {
  const arr = [1, 2, 3];
  const currentPage = "details_page_publicity";
  const filteredPublicity = publicity?.filter(
    (item) => item.page == currentPage
  );
  console.log("filterd page depend on the page Name", filteredPublicity);
  return (
    <div className="mt-5">
      <h1 className="font-medium text-3xl">Seggestions</h1>
      <div className=" flex flex-col md:flex-row gap-[10px] mt-5 md:w-full md:justify-between">
        <div className="flex justify-between md:gap-5 ">
          {arr.map((ele) => (
            <Image
              src={footer}
              width={100}
              height={100}
              alt="Picture of the author"
              key={ele}
            />
          ))}
        </div>

        {filteredPublicity?.length > 0 && (
          <Image
            src={filteredPublicity[0]?.imageUrl}
            width={200}
            height={400}
            alt="side_bar_publicity"
          />
        )}
      </div>
      <h1 className="font-medium text-3xl mt-5">Comments</h1>
      <div className="flex justify-between items-center gap-[15px] mt-5">
        <FontAwesomeIcon icon={faUser} className="text-2xl font-light" />
        <input
          type="text"
          className="py-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="your feed back meant so much "
        />
        <p className="text-sm font-base text-gray-300">18/11/2023</p>
      </div>
    </div>
  );
}