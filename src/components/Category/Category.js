import React from 'react';
import { Link } from "react-router-dom";
import "./Category.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";

class Category extends React.Component {
	render() {
		return (
			<main className="main category">
				<section className="category_titles">
					<img src="https://image.freepik.com/vector-gratis/playa-logo-vector_20448-287.jpg" alt="" />
					<h2>Playa</h2>
					<p>
						Category define what kind of place you are visiting. It stablishes a
						relationship between places so you can plan accordingly.
					</p>
				</section>
				<section className="category_list">
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
						{/* <app-place-card *ngFor="let place of categoryPlaces" [place]="place"></app-place-card> */}
				</section>
			</main>
		);
	}
}

export default Category;