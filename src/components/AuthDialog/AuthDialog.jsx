import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import "./AuthDialog.scss";
import { connect } from "react-redux";
import { SignIn } from "../../redux/actions/loggedIn.action";
import { closeSignInDialog } from "../../redux/actions/signInDialog.action";
import { updateUserData } from "../../redux/actions/updateUserData.action";
		
function AuthDialog (props) {

		const firebase = useFirebaseApp();
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				props.updateUserData({email: user.email, uid: user.uid})
				props.SignIn(true)
			} else {
				props.updateUserData({email: ""})
			}
		})

		const [user, setUser] = useState({
			email: '',
			password: ''
		});

		const handleChange = e => {
			setUser({
				...user,
				[e.target.name]: e.target.value,
			})
		};

		const closeModal = (e) => {
			e.preventDefault()
			props.closeSignInDialog()
		}

		const logIn = (e) => {
			e.preventDefault()
			firebase.auth().signInWithEmailAndPassword(user.email, user.password)
				.then(result => {
					if (!result.user.emailVerified) { 
						props.updateUserData({email: result.user.email})
						props.closeSignInDialog()
						props.SignIn(true)
					}
				})
		}

		return (
			<section className="auth-dialog">
				<form onSubmit={logIn}>
					<section className="dialog_header">
						<h2>Sign In</h2>
					</section>
					<section className="dialog_content">
						<label htmlFor="user-name">Username:</label>
						<input
							id="user-name"
							type="string"
							placeholder="Email"
							name="email"
							onChange={handleChange}
						/>
						<label htmlFor="user-pass">Password:</label>
						<input
							id="user-pass"
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
						/>
					</section>
					<section className="dialog_actions">
						<button onClick={closeModal}>Cancel</button>
						<button className="cta" type="submit">
							Confirm
						</button>
					</section>
				</form>
			</section>
		);
	
}

export default connect(null, {SignIn, closeSignInDialog, updateUserData})(AuthDialog);