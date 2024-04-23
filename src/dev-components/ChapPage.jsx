import HomeLastWeek from '../components/HomeLastWeek/HomeLastWeek'
import StatsGrid from '../components/HomePlayerStats/PlayerStats'
import TableCalification from '../components/TableCalification/TableCalification'

function ChapPage() {
  return (
    <div className='w-[1024px] mx-auto flex justify-between items-center mt-24'>
      <div className='flex flex-col gap-8'>
        <div>
          <StatsGrid />
        </div>
        <div>
          <HomeLastWeek />
        </div>
      </div>
      <div>
        <TableCalification />
      </div>
    </div>
  )
}

export default ChapPage