
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";



export default function PrimaryLayout() {

    return (


        <div className="">
            <div className="z-10 w-full sticky top-0">
                <NavBar />
            </div>
            <Outlet />

            <Footer />
        </div>



    );
}
