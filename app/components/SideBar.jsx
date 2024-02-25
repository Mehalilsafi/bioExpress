import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
   faShirt,
    faBagShopping,
    faWandMagicSparkles,
     faGlobe,
      faComment
} from "@fortawesome/free-solid-svg-icons";




export default function SideBar() {
 
    const items = [
        { icon: faPizzaSlice, text: 'Food' },
        { icon: faShirt, text: 'Cloth' },
        {icon:faBagShopping, text:'Accecsoire'},
        {icon:faWandMagicSparkles , text:'Decoration'}
      ];
      const itemsButtom = [
        { icon:faGlobe, text: 'Our scial ' },
        { icon: faComment, text: 'About Us' },
      ]
  return (
    <div>

    <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
  <span className="sr-only">Toggle Navigation</span>
  <svg className="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
     </button>


     <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
     <div className="px-6">
     <h2 className='flex-none text-xl font-semibold dark:text-white'> categories</h2>
     </div>
     <div className='flex flex-col w-full justify-center gap-10'>
     {items.map((item, index) => (
      <div key={index} className='flex items-center'>
        <FontAwesomeIcon icon={item.icon} className='text-xl font-light' />
        <p>{item.text}</p>
      </div>
     ))}
   </div> 

   <div className='flex flex-col w-full justify-center gap-10'>
     {itemsButtom.map((item, index) => (
      <div key={index} className='flex items-center'>
        <FontAwesomeIcon icon={item.icon} className='text-xl font-light' />
        <p>{item.text}</p>
      </div>
     ))}
   </div> 
      
      
      

     </div>
    </div>
  )
}
