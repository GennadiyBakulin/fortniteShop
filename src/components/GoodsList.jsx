import {GoodsItem} from "./GoodsItem";

export const GoodsList = (props) => {
    const {goods = [], addToBasket = Function.prototype} = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    )
}
