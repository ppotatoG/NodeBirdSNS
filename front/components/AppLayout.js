import PropTypes from 'prop-types';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu node="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
};

AppLayout.prototype ={ 
    children : PropTypes.node.isRequired,
};

export default AppLayout;