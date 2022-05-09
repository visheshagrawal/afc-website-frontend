import Logo from './Logo'
import Link from 'next/link'
import { ShoppingBagIcon, HeartIcon, UserCircleIcon, SearchIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between py-3 px-5">
      <div className="flex flex-row items-center space-x-4 py-1">
        <Link href={'/'}>
          <a>
            <Logo />
          </a>
        </Link>
        <Link href={'/search'}>
          <a className="text-gray-500">All</a>
        </Link>
        <Link href={'/search/shop-all'}>
          <a className="text-gray-500">Shop All</a>
        </Link>
      </div>
      <div className="relative flex w-[400px] flex-wrap items-stretch">
        <input
          type="text"
          id="productSearch"
          placeholder="Search for products..."
          className="px-3 py-3 placeholder-gray-400 text-gray-500 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-0 w-full pr-10"
        />
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          <SearchIcon className="w-[20px] h-[20px]" />
        </span>
      </div>
      <div className="flex flex-row items-center space-x-4 py-1">
        <ShoppingBagIcon className="cursor-pointer text-gray-500 w-[30px] h-[30px]" />
        <HeartIcon className="cursor-pointer text-gray-500 w-[30px] h-[30px]" />
        <UserCircleIcon className="cursor-pointer text-blue-500 w-[30px] h-[30px]" />
      </div>
    </div>
  )
}

export default Navbar
