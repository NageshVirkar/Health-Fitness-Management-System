import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.InfoText>
        Best reception, best facilities... the best gym I've ever trained at
      </S.InfoText>
      <S.InfoArea2>
        <img
          alt="usuario"
          src="https://i.pinimg.com/736x/a2/d5/fa/a2d5fa68cc639796d06de5f00e07ae1e.jpg"
        />
        <S.InfoName>
          <p style={{ fontSize: "20px" }}>Sumedh Kamble</p>
          <p style={{ opacity: "40%" }}>Gargoti</p>
        </S.InfoName>
      </S.InfoArea2>
    </S.Container>
  );
}
