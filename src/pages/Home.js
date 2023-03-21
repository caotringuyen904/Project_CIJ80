import React,{useState} from "react";


import ListProduct from "../components/ListProduct";

const TITLE_ALL ='All product list';
const TITLE_MEN ='Men product list';
const TITLE_WOMEN='Women product list';

function Home({products, handleAddToCart}) {
    const [typeProduct, setTypeProduct] = useState('ALL');
    
    const handleFilterProduct =(value) =>{
        setTypeProduct(value);
    }

    const productsToShow = typeProduct==='ALL'?products : 
                           typeProduct==='MEN'?products.filter(p=>p.type==='MEN')
                                              :products.filter(p=>p.type==='WOMEN')
    
    const title = typeProduct ==='ALL'?TITLE_ALL :typeProduct==='MEN'?TITLE_MEN :TITLE_WOMEN;
                                              
    return ( <>
        <div className="tab">
            <button className={typeProduct==='ALL' ?'active':''}
                    onClick={()=>handleFilterProduct('ALL')}
            >ALL
            </button>
            <button className={typeProduct==='MEN' ?'active':''}
                    onClick={()=>handleFilterProduct('MEN')}
            >MEN
            </button>
            <button className={typeProduct==='WOMEN' ?'active':''}
                    onClick={()=>handleFilterProduct('WOMEN')}
            >WOMEN
            </button>
        </div>

        <ListProduct typeRender={'PRODUCT'}
                     handdleSubmit={handleAddToCart}
                     products={productsToShow}
                     title={title}
        />
    </>);
}

export default Home;