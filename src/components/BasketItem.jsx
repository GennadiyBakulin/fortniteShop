export const BasketItem = (props) => {
    const {
        mainId,
        displayName,
        price,
        quntity,
        removeFromBasket = Function.prototype,
    } = props;
    return (
        <li className="collection-item">{displayName} * {quntity} = {price * quntity}
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}
