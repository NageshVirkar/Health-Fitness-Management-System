// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/Customer",
		icon: <FaIcons.FaHome />,
	},
	{
		title: "Attendance",
		path: "/Attendence_Yours",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Membership Plans",
		path: "/YourMemberShip",
		icon: <IoIcons.IoIosPaper />,
	},
	// {
	// 	title: "Health & Fitness",
	// 	path: "/Health-fitness",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	{
		title: "See Trainers",
		path: "/SeeOwnTrainer",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	{
		title: "Class Schedule",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "see",
				path: "/classVisit",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			// {
			// 	title: "Update",
			// 	path: "/UpdateClass",
			// 	icon: <IoIcons.IoIosPaper />,
			// 	cName: "sub-nav",
			// },
		],
	},
	{
		title: "Diet Plan",
		path: "/Dietplan",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		// title: "Receipt",
		// path: "/Reciept",
		// icon: <IoIcons.IoIosPaper />,
	},
	{
		// title: "ChatBot",
		// path: "/customerchatbot",
		// icon: <FaIcons.FaEnvelopeOpenText />,
	}
];
