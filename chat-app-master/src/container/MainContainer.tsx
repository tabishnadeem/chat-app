import "./Styles/MainContainer.css";

import { Card } from "@nextui-org/react";
import SearchChat from "../component/SearchChat";
import ChatList from "../component/ChatList";
import ChatHeader from "../component/ChatHeader";
import MessageContainer from "../component/MessageContainer";
import SendChat from "../component/SendChat";

export default function MainContainer() {

  return (
    <>
    <div className="mainCont">

      <Card className="containerCard" css={{ width: "95vw", height: "90vh" }}>
        <div className="chatListContainer">
          <SearchChat />
          <ChatList />

        </div>

        <div className="chatContainer">
          <div>
            <ChatHeader />
          </div>
          <div style={{ flex: "auto", background: "", overflowY:'auto' }}>
            <MessageContainer/>
          </div>
          <div>
            <SendChat />
          </div>
        </div>
      </Card>
    </div>
    </>
  );
}
