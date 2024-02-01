/* eslint-disable react/prop-types */
import { useState } from "react";
import "../style/taskData.css";
const data = [
	"Total Project Value",
	"Project Completion Rate",
	"Number of Projects",
	"Total Released Amount",
	"No of Fully Completed Project",
	"Task Completion Rate",
	"Delayed Completed",
	"Delayed Projects",
	"Canceled Projects",
	"Value of Upsale Cross Sale",
	"No of Upsale Cross Sales",
];

const ManagerSingleTask = ({
	managerData,
	openModalForItem,
	// initialActiveCell,
}) => {
	console.log("0--->", managerData);

	// console.log("type of openmoda->", typeof openModalForItem);

	const truncate = (text, maxLength) => {
		return text.length > maxLength
			? text.substr(0, maxLength) + "..."
			: text;
	};

	//MAPPED HEADER
	const mapHeader = (header) => {
		const mappings = {
			"No. of Projects": "Number of Projects",
			"No. of Fully Completed Project": "No of Fully Completed Project",
			"Value of Upsale/Cross Sale": "Value of Upsale Cross Sale",
			"No. of Upsale/Cross Sales": "No of Upsale Cross Sales",
		};

		return mappings[header] || header;
	};

	// Usage
	const originalHeader = managerData[1].Header;
	const mappedHeader = mapHeader(originalHeader);

	const [activeCell, setActiveCell] = useState(mappedHeader);

	//MAPED ITEMS
	const mapItems = (item) => {
		const mappings = {
			"Total Project Value": "total_project_value_minimum_ideal_8000_usd",
			"Project Completion Rate":
				"project_completion_rate_minimum_ideal_85",
			"Number of Projects": "no_of_projects_minimum_ideal_18",
			"Total Released Amount": "total_released_amount",
			"No of Fully Completed Project": "no_of_fully_completed_project",
			"Task Completion Rate": "task_completion_rate",
			"Delayed Completed": "delayed_completed",
			"Delayed Projects": "delayed_projects",
			"Canceled Projects": "canceled_projects",
			"Value of Upsale Cross Sale": "0",
			"No of Upsale Cross Sales": "value_of_upsale_cross_sale",
		};

		return mappings[item] || item;
	};

	const handleCellClick = (item) => {
		console.log("------itemSelected-====>", item);
		setActiveCell(item);
		if (openModalForItem) {
			openModalForItem(item);
		}
	};

	return (
		// <div className="blue-divs-container">
		// 	<div className="row">
		// 		{data.map((item, index) => (

		// 			<div
		// 				key={index}
		// 				className={`blue-div project-manager-info ${
		// 					activeCell === item ? "active-cell" : ""
		// 				}`}
		// 				onClick={() => handleCellClick(item)}
		// 			>
		// 				{item}
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
		<div className="blue-divs-container">
			<div className="row">
				{data.map((item, index) => {
					const value = mapItems(item) || "";
					const itemValue = managerData[0][value]
						? managerData[0][value]
						: "";

					return (
						<div
							key={index}
							className={`blue-div project-manager-info ${
								activeCell === item ? "active-cell" : ""
							}`}
							onClick={() => handleCellClick(item)}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyItems: "center",
								}}
							>
								<span>{item}</span>
								<span> ( {`${itemValue}`})</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ManagerSingleTask;
