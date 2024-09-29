import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import CheckIcon from "../../assets/check.png";
import CheckIconWhite from "../../assets/check_white.png";
import dumbbell from "../../assets/dumbbell.png";
import cardio from "../../assets/cardio.png";
import coroa from "../../assets/coroa_00000.png";

export default function index() {
  return (
    <S.Container>
      <h2>Begin your journey with us now!</h2>
      <S.Plans>
        <S.Plan>
          <img src={dumbbell} alt="icon" />
          <p style={{ fontSize: "28px" }}>Basic Plan</p>
          <p style={{ fontSize: "45px", fontWeight: 600 }}>Rs 7200</p>
          <S.PlanDetail>
            <img src={CheckIcon} alt="check" />
            <p>5 hours of exercise per day</p>
          </S.PlanDetail>
          <S.PlanDetail>
            <img src={CheckIcon} alt="check" />
            <p>Annual maintenance fee Rs 800.00</p>
          </S.PlanDetail>
          <S.PlanDetail>
            <img src={CheckIcon} alt="check" />
            <p>Enrollment fee Rs 500.00</p>
          </S.PlanDetail>
          <S.Button>
            <Link to="/signup">Enroll</Link>
          </S.Button>
        </S.Plan>
        <S.Plan2>
          <img src={coroa} alt="icon" />
          <p style={{ fontSize: "28px" }}>Premium plan</p>
          <p style={{ fontSize: "55px", fontWeight: 700 }}>Rs 9600</p>
          <S.PlanDetail2>
            <img src={CheckIconWhite} alt="check" />
            <p>No time restrictions</p>
          </S.PlanDetail2>
          <S.PlanDetail2>
            <img src={CheckIconWhite} alt="check" />
            <p>No cancellation fee and no annual fee</p>
          </S.PlanDetail2>
          <S.PlanDetail2>
            <img src={CheckIconWhite} alt="check" />
            <p>Training at all Monster Gym locations</p>
          </S.PlanDetail2>
          <S.Button2>
            <Link to="/signup">Enroll now</Link>
          </S.Button2>
        </S.Plan2>
        <S.Plan>
          <img src={cardio} alt="icon" />
          <p style={{ fontSize: "28px" }}>Pro Plan</p>
          <p style={{ fontSize: "45px", fontWeight: 600 }}>Rs 14400</p>
          <S.PlanDetail>
            <img src={CheckIcon} alt="check" />
            <p>Bring 5 friends per month</p>
          </S.PlanDetail>
          <S.PlanDetail>
            <img src={CheckIcon} alt="check" />
            <p>Massage chair</p>
          </S.PlanDetail>
          <S.PlanDetail>
            <img src={CheckIcon} alt="check" />
            <p>Kids area</p>
          </S.PlanDetail>
          <S.Button>
            <Link to="/signup">Enroll</Link>
          </S.Button>
        </S.Plan>
      </S.Plans>
    </S.Container>
  );
}
