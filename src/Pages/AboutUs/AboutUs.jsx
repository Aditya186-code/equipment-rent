import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div class="aboutSection">
		<div class="aboutContainer">
			<div class="aboutContent-section">
				<div class="aboutTitle">
					<h1>About Us</h1>
				</div>
				<div class="aboutContent">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="aboutButton">
						<a href="#">Read More</a>
					</div>
				</div>
				<div class="aboutSocial">
					<a href="#"><i class="fab fa-facebook-f"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="aboutImage-section">
				<img src="https://ml8mzf2qdhvl.i.optimole.com/QtrEnA8-3-g3VBsp/w:2000/h:915/q:90/https://www.buildupnepal.com/wp-content/uploads/2020/03/interlocking-brick-machine-mfrh-original-scaled.jpg" alt = ""/>
			</div>
		</div>
	</div>
  )
}

export default AboutUs

