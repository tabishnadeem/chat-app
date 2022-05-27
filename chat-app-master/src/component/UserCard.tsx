import { Avatar, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { payloadJohn } from "../mock/johnData";
import { payloadTabish } from "../mock/tabishData";
import { setCSU } from "../redux/currentSelectedUsernameSlice";
import { setCSUM } from "../redux/selectedUserMessagesSlice";
import "./Styles/UserCard.css";

interface IUser {
  username: string;
}
export default function UserCard(props: IUser) {
  const dispatch = useDispatch();
  // const [selectedUserName, setSelectedUserName] = useState("");

  const fetchChats = async (username:string) => {
    let temp = {
      message : '',
      isSender: false,
    }
    dispatch(setCSUM(temp))
    try {
      let res = await fetch(` http://localhost:3003/mongo/${username}`);
      let data_ = await res.json();
      console.log(data_[0]["friend"]);
      for (let index = 0; index < data_[0]["friend"].length; index++) {
        const mssgs = data_[0]["friend"][index];
        dispatch(setCSUM(mssgs));

        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = (username: string) => {
    dispatch(setCSU(username));
    switch (username) {
      case "Tabish Nadeem":
        // dispatch(setCSUM(payloadTabish))
        // setSelectedUserName(username);
        fetchChats(username);

        break;

      case "John Doe":
        // setSelectedUserName(username);
        fetchChats(username);
        // dispatch(setCSUM(payloadJohn))
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="mainCont">
        <div className="userCardContainer">
          <div className="avatar" style={{ flex: "1", margin: "auto" }}>
            <Avatar
              squared
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </div>

          <div
            className="userName"
            style={{ flex: "3" }}
            onClick={() => {
              handleCardClick(props.username);
            }}
          >
            <h3 style={{ margin: "auto" }}>{props.username}</h3>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
}
