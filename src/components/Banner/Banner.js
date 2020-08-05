import React from 'react';
import { Link } from "react-router-dom";
import "./Banner.scss";

class Explore extends React.Component {
	render() {
		return (
			<section
				className="banner"
				style={{backgroundImage: 'url(https://sanmiguelwritersconference.org/wp-content/uploads/2011/07/8848894_orig-300x200.jpg)'}}
			></section>
		);
	}
}

export default Explore;