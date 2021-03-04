import * as React from "preact";
import { Link } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class BaseLayout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar>
					<Link to="/">
						<Navbar.Brand>WithNimiq</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Link to="/">
								<Nav.Link>Home</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{this.props.children}
			</React.Fragment>
		);
	}
}
