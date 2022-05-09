import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col w-full'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
