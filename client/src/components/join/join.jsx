import style from "./join.module.css";
import { Input, Button } from "@mui/material";

const join = () => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Usuário");
    }
  };

  return (
    <>
      <div className={style["dev-logo"]}>
        DevChat
        </div>

      <div className={style["join-container"]}>
        <h2>Bem-vindo ao devChat!</h2>
        <Input placeholder="Nome de usuário..." onKeyDown={handleKeyPress} />
        <Button sx={{ mt: 2, mb: 2 }} variant="contained">
          Entrar
        </Button>
      </div>
    </>
  );
};

export default join;
