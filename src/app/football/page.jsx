import Fixture from "@/components/Fixture";
import { getFixtureDayForLeagueAndSeasonAndTimeZone } from "@/helper/Football/helper"

const page = async() => {

  const hoy = new Date().toISOString().slice(0,10);
  const season = hoy.slice(0,4);

  const sudamericana = await getFixtureDayForLeagueAndSeasonAndTimeZone(11,hoy,season,'America/Argentina/Buenos_Aires');
  const libertadores = await getFixtureDayForLeagueAndSeasonAndTimeZone(13,hoy,season,'America/Argentina/Buenos_Aires');
  const laLiga = await getFixtureDayForLeagueAndSeasonAndTimeZone(140,hoy,season,'America/Argentina/Buenos_Aires');
  const premier = await getFixtureDayForLeagueAndSeasonAndTimeZone(39,hoy,season,'America/Argentina/Buenos_Aires');
  const serieA = await getFixtureDayForLeagueAndSeasonAndTimeZone(135,hoy,season,'America/Argentina/Buenos_Aires');
  const bundesliga = await getFixtureDayForLeagueAndSeasonAndTimeZone(78,hoy,season,'America/Argentina/Buenos_Aires');

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
      <h1 className="text-center text-white text-2xl">Premier League</h1>
      {
        premier.map(elem => (
            <div className="flex justify-center flex-col items-center">
              <Fixture data={elem}/>
            </div>
        ))
      }
      <h1 className="text-center text-white text-2xl">Bundesliga</h1>
      {
        bundesliga.map(elem => (
            <div className="flex justify-center flex-col items-center">
              <Fixture data={elem}/>
            </div>
        ))
      }
      <h1 className="text-center text-white text-2xl">seria A</h1>
      {
        serieA.map(elem => (
            <div className="flex justify-center flex-col items-center">
              <Fixture data={elem}/>
            </div>
        ))
      }
    </div>
  )
}

export default page