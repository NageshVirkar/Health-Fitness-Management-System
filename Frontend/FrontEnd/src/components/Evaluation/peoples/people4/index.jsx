import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.InfoText>
        Great gym, teachers really push you, no slacking off haha. Highly
        recommend!!!!
      </S.InfoText>
      <S.InfoArea2>
        <img alt="usuario" src="https://cdn.ocp.news/2021/09/eduardo_2.jpg" />
        <S.InfoName>
          <p style={{ fontSize: "20px" }}>Anutosh Sonawane</p>
          <p style={{ opacity: "40%" }}>Bhusawal</p>
        </S.InfoName>
      </S.InfoArea2>
    </S.Container>
  );
}
