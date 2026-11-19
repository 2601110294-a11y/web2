
import React from "react";
import Card from "./Card";
import "./Card.css";

const houses = [
    {
        id: 1,
        name: "서울 감성 숙소",
        location: "서울, 대한민국",
        price: "120,000",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
    },
    {
        id: 2,
        name: "부산 오션뷰 숙소",
        location: "부산, 대한민국",
        price: "150,000",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600"
    },
    {
        id: 3,
        name: "제주 독채 펜션",
        location: "제주, 대한민국",
        price: "180,000",
        rating: 4.95,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600"
    },
    {
        id: 4,
        name: "강릉 바다 숙소",
        location: "강릉, 대한민국",
        price: "110,000",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
    }
];

function ProfileCard(props) {
    return (
        <div className="container">
            <h1>숙소 둘러보기</h1>

            <div className="card-list">
                {houses.map(house => (
                    <Card key={house.id}>
                        <img src={house.image} alt={house.name} />

                        <h3>{house.name}</h3>
                        <p>{house.location}</p>
                        <p>⭐ {house.rating}</p>
                        <h4>₩{house.price} / 박</h4>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;
