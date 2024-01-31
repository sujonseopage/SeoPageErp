import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import ProjectManagerInfo from "./ProjectManagerInfo";

const ColumnsInfo = () => {
	const location = useLocation();
	const receivedData = location.state;

	console.log("---->data:--->", location);

	const projectData = [
		{
			name: "New Website Development",
			client: "rogerbuild1",
			projectValue: "$1,200",
			dealClosedBy: "Shah Waliullah Shanto",
			estimatedHours: "12 Hours",
			totalHoursLogged: "11 Hours",
			messagePageLink:
				"https://www.freelancer.com/projects/website-design/finance-website-36280726",
			profileLink:
				"https://www.freelancer.com/projects/website-design/finance-website-36280726",
			members: "",
			startDate: "4-Apr-2023",
			deadline: "26-Apr-2023",
			deliverablesSignedByClient: "Yes",
			deliverablesSignedInternally: "Not Applicable",
			projectProgressPaymentWise: "65%",
			projectProgressTaskCompletionWise: "67%",
			status: "In Progress",
			projectCompletionTime: "12 Days 15 Hours",
		},

		{
			name: "Another Project",
			client: "Another Client",
			projectValue: "$2,000",
			dealClosedBy: "Another Deal Closer",
			estimatedHours: "20 Hours",
			totalHoursLogged: "18 Hours",
			messagePageLink:
				"https://www.freelancer.com/projects/another-project",
			profileLink: "https://www.freelancer.com/projects/another-project",
			members: "",
			startDate: "1-Jan-2023",
			deadline: "15-Feb-2023",
			deliverablesSignedByClient: "No",
			deliverablesSignedInternally: "N/A",
			projectProgressPaymentWise: "50%",
			projectProgressTaskCompletionWise: "60%",
			status: "Completed",
			projectCompletionTime: "20 Days",
		},
	];

	const columns = [
		"Number of Projects",
		"Total Project Value",
		"Total Released Amount",
		"No. of Fully Completed Project",
		"Project Completion Rate",
		"Milestone Completion Rate",
		"Average Project Completion Time",
		"No of Upsale/Cross Sales",
		"Value of Upsale/Crosssale",
		"Canceled Projects",
		"Delayed Projects",
		"Delayed Completed",
	];

	return (
		<div className="container mt-4">
			<ProjectManagerInfo />
			<Table striped bordered style={{ marginTop: "150px" }}>
				<thead>
					<tr
						style={{
							fontSize: "15px",
							padding: "10px",
							margin: "0",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<th>SL. No.</th>
						<th>Project Name</th>
						<th>Client</th>
						<th>Project Value</th>
						<th>Deal Closed By</th>
						<th>Estimated Hours</th>
						<th>Total Hours Logged</th>
						<th>Freelancer.com Message Page Link</th>
						<th>Freelancer.com Profile Link</th>
						<th>Members</th>
						<th>Start Date</th>
						<th>Deadline</th>
						<th>Deliverables Signed By the Client</th>
						<th>Deliverables Signed Internally</th>
						<th>Project Progress (Payment Wise)</th>
						<th>Project Progress (Task Completion Wise)</th>
						<th>Status</th>
						<th>Project Completion Time</th>
					</tr>
				</thead>
				<tbody>
					{projectData.map((project, index) => (
						<tr
							key={index}
							style={{ fontSize: "13px", fontWeight: "400" }}
						>
							<td>{index + 1}</td>
							<td>{project.name}</td>
							<td>{project.client}</td>
							<td>{project.projectValue}</td>
							<td>{project.dealClosedBy}</td>
							<td>{project.estimatedHours}</td>
							<td>{project.totalHoursLogged}</td>
							<td>
								<a
									href={project.messagePageLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									Message Page Link
								</a>
							</td>
							<td>
								<a
									href={project.profileLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									Profile Link
								</a>
							</td>
							<td>{project.members}</td>
							<td>{project.startDate}</td>
							<td>{project.deadline}</td>
							<td>{project.deliverablesSignedByClient}</td>
							<td>{project.deliverablesSignedInternally}</td>
							<td>{project.projectProgressPaymentWise}</td>
							<td>{project.projectProgressTaskCompletionWise}</td>
							<td>{project.status}</td>
							<td>{project.projectCompletionTime}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ColumnsInfo;
