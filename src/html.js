import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
					integrity="sha256-T/zFmO5s/0aSwc6ics2KLxlfbewyRz6UNw1s3Ppf5gE="
					crossorigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@openfonts/muli_latin@1.0.1/index.css"
					integrity="sha256-Yvf4n54oY6MSIMy8bZL5tJQQkKtRXLfpuG3ooqlSKxM="
					crossorigin="anonymous"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div
					style={{
						fontFamily: `"Muli", "Arial", sans-serif`,
					}}
				>
					<div
						key={`body`}
						id="___gatsby"
						dangerouslySetInnerHTML={{ __html: props.body }}
					/>
				</div>
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
