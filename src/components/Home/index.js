import React, { Fragment } from "react";
import Signup from "../Signup";
import Header from "../../common/UnauthenticatedHeader"

const Home = () => (
  <Fragment>
    <Header />
    <Signup />
  </Fragment>
);

export default Home;