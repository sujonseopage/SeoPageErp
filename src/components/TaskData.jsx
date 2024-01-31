/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/taskData.css";
import { PiSquaresFourLight } from "react-icons/pi";
import { MdOutlineContentCopy } from "react-icons/md";
import DataTableModal from "./DataTableModal";

const DraggableHeader = ({ column, index, moveColumn }) => {
	const [, drag] = useDrag({
		type: "COLUMN",
		item: { index },
	});

	const [, drop] = useDrop({
		accept: "COLUMN",
		hover: (draggedItem) => {
			if (draggedItem.index !== index) {
				moveColumn(draggedItem.index, index);
				draggedItem.index = index;
			}
		},
	});

	return (
		<th
			ref={(node) => drag(drop(node))}
			style={{
				cursor: "move",
				userSelect: "none",
				// background: "green",

				background: " rgb(71, 71, 241)",
				color: "white",
				paddingRight: "10px",
			}}
		>
			{column.Header}
		</th>
	);
};

const TaskData = () => {
	// const idealValues = {
	// 	numOfProjects: "Minimum Ideal 18",
	// 	totalProjectValue: "Minimum Ideal 8000 USD",
	// 	projectCompletionRate: "Minimum Ideal 85%",
	// };

	// const columnDefinitions = [
	// 	{
	// 		id: "projectManager",
	// 		Header: "Project Manager",
	// 		accessor: "project_manager",
	// 	},
	// 	{
	// 		id: "numOfProjects",
	// 		Header: `No. of Projects\n(${idealValues.numOfProjects})`,
	// 		accessor: "no_of_projects",
	// 	},
	// 	{
	// 		id: "totalProjectValue",
	// 		Header: `Total Project Value\n(${idealValues.totalProjectValue})`,
	// 		accessor: "total_project_value",
	// 	},
	// 	{
	// 		id: "totalReleasedAmount",
	// 		Header: "Total Released Amount",
	// 		accessor: "total_released_amount",
	// 	},
	// 	{
	// 		id: "numOfFullyCompletedProjects",
	// 		Header: "No. of Fully Completed Project",
	// 		accessor: "no_of_fully_completed_project",
	// 	},
	// 	{
	// 		id: "numOfCompletedProjectsWithoutAuthorization",
	// 		Header: "No. of Completed Projects Without Authorization",
	// 		accessor: "no_of_completed_projects_without_autorization",
	// 	},
	// 	{
	// 		id: "projectCompletionRate",
	// 		Header: `Project Completion Rate\n(${idealValues.projectCompletionRate})`,
	// 		accessor: "project_completion_rate",
	// 	},
	// 	{
	// 		id: "projectCompletionRateWithoutAuthorization",
	// 		Header: "Project Completion Rate (Without Authorization)",
	// 		accessor: "project_completion_rate_without_authorization",
	// 	},
	// 	{
	// 		id: "numOfFirstTimeClients",
	// 		Header: "No. of First Time Clients",
	// 		accessor: "no_of_first_time_clients",
	// 	},
	// 	{
	// 		id: "milestoneCompletionRate",
	// 		Header: "Milestone Completion Rate",
	// 		accessor: "milestone_completion_rate",
	// 	},
	// 	{
	// 		id: "taskCompletionRate",
	// 		Header: "Task Completion Rate",
	// 		accessor: "task_completion_rate",
	// 	},
	// 	{
	// 		id: "averageProjectCompletionTime",
	// 		Header: "Average Project Completion Time",
	// 		accessor: "average_project_completion_time",
	// 	},
	// 	{
	// 		id: "numOfUpsaleCrossSales",
	// 		Header: "No. of Upsale/Cross Sales",
	// 		accessor: "no_of_upsale_cross_sales",
	// 	},
	// 	{
	// 		id: "valueOfUpsaleCrossSale",
	// 		Header: "Value of Upsale/Cross Sale",
	// 		accessor: "value_of_upsale_cross_sale",
	// 	},
	// 	{
	// 		id: "canceledProjects",
	// 		Header: "Canceled Projects",
	// 		accessor: "canceled_projects",
	// 	},
	// 	{
	// 		id: "delayedProjects",
	// 		Header: "Delayed Projects",
	// 		accessor: "delayed_projects",
	// 	},
	// 	{
	// 		id: "delayedCompleted",
	// 		Header: "Delayed Completed",
	// 		accessor: "delayed_completed",
	// 	},
	// 	{
	// 		id: "percentageOfDelayedProjects",
	// 		Header: "Percentage of Delayed Projects",
	// 		accessor: "percentage_of_delayed_projects",
	// 	},
	// 	{
	// 		id: "cancelationRate",
	// 		Header: "Cancelation Rate",
	// 		accessor: "cancelation_rate",
	// 	},
	// 	{
	// 		id: "avgPaymentRelTime",
	// 		Header: "Avg. Payment Rel. Time",
	// 		accessor: "avg_payment_rel_time",
	// 	},
	// ];

	//STATE
	// const [columnss, setColumnss] = useState([
	// 	{
	// 		id: "name",
	// 		Header: "Project Manager",
	// 		accessor: "name",
	// 	},
	// 	{
	// 		id: "numOfProjects",
	// 		Header: "No. of Projects",
	// 		accessor: "numOfProjects",
	// 	},
	// 	{
	// 		id: "totalProjectValue",
	// 		Header: "Total Project Value",
	// 		accessor: "totalProjectValue",
	// 	},
	// 	{
	// 		id: "totalReleasedAmount",
	// 		Header: "Total Released Amount",
	// 		accessor: "totalReleasedAmount",
	// 	},
	// 	{
	// 		id: "fullyCompletedProjects",
	// 		Header: "Fully Completed Projects",
	// 		accessor: "fullyCompletedProjects",
	// 	},
	// 	{
	// 		id: "completedProjectWithoutAuthorization",
	// 		Header: "Completed Projects Without Authorization",
	// 		accessor: "completedProjectWithoutAuthorization",
	// 	},
	// 	{
	// 		id: "projectCompletionRate",
	// 		Header: "Project Completion Rate",
	// 		accessor: "projectCompletionRate",
	// 	},
	// 	{
	// 		id: "completionRateWithoutAuthorization",
	// 		Header: "Completion Rate Without Authorization",
	// 		accessor: "completionRateWithoutAuthorization",
	// 	},
	// 	{
	// 		id: "firstTimeClients",
	// 		Header: "First Time Clients",
	// 		accessor: "firstTimeClients",
	// 	},
	// 	{
	// 		id: "milestoneCompletionRate",
	// 		Header: "Milestone Completion Rate",
	// 		accessor: "milestoneCompletionRate",
	// 	},
	// 	{
	// 		id: "taskCompletionRate",
	// 		Header: "Task Completion Rate",
	// 		accessor: "taskCompletionRate",
	// 	},
	// 	{
	// 		id: "avgProjectCompletionTime",
	// 		Header: "Average Project Completion Time",
	// 		accessor: "avgProjectCompletionTime",
	// 	},
	// 	{
	// 		id: "upsaleCrossSales",
	// 		Header: "Upsale/Cross Sales",
	// 		accessor: "upsaleCrossSales",
	// 	},
	// 	{
	// 		id: "valueOfUpsaleCrossSale",
	// 		Header: "Value of Upsale/Cross Sale",
	// 		accessor: "valueOfUpsaleCrossSale",
	// 	},
	// 	{
	// 		id: "canceledProjects",
	// 		Header: "Canceled Projects",
	// 		accessor: "canceledProjects",
	// 	},
	// 	{
	// 		id: "delayedProjects",
	// 		Header: "Delayed Projects",
	// 		accessor: "delayedProjects",
	// 	},
	// 	{
	// 		id: "delayedCompleted",
	// 		Header: "Delayed Completed",
	// 		accessor: "delayedCompleted",
	// 	},
	// 	{
	// 		id: "percentageOfDelayedProjects",
	// 		Header: "Percentage of Delayed Projects",
	// 		accessor: "percentageOfDelayedProjects",
	// 	},
	// 	{
	// 		id: "cancellationRate",
	// 		Header: "Cancellation Rate",
	// 		accessor: "cancellationRate",
	// 	},
	// 	{
	// 		id: "avgPaymentRelTime",
	// 		Header: "Avg. Payment Rel. Time",
	// 		accessor: "avgPaymentRelTime",
	// 	},
	// ]);
	const [columns, setColumns] = useState([]);
	const [data, setData] = useState([]);
	const [showColumnMenu, setshowColumnMenu] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredData, setHoveredData] = useState(null);
	const [managerInfo, setManagerInfo] = useState(null);
	const [columnVisibility, setColumnVisibility] = useState({});
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [isModalVisible, setModalVisible] = useState(false);
	const [initialActiveCell, setinitialActiveCell] = useState(null);

	// if (managerInfo) {
	// 	setinitialActiveCell(managerInfo[1].Header);
	// } else {
	// 	setinitialActiveCell("Total Project Value");
	// }

	const totalProjectValue = 75600;

	//FUNCTIONS

	const handleModalOpen = () => {
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
	};

	const toggleColumnMenu = () => {
		setshowColumnMenu((prev) => !prev);
	};

	console.log("---->managerinfo--->", managerInfo);

	const toggleColumnVisibility = (columnId) => {
		setColumnVisibility((prevVisibility) => ({
			...prevVisibility,
			[columnId]: !prevVisibility[columnId],
		}));
	};

	const truncate = (text, maxLength) => {
		return text.length > maxLength
			? text.substr(0, maxLength) + "..."
			: text;
	};

	const moveColumn = (fromIndex, toIndex) => {
		const newColumns = [...columns];
		const [movedColumn] = newColumns.splice(fromIndex, 1);
		newColumns.splice(toIndex, 0, movedColumn);
		setColumns(newColumns);
	};

	useEffect(() => {
		// Get the position of the last row
		const lastRow = document.querySelector("tbody tr:last-child");
		if (lastRow) {
			const lastRowRect = lastRow.getBoundingClientRect();
			const lastRowBottom = lastRowRect.bottom + window.scrollY;

			// Set the top position of the div below the last row
			setModalPosition((prevPosition) => ({
				...prevPosition,
				top: lastRowBottom + 10, // Adjust the spacing as needed
			}));
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://retoolapi.dev/cV9K7f/predefined_cycle"
					// "https://retoolapi.dev/2qKzHb/table_data_pm_main_table"
					// "https://retoolapi.dev/cV9K7f/predefined_cycle"
				);
				const jsonData = await response.json();
				setData(jsonData);

				const newColumns = [
					{
						id: "project_manager",
						Header: "Project Manager",
						accessor: "project_manager",
					},
					{
						id: "no_of_projects",
						Header: "No. of Projects",
						accessor: "no_of_projects_minimum_ideal_18",
					},
					{
						id: "total_project_value",
						Header: "Total Project Value",
						accessor: "total_project_value_minimum_ideal_8000_usd",
					},
					{
						id: "total_released_amount",
						Header: "Total Released Amount",
						accessor: "total_released_amount",
					},
					{
						id: "no_of_fully_completed_project",
						Header: "No. of Fully Completed Project",
						accessor: "no_of_fully_completed_project",
					},
					{
						id: "no_of_completed_projects_without_autorization",
						Header: "No. of Completed Projects Without Authorization",
						accessor:
							"no_of_completed_projects_without_autorization",
					},
					{
						id: "project_completion_rate_minimum_ideal_85",
						Header: "Project Completion Rate (Minimum Ideal 85%)",
						accessor: "project_completion_rate_minimum_ideal_85",
					},
					{
						id: "project_completion_rate_without_authorization",
						Header: "Project Completion Rate (Without Authorization)",
						accessor:
							"project_completion_rate_without_authorization",
					},
					{
						id: "no_of_first_time_clients",
						Header: "No. of First Time Clients",
						accessor: "no_of_first_time_clients",
					},
					{
						id: "milestone_completion_rate",
						Header: "Milestone Completion Rate",
						accessor: "milestone_completion_rate",
					},
					{
						id: "task_completion_rate",
						Header: "Task Completion Rate",
						accessor: "task_completion_rate",
					},
					{
						id: "average_project_completion_time",
						Header: "Average Project Completion Time",
						accessor: "average_project_completion_time",
					},
					{
						id: "no_of_upsale_cross_sales",
						Header: "No. of Upsale/Cross Sales",
						accessor: "no_of_upsale_cross_sales",
					},
					{
						id: "value_of_upsale_cross_sale",
						Header: "Value of Upsale/Cross Sale",
						accessor: "value_of_upsale_cross_sale",
					},
					{
						id: "canceled_projects",
						Header: "Canceled Projects",
						accessor: "canceled_projects",
					},
					{
						id: "delayed_projects",
						Header: "Delayed Projects",
						accessor: "delayed_projects",
					},
					{
						id: "delayed_completed",
						Header: "Delayed Completed",
						accessor: "delayed_completed",
					},
					{
						id: "percentage_of_delayed_projects",
						Header: "Percentage of Delayed Projects",
						accessor: "percentage_of_delayed_projects",
					},
					{
						id: "cancelation_rate",
						Header: "Cancelation Rate",
						accessor: "cancelation_rate",
					},
					{
						id: "avg_payment_rel_time",
						Header: "Avg. Payment Rel. Time",
						accessor: "avg_payment_rel_time",
					},
				];

				setColumns(newColumns);

				// Set initial column visibility state
				const initialVisibility = newColumns.reduce((acc, column) => {
					acc[column.id] = true;
					return acc;
				}, {});
				setColumnVisibility(initialVisibility);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		if (data.length === 0) {
			fetchData();
		}
	}, [data.length]);

	//Manager Singe Task
	const [activeItem, setActiveItem] = useState(null);

	const openModalForItem = (item) => {
		setActiveItem(item);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div className=" container mt-4 position-relative">
				<div
					className=" text-center main-header-info"
					style={{ top: "0", left: "30%", display: "block" }}
				>
					<p style={{ fontSize: "35px", fontWeight: "600" }}>
						Total Project: 63
					</p>
					<p style={{ fontSize: "35px", fontWeight: "600" }}>
						Total Project Value: ${totalProjectValue}
					</p>
				</div>
				{/* Mobile-friendly menu bar for column visibility */}
				<div
					className="position-fixed end-0 p-2 "
					style={{ top: "4%" }}
				>
					{/* Mobile-friendly menu bar for column visibility */}
					<Button
						variant="outline-secondary show_hide_button"
						onClick={() => toggleColumnMenu(!showColumnMenu)}
					>
						☰ Show/Hide
					</Button>

					{showColumnMenu && (
						<div
							className="position-fixed p-2 mt-3 glassy-ash-background rounded "
							style={{
								top: "88px",
								right: "1px",
								display: "block",
								maxHeight: "350px",
								overflowY: "auto",
							}}
						>
							{columns.map((column) => (
								<div
									key={column.id}
									className="show_hide_div"
									style={{
										marginBottom: "3px",
									}}
								>
									<label
										style={{
											fontSize: "13px",
										}}
									>
										<input
											className="me-2"
											type="checkbox"
											checked={
												columnVisibility[column.id]
											}
											onChange={() =>
												toggleColumnVisibility(
													column.id
												)
											}
										/>
										{column.Header}
									</label>
								</div>
							))}
						</div>
					)}
				</div>
				<div style={{ marginTop: "60px" }}>
					<table className="table table-bordered pt-5 mx-2 mt-50">
						<thead>
							<tr
								style={{
									textAlign: "center",
									verticalAlign: "middle",
								}}
							>
								{columns.map(
									(column, index) =>
										columnVisibility[column.id] && (
											<DraggableHeader
												key={column.id}
												column={column}
												index={index}
												moveColumn={moveColumn}
											/>
										)
								)}
							</tr>
						</thead>
						{/* <tbody>
							{data.map((row, rowIndex) => (
								<tr key={rowIndex}>
									{columns.map((column, colIndex) => (
										<td
											key={colIndex}
											className="text-center cell_data"
											style={{
												padding: "10px 10px",
												alignItems: "center",
												justifyContent: "center",
												textAlign: "center",
												verticalAlign: "middle",

												color:
													column.Header ===
													"project_manager"
														? "black"
														: column.Header ===
														  "pm_id"
														? "black"
														: column.Header === "id"
														? "black"
														: "blue",
												textDecoration:
													column.Header ===
													"project_manager"
														? "none"
														: "underline",
												display: columnVisibility[
													column.id
												]
													? "table-cell"
													: "none",
											}}
											onClick={(e) => {
												// Get the position of the hovered column
												const rect =
													e.currentTarget.getBoundingClientRect();
												setModalPosition({
													top:
														rect.bottom +
														window.scrollY,
													left:
														rect.left +
														window.scrollX,
												});

												//....
												setIsHovered(true);
												// setIsHovered(true);

												setHoveredData([row, column]);
												setManagerInfo([row, column]);
												// clearTimeout(hoverTimeout);
											}}

											// onMouseLeave={() => {
											// 	//wait for 5 second
											// 	if (isModalHovered) {
											// 		setIsHovered(true);
											// 	} else {
											// 		hoverTimeout = setTimeout(
											// 			() => {
											// 				setIsHovered(false);
											// 				setHoveredData(
											// 					null
											// 				);
											// 			},
											// 			4000
											// 		);
											// 	}

											// 	//.....

											// 	// if (isModalHovered) {
											// 	// 	setIsHovered(true);
											// 	// } else {
											// 	// 	setTimeout(() => {
											// 	// 		setIsHovered(false);
											// 	// 		setHoveredData(null);
											// 	// 	}, 5000);
											// 	// }
											// }}
										>
											{row[column.accessor]}
										</td>
									))}
								</tr>
							))}
						</tbody> */}
						<tbody>
							{data.map((row, rowIndex) => (
								<tr key={rowIndex}>
									{columns.map((column, colIndex) => (
										<td
											key={colIndex}
											className="text-center cell_data"
											style={{
												padding: "10px 10px",
												alignItems: "center",
												justifyContent: "center",
												textAlign: "center",
												verticalAlign: "middle",
												fontSize: "16px",
												fontWeight: "500",
												backgroundColor:
													rowIndex % 2 === 0
														? "white"
														: "#d1d4fb",

												color:
													column.Header ===
													"Project Manager"
														? "black"
														: column.Header ===
														  "pm_id"
														? "black"
														: column.Header === "id"
														? "black"
														: "rgb(77, 77, 241)",
												textDecoration:
													column.Header ===
													"Project Manager"
														? "none"
														: "underline",
												display: columnVisibility[
													column.id
												]
													? "table-cell"
													: "none",
											}}
											onClick={(e) => {
												const rect =
													e.currentTarget.getBoundingClientRect();
												setModalPosition({
													top:
														rect.bottom +
														window.scrollY,
													left:
														rect.left +
														window.scrollX,
												});

												setIsHovered(true);
												setHoveredData([row, column]);
												setManagerInfo([row, column]);
											}}
										>
											{row[column.accessor]}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>

					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							maxWidth: "350px",
							alignItems: "center",
							color: "black",
							marginBottom: "10px",
						}}
					>
						<div style={{ color: "blue", fontWeight: "500" }}>
							Add
						</div>
						<div
							style={{
								border: "1px solid black",
								padding: "3px",
								borderRadius: "6px",
								cursor: "pointer",
							}}
						>
							1000
						</div>
						<span>More Rows at the bottom</span>
					</div>

					{/* Modal to show column inner information */}

					{isHovered && (
						<div
							className="position-absolute p-1 mb-2 bg-white rounded shadow-sm"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
								width: "450px",
								top: modalPosition.top,
								left: modalPosition.left,
							}}
							onClick={handleModalOpen}
						>
							<PiSquaresFourLight
								style={{ color: "green", fontSize: "25px" }}
							/>

							<div
								style={{
									color: "blue",
									fontWeight: "700",
									cursor: "pointer",
								}}
							>
								{truncate(
									`${hoveredData[1].Header} - ${hoveredData[0].project_manager}`,
									35
								)}
							</div>

							<MdOutlineContentCopy
								style={{
									color: "black",
									fontWeight: "600",
									fontSize: "20px",
								}}
							/>
						</div>
					)}
				</div>
				{/* Render the DataTableModal component if the modal is visible */}
				{isModalVisible && (
					<DataTableModal
						data={managerInfo}
						openModalForItem={openModalForItem}
						activeItem={activeItem}
						// initialActiveCell={initialActiveCell}
						// columns={columns}
						onHide={handleModalClose}
					/>
				)}
			</div>
		</DndProvider>
	);
};

export default TaskData;
