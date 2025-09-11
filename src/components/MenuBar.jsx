import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ChatRender from "./ChatRender";

export default function MenuBar(){
    const [page, setPage] = useState("chats");

    const pages = {
      chats: <ChatRender/>,
      profile: <Profile />,
      settings: <Settings />
    };
}