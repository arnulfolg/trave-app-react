import { Link } from "react-router-dom";
import './Home.scss'
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

function Home() {

	const [places, setplaces] = useState<IPlaceCard[]>(data)

	// useEffect(() => {
		

	// 	setplaces(data);

	// }, [])
	

  return (
    <>
		<main className="main dashboard">
			<section className="dashboard_explore">
				<section className="card">
					<h3>My Places</h3>
					<p>Look at the places you have been and the places you want to meet</p>
					<Link to="/myplaces">See more</Link>

				</section>
				<section className="card">
					<h3>Categories</h3>
					<p>
						Browse our places categories, perfect if you want to make a long trip
					</p>
					<Link to="/categories">See more</Link>
				</section>
			</section>
			<section className="dashboard_featured">
				<h2>Featured Places</h2>
				<section className="places">
					{places.map((place, index) => 
						<PlaceCard key={index} place={place.place} image={place.image} categories={place.categories}  />
					)}
				</section>
			</section>
		</main>
    </>
  )
}

export default Home