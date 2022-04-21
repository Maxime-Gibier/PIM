import React from "react";
import "./Gallery.css";

const Gallery = () => {
	return (
		<div className="gallery">
			<div className="vignette">
				<img className="one" src={img}></img>
				<span className="vignette_infos">
					<h3>titre</h3>
					<h5>prix</h5>
				</span>
			</div>
			<div className="vignette">
				<img className="one" src={img2}></img>
			</div>
			<div className="vignette two">image</div>
			<div className="vignette two">image</div>
			<div className="vignette three">image</div>
			<div className="vignette one">image</div>
			<div className="vignette two">image</div>
			<div className="vignette three">image</div>
			<div className="vignette two">image</div>
			<div className="vignette one">image</div>
			<div className="vignette three">image</div>
			<div className="vignette one">image</div>
			<div className="vignette three">image</div>
			<div className="vignette two">image</div>
			<div className="vignette one">image</div>
			<div className="vignette one">image</div>
			<div className="vignette three">image</div>
			<div className="vignette two">image</div>
			<div className="vignette three">image</div>
			<div className="vignette one">image</div>
			<div className="vignette one">image</div>
			<div className="vignette three">image</div>
			<div className="vignette three">image</div>
			<div className="vignette one">image</div>
			<div className="vignette two">image</div>
			<div className="vignette three">image</div>
		</div>
	);
};

export default Gallery;
