import React, { useState } from 'react'
import SliderData from './Sliderdata'
import { Link } from 'react-router-dom'

const Slider = () => {
	const [slider] = useState(SliderData)

	const [index, setIndex] = useState(0);

	const handleArrow = (direction) =>{
		if(direction==="l"){
			setIndex(index !== 0 ? index-1 : 2)
		}
		if(direction==="r"){
			setIndex(index !== 2 ? index+1 : 0)
		}
	}

	return (
		<>
			{/* <div className="mb-4">
				<div className="main-slider nav-style-one">
					{
						slider.map((item, index) => {
							return (
								<div className="single-professional-item" key={index}>
									<div className="single-professional">
										<Link to="#" className="professional-thumb">
											<img src={item.images} alt={item.title} />
										</Link>
										<div className="banner-contents">
											<div className="container" >
												<div className="row justify-content-center">
													<div className="col-xl-8">
														<h2 className="banner-title"> {item.title}</h2>
														<span className="title-top"> {item.para}</span>
														<div className="btn-wrapper mt-4 mt-md-1">
															<Link to="tel:0411871104" className="cmn-btn btn-outline-4"><i className="las la-phone"></i> CALL NOW </Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}

				</div>
			</div> */}

			<div className="slider-container">
				<div className="arrowContainer" style={{ left: 0 }} onClick={()=>handleArrow("l")}>
					<img src="../images/arrowl.png" alt=""/>
				</div>
				<div className="slider-wrapper" style={{transform:`translateX(${-100*index}vw)`}}>
					{
						slider.map((item, i) => {
							return(
								<div className="imgContainer" key={i}>
									<img src={item.images} alt=""  />
									<div className='content'>
										<h2>{item.title}</h2>
										<p>{item.para}</p>
										<div className="btn-wrapper mt-2">
											<Link to="tel:0411871104" className="cmn-btn btn-bg-1"><i className="las la-phone"></i> CALL NOW </Link>
										</div>
									</div>
									
								</div>
							)
						})
					}
				</div>
				<div className="arrowContainer" style={{ right: 0 }} onClick={()=>handleArrow("r")}>
					<img src="../images/arrowr.png" alt=""/>
				</div>
			</div>

		</>
	)
}

export default Slider