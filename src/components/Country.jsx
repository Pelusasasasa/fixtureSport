import Link from "next/link";

const Country = ({country}) => {
    const {name,flag,code} = country;
  return (
    <Link href={`countries/${code}`}>
      <div className='m-3 text-white hover:cursor-pointer hover:bg-slate-800 flex flex-col items-center justify-center'>
          <img src={flag} alt={name} className='rounded-full w-60 h-60'/>
          <h1 className='text-4xl'>{name}</h1>
          <p className='text-xl'>{code}</p>
      </div>  
    </Link>
  )
}

export default Country