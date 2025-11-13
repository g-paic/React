import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    // const navigation = useNavigation();
    // {navigation.state === "loading" && <p>Loading...</p>}
    
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default RootLayout;
