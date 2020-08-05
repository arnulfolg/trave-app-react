import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './../../logo.svg'
import "./Header.scss";

class AppHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn : false
		}
	}

	render() {
		const changeLogStatus = () => {
			this.setState((prevState) => ({
				loggedIn : !prevState.loggedIn
			}))
		}

		return (
			<header className="travel_header">
				<section>
					<Link to="/">
						<img src={logo} alt="Travel App" />
					</Link>
				</section>

				<nav className="header_navigation">
					<ul>
						<li>
							<Link to="/explore" className="header_link">Explore</Link>
						</li>
						<li>
							<Link to="/categories" className="header_link">Categories</Link>
						</li>
					</ul>
				</nav>
				<section className="logInModule">
					<p>example@example.com</p>
					{!this.state.loggedIn && 
						<a className="header_link" onClick={changeLogStatus}>
							<FontAwesomeIcon icon={faSignInAlt} />
							Sign In
						</a>
					}
					{this.state.loggedIn && 
						<a className="header_link" onClick={changeLogStatus}>
							<FontAwesomeIcon icon={faSignOutAlt} />
							Sign Out
						</a>
					}
				</section>
			</header>
		);
	}
}

export default AppHeader;