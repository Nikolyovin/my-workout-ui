import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import TimerPage from '../TimerPage/TimerPage'
import WeightPage from '../WeightPage/WeightPage'
import TrainingPage from '../TrainingPage/TrainingPage'
import LoginPage from '../LoginPage/LoginPage'

const AppRouter = () => {
    const { isAuth } = useAppSelector(state => state.auth)
    return isAuth ? (
        <Routes>
            <Route path='/timer' Component={TimerPage} />
            <Route path='/weight' Component={WeightPage} />
            <Route path='/training' Component={TrainingPage} />
            <Route path='/*' element={<Navigate to='/timer' replace />} />
        </Routes>
    ) : (
        <Routes>
            <Route path='/login' Component={LoginPage} />
            <Route path='/*' element={<Navigate to='/login' replace />} />
        </Routes>
    )
}

export default AppRouter
