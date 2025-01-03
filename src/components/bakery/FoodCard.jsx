import Image from "next/image";
import React from "react";

function FoodCard({ name, price, image, category }) {
    return (
        <div className="space-y-6">
            <div className="bg-black aspect-square w-52 rounded-lg relative overflow-hidden ">
                <Image
                    src={image}
                    fill={true}
                    alt="desert"
                    className="object-cover"
                ></Image>
            </div>
            <div>
                <p className="text-rose-900/70 font-thin text-xs">{category}</p>
                <h3 className="text-rose-950 text-sm font-semibold">{name}</h3>
                <p className="text-[color:hsl(14,86,42)] text-sm font-semibold">
                    $ {price}
                </p>
            </div>
        </div>
    );
}

export default FoodCard;
