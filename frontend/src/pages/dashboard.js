import React from 'react'
import Approval from "../components/approval"
import StatusGrid from "../components/stats-grid"
import Footer from "../components/shared/footer"
import Button from "../components/button"

export default function Dashboard() {
  
    return (
      <div className="flex flex-col gap-4">
		<strong className='text-2xl'>Hi Radhika, welcome back!</strong>
		<strong className="text-gray-700 font-xs mt-2">Your client list</strong>
        <span className='text-xs text-gray-400'>You currently servicing 3 clients</span>
			<StatusGrid />
			<div className="flex flex-row gap-4 w-full">
				{/* <TransactionChart />
				<BuyerProfilePieChart /> */}
			</div>
				<Button/>
			<div className="flex-row gap-3 w-full">
				<Approval />
				<Footer/>
				{/* <PopularProducts /> */}
			</div>
		</div>
    )
}