import "../style/taskData.css";

/* eslint-disable react/prop-types */
const ProjectManagerInfo = ({ mangerData, columnName, infoText }) => {
	const lines = infoText.split("|").map((line) => line.trim());

	return (
		<div
			className="container mt-4 mb-5 project-manager-info1"
			style={{
				fontSize: "25px",
				textAlign: "center",
				verticalAlign: "middle",
				position: "relative",
			}}
		>
			{/* {lines.map((line, index) => (
				<div key={index}>{line}</div>
			))} */}
			{lines.map((line, index) => {
				const [title, value] = line
					.split(":")
					.map((item) => item.trim());
				return (
					<div
						key={index}
						className="manager-info-line"
						style={{ borderBottom: "1px solid #ece8e8" }}
					>
						<h3 className="manager-info-title">{title}:</h3>
						<h5 className="manager-info-value">{value}</h5>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectManagerInfo;
