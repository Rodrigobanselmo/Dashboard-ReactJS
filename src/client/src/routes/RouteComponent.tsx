/* eslint-disable react/prop-types */
import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';

interface PrivateRouterest extends RouteProps {
  component: React.FC<RouteComponentProps>;
  privateRoute?: string;
  isPrivate?: boolean;
  infoUser?: string[];
  condition?: Array<string[]>;
  Equal?: boolean[];
}

const RouteComponent: React.FC<PrivateRouterest> = ({
  component: Component,
  privateRoute = '/',
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(rest: RouteComponentProps) => {
        if (props?.isPrivate)
          return privateRoute === '/e' ? (
            <Component {...rest} />
          ) : (
            <>
              <Redirect
                to={{
                  pathname: privateRoute,
                  state: { from: rest.location },
                }}
              />
              {/*         {notification.error({message:'Você não possui autorização para acessar essa area.'})} */}
              {console.log(rest.location)}
            </>
          );
        return <Component {...rest} />;
      }}
    />
  );
};

export default RouteComponent;
