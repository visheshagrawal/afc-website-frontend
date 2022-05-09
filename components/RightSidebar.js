const RightSidebar = ({}) => {
  return (
    <div className="pl-5 flex flex-col w-full">
      <h2 className="text-black font-medium text-lg">Relevance</h2>
      <h3 className="mt-2 text-md text-gray-500 font-light">Trending</h3>
      <h3 className="mt-2 text-md text-gray-500 font-light">Latest arrivals</h3>
      <h3 className="mt-2 text-md text-gray-500 font-light">Price: Low to High</h3>
      <h3 className="mt-2 text-md text-gray-500 font-light">Price: High to Low</h3>
    </div>
  )
}

export default RightSidebar
