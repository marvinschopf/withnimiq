import * as React from "preact";
import { navigate } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class BaseLayout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar>
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
