import Country from '@/components/Country';
import dotenv from 'dotenv';
dotenv.config();

const HomePage = async() => {
  const URL = process.env.REACT_APP_API_URL;
  const HOST = process.env.REACT_APP_API_HOST;
  const KEY = process.env.REACT_APP_API_KEY;

  const params = 'code=AR,FR'

  const res = await fetch(`${URL}countries`,{
    method: 'GET',
    headers:{
      "x-rapidapi-host": HOST,
		  "x-rapidapi-key": KEY
    }
  })

  const data = await res.json();
  console.log(data)
  const countries = data.response;

  return (
    <section className='grid grid-cols-5 gap-2'>
      {countries.map(country => (
        <Country  key={country.name} country={country}/>
      ))}
    </section>
  )
}

export default HomePage