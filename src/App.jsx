
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Outlet } from 'react-router-dom';
import { getAccountApi } from './services/api.services';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';

const App = () => {
    const { setUser } = useContext(AuthContext)

    useEffect(() => {
        fetchUserInfo()
    }, [])
    const delay = (milSecond) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, milSecond);
        })
    }
    const fetchUserInfo = async () => {
        const res = await getAccountApi();
        await delay(3000)
        if (res.data) {
            //success
            setUser(res.data.user)
            console.log("check user data: ", res.data)
        } else {
            //faild
        }
    }

    return (
        <>
            {/* <ParentComponent /> */}
            {/* <ParentComponent>
                <ChildComponent />
            </ParentComponent> */}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;