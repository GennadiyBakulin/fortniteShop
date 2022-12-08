export const BasketItem = (props) => {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incaddQuantity = Function.prototype,
        decaddQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item">{displayName} <i className='material-icons basket-quantity'
                                                         onClick={() => decaddQuantity(mainId)}>remove</i> * {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => incaddQuantity(mainId)}>add</i> = {price * quantity}
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}
