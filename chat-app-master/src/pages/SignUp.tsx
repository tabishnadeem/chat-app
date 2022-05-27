import "./Styles/SignUp.css";
import signupBack from "../assets/loginBack.jpg";
import { Button, Input } from "@nextui-org/react";
import { UnLockIcon } from "../assets/svgs/UnLockIcon";
import { LockIcon } from "../assets/svgs/LockIcon";
import { useState } from "react";
import LoginModal from "./LoginModal";
import axios from "axios";

export default function SignUp() {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBtnClick = async (e: any) => {
    e.preventDefault();
    // setVisible(true)
    let payload = {
      username,
      email,
      password,
    };
    try {
      let res = await axios.post("http://localhost:3003/mongo/signup", payload);
      let body = await res.data;
      console.log(body);
    } catch (error) {}
  };
  return (
    <>
      <div className="signupContainer">
        <div className="imgContainer">
          <img src={signupBack} alt="" />
        </div>

        <div className="signupMain">
          <h2>Sign Up</h2>
          <div className="mform">
            <Input
              bordered
              labelPlaceholder="Enter Name"
              width="300px"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              bordered
              labelPlaceholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              bordered
              labelPlaceholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              visibleIcon={<UnLockIcon fill="currentColor" />}
              hiddenIcon={<LockIcon fill="currentColor" />}
            />

            <Button color="error" auto onClick={handleBtnClick}>
              Verify Email
            </Button>
          </div>
        </div>
      </div>
      <LoginModal visible={visible} />
    </>
  );
}
