import React from 'react';
import "./Categories.scss";
import CategoryCard from "./../CategoryCard/CategoryCard";

class Explore extends React.Component {
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
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</section>
		</main>
		);
	}
}

export default Explore;