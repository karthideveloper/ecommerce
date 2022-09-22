import Home from "../pages/home"
import Login from "../pages/login"
import SignUp from "../pages/sign-up"
import IRouteProps from "../types/routerTypes"

export const routes: Array<IRouteProps> = [
    {
        key: 'home',
        path: '/',
        title: 'Home',
        component: <Home />,
    },
    {
        key: 'login',
        path: '/login',
        title: 'Login',
        component: <Login />,
    },
    {
        key: 'signUp',
        path: '/signUp',
        title: 'SignUp',
        component: <SignUp />,
    }
]

