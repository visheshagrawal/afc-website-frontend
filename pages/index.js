import { homepageData } from '@/lib/data'

const Home = ({ homepageData }) => {
  return <>{'nothing'}</>
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      homepageData,
    },
  }
}
