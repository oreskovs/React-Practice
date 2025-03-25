import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "pineapple"];

  const fruits = [
    { name: "Apple", price: 3, emoji: "🍎", soldOut: true },
    { name: "Banana", price: 15, emoji: "🍌", soldOut: false },
    { name: "Orange", price: 2, emoji: "🍊", soldOut: true },
    { name: "Mango", price: 20, emoji: "🥭", soldOut: false },
    { name: "Pineapple", price: 17, emoji: "🍍", soldOut: true },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />

          // <li key={fruit.name}>
          //   {fruit.name} ${fruit.price} {fruit.emoji}
          // </li>
        ))}
      </ul>
    </div>
  );
}
