import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const sweetData = [
  {
    name: "Laddu",
    ingredients: "Besan,sweetener,cardamom powder,ghee,cahews and cooking oil",
    price: 10,
    photoName: "sweets/laddu.jpg",
    soldOut: false,
  },
  {
    name: "Jalebi",
    ingredients: "Maida, sugar syrup, cardamom,curd and salt",
    price: 8,
    photoName: "sweets/jalebi.jpg",
    soldOut: false,
  },
  {
    name: "Jamun",
    ingredients: "Milk powder, all-purpose flour, baking powder,sugar",
    price: 12,
    photoName: "sweets/jamun.jpg",
    soldOut: false,
  },
  {
    name: "Kaju Katli",
    ingredients: "Cashews, sugar, water, and butter, ghee",
    price: 12,
    photoName: "sweets/kajukatli.jpg",
    soldOut: false,
  },
  {
    name: "Mysorepak",
    ingredients: "Gram flour (Besan), Ghee, Sugar and Water",
    price: 15,
    photoName: "sweets/mysorepak.jpg",
    soldOut: true,
  },
  {
    name: "Rasgulla",
    ingredients: "Cottage cheese that are soaked in chilled sugar syrup",
    price: 18,
    photoName: "sweets/rasagulla.jpg",
    soldOut: false,
  },
  {
    name: "Rasamalai",
    ingredients: "Milk ,Vinegar,Ice cubes,Poaching Syrup,Sugar",
    price: 18,
    photoName: "sweets/rasamalai.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>
        {/* <h1 style={{ color: "Red", fontSize: "48px", textTransform: "uppercase" }}> */}
        Gupta sweets
      </h1>
    </header>
  );
}
function Menu() {
  const sweets = sweetData;
  const numSweets = sweets.length;
  console.log("====>", numSweets);
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numSweets > 0 ? (
        <React.Fragment>
          <p>
            Authentic indian sweets .Traditional sweets to chose from.All
            organic ingredients like cow ghee,cold pressed oil,Natural
            sweeteners.
          </p>
          <ul className="sweets">
            {sweetData.map((sweet) => (
              <Sweet sweetItem={sweet} key={sweet.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We'ew still working on the menu.Please come back later</p>
      )}
      {/* <Sweet
        name="Laddu"
        ingredients="Besan, sweetener,saffron,cardamom powder,ghee,cahews and cooking oil"
        path="sweets/laddu.jpg"
        photoName="closerShot of a Laddu"
        price={10}
      />
      <Sweet
        name="Jalebi"
        ingredients="Maida, sugar syrup, cardamom,curd and salt"
        path="sweets/jalebi.jpg"
        photoName="A shot of a plate full of jalebi"
        price={8}
        soldOut="false"
      />
      <Sweet
        name="Jamun"
        ingredients="Milk powder, all-purpose flour, baking powder,sugar"
        path="sweets/jamun.jpg"
        photoName="closerShot of a shiny gulab jamun"
        price={12}
      />
      <Sweet
        name="Kaju Katli"
        ingredients="Cashews, sugar, water, and butter, ghee"
        path="sweets/kajukatli.jpg"
        photoName="closerShot of a kaju katli"
        price={12}
        soldOut="false"
      />*/}
    </main>
  );
}

function Sweet({ sweetItem }) {
  return (
    // name={sweetItem.name}
    // ingredients={sweetItem.ingredients}
    // path={sweetItem.photoName}
    // price={sweetItem.price}
    // photoName={`Closer shot of a ${sweetItem.name}`}
    <li className={`sweet ${sweetItem.soldOut ? "sold-out" : ""}`}>
      <img src={sweetItem.photoName} alt="abc" />
      <div>
        <h3>{sweetItem.name}</h3>
        <p>{sweetItem.ingredients}</p>
        <span>{sweetItem.soldOut ? "SOLD OUT" : sweetItem.price}</span>
        <button className="btn"> Add to cart</button>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert(`We're open`);
  // } else {
  //   alert(`Sorry..We're closed`);
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We're happy to welcome you in between 12 to 22</p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

function Order(props) {
  handleSubmit=
  return (
    <div className="order">
      <p>
        We're currently open until {props.closeHour}.Come visit us or order
        online
      </p>
      <button className="btn" onClick={handleSubmit}>
        ORDER
      </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
