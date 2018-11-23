import React from "react";
import ReactDOM from "react-dom";

import Test from './test';

const Index = () => {
  return (
		<div>
			<h1>
				<Test />
				<Test />
				<Test />
				<Test />
			</h1>
		</div>
  	);
};

ReactDOM.render(<Index />, document.getElementById("root"));