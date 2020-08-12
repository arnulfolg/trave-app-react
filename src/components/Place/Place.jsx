import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "./Place.scss";
import "./Banner.scss"

class Place extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			placeSelected: props.match.params.place,
			place : {}
		}
	}

	async componentDidMount() {
		const getPlace_url = 'http://localhost:5001/travel-app-9b55f/us-central1/getPlace?place=' + this.state.placeSelected;
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}
		let response = await fetch(getPlace_url, requestOptions)
		this.setState({place: await response.json()})
	}
	
	render() {
		return (
			<React.Fragment>
				<section
					className="banner"
					style={{backgroundImage: `url(${this.state.place.image})`}}
				></section>
				<article className="main place">
					<section className="place_content">
						<h2>{this.state.place.place}</h2>
						<p className="tags">
							{this.state.place.categories?.map((category, index) => 
								<span className="tag" key={index}>
									{category}
								</span>
							)}
						</p>
						<p>{this.state.place.description}</p>
					</section>
					<aside className="place_actions">
						<form>
							<fieldset>
								<section className="review">
									<button
										className="review_thumbs"
										type="button"
									>
										<FontAwesomeIcon className="fas" icon={faThumbsUp} />
										<span>4.2K</span>
									</button>
									<button
										className="review_thumbs"
										type="button"
									>
										<FontAwesomeIcon icon={faThumbsDown} />
										<span>124</span>
									</button>
								</section>
								<section className="checkbox">
									<input
										type="checkbox"
										id="wantToVisit"
										name="wantToVisit"
									/>
									<label htmlFor="wantToVisit">Want to visit</label>
								</section>
								<section className="checkbox">
									<input
										type="checkbox"
										id="hadVisited"
										name="hadVisited"
									/>
									<label htmlFor="hadVisited">Had visited</label>
								</section>
							</fieldset>
						</form>
					</aside>
				</article>
			</React.Fragment>);
	}
}

export default Place;