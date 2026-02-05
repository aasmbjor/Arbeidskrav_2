export default function ShoppingItem({id, title, quantity}){
    const handleClick = () => {
        setShoppingList((prev) => prev.filter(item => item.id !== id ))
        console.log(id)
    }

    return(
        <article className="grocery-card">
            <h3>{title}</h3>
            <p>{quantity}</p>
            <button onClick={handleClick}>Legg til vare</button>
        </article>
    )
}