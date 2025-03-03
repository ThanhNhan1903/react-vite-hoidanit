import { Button, Col, Form, Input, InputNumber, notification, Row } from "antd";
import { registerUserAPI } from "../services/api.services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)

        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone);
        if (res.data) {
            notification.success({
                message: "Register User",
                description: "Register thanh cong"
            });
            navigate("/login")
        } else {
            notification.error({
                message: "Register user",
                description: JSON.stringify(res.message)
            })
        }

    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ margin: "10px" }}
        // onFinishFailed={onFinishFailed}
        >

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }

                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row style={{ justifyContent: "center" }}>
                <Col xs={24} md={8}>
                    <Button onClick={() => form.submit()} type="primary">Register</Button>
                </Col>
            </Row>
        </Form>

    )
}
export default RegisterPage;