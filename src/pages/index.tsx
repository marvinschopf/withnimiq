import * as React from "preact";
import { Helmet } from "react-helmet";

export default class IndexPage extends React.Component {
	render() {
		return (
			<main>
				{/*@ts-ignore*/}
				<Helmet>
					<title>Home</title>
				</Helmet>
				<h1>Home</h1>
			</main>
		);
	}
}
