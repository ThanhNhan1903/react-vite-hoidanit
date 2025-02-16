import UserForm from "../components/users/user.form";
import UserTable from "../components/users/users.table";

const UsersPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>
    )
};
export default UsersPage;