import React from 'react'
import { Link } from "react-router-dom";
import './PlaceCard.scss'

class PlaceCard extends React.Component {
	render() {
		return (
			<section className="place_card">
				<picture className="card_image">
					<img src="https://sanmiguelwritersconference.org/wp-content/uploads/2011/07/8848894_orig-300x200.jpg" alt="" />
				</picture>
				<section className="card_content">
					<h3>San Miguel de Allende</h3>
					<p className="tags">
						<span className="tag">
							pueblo magico
						</span>
					</p>
					<Link to="/place/id">See place</Link>
				</section>
			</section>
		)
	}
}

export default PlaceCard
