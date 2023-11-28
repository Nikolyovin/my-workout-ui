// import React from 'react'

import { FC } from 'react'

type PropsType = {
    date: Date
    weight: number
}

const WightCard: FC<PropsType> = ({ date, weight }) => {
    return (
        <div className='flex justify-between items-center px-5 py-1 h-10 min-w-[300px] bg-[#374151] mb-3 rounded-md'>
            <p className='text-[#9e9e9e] text-lg '>08.09.2023</p>
            <p className='text-[#9e9e9e] text-lg '>{weight}</p>
        </div>
    )
}

export default WightCard
