import React, { Fragment } from "react";
import Header from "../../common/UnauthenticatedHeader";
import SignInComponent from "./SignInComponent";

const SignInPage = (props) => (
  <Fragment>
    <Header />
    <SignInComponent/>
  </Fragment>
);

export default SignInPage;