import * as React from "react";
import { Link } from "gatsby";

export default class NotFoundPage extends React.Component {
	render() {
		return (
			<main>
				<title>Not found</title>
				<h1>Page not found</h1>
				<Link to="/">Home</Link>
			</main>
		);
	}
}
