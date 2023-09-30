import Link from "next/link"

const page = () => {
  return (
    <section className>
        <h1 className="text-center text-5xl mt-2 text-white">Elige un deporte</h1>
        <main className="grid grid-cols-5 gap-5 mt-16">
            <Link className="mb-4" href='/football'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/hero-banner.png" alt="Futbol" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Futbol</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/basketball'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://api-sports.io/assets/img/news/basket-player.png" alt="basketball" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Basquet</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/formula1'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/news/f1-mini.png" alt="Formula1" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Formula 1</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/handball'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/handball-logo.png" alt="Handball" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Handball</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/voleboy'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/volleyball-logo.png" alt="Voleboy" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Voleboy</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/nba'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://api-sports.io/assets/img/news/min-nba.png" alt="NBA" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">NBA</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/hockey'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/hockey-logo.png" alt="Hockey" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Hockey</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/baseball'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/baseball-logo.png" alt="baseball" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Baseball</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/football'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/nfl-logo.png" alt="Futbol" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Futbol Americano</h1>
                </div>
            </Link>
            <Link className="mb-4" href='/football'>
                <div className="flex justify-center flex-col items-center  border-slate-300 hover:cursor-pointer hover:scale-125">
                    <img src="https://www.api-football.com/public/img/home1/rugby-logo.png" alt="Rugby" className="w-40 h-40 object-cover rounded-full border "/>
                    <h1 className="text-center text-white">Rugby</h1>
                </div>
            </Link>

        </main>
    </section>
  )
}

export default page