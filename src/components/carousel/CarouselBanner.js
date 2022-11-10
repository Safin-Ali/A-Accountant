import { useEffect, useState } from "react";
const CarouselBanner = () => {

    const [banners,setBanners] = useState(null);

    const[i,setI] = useState(0);
    const [direction,setDirection] = useState(false);

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

    useEffect(()=>{
        fetch('https://a-accountant.vercel.app/banner')
        .then(res => res.json())
        .then(data => setBanners(data));
    },[]);

    function updateStyle () { 
        if(direction){
            setI(i - 1)
            slide();
            console.log('one',i)
        }
        else{
            slide();
            setI(i+1)
            console.log('two',i)
        }
    }

    function slideAnim(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(updateStyle())
            },1500)
        })
    }

    // change banner
    // useEffect(()=>{
    //     i === 0 && setDirection(false)
    //     i === banners?.banner.length-1 && setDirection(true)
    //     slideAnim()
    // },[i])

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