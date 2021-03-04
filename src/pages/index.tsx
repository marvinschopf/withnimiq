import * as React from "preact";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";

export default class IndexPage extends React.Component {
	render() {
		return (
			<main>
				{/*@ts-ignore*/}
				<Helmet>
					<title>Home</title>
				</Helmet>
				<Container>
					<h1>Home</h1>
				</Container>
			</main>
		);
	}
}
