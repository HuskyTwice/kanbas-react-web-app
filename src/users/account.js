import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState({});
    const navigate = useNavigate();
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
        // navigate("./account");
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {/* {account} This is account */}
            {account && (
                <div>
                    Username: <input value={account.username}/><br/>
                    Password: <input value={account.password} onChange={(e) => setAccount({...account, password: e.target.value})}/><br/>
                    FirstName: <input value={account.firstName} onChange={(e) => setAccount({...account, firstName: e.target.value})}/><br/>
                    LastName: <input value={account.lastName} onChange={(e) => setAccount({...account, lastName: e.target.value})}/><br/>
                    DateOfBirth: <input value={account.dob} onChange={(e) => setAccount({...account, dob: e.target.value})}/><br/>
                    Email: <input value={account.email} onChange={(e) => setAccount({...account, email: e.target.value})}/><br/>
                    UserType: <select onChange={(e) => setAccount({...account, role: e.target.value})}><br/>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select><br/>
                    <button className="btn btn-primary" onClick={save}>Save</button>
                    <button className="btn btn-danger" onClick={signout}>Signout</button>
                    <Link to="/project/admin/users" className="btn btn-warning w-100"> Users </Link>
                </div>
            )}
        </div>
    );
}

export default Account;