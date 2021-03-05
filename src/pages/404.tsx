import * as React from "preact";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import BaseLayout from "../BaseLayout";

export default class NotFoundPage extends React.Component {
	render() {
		return (
			<BaseLayout>
				{/*@ts-ignore*/}
				<Helmet>
					<title>404</title>
				</Helmet>
				<h1>Error 404</h1>
			</BaseLayout>
		);
	}
}
