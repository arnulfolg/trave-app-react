import "./Explore.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";
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

function Explore() {

	const [places, setplaces] = useState<IPlaceCard[]>(data)

  return (
    <>
		<main className="main explore">
			<section className="explore_titles">
				<h2>Explore places</h2>
			</section>
			<section className="explore_list">
				{places.map((place, index) => 
					<PlaceCard key={index} place={place.place} image={place.image} categories={place.categories}  />
				)}
			</section>
		</main>
    </>
  )
}

export default Explore
