import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";

export default function Layout (){
    return(
        <>
            <NavBar/>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
        </>
    )
}