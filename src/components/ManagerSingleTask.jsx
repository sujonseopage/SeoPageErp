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

	const handleCellClick = (item) => {
		console.log("------itemSelected-====>", item);
		setActiveCell(item);
		if (openModalForItem) {
			openModalForItem(item);
		}
	};

	return (
		<div className="blue-divs-container">
			<div className="row">
				{data.map((item, index) => (
					<div
						key={index}
						className={`blue-div project-manager-info ${
							activeCell === item ? "active-cell" : ""
						}`}
						onClick={() => handleCellClick(item)}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default ManagerSingleTask;
