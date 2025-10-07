import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
const pizzaData = [
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    }
];

function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}
function Header() {
    const style = { color: 'red', fontSize: '32px', textTransform: 'uppercase' }
    return (
        <header className="header">
            <h1 style={style}>
                Fast React Pizza Company
            </h1>
        </header>)
}
function Menu() {
    // const pizzas = pizzaData;
    const pizzas = [];
    const numbPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numbPizzas > 0 ? (
                <div>
                    <p>Authentic Italian Cuisine</p>

                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </div>
            ) : null}
        </main>
    );
}
function Pizza(props) {

    return <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
            <h2>{props.pizzaObj.name}</h2>
            <p>{props.pizzaObj.ingredients}</p>
            {props.pizzaObj.soldOut ? <span>SOLD OUT</span> : <span> {props.pizzaObj.price} </span>}

        </div>

    </li>
}

function Footer() {

    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)
    return (
        <footer className="footer">
            {isOpen ? <Order openHour={openHour} /> : < p > Welcome</p>}
        </footer >
    );
}
function Order({ closeHour }) {
    return <div className="order">
        <p>Open until {closeHour}:00. </p>
        <button className="orderButton">Order </button>
    </div>
}
const Test = () => {

}
//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);
// //React before 18
// React.render(<App />);

