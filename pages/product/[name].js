import Link from 'next/link'
import { useState } from 'react'
import { searchAllData } from '@/lib/data'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, StarIcon as StarIconOutline } from '@heroicons/react/outline'

const Product = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(data.images[0].url)
  const emotions = { angry: 5, disgust: 0, fear: 0, happy: 38, sad: 0, surprise: 0, neutral: 257 }

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex flex-row items-start">
        <div className="w-[65%] bg-purple-700 flex flex-col items-start w-full relative">
          <div className="flex flex-col absolute top-0 left-0 items-start">
            <h3 className="py-2 px-4 bg-white text-black font-bold text-2xl">{data.name}</h3>
            <h4 className="py-2 px-4 bg-white text-black text-lg">{`$ ${data.prices.price.value} ${data.prices.price.currencyCode}`}</h4>
          </div>
          <HeartIcon className="absolute top-0 right-0 w-[50px] h-[50px] p-2 bg-white" />
          <div className="w-full flex flex-col items-center">
            <img className="w-auto h-[75vh]" src={selectedImage} />
          </div>
          <div className="flex flex-row items-start bg-purple-900 overflow-x-scroll">
            {data.images.map((i) => (
              <img
                key={i.url}
                src={i.url}
                onClick={() => {
                  setSelectedImage(i.url)
                }}
                className="hover:bg-white cursor-pointer w-auto h-[250px]"
              />
            ))}
          </div>
        </div>
        <div className="w-[35%] flex flex-col items-start px-10">
          <h1 className="font-bold text-3xl">{data.name}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: data.description }} className="mt-5 font-light text-md"></h2>
          <div className="mt-10 w-full flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-1">
              <StarIcon className="text-gray-700 w-[20px] h-[20px]" />
              <StarIcon className="text-gray-700 w-[20px] h-[20px]" />
              <StarIcon className="text-gray-700 w-[20px] h-[20px]" />
              <StarIcon className="text-gray-700 w-[20px] h-[20px]" />
              <StarIconOutline className="text-gray-700 w-[18px] h-[18px]" />
            </div>
            <span>36 reviews</span>
          </div>
          <button className="mt-5 w-full bg-black px-2 py-4 uppercase text-white">Add To Cart</button>
          <span className="mt-5 text-lg font-medium">Care</span>
          <span className="mt-2 font-light">This is a limited edition production run. Printing starts when the drop ends.</span>
          <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
          <span className="mt-5 text-lg font-medium">Details</span>
          <span className="mt-2 font-light">
            This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping
            may take 10+ days due to COVID-19.
          </span>
          <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
        </div>
      </div>
      <div className="mt-10 mb-10 h-[1px] w-full bg-gray-300"></div>
      <div className="flex flex-col w-full relative">
        <h1 className="px-5 font-bold text-2xl">Related Products</h1>
        <div className="flex flex-row items-start overflow-x-scroll">
          {searchAllData.data.products.map((i) => (
            <Link key={i.images[0].url} href={'/product' + i.path}>
              <img key={i.images[0].url} src={i.images[0].url} className="hover:bg-white cursor-pointer w-auto h-[250px]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product

export async function getServerSideProps({ params }) {
  const slug = params.name
  const data = searchAllData.data.products.filter((i) => i.path.replace('/', '').replace('/', '') === slug)[0]
  return {
    props: {
      data,
      slug,
    },
  }
}
