import React from 'react'
import { useState, useEffect } from 'react'  
import axios from 'axios'

export default function Dashboard() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10')
    .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    }, []) 

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong className="text-gray-700 font-medium">Recent approvals</strong> <br/>
      <span className='pt-5 text-xs'>You can find the recent on-going approvals here</span>
      <div className="border-x border-gray-200 rounded-sm mt-3">
      <table className="w-full text-gray-700">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Current Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {data.map((item, idx) => {
            // console.log("item: ", item);
            return <tr key={idx}>
              <td><img className="h-5 w-5 ml-2" src={item.image} alt="images"/></td>
              <td>{item.name}</td>
              <td>{item.current_price}</td>
              <td>{item.market_cap}</td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}