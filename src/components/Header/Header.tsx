import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './../../logo.svg'
import "./Header.scss";

interface IAppHeader {
	email: string
	loggedInState: boolean
}

function AppHeader({email, loggedInState}: IAppHeader) {

  return (
    <>
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
				{!loggedInState && 
					<button className="header_link" >
						<FontAwesomeIcon icon={faSignInAlt} />
						Sign In
					</button>
				}
				{loggedInState && 
					<>
						<p>{email}</p>
						<button className="header_link" >
							<FontAwesomeIcon icon={faSignOutAlt} />
							Sign Out
						</button>
					</>
				}
			</section>
		</header>
    </>
  )
}

export default AppHeader
