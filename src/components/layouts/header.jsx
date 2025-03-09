import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import { HomeOutlined, AuditOutlined, UsergroupAddOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.services";

const Header = () => {
    const [current, setCurrent] = useState('');

    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const onClick = (e) => {
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await logoutAPI()
        if (res.data) {
            // clear data
            localStorage.removeItem("access_token")
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("logout thanh cong")


            // redirect to home
            navigate("/")
        }
    }
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
                    label: <span onClick={() => handleLogout()}>Dang Xuat</span>,
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