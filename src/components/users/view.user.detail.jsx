import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props
    return (
        <>
            <Drawer
                width={"40vw"}
                title="Chi tiet User" onClose={() => {
                    setDataDetail(null)
                    setIsDetailOpen(false)
                }} open={isDetailOpen}>
                {dataDetail ? <>
                    <p>Id:{dataDetail._id}</p>
                    <p>Full Name: {dataDetail.fullName} </p>
                    <p>Email: {dataDetail.email} </p>
                    <p>Phone number: {dataDetail.phone}</p>
                    <p>Avatar: </p>
                    <div><img height={100} width={150}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                    </div>
                    <div>
                        <label htmlFor='btnUpload' style={{
                            display: "block",
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "5px 10px",
                            background: "orange",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}>Update avatar</label>
                        <input type="file" hidden id="btnUpload" />
                    </div>
                    {/* <Button type="primary">Update avatar</Button> */}

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