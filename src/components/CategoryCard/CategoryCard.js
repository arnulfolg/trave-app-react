import React from 'react';
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

class Explore extends React.Component {
	render() {
		return (
			<section className="category_card">
				<div className="titles">
					<img src="https://image.freepik.com/vector-gratis/playa-logo-vector_20448-287.jpg" alt="" />
					<h2>Playa</h2>
				</div>
				<p>
					A "Magical Village" is a place with symbolism, legends, history, important
					events, festivals, traditions, great food, and fun interactive shopping.
				</p>
				<Link to="/categories/playa">
					See places
				</Link>

		</section>
		);
	}
}

export default Explore;