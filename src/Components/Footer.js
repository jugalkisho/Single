import React,{useState,useEffect} from 'react'
import { FaAngleUp } from 'react-icons/fa';

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  return (
    <div className='container-fluid'>
      <div className='row row2' style={{backgroundImage:`Url("https://img.freepik.com/premium-photo/asian-cute-girl-with-glasses-holding-book-while-sitting-pile-books-with-city-blue-sky_9083-3228.jpg?size=626&ext=jpg&ga=GA1.2.1083868299.1684308440&semt=sph")`}}>
    
        <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
            <ul>
                <li>Schedule your 1-to-1 call or chat within the first 30 days of signing up and a Google Ads Expert will give you easy first steps to get started on your campaign, at no-cost.</li>
            </ul>
        </div>
        <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
        Schedule your 1-to-1 call or chat within the first 30 days of signing up and a Google Ads Expert will give you easy first steps to get started on your campaign, at no-cost.
        </div>
        <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
        Schedule your 1-to-1 call or chat within the first 30 days of signing up and a Google Ads Expert will give you easy first steps to get started on your campaign, at no-cost.
        </div>
      </div>
      <div>
        <img className='img13' src='https://img.freepik.com/free-psd/back-school-web-banner-template_106176-1278.jpg?size=626&ext=jpg&ga=GA1.2.1083868299.1684308440&semt=sph'/>
      </div>
      <div className="top-to-btm">
      {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    </div>
  )
}

export default Footer;
