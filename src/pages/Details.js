import React from 'react'
import { useLocation } from 'react-router-dom';

function Details() {
  const { state } = useLocation();
  const { data } = state;
  console.log(state)
  console.log(data.fields.title)
  return (
    <div>{data.fields.title}</div> 
  )
}

export default Details