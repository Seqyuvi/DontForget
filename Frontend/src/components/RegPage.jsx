import { Link } from "react-router-dom";

export default function RegPage() {
  return (
    <main className="regPage">
      <section className="registration">
        <p>Регистрация</p>
        <input name="login" type="text" placeholder="Login" />
        <input name="email" type="text" placeholder="Email" />
        <input name="firstname" type="text" placeholder="Firstname" />
        <input name="secondname" type="text" placeholder="Secondname" />
        <input name="password" type="password" placeholder="Password" />
        <Link to="/main">
          <button className="signIn">Register</button>
        </Link>
      </section>
    </main>
  );
}
