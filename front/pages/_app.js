import PropTypes from 'prop-types';
import Head from 'next/head';
<<<<<<< HEAD
import 'antd/dist/antd.css';
=======
>>>>>>> ca327d155aa35d70e392c061dacb1583f922b260

import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired
};

export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(NodeBird);