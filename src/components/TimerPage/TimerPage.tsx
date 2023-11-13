// import React from 'react'

import { useState } from 'react'
import Timer from './Timer/Timer'
import TimerSetting from './TimerSettings/TimerSetting'

const TimerPage = () => {
    const [isShowSettings, setIsShowSetting] = useState(false)
    return <>{isShowSettings ? <TimerSetting /> : <Timer setIsShowSetting={setIsShowSetting} />}</>
}

export default TimerPage
