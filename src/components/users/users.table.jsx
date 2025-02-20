import { Table } from 'antd';
import { fetchAllUserApi } from '../../services/api.services';
import { useEffect, useState } from 'react';


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);
    //empty array => run once
    useEffect(() => {
        console.log("Run useEffect 111")
        loadUser()

    }, [])
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

    ];

    const loadUser = async () => {
        // console.log("run load user start")
        const res = await fetchAllUserApi()
        // console.log("run load user end", res.data)
        setDataUsers(res.data)

    }
    console.log("run loadUser")
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}
export default UserTable;