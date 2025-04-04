import {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {PropTypes} from "prop-types";
import {AuthContext} from "../provider/AuthProvider";

function PrivateRoutes({children}) {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if (user) {
        return <>{children}</>;
    }

    if (loading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <span className='loading loading-spinner loading-lg'></span>
            </div>
        );
    }

    return <Navigate state={location.pathname} to='/signup' />;
}

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};
