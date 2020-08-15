import React from 'react';
import "./Explore.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";

class Explore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			places : []
		}
	}

	async componentDidMount() {
		const getPlaces_url = `${process.env.REACT_APP_API_URL}getPlaces`;
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}
		let response = await fetch(getPlaces_url, requestOptions)
		this.setState({places: await response.json()})
	}

	render() {
		return (
			<main className="main explore">
				<section className="explore_titles">
					<h2>Explore places</h2>
				</section>
				<section className="explore_list">
					{this.state.places.map((place, index) => 
						<PlaceCard key={index} place={place} />
					)}
				</section>
			</main>
		);
	}
}

export default Explore;