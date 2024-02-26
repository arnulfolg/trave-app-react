import { Link } from "react-router-dom";
import "./CategoryCard.scss";

interface ICategoryCard {
	name: string
	image: string
}

function CategoryCard({name, image}: ICategoryCard) {

  return (
    <>
		<section className="category_card">
			<div className="titles">
				<img src={image} alt="" />
				<h2>{name}</h2>
			</div>
			<p>
				A "Magical Village" is a place with symbolism, legends, history, important
				events, festivals, traditions, great food, and fun interactive shopping.
			</p>
			<Link to={`/categories/${name}`}>
				See places
			</Link>
		</section>
    </>
  )
}

export default CategoryCard
