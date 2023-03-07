import React from 'react'
import { Link } from 'react-router-dom'

export default function dashboard() {
  return (
    <div>this is dashboard <Link to="/product" className='underline'>go to product</Link></div>
  )
}