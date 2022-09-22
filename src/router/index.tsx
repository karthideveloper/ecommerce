import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

const Router = () => {
    return (
        <Routes>
            {routes.map((route) => {
                return <Route key={route.key} path={route.path} element={route.component} />
            })}
        </Routes>
    )

}

export default Router;