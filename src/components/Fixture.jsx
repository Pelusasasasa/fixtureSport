import { getFixtureForLiveAndIdFixture, getFixtureForLiveAndLeague, getFixtureForLiveAndLeagueAndIdTeam } from '@/helper/Football/helper';
import React from 'react'

const Fixture = async({data}) => {
    const {teams,goals,fixture,league} = data;
    const estadoPartido = fixture?.status?.short;
    const live = await getFixtureForLiveAndLeagueAndIdTeam(league.id,teams.home.id);
    
    function estadoPartdio(){
        if(live?.fixture?.status.short === "1H") return(<p className='h-full text-2xl items-center px-1 w-20 justify-center font-bold flex bg-red-700 text-white'>{live.fixture.status.elapsed}</p>);
        if(live?.fixture?.status.short === "2H") return(<p className='h-full text-2xl items-center px-1 w-20 justify-center font-bold flex bg-red-700 text-white'>{live.fixture.status.elapsed}</p>);
        if(estadoPartido === "FT") return(<p className='bg-slate-300 h-full text-2xl items-center px-1 w-20 justify-center font-bold flex'>Final</p>);
        if(estadoPartido === "NS") return(<p className='bg-slate-300 h-full text-2xl items-center px-1 w-20 justify-center font-bold flex '>{fixture.date.slice(11,16)}</p>);
        if(estadoPartido === "1H") return(<p className='h-full text-2xl items-center px-1 w-20 justify-center font-bold flex bg-red-700 text-white'>{fixture.status.elapsed}</p>);
        if(estadoPartido === "HT") return(<p className='h-full text-2xl items-center px-1 w-20 justify-center font-bold flex bg-green-700 text-white'>ET</p>);
        if(estadoPartido === "2H") return(<p className='h-full text-2xl items-center px-1 w-20 justify-center font-bold flex bg-red-700 text-white'>{fixture.status.elapsed}</p>);
    };

    function golesVisitante(){

        if(goals.away) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>{goals.away}</p>);
        if(live?.goals.away) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>{live?.goals.away}</p>);
        if(live?.goals.away === 0) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>0</p>);
        if(!live?.goals.away) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>?</p>);
    }

    function golesLocal() {
        if(live?.goals.home) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>{live?.goals.home}</p>);
        if(goals.home) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>{goals.home}</p>);
        if(live?.goals.home === 0) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>0</p>);
        if(!live?.goals.home) return(<p className='text-white p-1 font-bold border-slate-800 px-1 border'>?</p>);
    }

    console.log(live)
    

  return (
    <>
        <p className='text-white m-0 p-0'>
            {fixture?.referee}
        </p>
        <article className='flex justify-center mx-auto w-full my-1 bg-slate-600 px-5 hover:bg-slate-500 hover:cursor-pointer border border-slate-100'>
            <div className='flex gap-2 mr-1 items-center h-full justify-center'>
                {estadoPartdio()}
                <div className='flex flex-col justify-center items-center'>
                    <img src={teams.home.logo} alt={teams.home.name} className='h-5 w-5'/>
                    <p className='w-40 text-center  text-white'>{teams.home.name}</p>
                </div>
                {golesLocal()}
            </div>
            <div className='flex gap-2 mr-1 items-center justify-center h-full'>
                {golesVisitante()}
                <div className='flex flex-col justify-center items-center'>
                    <img src={teams.away.logo} alt={teams.away.name} className='h-5 w-5'/>
                    <p className='text-white text-center w-40'>{teams.away.name}</p>
                </div>
                <p className='bg-slate-300 h-full px-2 font-bold text-2xl  flex items-center hover:scale-125'>+</p>
            </div>
        </article>
    </>
  )
}

export default Fixture