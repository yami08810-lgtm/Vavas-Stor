import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // Переключатель: true = режим Регистрации, false = режим Входа
  const [isRegisterMode, setIsRegisterMode] = useState(true);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  // Фокусируемся на логине при старте
  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
  }, [isRegisterMode]); // Фокус будет срабатывать и при переключении режима

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegisterMode) {
      console.log("Пользователь зарегистрирован:", login);
    } else {
      console.log("Пользователь вошел в аккаунт:", login);
    }

    // В обоих случаях пускаем в магазин
    navigate("/shop");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "0 auto", textAlign: "center", marginTop: "30px" }}>
      <h2>Vamas</h2>
      <h2>Web-Store</h2>
      <h2>for t-shirts</h2>
      <h3 style={{ fontWeight: "bold", marginTop: "50px", color: "black" }}>{isRegisterMode ? "Create an account" : "Log in account"}</h3>
      <h6 style={{ color: "black", transform: "translateY(-20px)", margin: "0" }}>Enter your email to sign up for this app</h6>

      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            ref={loginRef}
            type="text"
            placeholder="email@domain.com"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
            required
            style={{ width: "300px", padding: "8px", boxSizing: "border-box", border: "1px solid Gray", borderRadius: "3%" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid Gray", borderRadius: "3%" }}
          />
        </div>

        <button type="submit" style={{
          width: "100%", padding: "10px", cursor: "pointer", marginBottom: "15px", background: "black", color: "white",
          boxSizing: "border-box", border: "1px solid Gray", borderRadius: "3%"
        }}>
          {isRegisterMode ? "Sign up with email" : "log in with email/password"}
        </button>
      </form>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <hr style={{ borderColor: "#eee", margin: "15px 0", flex: "1" }} />
        <span style={{ fontSize: "13px" }}>or continue with</span>
        <hr style={{ borderColor: "#eee", margin: "15px 0", flex: "1" }} />
      </div>
      <button style={{ background: "#edeaea", width: "300px", border: "0", height: "33.6px" }}>Google</button>
      <p style={{ fontSize: "13px", margin: "0", color: "#929090" }}>By clicking continue, you agree to our  <span style={{
        color: "black"
      }}>Terms of
        Service</span> and <span style={{ color: "black" }}>Privacy Policy</span></p>
      <h3 style={{ color: "black", margin: "3px" }}>or</h3>
      <div style={{ fontSize: "14px" }}>
        {isRegisterMode ? (
          <span style={{ fontSize: "28px", color: "black" }}>
            {" "}
            <button
              onClick={() => setIsRegisterMode(false)}
              style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: "28px", color: "black" }}
            >
              Log in for account
            </button>
          </span>
        ) : (
          <span>
            {" "}
            <button
              onClick={() => setIsRegisterMode(true)}
              style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: "28px", color: "black"}}
            >
              Register for an account
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Register;