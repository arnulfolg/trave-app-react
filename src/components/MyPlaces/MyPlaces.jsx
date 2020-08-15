import React from 'react';
import { connect } from "react-redux";
import "./MyPlaces.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";

class MyPlaces extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			places : [],
			userData: {}
		}
	}

	async getMyPlaces() {
		const getMyPlaces_url = 'http://localhost:5001/travel-app-9b55f/us-central1/getMyPlaces?uid=' + this.props.userData.uid;
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}
		
		let response = await fetch(getMyPlaces_url, requestOptions)
		this.setState({places: await response.json()})
	}

	componentDidMount() {
		setTimeout(() => this.getMyPlaces() , 1000);
	}

	render() {
		return (
			<main className="main myplaces">
				<h2>My places</h2>
				<p>
					A list of all the places you have visited and the places you want to
					visit.
				</p>
				<section className="myplaces_list">
					{this.state.places.map((place, index) => 
						<PlaceCard key={index} place={place} />
					)}
				</section>
			</main>
		);
	}
}

const mapStateToProps = state => {
  return { 
		userData: state.updateUserData
	};
};

export default connect(mapStateToProps, null)(MyPlaces);;