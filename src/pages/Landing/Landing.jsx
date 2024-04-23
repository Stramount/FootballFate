import LandingSectionHeader from '../../components/LandingSectionHeader/LandingSectionHeader'
import LandingSectionPlayerWeek from '../../components/LandingSectionPlayerWeek/LandingSectionPlayerWeek'
import LandingSectionHero from '../../components/LandingSectionHero/LandingSectionHero'

function Landing() {
  return (
    <div className='w-[1536px] mx-auto'>
      <div className='py-14'>
        <LandingSectionHeader />
      </div>
      <div className='py-14'>
        <LandingSectionPlayerWeek />
      </div>
      <div className='py-14'>
        <LandingSectionHero />
      </div>
    </div>
  )
}

export default Landing