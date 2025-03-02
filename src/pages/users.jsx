import UserForm from "../components/users/user.form";
import UserTable from "../components/users/users.table";
import { fetchAllUserApi } from '../services/api.services';
import { useEffect, useState } from 'react';

const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        loadUser()

    }, []);
    const loadUser = async () => {
        const res = await fetchAllUserApi(current, pageSize)
        if (res.data) {
            setDataUsers(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers}
                loadUser={loadUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
    )
};
export default UsersPage;