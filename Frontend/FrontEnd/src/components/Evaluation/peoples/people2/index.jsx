import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.InfoText>
        The best! Best teachers, classes, facilities. Diverse and dynamic
        classes! Always innovating.
      </S.InfoText>
      <S.InfoArea2>
        <img
          alt="usuario"
          src="https://wscom.com.br/wp-content/uploads/2019/09/69502926_547538696055062_2060411295016331589_n.jpg"
        />
        <S.InfoName>
          <p style={{ fontSize: "20px" }}>Manthan Birajdar</p>
          <p style={{ opacity: "40%" }}>Solapur Be</p>
        </S.InfoName>
      </S.InfoArea2>
    </S.Container>
  );
}
