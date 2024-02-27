import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '/TravelAppLogo.svg'
import "./Header.scss";
import AuthDialog from "../AuthDialog/AuthDialog";
import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';

interface IAppHeader {
	email: string
	loggedInState: boolean
}

function AppHeader() {
	const [openDialog, setopenDialog] = useState<boolean>(false);
	const [loggedInState, setloggedInState] = useState<boolean>(false);
	const [email, setemail] = useState<string>('');

	const setHeaderLoggedInState = (props: IAppHeader) => {
		setloggedInState(props.loggedInState);
		setemail(props.email);
	}

	const setHeaderLoggedOutState = () => {
		setloggedInState(false);
		setemail('');
	}

  return (
    <>
		<header className="travel_header">
			<section >
				<Link to="/" className="homeLogo">
					<img src={logo} alt="" />
					<h1>Travel Life</h1>
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
				{!loggedInState && 
					<button className="header_link" onClick={() => setopenDialog(true)} >
						<FontAwesomeIcon icon={faSignInAlt} />
						Sign In
					</button>
				}
				{loggedInState && 
					<>
						<p>{email}</p>
						<button className="header_link" onClick={() => setHeaderLoggedOutState()} >
							<FontAwesomeIcon icon={faSignOutAlt} />
							Sign Out
						</button>
					</>
				}
			</section>
			{createPortal(<AuthDialog openState={openDialog} closeState={setopenDialog} setHeader={setHeaderLoggedInState}/>, document.body)}
		</header>
    </>
  )
}

export default AppHeader
