
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Outlet } from 'react-router-dom';
import { getAccountApi } from './services/api.services';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
import { Spin } from 'antd';

const App = () => {
    const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext)

    useEffect(() => {
        fetchUserInfo()
    }, [])

    const fetchUserInfo = async () => {
        const res = await getAccountApi()
        if (res.data) {
            //success
            setUser(res.data.user)
        } setIsAppLoading(false)
    }

    return (
        <>
            {isAppLoading === true ?
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%"
                }}>
                    <Spin /></div>
                :
                <>
                    <Header />
                    <Outlet />
                    <Footer />
                </>
            }
        </>
    )
}

export default App;