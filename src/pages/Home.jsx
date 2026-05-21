import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "between", alignItems: "center", justifyContent: "space-between" }}>
        <h2>Главная страница</h2>
        {/* Кнопка перехода в корзину */}
        <Link to="/cart" style={{ padding: "10px", background: "#f0f0f0", borderRadius: "5px", textDecoration: "none" }}>
          🛒 Корзина (0)
        </Link>
      </div>
      
      <p>Добро пожаловать в магазин VAMAS! Тут будут ваши товары.</p>
      
      <hr style={{ margin: "20px 0" }} />
      
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        ← Выйти из аккаунта
      </Link>
    </div>
  );
}

export default Home;