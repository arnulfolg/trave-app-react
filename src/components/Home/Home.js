import React from 'react'
import { Link } from "react-router-dom";
import './Home.scss'
import PlaceCard from "../PlaceCard/PlaceCard";

class Home extends React.Component {
	render() {
		return (
			<main className="main dashboard">
				<section className="dashboard_explore">
					<section className="card">
						<h3>My Places</h3>
						<p>Look at the places you have been and the places you want to meet</p>
						<Link to="/myplaces">See more</Link>

					</section>
					<section className="card">
						<h3>Categories</h3>
						<p>
							Browse our places categories, perfect if you want to make a long trip
						</p>
						<Link to="/categories">See more</Link>
					</section>
				</section>
				<section className="dashboard_featured">
					<h2>Featured Places</h2>
					<section className="places">
						{[1,2,3].map((place, index) => 
							<PlaceCard key={index} />
						)}
					</section>
				</section>
			</main>
		)
	}
}

export default Home
