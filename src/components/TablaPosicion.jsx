import React from 'react'

const TablaPosicion = ({standings}) => {
  return (
    <table>
        <thead className='text-white'>
            <tr>
                <th className='px-1'>Pos.</th>
                <th className='px-1'>Team</th>
                <th className='px-1'>Pts.</th>
                <th className='px-1'>PJ.</th>
                <th className='px-1'>PG</th>
                <th className='px-1'>PE</th>
                <th className='px-1'>PP</th>
                <th className='px-1'>GF</th>
                <th className='px-1'>GC</th>
                <th className='px-1'>Dif.</th>
            </tr>
        </thead>
        <tbody>
        {
            standings.map(({rank,points,team,all}) => (
              <tr key={rank} className = {`${rank === 1 ? 'bg-green-800' : 'bg-slate-600'} text-white`}>
                <td>
                  {rank}
                </td>
                <td className="flex items-center gap-2">
                  <img className="h-10 w-10" src={team.logo} alt={team.name} />
                  {team.name}
                </td>
                <td>{points}</td>
                <td>{all.played}</td>
                <td>{all.win}</td>
                <td>{all.draw}</td>
                <td>{all.lose}</td>
                <td>{all.goals.for}</td>
                <td>{all.goals.against}</td>
                <td>{all.goals.for - all.goals.against}</td>
              </tr>  
            ))
        }
        </tbody>
                </table>
  )
};

export default TablaPosicion