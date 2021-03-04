import * as React from "preact";
import {
	FunctionalComponent,
	createElement as h,
	render,
	Component,
} from "preact";
import { useState } from "preact/hooks";
import { navigate } from "gatsby";
import { useMediaPredicate } from "preact-media-hook";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

type BaseLayoutProps = {};

const BaseLayout: FunctionalComponent<BaseLayoutProps> = function (props) {
	const systemThemeDark: boolean = useMediaPredicate(
		"(prefers-color-scheme: dark)"
	);

	return (
		<React.Fragment>
			<Navbar bg={systemThemeDark ? "dark" : "light"}>
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
