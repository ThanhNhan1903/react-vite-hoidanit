import UserForm from "../components/users/user.form";
import UserTable from "../components/users/users.table";
import { fetchAllUserApi } from '../services/api.services';
import { useEffect, useState } from 'react';

const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        loadUser()

    }, []);
    const loadUser = async () => {
        const res = await fetchAllUserApi()
        setDataUsers(res.data)

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
};
export default UsersPage;