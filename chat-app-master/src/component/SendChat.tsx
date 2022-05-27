import "./Styles/SendChat.css";
import { Button, Input } from "@nextui-org/react";
// import { Send } from "react-iconly";
import { ReactComponent as SendIcon } from "../assets/Send.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCSUM } from "../redux/selectedUserMessagesSlice";
import { payloadTabish } from "../mock/tabishData";
import { io } from "socket.io-client";



export default function SendChat(){

  const [chatInput, setChatInput] = useState("")
  const dispatch = useDispatch();

  // const socket = io('http://localhost:3001')

  // const sendMessageToServer = (message:string) => {
    
  //   socket.emit('msgToServer',message);
  // }

  const handleSendChat = () => {
    let temp = {
      message : chatInput,
      isSender : true,
    }
    // payloadTabish.push(temp)
    dispatch(setCSUM(temp))
    // sendMessageToServer(chatInput)
    setChatInput("")
  }

  const handleEnterPress = (e:any)=> {
    if(e.key === "Enter"){
      handleSendChat();
    }
  }

    return(<>
    <div className="sendChatContainer">
     <Input 
        size="lg" 
        className="sendChatInput"
        value={chatInput}
        onChange = {(e)=>setChatInput(e.target.value)}
        onKeyDown = {handleEnterPress}
        placeholder="Type something..."
        css={{w:'90%'}} 
      />
      <Button ripple shadow animated color={"gradient"} icon={<SendIcon />} onClick={handleSendChat} className='sendChatBtn'/>
    </div>
    </>)
}