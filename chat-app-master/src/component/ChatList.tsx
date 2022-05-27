import UserCard from "./UserCard";
import { Spacer } from "@nextui-org/react";

export default function ChatList() {
  // let arr = [1, 2, 3, 4, 5, 6, 2, 2, 4, 1, 4];

  let payload = [
    {
      username : 'Tabish Nadeem'
    },
    {
      username : 'John Doe'
    },
    // {
    //   username : 'Mark Zuckerberg'
    // },
    // {
    //   username : 'Bill Gates'
    // },
    // {
    //   username : 'Steve Woz'
    // },
    // {
    //   username : 'Mark Spencer'
    // },
  ]

  return (
    <>
    <div>

      {payload.map((item) => {
        return (
          <div>
            <UserCard username = {item.username}/>

            <Spacer y={1} />
          </div>
        );
      })}
    </div>
    </>
  );
}
