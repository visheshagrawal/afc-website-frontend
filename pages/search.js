import Link from 'next/link'
import { searchAllData } from '@/lib/data'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import { HeartIcon } from '@heroicons/react/outline'

const ProductPreview = ({ name, path, images, prices }) => {
  return (
    <Link href={'/product' + path}>
      <a className="mt-2 w-1/3 bg-gray-100 border border-white p-1 relative">
        <div className="flex flex-col absolute top-0 left-0 items-start">
          <h3 className="py-2 px-4 bg-white rounded text-black font-medium text-xl">{name}</h3>
          <h4 className="py-2 px-4 bg-white rounded text-black text-md">{`$ ${prices.price.value} ${prices.price.currencyCode}`}</h4>
        </div>
        <HeartIcon className="absolute top-0 right-0 w-[30px] h-[30px] p-2 bg-white" />
        <img src={images[0].url} loading="lazy" />
      </a>
    </Link>
  )
}

const Search = ({ searchAllData }) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="mb-5 w-[80%] flex flex-row items-start w-full">
        <div className="pt-5 w-[15%]">
          <LeftSidebar />
        </div>
        <div className="pt-5 w-[70%] flex flex-col items-start">
          <h2>Showing {searchAllData.data.products.length} Results</h2>
          <div className="mt-5 flex flex-row flex-wrap items-start">
            {searchAllData.data.products.map((i) => (
              <ProductPreview key={i.path} {...i} />
            ))}
          </div>
        </div>
        <div className="pt-5 w-[15%]">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default Search

export async function getStaticProps() {
  return {
    props: {
      searchAllData,
    },
  }
}
