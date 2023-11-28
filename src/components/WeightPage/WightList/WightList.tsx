// import React from 'react'
import { useEffect } from 'react'
import { useActions } from '../../../hooks/action'
import { useAppSelector } from '../../../hooks/redux'
import WightCard from './WightCard/WightCard'
import Skeleton from '@mui/material/Skeleton'

const WightList = () => {
    const { weightMeasurement, isLoading } = useAppSelector(state => state.weight)
    const { getWeightMeasurementFetch } = useActions()

    console.log('weightMeasurement', weightMeasurement)

    useEffect(() => {
        getWeightMeasurementFetch()
    }, []) // поправить

    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton animation='pulse' sx={{ bgcolor: 'grey.800' }} width={300} height={50} />
                    <Skeleton animation='pulse' sx={{ bgcolor: 'grey.800' }} width={300} height={50} />
                    <Skeleton animation='pulse' sx={{ bgcolor: 'grey.800' }} width={300} height={50} />
                </>
            ) : (
                weightMeasurement.map(({ date, _id, weight }) => <WightCard date={date} weight={weight} key={_id} />)
            )}
        </>
    )
}

export default WightList
