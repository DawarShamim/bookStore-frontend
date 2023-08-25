import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserAccess } from './cookieUtils';

export function PrivateRoute({ roles }) {
    // const auth = true;
    // determine if authorized, from context or however you're doing it
    const [authenticated, setAuthenticated] = useState(true);
    console.log(roles);
    // useEffect(() => {
    //     setAuthenticated(Authentication());
    // }, []);

    const Authentication = () => {
        const UserType = getUserAccess();
        console.log(UserType);
        setAuthenticated(true);
        return;
    };

    const isAuthenticated = async () => {
        Authentication();
        return authenticated;
    };

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    if (authenticated) {
        // const userType = getUserAccess();
        const userType ="guest";
        console.log(userType);

        if (roles.includes(userType)) {
            console.log("Access Granted");
            return (<Outlet /> );
        }
        else if (userType==="guest") {
            console.log("Access Granted");
            return ;
        } else {
            console.log("Access Denied");
            return (<Navigate to="/Forbidden" />);
        }
    }
}