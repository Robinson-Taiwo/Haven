import React from "react";
import pc from "../assets/images/pc.png";
import "./CartCard.css";

const CartCard = () => {
    return (
        <div className="cart-card-container   bg-[#FAF5FF]  flex flex-col ">
            <div className="cart-card-image   ">
                <img src={pc} alt="" className="pc-images" />
            </div>

            <div className="cart-card-deetails  laptop:mt-[2.25rem]  mt-[0.58rem] flex flex-col  laptop:gap-[0.88rem] gap-[0.23rem] ">
                <p className="cart-card-name ">
                    King size Bedding and Platform
                </p>

                <p className="cart-card-size font-medium  ">Size: 30 inches</p>

                <p className="cart-card-price  ">Price: NGN 500,00</p>
            </div>

            <div className="cart-card-button w-[100%] flex items-center justify-center mt-[0.58rem] h-[1.864rem] laptop:text-[1rem] text-[0.557rem] laptop:mt-[2.25rem] laptop:py-[0.75rem] laptop:gap-[0.62rem] flex-row  laptop:h-[2.75rem] gap-[0.18rem] ">
                <span>+</span>
                <span>ADD</span>
            </div>
        </div>
    );
};

export default CartCard;
