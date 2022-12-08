import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";

export const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.mainId !== itemId);
        setOrder(newOrder)
    }

    const incaddQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }
    const decaddQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        }).then(response => response.json()).then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        })
    }, [])
    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
            }
            {
                isBasketShow &&
                <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}
                            incaddQuantity={incaddQuantity} decaddQuantity={decaddQuantity}/>
            }
        </main>
    )
}
