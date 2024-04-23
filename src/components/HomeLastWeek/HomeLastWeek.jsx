import { getPositionColor } from "../../helpers/func"

function CardHomeLastWeek({ name, position, points, price }) {
  return (
    <div className="w-full flex gap-2 items-center py-2 px-4 text-white">
      <div>
        <img src="/src/assets/shirt.png" alt="shirt" />
      </div>
      <div className="w-full">
        <div>
          <p className="">{ name } <span className={`text-xs text-[${getPositionColor(position)}] font-semibold`}>{ position }</span></p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center text-xs font-semibold">
            <div>
              <p>{ points }</p>
              <p className="text-focus">PTS GRL</p>
            </div>
            <div className="w-[1px] h-1/2 bg-white"></div>
            <div>
              <p>{ price }</p>
              <p className="text-focus">Args$</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <i className="fa-solid fa-star text-focus"></i>
            <i className="fa-solid fa-star text-focus"></i>
            <i className="fa-solid fa-star text-focus"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="text-3xl bg-gradient-to-t from-primary to-focus bg-clip-text text-transparent">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  )
}

function HomeLastWeek() {
  return (
    <div className="w-full p-2 bg-[#202020] flow-shadow rounded-lg">
      <CardHomeLastWeek name='Lautaro Chaparro' position='DEL' points='53' price='10.0' />
      <CardHomeLastWeek name='Pietro Elviretti' position='DF' points='10' price='4.0'/>
    </div>
  )
}

export default HomeLastWeek