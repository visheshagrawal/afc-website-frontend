import Link from 'next/link'
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { searchAllData, homepageData, obtainCamera } from '@/lib/data'
import { HeartIcon, StarIcon as StarIconOutline } from '@heroicons/react/outline'

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name)
}

const emojiMap = {
  'angry': '😠',
  'disgust': '🤢',
  'fear': '😨',
  'happy': '😄',
  'neutral': '😐',
  'sad': '😥',
  'surprise': '😮'
}

const Product = ({ data, slug }) => {
  const [emotionsData, setEmotionsData] = useState({})
  const [sumEmotionsData, setSumEmotionsData] = useState(0)
  const [selectedImage, setSelectedImage] = useState(data.images[0].url)

  const draw = (stream) => {
    var video = document.getElementById('video')
    const canvas = (window.canvas = document.querySelector('canvas'))
    canvas.height = Math.max(document.getElementById('contentDiv').clientHeight, document.getElementById('contentDiv').offsetHeight)
    canvas.width = canvas.height * (stream.getVideoTracks()[0].getSettings().width / stream.getVideoTracks()[0].getSettings().height)
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    let image_data_url = canvas.toDataURL('image/jpeg')
    fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ product_slug: slug, img: [image_data_url] })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }

  useEffect(() => {
    var video = document.getElementById('video')
    let drawInterval
    function handleSuccess(stream) {
      window.stream = stream
      video.srcObject = stream
      video.onloadedmetadata = function (e) {
        video.play()
      }
      drawInterval = setInterval(() => {
        draw(stream)
      }, 1000)
    }
    obtainCamera(handleSuccess, handleError)
    fetch('http://localhost:5000/get_emotions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ product_slug: slug })
    })
      .then((res) => res.json())
      .then((res) => {
        if (Object.keys(res).length < 1) {
          let store = { "angry": 0, "disgust": 0, "fear": 0, "happy": 0, "sad": 0, "surprise": 0, "neutral": 0 }
          setEmotionsData(store)
          setSumEmotionsData(Object.keys(store).map((i) => res[i]).reduce((a, b) => a + b, 0))
        }
        else {
          setEmotionsData(res)
          setSumEmotionsData(Object.keys(res).map((i) => res[i]).reduce((a, b) => a + b, 0))
        }
      })
    return () => {
      clearInterval(drawInterval)
    }
  }, [])

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
          <h1 className="mt-5 font-medium text-xl">{'Emotional Product Review Scale'}</h1>
          <div className='mt-5 grid grid-cols-3 gap-3 text-center'>
            {Object.keys(emotionsData).filter((i) => i !== 'fear').map((i) => <div key={i} className='flex flex-col items-center border rounded p-2'><span className='text-xl'>{emojiMap[i]}</span><span className='mt-1 text-lg font-medium'>{`${sumEmotionsData > 0 ? Math.round(10000 * (emotionsData[i] / sumEmotionsData)) / 100 : '--'}%`}</span><span className='text-gray-800 font-light'>{`${i.substring(0, 1).toUpperCase()}${i.substring(1)}`}</span></div>)}
          </div>
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
      <canvas id="canvas" className='hidden'></canvas>
      <video id="video" muted={true} autoPlay={true} className="hidden z-0"></video>
      <img src="" id="canvasImg" className="w-screen h-screen object-cover hidden" />
      <div id="contentDiv" className="h-screen w-screen z-10 overflow-hidden flex flex-col items-center justify-center"></div>
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
