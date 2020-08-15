import React from 'react';
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

class Explore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			category: props.info
		}
	}
	
	render() {
		return (
			<section className="category_card">
				<div className="titles">
					<img src={this.state.category.image} alt="" />
					<h2>{this.state.category.name}</h2>
				</div>
				<p>
					A "Magical Village" is a place with symbolism, legends, history, important
					events, festivals, traditions, great food, and fun interactive shopping.
				</p>
				<Link to={`/categories/${this.state.category.name}`}>
					See places
				</Link>

		</section>
		);
	}
}

export default Explore;