import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './../logo.svg'
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
					<a><img src={logo} alt="Travel App" /></a>
				</section>

				<nav className="header_navigation">
					<ul>
						<li>
							<a className="header_link">Explore</a>
						</li>
						<li>
							<a className="header_link">Categories</a>
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