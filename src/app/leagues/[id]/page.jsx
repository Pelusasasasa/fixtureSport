import Round from "@/components/Round";
import League from "@/components/League";
import TablaPosicion from "@/components/TablaPosicion";
import { getFixtureForLeagueAndSeasonAndRound, getLeagueForId, getRoundForLeagueAndSeason, getStandingsForLeagueAndSeason, getTeamForLeagueAndSeason } from "@/helper/helper";
import Fixture from "@/components/Fixture";

const page = async({params}) => {
    const {league,seasons} = await getLeagueForId(params.id);
    const teams = await getTeamForLeagueAndSeason(league.id,"2023");
    const {standings} = await getStandingsForLeagueAndSeason(league.id,"2023");
    const round = await getRoundForLeagueAndSeason(league.id,"2023");
    const fixtures = await getFixtureForLeagueAndSeasonAndRound(league.id,"2023",'Regular Season - 1');
    console.log(fixtures)
  return (
    <div>
        <League league={league} />
        <h1 className="text-center text-2xl mt-2 text-white">Teams <span className="text-red-500">({teams.length})</span></h1>
        <article id="teams" className="flex justify-around mt-2">
        {teams.map(({team,venue}) =>(
          <div key={team.id} className="hover:cursor-pointer">
            <img src={team.logo} alt={team.name} className="h-20 w-20" />
          </div>
        ))}
      </article>
      <main>
        <h1 className="text-center text-2xl mt-2 text-white">Seasons <i className="text-red-500">({seasons.length})</i></h1>
        <ul className="flex justify-around mt-2">
          {seasons.map((season,index) => (
            <li className="bg-red-800 text-white px-2 hover:cursor-pointer hover:bg-red-700 rounded-md" key={index}>{season.year}</li>
          ))}
        </ul>
      </main>
      <section className="grid grid-cols-3">
        <main id="tabla" className="flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl mt-2 text-white">Tabla de Posiciones</h1>
          <TablaPosicion standings={standings[0]}/>
        </main>
        <main id="fixture">
            <h1 className="text-center text-2xl mt-2 text-white">Fixture</h1>
            <div id="rounds" className="grid">
              {round.map((elem,index) => (
                <Round fixture={index + 1} key={index}/>
              ))}
            </div>
            <div className="flex flex-col">
              {
                fixtures.map((elem) => (
                  <Fixture data={elem} key={elem.id} />
                ))
              }
            </div>

        </main>
      </section>
    </div>
  )
}

export default page