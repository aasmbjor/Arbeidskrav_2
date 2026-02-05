import "../style/form.scss"
import ShoppingItem from "./ShoppingItem"
export default function AddForms({}){

    const handleChange = (e) => {
        const { name, value } = e.target

        setShoppingItem((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClick = (e)=>{
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setShoppingItem((prev) => ([...prev, {id:uniqId,...ShoppingItem}]))
        console.log(ShoppingItem)
    }

    return(
        
    )
}