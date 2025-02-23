import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props
    return (
        <>
            <Drawer title="Chi tiet User" onClose={() => {
                setDataDetail(null)
                setIsDetailOpen(false)
            }} open={isDetailOpen}>
                {dataDetail ? <>
                    <p>Id:{dataDetail._id}</p>
                    <p>Full Name: {dataDetail.fullName} </p>
                    <p>Email: {dataDetail.email} </p>
                    <p>Phone number: {dataDetail.phone}</p>
                </> :
                    <>
                        <p>khong co du lieu</p>
                    </>
                }

            </Drawer>
        </>
    )
}
export default ViewUserDetail