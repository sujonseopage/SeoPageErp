import React from "react";
import TaskData from "./components/TaskData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColumnsInfo from "./components/ColumnsInfo";

const App = () => {
	return (
		<div
			className="mt-6"
			style={{
				background: "white ",
				overflowX: "scroll",
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TaskData />} />
					<Route path="/columnInfo" element={<ColumnsInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
