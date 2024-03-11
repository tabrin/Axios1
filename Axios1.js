import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios1() {
    const[userData, setUserData]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUserData(response.data)
        })
    },[])
  return (
    <div>
      <h1>Axios</h1>
      {userData.map((data)=>{
        return(
            <div>{data.name}</div>
        )
      })}
    </div>
  )
}

export default Axios1
