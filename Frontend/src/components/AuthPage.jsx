import { Link } from "react-router-dom";
import React from "react";

export default function AuthPage() {
  return (
    <main className="authPage">
      <section className="authorisation">
        <p className="auth">Авторизация</p>
        <input type="text" className="login" placeholder="Login"/>
        <input type="password" className="password" placeholder="Password"/>
        <Link className="link" to='/main'><button className="signIn">Sign In</button></Link>
        <Link to='/registration'><button className="reg">Registration</button></Link>
      </section>
    </main>
  );
}
