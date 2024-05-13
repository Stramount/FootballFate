import './scrollfilter.css'
import { useEffect, useState } from 'react'
import { getPlayerPoints, getPositionColor } from "../../helpers/func"
import useUser from '../../hooks/useUser'
import { useSelector } from 'react-redux'
import PlayerValoration from '../Valorations/PlayerValoretion'
import { errorNotify } from '../../hooks/useNoty'

function PlayerSearch({ name, setName, players, setPlayer }) {

  function handleSubmit(evento) {
    evento.preventDefault()
    setPlayer(players.filter(player => player.name.toLowerCase().includes(name.toLowerCase())))
    setName("")
  }

  return (
    <div className='w-full'>
      <form className='w-full' onSubmit={handleSubmit}>
        <input className='w-full search' type='text' name={name} placeholder='Buscar' onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  )
}

function PlayerToExit({ player, setShowModel, setCurrentPlayer }) {

  const userState = useSelector(state => state.user.user)
  const { deletePlayerOnTeamById } = useUser()


  function handleClick() {
    setShowModel(false)
    if (player.id !== 0) {
      deletePlayerOnTeamById(player.id)
    } else {

    }
    setCurrentPlayer({})
  }

  return (
    <div onClick={handleClick} className='w-full text-xs text-white font-poppins bg-[#222] rounded-md hover:bg-[#101010] px-4 py-2 cursor-pointer flex'>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex justify-between gap-4'>
            <p className='text-sm font-semibold'>{player.name} {player.lastname}</p>
            <p className='text-sm font-bold italic' style={{ color: getPositionColor(player.position) }}>{player.position}</p>
          </div>
          <p className='text-center'><span className='text-focus font-bold'>{getPlayerPoints(player)} PTS</span> / {player.price}$</p>
        </div>
        <div className='flex justify-between gap-4'>
          <div className='flex gap-2 text-xs text-center text-gray-500'>
            <div>
              <p>{player.goals}</p>
              <p className='text-focus'>Gols</p>
            </div>
            <div>
              <p>{player.assists}</p>
              <p className='text-focus'>Asists</p>
            </div>
            <div>
              <p>{player.emptyGoal ? 'Si' : 'No'}</p>
              <p className='text-focus'>Port a 0</p>
            </div>
            <div>
              <p>{player.GP ? 0 : 0}</p>
              <p className='text-focus'>G/P</p>
            </div>
            <div>
              <p>{player.AP ? 0 : 0}</p>
              <p className='text-focus'>A/P</p>
            </div>
          </div>
          <div className='flex'>
            <PlayerValoration valoration={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

function PlayerListed({ player, setShowModel, currentPlayer, setCurrentPlayer }) {

  const userState = useSelector(state => state.user.user)
  const { addPlayerAlign, addPlayerBanking, deletePlayerOnTeamById, setBudget } = useUser()

  function addPlayer(p, currentP) {
    if (!currentP.isBanking) {
      addPlayerAlign({ ...p, order: currentP.order })
    } else {
      addPlayerBanking({ ...p, order: currentP.order })
    }
  }

  function reset() {
    errorNotify('No se puede comprar el jugador')
    setShowModel(false)
    setCurrentPlayer({})
  }

  // function deletePlayer(playerId) {

  // }

  function handleOnclick() {
    const ids = [
      ...userState.team.align.players.map(p => p.id),
      ...userState.team.banking.players.map(p => p.id)
    ]
    if (userState.budget - player.price < 0) {
      if (currentPlayer.id !== 0) {
        if (userState.budget + currentPlayer.price - player.price > 0) {
          deletePlayerOnTeamById(currentPlayer.id)
          addPlayer(player, currentPlayer)
          setBudget(userState.budget + currentPlayer.price - player.price)
        } else {
          reset()
        }
      } else {
        reset()
      }

    } else {
      if (ids.includes(currentPlayer.id)) {
        deletePlayerOnTeamById(currentPlayer.id)
      }
      addPlayer(player, currentPlayer)
      setBudget(userState.budget - player.price)
    }

    setShowModel(false)
    setCurrentPlayer({})
  }

  return (
    <div onClick={handleOnclick} className='w-full text-xs text-white font-poppins bg-[#222] rounded-md hover:bg-[#101010] px-4 py-2 cursor-pointer flex'>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex justify-between gap-4'>
            <p className='text-sm font-semibold'>{player.name} {player.lastname}</p>
            <p className='text-sm font-bold italic' style={{ color: getPositionColor(player.position) }}>{player.position}</p>
          </div>
          <p className='text-center'><span className='text-focus font-bold'>{getPlayerPoints(player)} PTS</span> / {player.price}$</p>
        </div>
        <div className='flex justify-between gap-4'>
          <div className='flex gap-2 text-xs text-center text-gray-500'>
            <div>
              <p>{player.goals}</p>
              <p className='text-focus'>Gols</p>
            </div>
            <div>
              <p>{player.assists}</p>
              <p className='text-focus'>Asists</p>
            </div>
            <div>
              <p>{player.emptyGoal ? 'Si' : 'No'}</p>
              <p className='text-focus'>Port a 0</p>
            </div>
            <div>
              <p>{player.GP ? 0 : 0}</p>
              <p className='text-focus'>G/P</p>
            </div>
            <div>
              <p>{player.AP ? 0 : 0}</p>
              <p className='text-focus'>A/P</p>
            </div>
          </div>
          <div className='flex'>
            <PlayerValoration valoration={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

function PlayersOnScreen({ players, setShowModel, setCurrentPlayer, currentPlayer }) {
  return (
    <div className='min-h-[512px] max-h-[512px] px-4 py-4 overflow-auto scroll flex flex-col gap-4'>
      {
        currentPlayer.id
        ? <p className='text-xs font-medium text-error'><i className="fa-solid fa-arrow-right"></i> Jugador que sale </p>
        : <></>
      }
      {
        currentPlayer.id
        ? <PlayerToExit player={currentPlayer} setCurrentPlayer={setCurrentPlayer} setShowModel={setShowModel}/>
        : <></>
      }
      <p className='text-xs font-medium text-secondary'><i className="fa-solid fa-arrow-left"></i>Jugadores que entran</p>
      {
        players.map(p => <PlayerListed key={p.id * 2} player={p} setShowModel={setShowModel} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />)
      }
    </div>

  )
}

function ScrollFilter({ setCurrentPlayer, currentPlayer, setShowModel, players, name, setName, screenList, setScreen, position, setPosition, statics, setStatics, order, setOrder }) {

  const userState = useSelector(state => state.user.user)

  useEffect(() => {

    let res = []
    const ids = [
      ...userState.team.align.players.map(p => p.id),
      ...userState.team.banking.players.map(p => p.id)
    ]

    for (const p of players) {
      if (!ids.includes(p.id)) {
        res.push(p)
      }
    }

    if (position !== "") {
      res = res.filter((player) => player.position === position)
    }

    if (statics !== "") {
      switch (statics) {
        case "goals":
          res.sort((a, b) => b.goals - a.goals)
          break;
        case "assists":
          res.sort((a, b) => b.assists - a.assists)
          break;
        case "points":
          res.sort((a, b) => b.points - a.points)
          break;
      }
    }

    if (order !== "") {
      switch (order) {
        case "asc":
          res.sort((a, b) => a.name.localeCompare(b.name))
          break;
        case "desc":
          res.sort((a, b) => b.name.localeCompare(a.name))
          break;
      }
    }
    setScreen(res)
  }, [position, statics, order, currentPlayer])

  const btnIsInabilit = userState.team.align.players.length < 7 || userState.team.banking.players.length < 2

  return (
    <div onClick={(e) => e.stopPropagation()} className='h-full font-poppins bg-card rounded-lg flow-shadow-primary'>
      <div className="w-full flex flex-col gap-2 px-4 py-4 border-b-2 border-green-800 mb-2">
        <div className='w-full flex gap-2'>
          <PlayerSearch name={name} setName={setName} players={players} setPlayer={setScreen} />
          <div className='flex gap-0.5'>
            <button className={`del p-0.5 rounded-md ${btnIsInabilit ? 'filter-scroll-btn-inabilit' : ''}`} onClick={btnIsInabilit ? () => { } : () => setPosition("DEL")}>
              DEL
            </button>
            <button className={`mc p-0.5 rounded-md ${btnIsInabilit ? 'filter-scroll-btn-inabilit' : ''}`} onClick={btnIsInabilit ? () => { } : () => setPosition("MC")}>
              MC
            </button>
            <button className={`df p-0.5 rounded-md ${btnIsInabilit ? 'filter-scroll-btn-inabilit' : ''}`} onClick={btnIsInabilit ? () => { } : () => setPosition("DF")}>
              DF
            </button>
            <button className={`pt p-0.5 rounded-md ${btnIsInabilit ? 'filter-scroll-btn-inabilit' : ''}`} onClick={btnIsInabilit ? () => { } : () => setPosition("PT")}>
              PT
            </button>
          </div>
        </div>
        <div className="text-white text-xs flex justify-between ">
          <button className='px-2 py-1 rounded-md font-medium hover:bg-primary hover:text-zinc-900' onClick={() => setStatics("goals")}>
            GOLES
          </button>
          <button className='px-2 py-1 rounded-md font-medium hover:bg-primary hover:text-zinc-900' onClick={() => setStatics("assists")}>
            ASISTENCIAS
          </button>
          <button className='px-2 py-1 rounded-md font-medium hover:bg-primary hover:text-zinc-900' onClick={() => setStatics("points")}>
            PUNTOS
          </button>
          <button className='px-2 py-1 rounded-md font-medium hover:bg-primary hover:text-zinc-900' onClick={() => { setScreen([...players]); setPosition(""); setStatics(""); setOrder("") }}>
            RESET
          </button>
          <button className='px-2 py-1 rounded-md font-medium hover:bg-primary hover:text-zinc-900' onClick={() => setOrder("asc")}>
            ASC
          </button>
          <button className='px-2 py-1 rounded-md font-medium hover:bg-primary hover:text-zinc-900' onClick={() => setOrder("desc")}>
            DESC
          </button>
        </div>
      </div>
      <PlayersOnScreen currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} players={screenList} setShowModel={setShowModel} />
    </div>
  )

}

export default ScrollFilter