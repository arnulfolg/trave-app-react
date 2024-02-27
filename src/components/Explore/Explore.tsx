import "./Explore.scss";
import PlaceCard from "./../PlaceCard/PlaceCard";
import { useEffect, useState } from "react";
import { supabase } from '../../../utils/supabase'

interface IPlaceCard {
	id: string
	place: string
	image: string
	categories: string[]
}

const localdata = [
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

	const [places, setplaces] = useState<IPlaceCard[]>([])

	  useEffect(() => {
		async function getAllPlaces() {	
			let { data: Places } = await supabase.rpc('selectallplaces2')
			if (Places.length > 1) {
				setplaces(Places)
			}
		}

    getAllPlaces()
  }, [])
  
  return (
    <>
		<main className="main explore">
			<section className="explore_titles">
				<h2>Explore places</h2>
			</section>
			<section className="explore_list">
				{places.map((place) => 
					<PlaceCard key={place.id} id={place.id} place={place.place} image={place.image} categories={place.categories}  />
				)}
			</section>
		</main>
    </>
  )
}

export default Explore
