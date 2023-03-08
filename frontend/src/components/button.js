import React, { Component } from 'react'
import {HiPlus} from "react-icons/hi"

export default class button extends Component {
  render() {
    return (
        <div className='flex justify-end bg-sky-400 text-xs border rounded-full px-4 py-2'>
        <HiPlus className="text-white text-lg mr-2"/> <span className='flex justify-end items-center text-white'>Create new approval</span>
    </div>
    )
  }
}