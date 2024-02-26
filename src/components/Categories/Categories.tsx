import "./Categories.scss";
import CategoryCard from "./../CategoryCard/CategoryCard";
import { useState } from "react";

interface ICategoryCard {
	name: string
	image: string
}

const data = [
	{
		name: 'USA',
		image: 'https://flagpedia.net/data/flags/w1160/us.webp',
	},
	{
		name: 'Mexico',
		image: 'https://flagpedia.net/data/flags/w1160/mx.webp',
	},
	{
		name: 'France',
		image: 'https://flagpedia.net/data/flags/w1160/fr.webp',
	}
];

function Categories() {

	const [categories, setcategories] = useState<ICategoryCard[]>(data)

  return (
    <>
		<main className="main categories">
			<section className="categories_titles">
				<h2>Categories</h2>
				<p>
					Categories define what kind of place you are visiting. It stablishes a
					relationship between places so you can plan accordingly.
				</p>
			</section>
			<section className="categories_list">
				{categories.map((category, index) => 
					<CategoryCard key={index} name={category.name} image={category.image} />
				)}
			</section>
		</main>
    </>
  )
}

export default Categories
