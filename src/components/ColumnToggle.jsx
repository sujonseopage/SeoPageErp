import React from "react";

const ColumnToggle = ({ column, visibility, onToggle }) => {
	return (
		<button
			onClick={() => onToggle(column.id)}
			className="btn btn-link btn-sm"
		>
			{visibility ? "Hide" : "Show"}
		</button>
	);
};

export default ColumnToggle;
