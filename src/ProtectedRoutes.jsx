import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", ...rest }) => {
    if (!localStorage.getItem('access_token')) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;