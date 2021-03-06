import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, autenticado, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      autenticado ? (
        <Redirect to="expenses/" />
      ) : (
        <div>
          <Component {...props} />
        </div>
      )
    }
  />
);

const mapStateToProps = state => ({
  autenticado: state.Auth.uuid
});

export default connect(mapStateToProps)(PublicRoute);
