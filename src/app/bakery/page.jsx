import FoodCard from "@/components/bakery/FoodCard";
import Image from "next/image";
import React from "react";

function BakeryPage() {
    return (
        <div className="min-h-screen flex bg-rose-50/50 py-12 px-24 gap-8">
            <div className="basis-3/4 p-4 space-y-6">
                <h1 className="text-3xl font-bold text-rose-950 ">Desserts</h1>
                <div className="grid grid-cols-3 gap-6">
                    {data.map((item, index) => {
                        return (
                            <FoodCard
                                name={item.name}
                                category={item.category}
                                price={item.price}
                                image={item.image.desktop}
                                key={index}
                            ></FoodCard>
                        );
                    })}
                </div>
            </div>
            <div className="basis-1/4 bg-white h-64 rounded-xl p-4">
                <h3 className="text-[color:hsl(14,86,42)] font-bold">
                    Your cart (0){" "}
                </h3>
                <div className="flex justify-center flex-col items-center">
                    <Image
                        src="/bakery/illustration-empty-cart.svg"
                        width={150}
                        height={150}
                    ></Image>
                    <p className="text-sm text-rose-900/70 font-semibold">
                        Your added items will appear here
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BakeryPage;
const data = [
    {
        image: {
            thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
            mobile: "./assets/images/image-waffle-mobile.jpg",
            tablet: "./assets/images/image-waffle-tablet.jpg",
            desktop: "/bakery/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "/bakery/image-creme-brulee-desktop.jpg",
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: "/bakery/image-macaron-desktop.jpg",
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: "/bakery/image-tiramisu-desktop.jpg",
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: "/bakery/image-baklava-desktop.jpg",
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: "/bakery/image-meringue-desktop.jpg",
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
    },
    {
        image: {
            thumbnail: "./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: "/bakery/image-cake-desktop.jpg",
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: "/bakery/image-brownie-desktop.jpg",
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5,
    },
    {
        image: {
            thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: "/bakery/image-panna-cotta-desktop.jpg",
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
    },
];
