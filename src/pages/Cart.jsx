import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Ваша корзина</h2>
      <p>Здесь будут отображаться товары, которые вы добавили.</p>
      
      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        {/* Ссылка для возврата в магазин */}
        <Link to="/shop" style={{ color: "blue", textDecoration: "underline" }}>
          ← Вернуться в магазин
        </Link>
        
        {/* Ссылка для выхода */}
        <Link to="/" style={{ color: "red", textDecoration: "underline" }}>
          Выйти из аккаунта
        </Link>
      </div>
    </div>
  );
}

export default Cart;