import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.InfoText>
        Affordable price, spacious facility with qualified professionals who
        provide full support to the students!
      </S.InfoText>
      <S.InfoArea2>
        <img
          alt="usuario"
          src="https://s2.glbimg.com/WhGxxKc_6WozIvW_Dx6Gb-J7k6Q=/0x204:960x1004/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/2/N/iCDVpPQ5AAHNyZK2W4Ww/23452f1d-846f-4ce4-9082-05eccab938b9.jpg"
        />
        <S.InfoName>
          <p style={{ fontSize: "20px" }}>Suraj Korade</p>
          <p style={{ opacity: "40%" }}>Nashik</p>
        </S.InfoName>
      </S.InfoArea2>
    </S.Container>
  );
}
