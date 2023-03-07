import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import {Menu} from '@headlessui/react'

export default function header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-gray-200'>
        {/* search field */}
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
            <input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-lg pl-11 pr-4"/>
        </div>
        {/* side button - sebelah kanan */}
        <div className='flex items-center gap-3 mr-2'>
            <HiOutlineChatAlt fontSize={24} />
            <HiOutlineBell fontSize={24} />
            <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="ml-2 inline-flex focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded-full">
                    <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" style={{backgroundImage:'url("https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png")'}}>
                        <span className='sr-only'>My Profile</span>
                    </div>
                </Menu.Button>
            </div>
            </Menu>
        </div>
    </div>
  )
}