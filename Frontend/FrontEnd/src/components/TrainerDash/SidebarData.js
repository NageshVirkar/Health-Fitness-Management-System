// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/trainer",
		icon: <FaIcons.FaHome/>,
	},
	{
		title: "Customer",
		icon: <AiIcons.AiFillCustomerService />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Create",
				path: "/Customer/create",
				icon: <IoIcons.IoIosCreate />,
			},
			{
				title: "See",
				path: "/Customer/get",
				icon: <IoIcons.IoIosEye />,
			},
			// {
			// 	title: "Delete",
			// 	path: "/Customer/See/delete",
			// 	icon: <IoIcons.IoIosTrash />,
			// },
			// {
			// 	title: "Update",
			// 	path: "/Customer/See/update",
			// 	icon: <IoIcons.IoIosPaper />,
			// },
		],
	},
	// {
	// 	title: "Health & Fitness",
	// 	path: "/healthfitness",
	// 	icon: <IoIcons.IoIosPaper />,
	// 	iconClosed: <RiIcons.RiArrowDownSFill />,
	// 	iconOpened: <RiIcons.RiArrowUpSFill />,

	// 	subNav: [
	// 		{
	// 			title: "Update",
	// 			path: "/healthfitness/update",
	// 			icon: <IoIcons.IoIosPaper />,
	// 			cName: "sub-nav",
	// 		},
	// 		{
	// 			title: "Visit",
	// 			path: "/healthfitness/visit",
	// 			icon: <IoIcons.IoIosPaper />,
	// 			cName: "sub-nav",
	// 		},
	// 	],
	// },
	{
		title: "Diet Plan",
		path: "/diet",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Insert",
				path: "/diet/insert",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "See",
				path: "/diet/see",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "Attendance",
		path: "/attendance",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Insert",
				path: "/attendance/insert",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "See",
				path: "/attendance/see",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "Class Schedule",
		path: "/class",
		icon: <FaIcons.FaPhone />,
	},
	// {
	// 	title: "ChatBot",
	// 	path: "/chat",
	// 	icon: <FaIcons.FaEnvelopeOpenText />,
	// }
];
