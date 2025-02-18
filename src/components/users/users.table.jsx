import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/api.services';
import { useState } from 'react';


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        { _id: "eric", fullName: 25, email: "hn" },
        { _id: "eric2", fullName: 26, email: "hnn" }
    ])
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
        console.log("run load user start")
        const res = await fetchAllUserApi()
        console.log("run load user end", res.data)

    }
    loadUser()
    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}
export default UserTable;