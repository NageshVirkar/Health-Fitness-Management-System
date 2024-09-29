import React from "react";
import * as S from "./style";
import img1 from "../../assets/img1_00000.png";
import CheckIcon from "../../assets/check.png";

export default function index() {
  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Image src={img1} alt="Homem  fazendo musulação" />
        <S.InfoBeneficios>
          <h2>Why Muscle Factory?</h2>
          <S.Image2 src={img1} alt="Homem fazendo musulação" />
          <S.InfoItem>
            <img src={CheckIcon} alt="check" />
            <p>140+ Specialist trainers</p>
          </S.InfoItem>
          <S.InfoItem>
            <img src={CheckIcon} alt="check" />
            <p>1st month free training/class for new members</p>
          </S.InfoItem>
          <S.InfoItem>
            <img src={CheckIcon} alt="check" />
            <p>Muscle GO (online workouts)</p>
          </S.InfoItem>
          <S.InfoItem>
            <img src={CheckIcon} alt="check" />
            <p>Modern Equipments</p>
          </S.InfoItem>
        </S.InfoBeneficios>
      </S.ContainerInfo>
    </S.Container>
  );
}
