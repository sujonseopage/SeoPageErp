import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TableData = ({ columnName }) => {
	const [data, setData] = useState([]);

	console.log("columnName---->123--->", columnName);

	const columnsMapping = {
		id: "SL. No.",
		project_name: "Project Name",
		client: "Client",
		project_value: "Project Value",
		released_amount: "Released Amount",
		released_amount_percentage: "Released Amount (Percentage)",
		deal_closed_by: "Deal Closed By",
		estimated_hours: "Estimated Hours",
		total_hours_logged: "Total Hours Logged",
		freelancer_com_message_page_link: "Freelancer.com Message Page Link",
		freelancer_com_profile_link: "Freelancer.com Profile Link",
		members: "Members",
		start_date: "Start Date",
		deadline: "Deadline",
		deliverables_signed_by_the_client: "Deliverables Signed By the Client",
		deliverables_signed_internally: "Deliverables Signed Internally",
		project_progress_payment_wise: "Project Progress (Payment Wise)",
		project_progress_task_completion_wise:
			"Project Progress (Task Completion Wise)",
		status: "Status",
		project_completion_time: "Project Completion Time",
		// Add more mappings as needed
	};

	// const displayColumns = Object.keys(columnsMapping);

	// Define columns to display based on the columnName
	const displayColumns = (() => {
		if (
			columnName === "total_project_value_minimum_ideal_8000_usd" ||
			columnName === "project_completion_rate" ||
			columnName === "no_of_projects_minimum_ideal_18"
		) {
			// Exclude specific columns for the "project_value" column
			return Object.keys(columnsMapping).filter(
				(column) =>
					column !== "released_amount" &&
					column !== "released_amount_percentage"
			);
		} else {
			return Object.keys(columnsMapping);
		}
	})();

	const getApiForColumn = (columnName) => {
		const apiEndpoints = {
			total_project_value_minimu_ideal_8000_usd:
				"https://retoolapi.dev/qQwvdU/total_project_value",

			no_of_projects_minimum_ideal_18:
				"https://retoolapi.dev/raJ2QY/no_of_projects",
			total_released_amount:
				"https://retoolapi.dev/g8dYiX/total_released_amount",
			no_of_fully_completed_project:
				"https://retoolapi.dev/Ap1WeY/no_of_fully_completed_project",

			task_completion_rate:
				"https://retoolapi.dev/q0JzIY/project_completion_rate",
			delayed_completed: "https://retoolapi.dev/lJOP3J/delayed_completed",
			delayed_projects: "https://retoolapi.dev/psFpKa/delayed_projects",
			canceled_projects: "https://retoolapi.dev/XbPWst/canceled_projects",
			value_of_upsale_cross_sale:
				"https://retoolapi.dev/pptYJy/value_of_upsale_cross_sale",
			average_project_completion_time:
				"https://retoolapi.dev/5uR4BW/average_project_completion_time",
			no_of_upsale_cross_sales:
				"https://retoolapi.dev/4W877W/no_of_upsale_cross_sales",
		};

		// Check if columnName exists in the map, otherwise use the default API
		return (
			apiEndpoints[columnName] ||
			"https://retoolapi.dev/1Qy7t3/table_data_pm_id_1"
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			const apiToCall = getApiForColumn(columnName);
			try {
				const response = await fetch(apiToCall);
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [columnName]);

	if (!data.length) {
		return <div>Loading...</div>;
	}

	// const columns = Object.keys(data[0]);

	// Function to truncate text
	const truncate = (text, maxLength) => {
		return text.length > maxLength
			? text.substr(0, maxLength) + "..."
			: text;
	};

	return (
		<div
			style={{
				marginTop: "50px",

				padding: "10px",
				// width: "100%",
				height: "400px",
				position: "relative",
				overflowY: "scroll",
				// overflow: "hidden",
			}}
		>
			<div
			// style={{
			// 	position: "relative",
			// 	display: "block",
			// 	height: "auto",
			// 	// overflow: "auto",
			// 	overflowY: "auto",
			// }}
			>
				<table
					style={{
						position: "relative",
						display: "block",
						overflow: "auto",
					}}
				>
					<thead>
						<tr
							style={{
								fontSize: "14px",
								width: "auto",
								// padding: "10px",
								alignItems: "center",
								textAlign: "center",
								verticalAlign: "middle",
							}}
						>
							{displayColumns.map((column) => (
								<th
									key={column}
									style={{
										background: "rgb(71, 71, 241)",
										color: "white",
										fontWeight: "700",
									}}
								>
									{columnsMapping[column]}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								style={{
									// padding: "5px",
									alignItems: "center",
									textAlign: "center",
									verticalAlign: "middle",
								}}
							>
								{displayColumns.map((column) => (
									<td
										key={column}
										style={{
											// padding: "10px 10px",
											alignItems: "center",
											justifyContent: "center",
											textAlign: "center",
											verticalAlign: "middle",
											fontSize: "12px",
											whiteSpace: "nowrap",
											padding: "10px",

											// fontSize: "16px",
											fontWeight: "500",
											backgroundColor:
												rowIndex % 2 === 0
													? "white"
													: "#d1d4fb",
										}}
									>
										{" "}
										{column.includes("link") &&
										typeof row[column] === "string" &&
										row[column].startsWith("http") ? (
											<a
												href={row[column]}
												target="_blank"
												rel="noopener noreferrer"
											>
												{truncate(row[column], 30)}
											</a>
										) : (
											row[column]
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableData;
