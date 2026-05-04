import { Outlet } from "react-router-dom";
import TrainerHeader from "./TrainerHeader";
import TrainerFooter from "./TrainerFooter";

export default function TrainerLayout() {
    return (
        <>
            <TrainerHeader />
            <Outlet />
            <TrainerFooter />
        </>
    )
}