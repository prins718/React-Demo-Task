import React, { useState, useEffect } from "react";
import "./fillter.css";

const productsData = [
    { id: 1, name: "Dell XPS 13", image: "./cartimages/01.jpeg" },
    { id: 2, name: "MacBook Air", image: "./cartimages/02.jpeg" },
    { id: 3, name: "iPhone 14", image: "./cartimages/03.jpeg" },
    { id: 4, name: "Samsung S22", image: "./cartimages/04.jpeg" },
    { id: 5, name: "Headphones", image: "./cartimages/05.jpeg" },
    { id: 6, name: "Keyboard", image: "./cartimages/06.jpeg" },
    { id: 7, name: "Mouse", image: "./cartimages/07.jpeg" },
    { id: 8, name: "Monitor", image: "./cartimages/08.jpeg" },
    { id: 9, name: "iPad Pro", image: "./cartimages/09.jpeg" },
    { id: 10, name: "Camera Canon", image: "./cartimages/10.jpeg" },
];

const List1 = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("all");
    const [comments, setComments] = useState({});

    useEffect(() => {

        const storedData = JSON.parse(localStorage.getItem("ProductsData")) || {};

        const updatedProducts = productsData.map((p) => ({
            ...p,
            liked: storedData[p.id]?.liked || false,
            disliked: storedData[p.id]?.disliked || false,
            comment: storedData[p.id]?.comment || "",
        }));

        setProducts(updatedProducts);


        setComments({});
    }, []);

    const saveToLocalStorage = (newProducts) => {
        const productState = {};
        newProducts.forEach((p) => {
            productState[p.id] = {
                liked: p.liked,
                disliked: p.disliked,
                comment: p.comment,
            };
        });
        localStorage.setItem("ProductsData", JSON.stringify(productState));
    };

    const handleLike = (id) => {
        setProducts((prev) => {
            const newProducts = prev.map((p) =>
                p.id === id
                    ? { ...p, liked: !p.liked, disliked: p.liked ? p.disliked : false }
                    : p
            );
            saveToLocalStorage(newProducts);
            return newProducts;
        });
    };

    const handleDislike = (id) => {
        setProducts((prev) => {
            const newProducts = prev.map((p) =>
                p.id === id
                    ? {
                        ...p,
                        disliked: !p.disliked,
                        liked: p.disliked ? p.liked : false,
                    }
                    : p
            );
            saveToLocalStorage(newProducts);
            return newProducts;
        });
    };

    const handleCommentChange = (id, text) => {
        setComments((prev) => ({ ...prev, [id]: text }));
    };

    const handleCommentsSend = (id) => {
        setProducts((prev) => {
            const newProducts = prev.map((p) =>
                p.id === id ? { ...p, comment: comments[id] || "" } : p
            );
            saveToLocalStorage(newProducts);
            return newProducts;
        });


        setComments((prev) => ({ ...prev, [id]: "" }));
    };

    const filtered = products.filter((f) => {
        if (filter === "liked") return f.liked;
        if (filter === "disliked") return f.disliked;
        if (filter === "commented") return f.comment;
        return true;
    });

    return (
        <div className="container">
            <div className="filter-buttons">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("liked")}>Liked</button>
                <button onClick={() => setFilter("disliked")}>Disliked</button>
                <button onClick={() => setFilter("commented")}>Commented</button>
            </div>

            <div className="products-container">
                {filtered.map((pro) => (
                    <div key={pro.id} className="products-card">
                        <img src={pro.image} alt={pro.name} />
                        <div className="products-details">
                            <h3>{pro.name}</h3>
                            <div className="action-buttons">
                                <button onClick={() => handleLike(pro.id)}>
                                    {pro.liked ? "Liked" : "Like"}
                                </button>
                                <button onClick={() => handleDislike(pro.id)}>
                                    {pro.disliked ? "Disliked" : "Dislike"}
                                </button>
                            </div>
                            <div className="comment-section">
                                <textarea
                                    placeholder="comments..."
                                    value={comments[pro.id] || ""}
                                    onChange={(e) => handleCommentChange(pro.id, e.target.value)}
                                />
                                <button onClick={() => handleCommentsSend(pro.id)}>Send</button>
                            </div>

                            {pro.comment && (
                                <div>
                                    <strong>Saved Comment:</strong> {pro.comment}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List1;
