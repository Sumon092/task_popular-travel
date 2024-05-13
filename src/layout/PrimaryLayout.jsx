
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";



export default function PrimaryLayout() {

    return (


        <div className="">
            <div className="z-10 w-full sticky top-0">
                <NavBar />
            </div>
            <Outlet />

        </div>



    );
}
