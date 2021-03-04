import * as React from "preact";
import { Helmet } from "react-helmet";

export default class NotFoundPage extends React.Component {
	render() {
		return (
			<main>
				{/*@ts-ignore*/}
				<Helmet>
					<title>404</title>
				</Helmet>
				<h1>Error 404</h1>
			</main>
		);
	}
}
