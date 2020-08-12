import React from 'react';
import "./Categories.scss";
import CategoryCard from "./../CategoryCard/CategoryCard";

class Explore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories : []
		}
	}

	async componentDidMount() {
		const getPlaces_url = 'http://localhost:5001/travel-app-9b55f/us-central1/getTags';
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}
		let response = await fetch(getPlaces_url, requestOptions)
		this.setState({categories: await response.json()})
	}
	
	render() {
		return (
		<main className="main categories">
			<section className="categories_titles">
				<h2>Categories</h2>
				<p>
					Categories define what kind of place you are visiting. It stablishes a
					relationship between places so you can plan accordingly.
				</p>
			</section>
			<section className="categories_list">
				{this.state.categories.map((category, index) => 
					<CategoryCard key={index} info={category} />
				)}
			</section>
		</main>
		);
	}
}

export default Explore;