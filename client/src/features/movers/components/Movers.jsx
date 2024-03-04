import React from 'react'
import { useGetAllMoversQuery } from '../redux/moverApiSlice'

export default function Movers() {
    console.log("movers")

    const {data} = useGetAllMoversQuery()
    console.log(data)
  return (
    <div>
      <h1>movers</h1>
    </div>
  )
}
