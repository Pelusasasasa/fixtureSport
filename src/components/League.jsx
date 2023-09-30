import Link from "next/link"

const League = async({league}) => {
  return (
    <Link href={`/leagues/${league.id}`}>
      <div className="bg-slate-600 flex items-center flex-col hover:bg-slate-400 h-full">
        <img src={league.logo} alt=""  className="object-contain h-44 w-44"/>
        <h1 className="text-white text-center font-bold text-2xl">{league.name} - {league.id}</h1>
        <span className="text-white mt-auto">{league.type}</span>
      </div>
    </Link>
  )
}

export default League