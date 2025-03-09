import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.services";

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState();
    const [id, setId] = useState();
    // const [password, setPassword] = useState();
    const [phone, setPhone] = useState();

    const { isModalUpdateOpen, setIsModalUpdateOpen,
        dataUpdate, setDataUpdate, loadUser } = props;

    //next dataUpdate != prev dataUpdate
    useEffect(() => {
        // console.log("check data update props", dataUpdate)
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleSubmit = async () => {
        const res = await updateUserAPI(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update users",
                description: "Cap Nhat users thanh cong"
            })
            resetAndCloseModal(false);
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setPhone("");
        setId("")
        setDataUpdate(null);
    }

    return (
        <Modal title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmit()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}>
            <div>
                <span>id</span>
                <Input
                    value={id}
                    disabled
                />
            </div>
            <div>
                <span>FullName</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }}
                />
            </div>


            <div>
                <span>Phone number</span>
                <Input
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
                />
            </div>
        </Modal>
    );
}
export default UpdateUserModal;