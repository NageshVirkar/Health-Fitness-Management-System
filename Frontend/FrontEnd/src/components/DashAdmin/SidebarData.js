// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/admin",
		icon: <FaIcons.FaHome/>,
	},
	{
		title: "Trainer",
		icon: <AiIcons.AiFillCustomerService />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Create",
				path: "/admin/create",
				icon: <IoIcons.IoIosCreate />,
			},
			{
				title: "See",
				path: "/admin/get",
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
	{
		title: "Membership",
		path: "/membership",
		icon: <FaIcons.FaHome/>,
	},
	{
		title: "Class Schedule",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Trainer",
				path: "/schedule/trainer",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Customer",
				path: "/schedule/customer",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	// {
	// 	title: "Payment",
	// 	path: "/payment",
	// 	icon: <FaIcons.FaHome/>,
	// },
	// {
	// 	title: "Equipments",
	// 	icon: <AiIcons.AiFillCustomerService />,
	// 	iconClosed: <RiIcons.RiArrowDownSFill />,
	// 	iconOpened: <RiIcons.RiArrowUpSFill />,

	// 	subNav: [
	// 		{
	// 			title: "Add",
	// 			path: "/equipment/add",
	// 			icon: <IoIcons.IoIosCreate />,
	// 		},
	// 		{
	// 			title: "See",
	// 			path: "/equipment/get",
	// 			icon: <IoIcons.IoIosEye />,
	// 		},
	// 		// {
			// 	title: "Delete",
			// 	path: "/equipment/get/delete",
			// 	icon: <IoIcons.IoIosTrash />,
			// },
			// {
			// 	title: "Update",
			// 	path: "/equipment/get/update",
			// 	icon: <IoIcons.IoIosPaper />,
			// },
	// 	],
	// },
	{
		title: "Feedback",
		path: "/admin/feedback",
		icon: <FaIcons.FaHome/>,
	},
	{
		title: "Attendance",
		path: "/trainerattendance",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	
	// {
	// 	title: "ChatBot",
	// 	path: "/adminchatbot",
	// 	icon: <FaIcons.FaEnvelopeOpenText />,
	// }
];
