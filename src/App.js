import React, {lazy, Suspense, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appstore';
import Cart from './components/Cart';


// Chunking
// Code Spliting
//  Lazy Loading
//  Dynamic Componenet


const Grocery = lazy( () => import('./components/Grocery') )
const About = lazy( () => import('./components/About') )



const AppLayout = () => {

    const [userInfo, setUserInfo] = useState();

    //authentication
    useEffect(
        ()=>{
            const data = {
                name:'Sandeep Banerjee'
            }
            setUserInfo(data.name)
        }, []
    )

    return (
        <Provider store={appStore} >
            <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
                <div className='app' >
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}





const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element:(<Suspense fallback={<Shimmer></Shimmer>} >
                <About/>
                </Suspense>)
            },
            {
                path:"/contact",
                element:<Contactus/>
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<Shimmer></Shimmer>} >
                    <Grocery/>
                    </Suspense>)
            },
            {
                path:"/restraunt/:resId",
                element:<RestrauntMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)