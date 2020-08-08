import React from 'react';
import "./MyPlaces.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";

class MyPlaces extends React.Component {
	render() {
		return (
			<main className="main myplaces">
				<h2>My places</h2>
				<p>
					A list of all the places you have visited and the places you want to
					visit.
				</p>
				<section className="myplaces_list">
					<PlaceCard place={{place: 'React', categories: []}} />
				</section>
			</main>
		);
	}
}

export default MyPlaces;