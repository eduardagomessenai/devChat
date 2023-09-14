import style from "./chat.module.css";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "@mui/material";

const Chat = () => {
  return (
    <div>
      <div className={style["chat-container"]}>
        <div className={style["chat-body"]}> Olá</div>
        <div className={style["chat-footer"]}>
          <Input placeholder="Mensagem" fullWidth />
          <SendIcon
            className={style.SendIcon}
            sx={{ m: 1, cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
