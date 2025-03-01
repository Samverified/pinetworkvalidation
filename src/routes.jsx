import React from "react";
import Home from "./home"
import Verify from "./verify"
import Wallet from "./wallet"
import Payment from "./payment";

const AppRoutes = () => {
    return (
        [
            {
                path: '/',
                element: <Home />,
                id: 1
            },
            {
                path: '/home',
                element: <Verify />,
                id: 2
            },
            {
                path: '/verify',
                element: <Wallet />,
                id: 3
            },
            {
                path: '/payment',
                element: <Payment/>,
                id: 4
            }
        ]
    );
}

export default AppRoutes;