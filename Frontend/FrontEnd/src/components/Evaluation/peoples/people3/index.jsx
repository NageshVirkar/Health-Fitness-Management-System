import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.InfoText>
        I love the gym. Wonderful service, a place where I feel great. The
        teachers are top-notch.
      </S.InfoText>
      <S.InfoArea2>
        <img
          alt="usuario"
          src="https://love-br.com/oc-content/uploads/23/2554.jpg"
        />
        <S.InfoName>
          <p style={{ fontSize: "20px" }}>Rushikesh Majale</p>
          <p style={{ opacity: "40%" }}>Kolhapur</p>
        </S.InfoName>
      </S.InfoArea2>
    </S.Container>
  );
}
