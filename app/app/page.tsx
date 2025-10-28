"use client";

import Image from "next/image";
import { MyButton } from "./components/MyButton";
import { useState } from "react";

class User {
  name: string = "ethan";
  imageUrl: string = "https://i.imgur.com/yXOvdOSs.jpg";
  imageSize: string = "90";
}

export default function MyApp() {
  const user = new User();
  const loggedIn = false;
  const ok = true;
  const [count, setCount] = useState(0);

  const products = [
    { title: "cabbage", isFruit: false, id: 1 },
    { title: "apple", isFruit: true, id: 2 },
    { title: "orange", isFruit: true, id: 3 },
  ];

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my app.</h1>
      <img
        className={`border-2 w-${user.imageSize} h-${user.imageSize}`}
        src={user.imageUrl}
        alt={"Photo of " + user.name}
      />
      <div>{user.name}</div>
      {loggedIn ? <div>Logged in!</div> : <div>Not logged in.</div>}
      {ok && <div> ok </div>}

      {products.map((product) => {
        return (
          <div className={product.isFruit ? "text-amber-300" : "text-blue-300"}>
            {product.title}
            <br />
            {product.id}
          </div>
        );
      })}

      <MyButton count={count} onClick={handleClick} />

      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
