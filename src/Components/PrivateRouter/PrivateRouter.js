import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
    const [ signIn, setSignIn ] = useContext(UserContext);
   
    return (
        <Route
            {...rest}
            render={({ location }) =>
                signIn.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRouter;