
const URL = process.env.REACT_APP_API_URL;
const HOST = process.env.REACT_APP_API_HOST;
const KEY = process.env.REACT_APP_API_KEY;

export async function getConutryForCode(code){
    const params = 'code=' + code;

    const res = await fetch(`${URL}countries?${params}`,{
        method: 'GET',
        headers:{
          "x-rapidapi-host": HOST,
          "x-rapidapi-key": KEY
        }
      });

    const data = await res.json();
    return data.response[0];
};


export async function getLegueForCode(code){

  const res = await fetch(`${URL}leagues?code=${code}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });

  const data = await res.json();
  const response = data.response;
  return response;
};

export async function getLeagues() {
    const res = await fetch(`${URL}leagues`,{
      method: 'GET',
      headers:{
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": KEY
      }
    });
    const data = await res.json();
    return data.response;
};

export async  function getLeagueForId(id){
  const res = await fetch(`${URL}leagues?id=${id}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });
  const data = await res.json();
  return data.response[0]
};

export async function getTeamForLeagueAndSeason(codeLeague,season){
  const res = await fetch(`${URL}teams?league=${codeLeague}&season=${season}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });
  const data = await res.json();
  return data.response;
};

export async function getStandingsForLeagueAndSeason(codeLeague,season){
  const res = await fetch(`${URL}standings?league=${codeLeague}&season=${season}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });
  const data = await res.json();
  return data.response[0].league;
};

export async function getRoundForLeagueAndSeason(codeLeague,season){
  const res = await fetch(`${URL}fixtures/rounds?league=${codeLeague}&season=${season}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });
  const data = await res.json();
  return data.response;
};

export async function getFixtureForLeagueAndSeason(codeLeague,season){
  const res = await fetch(`${URL}fixtures?league=${codeLeague}&season=${season}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });
  const data = await res.json();
  return data.response;
};

export async function getFixtureForLeagueAndSeasonAndRound(codeLeague,season,round){
  const res = await fetch(`${URL}fixtures?league=${codeLeague}&season=${season}&round=${round}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });
  const data = await res.json();
  return data.response;
};

export async function getFixtureDayForLeagueAndSeasonAndTimeZone(codeLeague,day,season,timezone){
    const res = await fetch(`${URL}fixtures?league=${codeLeague}&date=${day}&season=${season}&timezone=${timezone}`,{
      method: 'GET',
      headers:{
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": KEY
      }
    });

    const data = await res.json();
    return data.response;
};

//live
export async function getFixtureForLiveAndLeagueAndIdTeam(league,idTeam){
  const res = await fetch(`${URL}fixtures?live=all&league=${league}&team=${idTeam}`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": KEY
    }
  });

  const data = await res.json();
  return data.response[0];
}
