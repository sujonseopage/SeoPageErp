/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ProjectManagerInfo from "./ProjectManagerInfo";
import "../style/taskData.css";
import TableData from "./TableData";
import ManagerSingleTask from "./ManagerSingleTask";

const DataTableModal = ({
	data,
	onHide,
	openModalForItem,
	activeItem,
	// initialActiveCell,
}) => {
	// let columnName = data[1].accessor;
	// const [columnInfo, setColumnInfo] = useState({
	// 	columnName: data[1].accessor,
	// 	activeColumnName: null,
	// });
	// const [activeColumnName, setActiveColumnName] = useState(null);
	// // let columnName;

	// console.log("---->activeItem->", activeItem);
	// console.log("-----columnName-->", columnInfo);

	// const getColumnForActiveItem = (activeItem) => {
	// 	// Map activeItem to the corresponding columnName
	// 	switch (activeItem) {
	// 		case "Total Project Value":
	// 			return "total_project_value_minimum_ideal_8000_usd";
	// 		case "Project Completion Rate":
	// 			return "project_completion_rate";
	// 		case "Number of Projects":
	// 			return "no_of_projects_minimum_ideal_18";
	// 		case "Total Released Amount":
	// 			return "total_released_amount";
	// 		case "No of Fully Completed Project":
	// 			return "no_of_fully_completed_project";
	// 		case "Task Completion Rate":
	// 			return "task_completion_rate";
	// 		case "Delayed Completed":
	// 			return "delayed_completed";
	// 		case "Delayed Projects":
	// 			return "delayed_projects";
	// 		case "Canceled Projects":
	// 			return "canceled_projects";
	// 		case "Value of Upsale Cross Sale":
	// 			return "value_of_upsale_cross_sale";
	// 		case "Average Project Completion Time":
	// 			return "average_project_completion_time";
	// 		case "No of Upsale Cross Sales":
	// 			return "no_of_upsale_cross_sales";
	// 		default:
	// 			return null; // Return null if there is no match
	// 	}
	// };
	// useEffect(() => {
	// 	if (activeItem) {
	// 		const matchingColumn = getColumnForActiveItem(activeItem);
	// 		setColumnInfo((prev) => ({
	// 			...prev,
	// 			columnName: matchingColumn || data[1].accessor,
	// 			activeColumnName: matchingColumn,
	// 		}));
	// 	}

	// 	console.log("---col--->", columnInfo.activeColumnName);
	// }, [activeItem, data]);

	// console.log("0000>>>columndat:--->", data[1]);

	console.log("--->datafilejson--->", data[0]);

	const getColumnForActiveItem = (activeItem) => {
		switch (activeItem) {
			case "Total Project Value":
				return "total_project_value_minimum_ideal_8000_usd";
			case "Project Completion Rate":
				return "project_completion_rate";
			case "Number of Projects":
				return "no_of_projects_minimum_ideal_18";
			case "Total Released Amount":
				return "total_released_amount";
			case "No of Fully Completed Project":
				return "no_of_fully_completed_project";
			case "Task Completion Rate":
				return "task_completion_rate";
			case "Delayed Completed":
				return "delayed_completed";
			case "Delayed Projects":
				return "delayed_projects";
			case "Canceled Projects":
				return "canceled_projects";
			case "Value of Upsale Cross Sale":
				return "value_of_upsale_cross_sale";
			case "Average Project Completion Time":
				return "average_project_completion_time";
			case "No of Upsale Cross Sales":
				return "no_of_upsale_cross_sales";
			default:
				return data[1].accessor; // Use default accessor if there is no match
		}
	};

	// const [columnName, setColumnName] = useState(() =>
	// 	getColumnForActiveItem(activeItem)
	// );

	const [columnName, setColumnName] = useState(() =>
		getColumnForActiveItem(activeItem)
	);

	useEffect(() => {
		// Update columnName when activeItem or data changes

		const matchingColumn = getColumnForActiveItem(activeItem);

		setColumnName(matchingColumn);
	}, [activeItem, getColumnForActiveItem(activeItem)]);

	let getManagerInfo = () => {
		switch (columnName) {
			case "total_project_value_minimum_ideal_8000_usd":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Total Project Value: ${data[0].total_project_value_minimum_ideal_8000_usd} `;
			case "project_completion_rate":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Project Completion Rate: ${data[0].project_completion_rate_minimum_ideal_85} |
					Total Project Value: ${data[0].total_project_value_minimum_ideal_8000_usd}`;
			case "no_of_projects_minimum_ideal_18":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Total Project Value: ${data[0].total_project_value_minimum_ideal_8000_usd}`;
			case "total_released_amount":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Total Released Amount: ${data[0].total_released_amount}`;
			case "no_of_fully_completed_project":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Total Project Value: ${data[0].total_project_value_minimum_ideal_8000_usd}`;
			case "task_completion_rate":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Task Completion Rate: 10% |
					Total Project Value: ${data[0].total_project_value_minimum_ideal_8000_usd}
					`;
			case "delayed_completed":
				return `Project Manager: ${data[0].project_manager} |
					
					Delayed Completed: ${data[0].delayed_completed} |
					Total Project: ${data[0].no_of_projects_minimum_ideal_18} | Total Delayed Project: ${data[0].delayed_projects} |
					Total Delayed Completed Project: ${data[0].delayed_completed} |
					Project Delaying Rate: ${data[0].percentage_of_delayed_projects} |
					Total Delayed Project Value: $9,600.00
					`;
			case "delayed_projects":
				return `Project Manager: ${data[0].project_manager} |
				Total Delayed Project: ${data[0].delayed_projects} |
				Project Delaying Rate: ${data[0].percentage_of_delayed_projects} |
				Total Delayed Project Value: $13,200.00`;
			case "canceled_projects":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					Canceled Projects: ${data[0].canceled_projects} | 
					Total Canceled Project Value: $3600.00
					`;
			case "value_of_upsale_cross_sale":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					No. of Upsale: ${data[0].no_of_upsale_cross_sales.split("/")[0]} |
					Total Upsale Value: $8250.00 |
					No. of Cross Sale: ${data[0].no_of_upsale_cross_sales.split("/")[1]} |
					Value of Upsale Cross Sale: ${data[0].value_of_upsale_cross_sale}`;
			case "average_project_completion_time":
				return `Project Manager: ${data[0].project_manager} |
				Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
				Average Project Completion Time: ${data[0].average_project_completion_time} |
				Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
				Total Project Value: ${data[0].total_project_value_minimum_ideal_8000_usd}
				`;
			case "no_of_upsale_cross_sales":
				return `Project Manager: ${data[0].project_manager} |
					Total Projects: ${data[0].no_of_projects_minimum_ideal_18} |
					No. of Upsale: ${data[0].no_of_upsale_cross_sales.split("/")[0]} |
					Total Upsale Value: $8250.00 |
					No. of Cross Sale: ${data[0].no_of_upsale_cross_sales.split("/")[1]} 
					`;
			default:
				return "No Api Is Given For This Data";
		}
	};
	// No. of Upsale Cross Sales: ${data[0].no_of_upsale_cross_sales}

	return (
		<Modal show={true} onHide={onHide} dialogClassName="custom-modal">
			<Modal.Header closeButton className="modal-header">
				{/* <ProjectManagerInfo mangerData={data} columnName={columnName} /> */}
				<ProjectManagerInfo infoText={getManagerInfo()} />
			</Modal.Header>
			<Modal.Body>
				<ManagerSingleTask
					openModalForItem={openModalForItem}
					managerData={data}
					// initialActiveCell={initialActiveCell}
				/>

				<TableData columnName={columnName} />
			</Modal.Body>
		</Modal>
	);
};

export default DataTableModal;
