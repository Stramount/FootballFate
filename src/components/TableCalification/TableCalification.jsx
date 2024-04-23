import { useState } from 'react'
import playersList from '../../data/players'
import { useEffect } from 'react'
import PlayerListed from '../HomePlayerListed/PlayerListed'

function TableCalification() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    setPlayers([ ...playersList ])
  }, [])

  return (
    <div className='w-[420px] flow-shadow rounded-lg bg-[#202020]'>
      {
        players.map((player, i) => <PlayerListed name={player.name} place={i + 1} points={player.points} team={player.teamname} />)
      }
    </div>
  )
}

export default TableCalification