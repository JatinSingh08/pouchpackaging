import Body from '../components/Home/Body'
import Purpose from '../components/Home/Purpose'
import BrandPartners from '../components/Home/BrandPartners'
import Brochure from '../components/Home/Brochure'
import Applications from '../components/Home/Applications'

const Home = () => {
  return (
    <main className='min-h-screen'>
      <Body />
      <Purpose />
      <BrandPartners />
      <Brochure />
      <Applications />
    </main>
  )
}

export default Home
