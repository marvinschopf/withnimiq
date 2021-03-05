import * as React from "react";
//import { useState } from "preact/hooks";
import { navigate } from "gatsby";
import { useMediaPredicate } from "react-media-hook";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

type BaseLayoutProps = {};

const BaseLayout: React.FunctionComponent<BaseLayoutProps> = function (props) {
	const [theme, setTheme] = React.useState("light");

	let systemThemeDark: boolean = undefined;

	if (typeof window !== "undefined") {
		systemThemeDark = useMediaPredicate("(prefers-color-scheme: dark)");
		setTheme(
			useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light"
		);
		console.log(`Window not undefined: ${theme}`);
	}

	console.log(theme);

	return (
		<React.Fragment>
			<Navbar bg={theme}>
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
			{props.children}
		</React.Fragment>
	);
};

export default BaseLayout;
