
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Outlet } from 'react-router-dom';

const ParentComponent = (props) => {
    console.log("💖 ParentComponent props:♋", props)
    return (
        <>
            <div>parent component</div>
            {props.children}
        </>
    )
}
const ChildComponent = (props) => {
    return (
        <div>child component</div>
    )
}


const App = () => {


    return (
        <>
            {/* <ParentComponent /> */}
            <ParentComponent>
                <ChildComponent />
            </ParentComponent>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;