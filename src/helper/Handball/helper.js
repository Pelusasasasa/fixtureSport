const URL = process.env.REACT_APP_API_URLHANDBALL;
const HOST = process.env.REACT_APP_API_HANDBALL;
const KEY = process.env.REACT_APP_API_KEY;

export async function getGamesForDay(date){
    const res = await fetch(`${URL}/games?date=2023-09-30`,{
        method:'GET',
        headers:{
            'x-rapidapi-host': HOST,
            'x-rapidapi-key': KEY
        }
    });

    const data = await res.json();
    return data.response;
};