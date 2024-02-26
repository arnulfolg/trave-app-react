import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "./Place.scss";
import "./Banner.scss"
import { useState } from 'react';

interface IPlaceCard {
	place: string
	image: string
	description: string
	categories: string[]
}

const data = 
	{
		place: 'San Francisco',
		image: 'https://i.stack.imgur.com/Of2w5.jpg',
		description: 'Nice place to visit',
		categories: ['usa', 'golden gate'],
	};
	// constructor(props) {
	// 	state = {
	// 		placeSelected: props.match.params.place,
	// 		place : {},
	// 		userData: {},
	// 		docid: "",
	// 		likeStatus: -1,
	// 		wantToVisit: false,
	// 		hadVisited: false
	// 	}


function Place() {
	const [place, setplace] = useState<IPlaceCard>(data)
	const [wantToVisit, setwantToVisit] = useState<boolean>(false)
	const [hadVisited, sethadVisited] = useState<boolean>(false)
	const [likeStatus, setlikeStatus] = useState<number>(-1)

	const toggleLike = () => {
		if (likeStatus === 1) {
			setlikeStatus(-1);
		} else {
			setlikeStatus(1);
		}

	}

	const toggleDislike = () => {
		if (likeStatus === 0) {
			setlikeStatus(-1);
		} else {
			setlikeStatus(0);
		}

	}

	const handleChange = (event: any) =>{
		(event.target.name === 'wantToVisit')? setwantToVisit(event.target.checked) : '';
		(event.target.name === 'hadVisited')? sethadVisited(event.target.checked) : '';
	}

  return (
    <>
		<section
			className="banner"
			style={{backgroundImage: `url(${place.image})`}}
		></section>
		<article className="main place">
			<section className="place_content">
				<h2>{place.place}</h2>
				<p className="tags">
					{place.categories?.map((category, index) => 
						<span className="tag" key={index}>
							{category}
						</span>
					)}
				</p>
				<p>{place.description}</p>
			</section>
			<aside className="place_actions">
				<form>
					<fieldset>
						<section className="review">
							<button
								className="review_thumbs"
								type="button"
								onClick={toggleLike}
							>
								<FontAwesomeIcon className={likeStatus === 1 ? "fas" : "far"} icon={faThumbsUp} />
								<span>4.2K</span>
							</button>
							<button
								className="review_thumbs"
								type="button"
								onClick={toggleDislike}

							>
								<FontAwesomeIcon className={likeStatus === 0 ? "fas" : "far"} icon={faThumbsDown} />
								<span>124</span>
							</button>
						</section>
						<section className="checkbox">
							<input
								type="checkbox"
								id="wantToVisit"
								name="wantToVisit"
								checked={wantToVisit}
								onChange={handleChange} 
							/>
							<label htmlFor="wantToVisit">Want to visit</label>
						</section>
						<section className="checkbox">
							<input
								type="checkbox"
								id="hadVisited"
								name="hadVisited"
								checked={hadVisited}
								onChange={handleChange} 
							/>
							<label htmlFor="hadVisited">Had visited</label>
						</section>
					</fieldset>
				</form>
			</aside>
		</article>
    </>
  )
}

export default Place




