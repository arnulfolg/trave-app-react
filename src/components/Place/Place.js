import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "./Place.scss";

class Place extends React.Component {
	render() {
		return (
			<article className="main place">
				<section className="place_content">
					<h2>San Miguel de Allende</h2>
					<p className="tags">
						<span className="tag">
							pueblo magico
						</span>
					</p>
					<p>High in the cool hills, this colonial gem of cobblestone streets and picturesque churches inspires artists with its color, character and light. Baroque, neoclassical and neogothic mix in the city's buildings, notably at the pink stone 18th-century church on the Plaza Principal. Founded in 1542, the city is a mix of Hispanic and Mesoamerican influences.</p>
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
		);
	}
}

export default Place;