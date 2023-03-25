import React, {useState} from 'react';
import{Button, Modal} from 'antd';

import ProductFormFormik from './ProductFormFormik';
// import ProductForm from './ProductForm';
import ManageProducts from './ManageProducts';

function Admin({products,handleAddProduct}) {  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal=()=>{
        setIsModalOpen(true);
    }

    const handleOk= ()=>{
        setIsModalOpen(false);
    }

    const handleCancel= ()=>{
        setIsModalOpen(false);
    }

    return ( <>
    <div style={{padding: "50"}}>
        <h3 style={{textAlign: "center"}}>Manage All Product List</h3>
        <Button style={{marginBottom:10}}
                type="primary"
                onClick={showModal}
        >Add Product</Button>
        <ManageProducts products={products}/>

        <Modal  width={1000}
                title="Add product"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Close</Button>
                ]}
        >
            <ProductFormFormik handleAddProduct={handleAddProduct}/>
        </Modal>
    </div>
    
    </> );    
}

export default Admin;   