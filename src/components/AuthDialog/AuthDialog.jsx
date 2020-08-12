import React from 'react';
import "./AuthDialog.scss";
import { connect } from "react-redux";
import { SignIn } from "../../redux/actions/loggedIn.action";
import { closeSignInDialog } from "../../redux/actions/signInDialog.action";

class AuthDialog extends React.Component {
	
	render() {
		const closeModal = (e) => {
			e.preventDefault()
			this.props.closeSignInDialog()
		}

		const logIn = (e) => {
			e.preventDefault()
			this.props.closeSignInDialog()
			this.props.SignIn(true)
		}

		// const logOut = () => {

		// }

		return (
			<section className="auth-dialog">
				<form>
					<section className="dialog_header">
						<h2>Sign In</h2>
					</section>
					<section className="dialog_content">
						<label htmlFor="user-name">Username:</label>
						<input
							id="user-name"
							type="string"
							placeholder="Email"
						/>
						<label htmlFor="user-pass">Password:</label>
						<input
							id="user-pass"
							type="password"
							placeholder="Password"
						/>
					</section>
					<section className="dialog_actions">
						<button onClick={closeModal}>Cancel</button>
						<button className="cta" onClick={logIn}>
							Confirm
						</button>
					</section>
				</form>
			</section>
		);
	}
}

export default connect(null, {SignIn, closeSignInDialog})(AuthDialog);