import React from 'react'
import { Link } from "react-router-dom";
import './PlaceCard.scss'

class PlaceCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			place: props.place
		}
	}

	render() {
		return (
			<section className="place_card">
				<picture className="card_image">
					<img src={this.state.place.image} alt="" />
				</picture>
				<section className="card_content">
					<h3>{ this.state.place.place }</h3>
					<p className="tags">
						{this.state.place.categories.map((category, index) => 
							<span className="tag" key={index}>
								{category}
							</span>
						)}
					</p>
					<Link to={`/place/${this.state.place.place}`}>See place</Link>
				</section>
			</section>
		)
	}
}

export default PlaceCard
