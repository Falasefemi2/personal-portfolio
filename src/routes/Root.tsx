import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "../components/Header"
import SocialLinks from "../components/SocialLinks"
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <main className=" bg-secondary-light">
            <Header />
            <Outlet />
            <SocialLinks />
            <Toaster />
            <ScrollRestoration />
        </main>
    )
}

export default Root