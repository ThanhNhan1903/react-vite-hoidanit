import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, AuditOutlined, UsergroupAddOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

const Header = () => {
    const [current, setCurrent] = useState('');

    const { user } = useContext(AuthContext)


    const onClick = (e) => {
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
            // disabled: true,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'products',
            icon: <AuditOutlined />,
        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Dang Nhap</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : []),
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Dang Xuat',
                    key: 'logout'
                }
            ]
        }] : []),


    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]} mode="horizontal" items={items} />


    )
}
export default Header;