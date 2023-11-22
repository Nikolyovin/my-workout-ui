import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth/auth.slice'
import { timerActions } from '../store/timer/timer.slice'
import { commonActions } from '../store/common/common.slice'

const actions = {
    ...authActions,
    ...timerActions,
    ...commonActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
