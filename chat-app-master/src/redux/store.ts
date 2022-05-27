import { configureStore } from "@reduxjs/toolkit";
import currentSelectedUsernameSlice from "./currentSelectedUsernameSlice";
import  currentSelectedUserMessageSlice  from "./selectedUserMessagesSlice";


export const store = configureStore({
    reducer : {
        csu: currentSelectedUsernameSlice,
        csum : currentSelectedUserMessageSlice,
    },
});
