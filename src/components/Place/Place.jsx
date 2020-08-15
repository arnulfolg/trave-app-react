import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "./Place.scss";
import "./Banner.scss"

class Place extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			placeSelected: props.match.params.place,
			place : {},
			userData: {},
			docid: "",
			likeStatus: -1,
			wantToVisit: false,
			hadVisited: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.toggleDislike = this.toggleDislike.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.checked});
	};

	saveUserData() {
		let myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		let body = JSON.stringify({
			docid: this.state.docid || null,
			uid: this.props.userData.uid,
			pid: this.state.place.id,
			likeStatus: this.state.likeStatus,
			wantToVisit: this.state.wantToVisit,
			hadVisited: this.state.hadVisited
		})

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: body,
			redirect: "follow"
		}

		const saveUserPlace_url = `${process.env.REACT_APP_API_URL}saveUserPlace`;

		fetch(saveUserPlace_url, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error))
	}

	toggleLike() {
		if (this.state.likeStatus === 1) {
			this.setState({likeStatus: -1});
		} else {
			this.setState({likeStatus: 1});
		}

		setTimeout(() => this.saveUserData() , 1000);
	}

	toggleDislike() {
		if (this.state.likeStatus === 0) {
			this.setState({likeStatus: -1});
		} else {
			this.setState({likeStatus: 0});
		}

		setTimeout(() => this.saveUserData() , 1000);
	}

	async setDocID() {
      if(this.props.userData.uid.length === 0) {
			console.log("log out")
		}

		const getPlace_url = `${process.env.REACT_APP_API_URL}getUserPlace?uid=${this.props.userData.uid}&pid=${this.state.place.id}`;
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		let response = await fetch(getPlace_url, requestOptions)
		let res = await response.json()
		this.setState({
			userData: res
			})
		this.setState({
			likeStatus: res.likeStatus,
			wantToVisit: res.wantToVisit,
			hadVisited: res.hadVisited,
			docid: res.docid
			})
 	}

	async componentDidMount() {
		const getPlace_url = `${process.env.REACT_APP_API_URL}getPlace?place=${this.state.placeSelected}`;
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		}
		let response = await fetch(getPlace_url, requestOptions)
		this.setState({place: await response.json()})

		setTimeout(() => this.setDocID() , 1000);
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
										onClick={this.toggleLike}
									>
										<FontAwesomeIcon className={this.state.likeStatus === 1 ? "fas" : "far"} icon={faThumbsUp} />
										<span>4.2K</span>
									</button>
									<button
										className="review_thumbs"
										type="button"
										onClick={this.toggleDislike}

									>
										<FontAwesomeIcon className={this.state.likeStatus === 0 ? "fas" : "far"} icon={faThumbsDown} />
										<span>124</span>
									</button>
								</section>
								<section className="checkbox">
									<input
										type="checkbox"
										id="wantToVisit"
										name="wantToVisit"
										checked={this.state.wantToVisit}
										onChange={this.handleChange} 
									/>
									<label htmlFor="wantToVisit">Want to visit</label>
								</section>
								<section className="checkbox">
									<input
										type="checkbox"
										id="hadVisited"
										name="hadVisited"
										checked={this.state.hadVisited}
										onChange={this.handleChange} 
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

const mapStateToProps = state => {
  return { 
		userData: state.updateUserData
	};
};

export default connect(mapStateToProps, null)(Place);