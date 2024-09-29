import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.Box>
        <img
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/512/3113/3113330.png"
        />
        <p>
          At Monster Gym, you're free to be whoever you want to be. There are no
          standards or requirements, just the desire to feel good about yourself
        </p>
      </S.Box>
      <S.Box>
        <img
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/512/166/166516.png"
        />
        <p>
          We create an environment and employ professionals who make you feel
          comfortable and upbeat, allowing you to achieve your goals in an
          objective and enjoyable manner
        </p>
      </S.Box>
      <S.Box>
        <img
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/512/1584/1584858.png"
        />
        <p>
          We have designed a gym concept with schedules and class schedules so
          that you can tailor your workout to your own preferences
        </p>
      </S.Box>
    </S.Container>
  );
}
