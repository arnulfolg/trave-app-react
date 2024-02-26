import "./Category.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";
import { useState } from "react";

interface ICategory {
	name: string
	image: string
}

interface IPlaceCard {
	place: string,
	image: string,
	categories: string[]
}

const data = [
	{
		place: 'San Francisco',
		image: 'https://i.stack.imgur.com/Of2w5.jpg',
		categories: ['usa', 'golden gate'],
	},
	{
		place: 'New York',
		image: 'https://i.stack.imgur.com/Of2w5.jpg',
		categories: ['usa', 'liberty statue'],
	}
		];

function Category({name, image}: ICategory) {

	const [places, setplaces] = useState<IPlaceCard[]>(data)

  return (
    <>
		<main className="main category">
			<section className="category_titles">
				<img src={image} alt="" />
				<h2>{name}</h2>
				<p>
					Category define what kind of place you are visiting. It stablishes a
					relationship between places so you can plan accordingly.
				</p>
			</section>
			<section className="category_list">
				{places.map((place, index) => 
					<PlaceCard key={index} image={place.image} categories={place.categories} place={place.place} />
				)}
			</section>
		</main>
    </>
  )
}

export default Category
