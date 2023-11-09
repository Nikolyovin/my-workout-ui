import AppRouter from './components/common/AppRouter'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { useAppSelector } from './hooks/redux'

function App() {
    const { isAuth } = useAppSelector(state => state.auth)
    return (
        <BrowserRouter>
            {isAuth ? <Header /> : <></>}
            <AppRouter />
            {isAuth ? <Navbar /> : <></>}
        </BrowserRouter>
    )
}

export default App
