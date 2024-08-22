import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Notifications from '../pages/notifications'
import Discovery  from '../pages/discovery'
import NotFound from '../pages/notfound'
import MainLayout from '../layouts/main'


 const routes = createBrowserRouter([
    {
       path:"/",
       element: <MainLayout />,
       children: [
        {
            index:true,
            element:<Home />
        },
        {
            path:"/discovery",
            element:<Discovery />
        },
        {
            path:"/notifications",
           element:<Notifications />    },
        {
            path:"/explore",
           element:<Explore /> 
        },
        {
            path:"*",
            element:<NotFound />
        }
       ]
    }
    


])

export default routes