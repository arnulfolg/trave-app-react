import  { useEffect, useRef, useState } from 'react';

import "./AuthDialog.scss";
		
function AuthDialog ({openState, closeState, setHeader}: any) {
		const dialog = useRef<HTMLDialogElement>()

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
		
		useEffect(() => {
			openState ? showModal() : closeModal();
		}, [openState])
		
		const showModal = () => {
			dialog?.current?.close();
			dialog?.current?.showModal();
			document.body.style.overflow = "hidden"
		}

		const closeModal = () => {
			dialog?.current?.close();
			closeState(false);
			document.body.style.overflow = "auto"
		}

		const logIn = (formData: any) => {
			const email = formData.get("email");
			// const password = formData.get("password");
			closeModal();
			setHeader({email: email, loggedInState: true })
		}

		return (
			<dialog id='authDialog' className="auth-dialog" ref={dialog} open={openState}>
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
							required
							onChange={handleChange}
						/>
						<label htmlFor="user-pass">Password:</label>
						<input
							id="user-pass"
							type="password"
							placeholder="Password"
							name="password"
							required
							onChange={handleChange}
						/>
					</section>
					<section className="dialog_actions">
						<button onClick={closeModal} formMethod="dialog">Cancel</button>
						<button className="cta" type="submit">
							Confirm
						</button>
					</section>
				</form>
			</dialog>
		);
}

export default AuthDialog;