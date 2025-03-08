import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Divider, Flex, Form, Input, message, notification, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.services";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)


    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password)
        if (res.data) {
            message.success("Dang Nhap Thanh Cong")
            localStorage.setItem("access_token", res.data.access_token)
            setUser(res.data.user);
            navigate("/");
        } else {
            notification.error({
                message: "Error Login",
                description: JSON.stringify(res.message)
            })

        }
        setLoading(false)


    }
    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Dang Nhap</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: 'Email khong dung dinh dang',
                                },
                                {
                                    required: true,
                                    message: 'Email khong duoc de trong',
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password khong duoc de trong',
                                },
                            ]}
                        >
                            <Input.Password type="password" />
                        </Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item >
                                <Button loading={loading}
                                    type="primary" onClick={() => form.submit()}>
                                    Log in
                                </Button>
                            </Form.Item>
                            <Link to='/' >Go to HomePage </Link>
                        </Flex>


                        <Divider />
                        <div style={{ textAlign: "center" }}>Chua co tai khoan? <Link to="/register">Dang ky tai day</Link></div>

                    </Form>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage;