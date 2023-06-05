import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "../components/Header"
import SocialLinks from "../components/SocialLinks"

const Root = () => {
    return (
        <main className=" bg-secondary-light">
            <Header />
            <Outlet />
            <SocialLinks />
            <ScrollRestoration />
        </main>
    )
}

export default Root