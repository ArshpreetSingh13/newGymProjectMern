import { Outlet } from "react-router-dom";
import CustomerHeader from "./CustomerHeader";
import CustomerFooter from "./CustomerFooter";
export default function CustomerLayout() {
    return (
        <>
            <CustomerHeader />
            <Outlet />
            <CustomerFooter />
        </>
    )
}