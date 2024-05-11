
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Container from "../components/Container/Container";



export default function PrimaryLayout() {

    return (
        <div className="flex flex-col max-h-screen">
            <div className="flex-grow-1 overflow-auto">
                <div className="overflow-x-hidden">
                    <div className="top-0 z-10">
                        <NavBar />
                    </div>
                    <Container>
                        <Outlet />
                    </Container>
                </div>
            </div>
        </div>
    );
}
