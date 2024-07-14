import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductsDetail.css"


const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://timbu-get-single-product.reavdev.workers.dev/${productId}`,
                    {
                        params: {
                            organization_id: "6543fa8ab7f743228e7902f501b5dca6",
                            Appid: "W1V4BL5K9FDWO97",
                            Apikey: "0ddf5c22ff2b4d988fabb85eb2bd456e20240712202624623806",
                        },
                    }
                );

                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="product-detail-container">
            <div className="product-image">
                <img src={
                    product.photos[0] !== undefined
                        ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                        : ""
                } alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                {/* {console.log(product)} */}
                <p>{product.description}</p>
                {/* <h2>Price: ${product.current_price[0]?.NGN[0]}</h2> */}


                { product.photos.map((item, index)=> (
                    <img src={
                        product.photos[0] !== undefined
                            ? `https://api.timbu.cloud/images/${item.url}`
                            : ""
                    } alt="" />
                ))}

                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;
