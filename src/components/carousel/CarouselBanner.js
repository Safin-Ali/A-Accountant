import { useEffect, useState } from "react";
const CarouselBanner = () => {

    // state banners array
    const [banners,setBanners] = useState(null);

    // banner index count
    const[i,setI] = useState(0);

    // set common class everyslide items
    function slide () {
        const selCaroselItems = document.getElementsByName('carousel-items');
        selCaroselItems.forEach(elm => {
            const active = `
            transform: translateX(-${i * 100}%);
            transition: all 0.5s linear;
        `;
        elm.style = active
        })
    }

    // get banner images from server
    useEffect(()=>{
        fetch('https://a-accountant.vercel.app/banner')
        .then(res => res.json())
        .then(data => setBanners(data));
    },[]);


    // added animation classname
    function updateStyle () { 
        if(i === banners?.banner.length-1){
            setI(0)
            slide();
        }
        else{
            slide();
            setI(i+1)
        }
    }

    // promises function
    function slideAnim(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(updateStyle())
            },2500)
        })
    }

    // change banner
    useEffect(()=>{
        slideAnim()
    },[i])

     return (
        <div className={`w-1/2 flex overflow-hidden mx-auto relative`} id='imgContainer'>
            {
                banners?.banner.map((img,idx) => <img key={idx} style={{left: `${idx*100}%`}} name={`carousel-items`} src={img} alt="Banner" className={`rounded-lg w-full`}  />)
            }
        </div>
     )
};
document.querySelector('.demo-carousel');

export default CarouselBanner;