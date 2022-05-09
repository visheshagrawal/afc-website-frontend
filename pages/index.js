import { useEffect } from 'react'
import { homepageData, obtainCamera } from '@/lib/data'

function handleError(error) {
  console.log(
    'navigator.MediaDevices.getUserMedia error: ',
    error.message,
    error.name
  )
}

const Home = ({ homepageData }) => {

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
      }, 1)
    }
    obtainCamera(handleSuccess, handleError)
    return () => {
      clearInterval(drawInterval)
    }
  }, [])

  const draw = (stream) => {
    var video = document.getElementById('video')
    const canvas = (window.canvas = document.querySelector('canvas'))
    canvas.height = Math.max(document.getElementById('contentDiv').clientHeight, document.getElementById('contentDiv').offsetHeight)
    canvas.width = canvas.height * (stream.getVideoTracks()[0].getSettings().width / stream.getVideoTracks()[0].getSettings().height)
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    let image_data_url = canvas.toDataURL('image/jpeg')
    console.log(image_data_url)
  }

  return <>
    <div
      id="contentDiv"
      className="h-screen w-screen z-10 overflow-hidden flex flex-col items-center justify-center"
    >
    </div>
    <img
      src=""
      id="canvasImg"
      className="w-screen h-screen object-cover hidden"
    />
    <canvas id="canvas" className='hidden'></canvas>
    <video
      id="video"
      muted={true}
      autoPlay={true}
      className="hidden z-0"
    ></video>
  </>
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      homepageData,
    },
  }
}
