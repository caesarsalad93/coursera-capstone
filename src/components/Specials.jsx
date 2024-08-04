import salad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import ItemCard from "./ItemCard";

const items = [
    {
        image: salad,
        title: 'Greek Salad',
        price: '$12.99',
        text: ` The famous greek salad of crispy lettuce, peppers, olives and our
        Chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons.`
    },
    {
        image: bruchetta,
        title: 'Bruschetta',
        price: '$5.99',
        text: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. `
    },
    {
        image: lemonDessert,
        title: 'Lemon Dessert',
        price: '$12.99',
        text: `This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`
    },

]
const Specials = () => {
    return (
        <section className="specialsContainer">
            <div className="specialsHeader">
                <h1>Specials</h1>
            </div>
            <div className="specialsItems">
            {items.map((item, index) => (
                <ItemCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    text={item.text}
                />
            ))}
            </div>
        </section>
    )
}

export default Specials;