import "./MyPlaces.scss";
import PlaceCard from "../PlaceCard/PlaceCard";
import { useState } from "react";

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

function MyPlaces() {

	const [places, setplaces] = useState<IPlaceCard[]>(data)

  return (
    <>
		<main className="main myplaces">
			<h2>My places</h2>
			<p>
				A list of all the places you have visited and the places you want to
				visit.
			</p>
			<section className="explore_list">
				{places.map((place, index) => 
					<PlaceCard key={index} place={place.place} image={place.image} categories={place.categories}  />
				)}
			</section>
		</main>
    </>
  )
}

export default MyPlaces
