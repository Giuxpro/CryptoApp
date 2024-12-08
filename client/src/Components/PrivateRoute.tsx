import React from 'react';
import { Navigate } from 'react-router-dom';
import Parse from 'parse';
import { PrivateRouteProps } from '../interfaces/privateRouteProps.interfaces';

export const PrivateRoute = ({ element, ...rest }: PrivateRouteProps) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const checkUser = async () => {
          try {
            const token = sessionStorage.getItem('authToken'); 
          
            if(token){ 
                await Parse.User.become(token);
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false);
            }
            
            
          } catch (error) {
            console.error("Error while checking current user:", error);
            setIsAuthenticated(false);
          } finally {
            setLoading(false);
          }
        };
      
        checkUser();
      }, []);


    if (loading) {
        return <div
        className="text-green-600 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...
        </span>
      </div>
    }
  

    if (isAuthenticated) {
    return <>{React.createElement(element)}</>;
    } else {
    return <Navigate to="/login" replace />;
    }
};
