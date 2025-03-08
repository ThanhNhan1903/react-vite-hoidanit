import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { UsergroupDeleteOutlined, HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

const Header = () => {
    const [current, setCurrent] = useState('');

    const { user } = useContext(AuthContext)
    console.log("💖 Header user:♋", user)


    const onClick = (e) => {
        console.log('click ', e);
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
            icon: <UsergroupDeleteOutlined />,
            // disabled: true,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'products',
            icon: <BookOutlined />,
        },
        {
            label: 'Cai dat',
            key: 'setting',
            icon: <SettingOutlined />,
            children: [{
                label: <Link to="/login">Dang Nhap</Link>,
                key: "login"
            },
            {
                label: "Dang Xuat",
                key: "logout"
            }
            ]

        }

    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]} mode="horizontal" items={items} />


    )
}
export default Header;