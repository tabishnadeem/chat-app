import { Avatar, Card } from "@nextui-org/react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";




export default function ChatHeader(){

    const currentSelectedUsername: string = useSelector((state:any)=>state.csu.value)
    console.log(currentSelectedUsername);
    
    return(
        <>
        
        <Card css={{ w: "100",borderRadius:0 ,padding:'0',justifyContent:'space-between',alignItems:'center'}}>
            <div className="avatarSection">
            <Avatar
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            </div>

            <div className="nameSection">
                <h3 style={{margin:'auto'}}>{currentSelectedUsername}</h3>
            </div>

            <div className="activeSection">
                <span >Online</span>
            </div>
    </Card>

        </>
    )
}