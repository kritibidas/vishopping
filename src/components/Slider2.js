import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import SliderData from './Sliderdata'

const Slider2 = (props) => {
    const [slider] = useState(SliderData)
    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
          />
        );
      }
    return (
        <div className='topBanner'>
        <Slider {...settings}>
            {
                slider.map((item, i) => {
                    return(
                        
                        <div className="owl-item" key={i}>
                            <img src={item.images} alt={item.title} />
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
        </Slider>
        </div>
    )
}

export default Slider2