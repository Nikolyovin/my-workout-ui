import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth/auth.slice'
import { timerActions } from '../store/timer/timer.slice'

const actions = {
    ...authActions,
    ...timerActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
