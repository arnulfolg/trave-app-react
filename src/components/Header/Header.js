import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SignIn, SignOut } from "./../../redux/actions/loggedIn.action";
import { openSignInDialog } from "./../../redux/actions/signInDialog.action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './../../logo.svg'
import "./Header.scss";

class AppHeader extends React.Component {

	render() {
		const LogIn = () => {
			this.props.openSignInDialog()
		}

		const LogOut = () => {
			this.props.SignOut(false)
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
					{!this.props.loggedInState && 
						<button className="header_link" onClick={LogIn}>
							<FontAwesomeIcon icon={faSignInAlt} />
							Sign In
						</button>
					}
					{this.props.loggedInState && 
						<React.Fragment>
							<p>example@example.com</p>
							<button className="header_link" onClick={LogOut}>
								<FontAwesomeIcon icon={faSignOutAlt} />
								Sign Out
							</button>
						</React.Fragment>
					}
				</section>
			</header>
		);
	}
}

const mapStateToProps = state => {
  return { loggedInState: state.loggedIn };
};

export default connect(mapStateToProps, {SignIn, SignOut, openSignInDialog})(AppHeader);