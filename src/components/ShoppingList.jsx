import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({}){

    return(
        <section className="flex-r">
            {groceryItems.map((item) => <ShoppingItem key={item.id} title={item.title} quantity={item.quantity} id={item.id} setGroceryList={setGroceryList}/>)}
        </section>
    )
}