import { getGamesForDay } from '@/helper/Handball/helper'
import React from 'react'

const page = async() => {

    const data = await getGamesForDay();
    console.log(data)
  return (
    <div>Handball</div>
  )
}

export default page