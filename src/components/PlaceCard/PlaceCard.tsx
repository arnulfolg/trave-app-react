import { Link } from "react-router-dom";
import './PlaceCard.scss'

interface IPlaceCard {
	id: string
	place: string
	image: string
	categories?: string[]
}

function PlaceCard({id, place, image, categories}: IPlaceCard) {

  return (
    <>
		<section className="place_card">
			<picture className="card_image">
				<img src={image} alt="" />
			</picture>
			<section className="card_content">
				<h3>{ place }</h3>
				<p className="tags">
					{categories && categories.map((category, index) => 
						<span className="tag" key={index}>
							{category}
						</span>
					)}
				</p>
				<Link to={`/place/${id}`}>See place</Link>
			</section>
		</section>
    </>
  )
}

export default PlaceCard
