import React from 'react';
import Navitem from '../navitem/navitem';
import Layout from '../../../../hoc/Layout';
const auth = (props) => (
    <Layout>
        <Navitem link="/signup">SignUp</Navitem>
        <Navitem link="/signin">SignIn</Navitem>
    </Layout>
);

export default auth;