import React from 'react'
import {HiOutlineSearch,HiOutlineLogout} from 'react-icons/hi'
import classNames from "classnames";

export default function header() {

	return (
		<div className='bg-white h-16 px-4 flex justify-between items-center border-gray-100'>
        {/* search field */}
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
            <input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] rounded-lg pl-11 pr-4"/>
        </div>
        {/* side button - sebelah kanan */}
        <div className='flex gap-0.5 items-center mr-5'>
        <div className={classNames("text-red-500")}>
					<span className="text-sm flex items-center">{<HiOutlineLogout className='mr-1'/>}LogOut </span>
				</div>
        </div>
    </div>
  )
}