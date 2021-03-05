import * as React from "preact";
import { navigate } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

type BaseLayoutProps = {};

export default class BaseLayout extends React.Component<
	{},
	{ theme: "dark" | "light" }
> {
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

	render() {
		return (
			<React.Fragment>
				<Navbar
					bg={this.state.theme ? this.state.theme : null}
					variant={this.state.theme ? this.state.theme : null}
				>
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
				<Container
					className={
						this.state.theme === "dark"
							? "bg-dark text-light"
							: "bg-light text-dark"
					}
				>
					{this.props.children}
				</Container>
			</React.Fragment>
		);
	}
}
