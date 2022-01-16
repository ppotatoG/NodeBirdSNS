import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const App = ({Compotent}) => {
    return (
        <Compotent />
    )
};

App.prototype = {
    Compotent : PropTypes.elementType.isRequired,
}

export default App;