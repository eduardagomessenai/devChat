import { useRef, useState, useEffect } from "react";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import style from "./Chat.module.css";

const Chat = ({ socket }) => {
  const messageRef = useRef();
  const bottomRef = useRef();
  const [messageBox, setMessageBox] = useState([]);

  useEffect(() => {
    messageRef.current.focus();
    socket.on("receive-message", (data) => {
      setMessageBox((current) => [...current, data]);
    });

    return () => socket.off("receive-message");
  }, [socket]);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageBox]);

  const messageSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit("message", message);

    clearInput();
    messageRef.current.focus();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      messageSubmit();
    }
  };

  return (
    <div>
      <div className={style["chat-container"]}>
        <div className={style["chat-body"]}>
          {messageBox.map((message, index) => (
            <div
              className={`${style["message-container"]} ${
                message.authorID === socket.id && style["message-mine"]
              }`}
              key={index}
            >
              <div className="message-author">
                <strong>{message.author}</strong>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className={style["chat-footer"]}>
          <Input
            inputRef={messageRef}
            placeholder="Mensagem"
            fullWidth
            onKeyDown={handleKeyPress}
          />
          <SendIcon
            sx={{ m: 1, cursor: "pointer" }}
            style={{ color: "#129d93" }}
            onClick={() => messageSubmit()}
          />
        </div>
      </div>
    </div>
  );
};
export default Chat;
