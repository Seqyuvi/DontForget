import avatar from "../assets/avatar.png";
import add from "../assets/add.svg";
import search from "../assets/search.svg";
import today from "../assets/today.svg";
import future from "../assets/future.svg";
import filters from "../assets/filters.svg";

export default function MainPage() {
  return (
    <main className="dontForget">
      <section className="menu">
        <div className="profile">
          <img src={avatar} alt="" />
          <button className="logbutton">Login</button>
        </div>
        <ul>
          <li>
            <img src={add} alt="Плюс" />
            <button>Добавить задачу</button>
          </li>
          <li>
            <img src={search} alt="Лупа" />
            <button>Поиск</button>
          </li>
          <li>
            <img src={today} alt="Календарь" />
            <button>Сегодня</button>
          </li>
          <li>
            <img src={future} alt="Калькулятор" />
            <button>Предстоящие</button>
          </li>
          <li>
            <img src={filters} alt="Фильтры" />
            <button>Фильтры и метки</button>
          </li>
        </ul>
      </section>
      <section className="notes">
        <div className="note">
          <p className="date">Сегодня</p>
          <div className="description">
            <input placeholder="Название задачи" type="text" />
            <input placeholder="Описание" type="text" />
            <div className="create">
              <button className="cancelbutton">Отмена</button>
              <button className="addbutton">Добавить задачу</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
