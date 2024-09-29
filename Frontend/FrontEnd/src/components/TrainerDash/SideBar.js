// Filename - components/Sidebar.js

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Logo from "../../assets/logo_muscle.png";
import  Image1 from "../../assets/trainer1.jpg";

const Nav = styled.div`

	background: #15171c;
	height: 80px;
	display: flex;
	
	justify-content: flex-start;
	align-items: center;
`;
const LogoImg = styled.img`
  height: 60px;
  margin-left:1000px;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #15171c;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
	overflow-y: auto;
	max-height: 100vh;
`;



const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars
							onClick={showSidebar}
						/>
					</NavIcon>
					<LogoImg src={Logo} alt="Logo" style={{marginLeft:'40%'}}/>
					<div className="nav-item dropdown" style={{marginLeft:'35%'}}>
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src={Image1} alt="" style={{width: '40px', height: '40px'}}/>
                            <span className="d-none d-lg-inline-flex">{localStorage.getItem("name")}</span>
                        </a>
                        <div className="dropdown-menu custom-dropdown-menu bg-secondary border-0 rounded-0 rounded-bottom m-0">
                    
                            <Link to="/Login" className="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                    
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose
								onClick={showSidebar}
							/>
						</NavIcon>
						{SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
								/>
							);
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
