import React from 'react'
import Image from 'next/image'

function SmallCard({ img, location, distance }) {
  return (
    <div
      className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl 
    transition duration-200 ease-out hover:scale-105 hover:bg-gray-100 "
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
