import React, { useEffect, useState } from "react";
import Wrapper from "./styles.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import LogoPix from "../../assets/logoPix.svg";
import CircularProgress from "@mui/material/CircularProgress";

export default function index() {
  const [ChavePix, setChavePix] = useState();
  const handlePixChange = (event) => {
    setChavePix(event.target.value);
  };

  const [Descricao, setDescricao] = useState();
  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const [Valor, setValor] = useState();
  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const [QrCode, setQrCode] = useState("");

  useEffect(() => {
    fetch(
      `https://api-pix-closer001.vercel.app/?chavePix=${ChavePix}&decription=${Descricao}&name=&city=&amount=${Valor}`
    )
      .then((response) => response.json())
      .then((response) => setQrCode(response.qrcode_payload))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <Paper elevation={3}>
        <Wrapper>
          <img className="logoImg" src={LogoPix}></img>
          <div className="container">
            <Box className="infoPix">
              <TextField
                className="inputInfo"
                id="outlined-basic"
                label="CHAVE PIX"
                variant="outlined"
                onChange={handlePixChange}
                value={ChavePix}
              />
              <TextField
                className="inputInfo"
                id="outlined-basic"
                label="DESCRIÇÃO"
                variant="outlined"
                onChange={handleDescricaoChange}
                value={Descricao}
              />
              <TextField
                className="inputInfo"
                id="outlined-basic"
                label="VALOR"
                variant="outlined"
                onChange={handleValorChange}
                value={Valor}
              />
            </Box>
            <article>
              {QrCode.length > 0 ? <img src={QrCode} /> : <CircularProgress />}
            </article>
          </div>
        </Wrapper>
      </Paper>
    </>
  );
}
