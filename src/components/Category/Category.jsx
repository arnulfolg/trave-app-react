import React from 'react';
import "./Category.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";

class Category extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categorySelected: props.match.params.category,
			category: {},
			places: []
		}
	}

	async componentDidMount() {
		const getTagPlaces_url = `${process.env.REACT_APP_API_URL}getTagPlaces?tag=${this.state.categorySelected}`;
		const getTag_url = `${process.env.REACT_APP_API_URL}getTag?tag=${this.state.categorySelected}`;

		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		let placesResponse = await fetch(getTagPlaces_url, requestOptions)
		this.setState({places: await placesResponse.json()})

		let tagResponse = await fetch(getTag_url, requestOptions)
		this.setState({category: await tagResponse.json()})
	}
	
	render() {
		return (
			<main className="main category">
				<section className="category_titles">
					<img src={this.state.category.image} alt="" />
					<h2>{this.state.category.name}</h2>
					<p>
						Category define what kind of place you are visiting. It stablishes a
						relationship between places so you can plan accordingly.
					</p>
				</section>
				<section className="category_list">
					{this.state.places.map((place, index) => 
						<PlaceCard key={index} place={place} />
					)}
				</section>
			</main>
		);
	}
}

export default Category;