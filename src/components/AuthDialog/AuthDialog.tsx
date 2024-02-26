import  { useState } from 'react';
import "./AuthDialog.scss";
		
function AuthDialog (props: any) {

		const [user, setUser] = useState({
			email: '',
			password: ''
		});

		const handleChange = (e: any) => {
			setUser({
				...user,
				[e.target.name]: e.target.value,
			})
		};

		const closeModal = (e: any) => {
			e.preventDefault()
			props.closeSignInDialog()
		}

		const logIn = (formData: any) => {
			console.log({formData})
		}

		return (
			<section className="auth-dialog">
				<form action={logIn}>
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

export default AuthDialog;