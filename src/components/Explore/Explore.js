import React from 'react';
import "./Explore.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";

class Explore extends React.Component {
	render() {
		return (
			<main className="main explore">
				<section className="explore_titles">
					<h2>Explore places</h2>
				</section>
				<section className="explore_list">
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
				</section>
			</main>
		);
	}
}

export default Explore;