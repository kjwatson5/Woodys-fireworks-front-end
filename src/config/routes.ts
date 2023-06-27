import Home from "../pages/Home"
import About from "../pages/About"

interface RouteType {
    path: string,
    component : () => JSX.Element,
    name: string
    protected: Boolean
}

const routes: RouteType[] = [
    {
        path: "/",
        component: Home,
        name: 'Home Screen',
        protected: false
    },
    {
        path: '/about',
        component: About,
        name: 'About',
        protected: false
    }
];

export default routes
