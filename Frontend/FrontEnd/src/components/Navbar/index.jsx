import React, { useState, useEffect } from "react";
import * as S from "./style";
import logoText from "../../assets/muscle_logo.png";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

export default function Index() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Nav style={{ position: "fixed", width: "100%", top: 0, backgroundColor: `rgba(51, 51, 51, ${scrollY > 50 ? 0.8 : 0})`, transition: "background-color 0.3s" }}>
      <S.BackNav onClick={handleOpenMenu} show={openMenu}></S.BackNav>
      <Link to="/">
        <S.NavImg src={logoText} alt="logo" style={{ width: '220px', height: 'auto' }} />
      </Link>
      <S.NavItems showMenu={openMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/facilities">Facilities</Link>
        </li>
        <li>
          <Link to="/plans">Plans</Link>
        </li>
        <li>
          <Link to="/BMIcalculator">Your BMI </Link>
        </li>
        <S.NavButton2>
          <Link to="/signup">Enroll now!</Link>
        </S.NavButton2>
      </S.NavItems>
      <S.NavButton>
        <Link to="/login">Login Here!</Link>
      </S.NavButton>
      <S.HamburgerArea onClick={handleOpenMenu}>
        <Hamburger color="#ff0022" toggled={openMenu} toggle={setOpenMenu} />
      </S.HamburgerArea>
    </S.Nav>
  );
}
