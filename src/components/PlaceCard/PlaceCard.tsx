import { Link } from "react-router-dom";
import './PlaceCard.scss'

interface IPlaceCard {
	place: string,
	image: string,
	categories: string[]
}

function PlaceCard({place, image, categories}: IPlaceCard) {

  return (
    <>
		<section className="place_card">
			<picture className="card_image">
				<img src={image} alt="" />
			</picture>
			<section className="card_content">
				<h3>{ place }</h3>
				<p className="tags">
					{categories.map((category, index) => 
						<span className="tag" key={index}>
							{category}
						</span>
					)}
				</p>
				<Link to={`/place/${place}`}>See place</Link>
			</section>
		</section>
    </>
  )
}

export default PlaceCard
