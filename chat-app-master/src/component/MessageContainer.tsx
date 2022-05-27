import Message from "./Message";
import "./Styles/MessageContainer.css";
import ScrollReveal from "scrollreveal"
import { IPayload } from "../interfaces/IPayload";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import  { io } from "socket.io-client"
import { setCSUM } from "../redux/selectedUserMessagesSlice";



interface IMessageContainer{
  messagePayload : Array<IPayload>;
}

export default function MessageContainer() {

  const dispatch = useDispatch();


  
  // useEffect(()=>{
  //   let socket = io('http://localhost:3001')
  //   socket.on('msgToClient',(message) => {
  //     console.log(message);
  //     let temp = {
  //       message : message,
  //       isSender : false,
  //     }
  //     dispatch(setCSUM(temp))
      
      
  //   })
  // },[]  )


  const messagePayload : any[] = useSelector((state:any) => state.csum);
  console.log(messagePayload.length);
  console.log(messagePayload);
  
  // let mPayload : any = messagePayload;
  // if(messagePayload){
  //   mPayload = messagePayload[messagePayload.length-1];
  //   console.log(messagePayload[messagePayload.length-1]);
    
  // }
  
  // console.log("mess",messagePayload[0].message);
  // if(messagePayload.length !== 1){
  //   mPayload = messagePayload[1]
  //   console.log(mPayload);
    
  // }
  
  // if(messagePayload[0].message !== "null" || messagePayload[0].message == undefined){
  //   mPayload = messagePayload[0];
  // }

  

  // ScrollReveal().reveal('.messageDiv',{
  //   delay: 375,
  //   duration: 500,
  //   reset: true
  // })
  if(!messagePayload.length){
    return(
      <>
      <div>No Message!</div>
      </>
    )
  }else{

    return (
      <>
        <div className="messagesContainer">
          {messagePayload.map((mssg: any,index:number) => {
            
            return (
              <>
                <div
  
                  className="messageDiv"
                  style={{ textAlign: mssg.isSender ? "end" : "start" }}
                >
                  <div className="subDiv">{mssg.message}</div>
                </div>
                <br />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
