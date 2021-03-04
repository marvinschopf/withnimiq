import * as React from "preact";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";

export default class NotFoundPage extends React.Component {
	render() {
		return (
			<main>
				{/*@ts-ignore*/}
				<Helmet>
					<title>404</title>
				</Helmet>
				<Container>
					<h1>Error 404</h1>
				</Container>
			</main>
		);
	}
}
