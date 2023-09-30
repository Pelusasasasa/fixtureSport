import Fixture from "@/components/Fixture";
import { getFixtureDayForLeagueAndSeasonAndTimeZone } from "@/helper/helper"

const page = async() => {

  const hoy = new Date().toISOString().slice(0,10);
  const season = hoy.slice(0,4);

  const sudamericana = await getFixtureDayForLeagueAndSeasonAndTimeZone(11,hoy,season,'America/Argentina/Buenos_Aires');
  const libertadores = await getFixtureDayForLeagueAndSeasonAndTimeZone(13,hoy,season,'America/Argentina/Buenos_Aires');
  const laLiga = await getFixtureDayForLeagueAndSeasonAndTimeZone(140,hoy,season,'America/Argentina/Buenos_Aires');

  return (
    <div>
      <h1 className="text-center text-white text-2xl">Copa Sudamericana</h1>
      {
        sudamericana.map(elem => (
            <div className="flex justify-center flex-col items-center">
              <Fixture data={elem}/>
            </div>
        ))
      }

      <h1 className="text-center text-white text-2xl">Copa Libertadores</h1>
      {
        libertadores.map(elem => (
            <div className="flex justify-center flex-col items-center">
              <Fixture data={elem}/>
            </div>
        ))
      }
      <h1 className="text-center text-white text-2xl">La Liga</h1>
      {
        laLiga.map(elem => (
            <div className="flex justify-center flex-col items-center">
              <Fixture data={elem}/>
            </div>
        ))
      }
    </div>
  )
}

export default page