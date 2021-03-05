import * as React from "preact";
import { navigate } from "gatsby";
import { useMediaPredicate } from "react-media-hook";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

type BaseLayoutProps = {};

export default class BaseLayout extends React.Component<{}, { theme: string }> {
	constructor(props: {}) {
		super(props);
		this.state = {
			theme: null,
		};
	}

	componentDidMount() {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			this.setState({
				theme: "dark",
			});
		} else {
			this.setState({
				theme: "light",
			});
		}
	}

	componentDidUpdate() {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			this.setState({
				theme: "dark",
			});
		} else {
			this.setState({
				theme: "light",
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar bg={this.state.theme ? this.state.theme : null}>
					<Navbar.Brand
						onClick={() => {
							navigate("/");
						}}
					>
						WithNimiq
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link
								onClick={() => {
									navigate("/");
								}}
							>
								Home
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{this.props.children}
			</React.Fragment>
		);
	}
}
