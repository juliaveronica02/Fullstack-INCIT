import React from 'react'
import { Link } from 'react-router-dom'

export default function product() {
  return (
    <div>product <Link to="/" className='underline'>go to home</Link></div>
  )
}
