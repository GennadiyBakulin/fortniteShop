export const GoodsItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card">
            <div className='card-image'>
                <img src={displayAssets[0]['full_background']} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className='card-title'>{displayName}</span>
                <p>
                    {displayDescription}
                </p>
            </div>
            <div className='card-action'>
                <button className='btn' onClick={() => addToBasket({
                    mainId,
                    displayName,
                    price: price.finalPrice,
                })}>Купить
                </button>
                <span className='right'>
                    {
                        price.finalPrice
                    }
                </span>
            </div>
        </div>
    )
}
