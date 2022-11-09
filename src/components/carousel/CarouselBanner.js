import { useEffect, useState } from "react";

const CarouselBanner = () => {

    
    const [banners,setBanners] = useState(null);

    useEffect(()=>{
        fetch('https://a-accountant.vercel.app/banner')
        .then(res => res.json())
        .then(data => setBanners(data));
    },[])



    return (
        <div>
            {/* Banner */}
            <div className={`w-1/2 flex mx-auto relative overflow-hidden`} id='imgContainer'>
                <img src={banners?.banner[0]} alt="Banner" className="rounded-lg" />
            </div>
        </div>
    );
};
document.querySelector('.demo-carousel');

export default CarouselBanner;


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>