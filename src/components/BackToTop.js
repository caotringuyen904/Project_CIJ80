import React,{useState, useEffect} from "react";

function BackToTop() {
    const[backToTopBtn, setBackToTopBtn] =useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 60){
                setBackToTopBtn(true);
            } 
            else{setBackToTopBtn(false);}
        })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }



    return ( <>
        {backToTopBtn && (<button className="btn-backToTop" onClick={scrollUp}>^</button>)}
    </> );
}

export default BackToTop;