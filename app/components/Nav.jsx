import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <header className='flex justify-center '>
           <Image
          src={logo}
          width={200}
          height={200}
          alt="Picture of the author"
        />

        <div>
        <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="This is placeholder"/>
        <FontAwesomeIcon
        icon={faMagnifyingGlass}
        />
        </div>

        <div>
        <FontAwesomeIcon
        icon={faCartShopping}
        />
        <FontAwesomeIcon
        icon={faUser}
        />
        </div>


    </header>
  )
}
