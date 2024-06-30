import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App () {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header () {
  return (
    <header className="header">
      <h1>
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu () {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Margherita"
        ingredient="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12} // Use {} to pass data other than strings
      />

    </main>
  );
}

function Pizza (props) {
  // console.log (props);
  // console.log (`test: ${props.photoName}`);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>

        <p>{props.ingredient}</p>
        <span>price: {props.price + 3}</span>
      </div>

    </div>
  );
}

function Footer () {
  return (
    <footer className="footer">
      We are currently open!
    </footer>
  );
  // return React.createElement ('footer', null, 'We are currently open!');
}
const root = ReactDom.createRoot (document.getElementById ('root'));
root.render (<React.StrictMode><App /></React.StrictMode>);
