import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./ProductsDetail.css";
import Loader from "./Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [categories, setCategories] = useState([]);

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
        setCategories(response.data.categories);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
      emblaApi.reInit();
    }
  }, [emblaApi]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-detail-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {product.photos.map((item, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={
                  item.url ? `https://api.timbu.cloud/images/${item.url}` : ""
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>

        <h6 className="text-[grey] text-[0.7rem] tablet:text-[0.95rem]  mb-[1rem]  ">
          Description
        </h6>

        <p>{product.description}</p>

        <h6 className="text-[grey] text-[0.8rem] tablet:text-[1rem]  mb-[0.5rem] underline ">
          Price:
        </h6>

        <p className="font-bold">NGN {product.current_price}</p>

        {console.log(categories)}

        <h6 className="text-[grey] text-[0.7rem] tablet:text-[0.95rem] font-bold mb-[0.5rem]  ">
          Categories
        </h6>

        {categories.map((item) => (
          <div className="mb-[1rem]">{item.name}</div>
        ))}

        <p>{product.available_quantity} Units Available</p>

        <div className="flex items-center justify-center ">
          <button className="">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
