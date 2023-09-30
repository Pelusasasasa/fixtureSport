import League from "@/components/League";
import { getLeagues } from "@/helper/Football/helper"

const Leagues = async() => {
    const leagues = await getLeagues();
    console.log(leagues)
  return (
    <section className="grid grid-cols-5 gap-3">
        {
            leagues.map((league) => (
                <League key={league.league.id} league={league.league}/>
            ))
        }
    </section>
  )
}

export default Leagues