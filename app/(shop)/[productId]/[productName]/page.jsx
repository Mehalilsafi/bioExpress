import React from 'react'
import Hero from './components/Hero'
import order from './actions/order'
export default async function page({params}) {
  const {data,error} =await order() 
  return (
  
    <div>  <Hero params={params} data={data} error={error}/></div>
  )
}
