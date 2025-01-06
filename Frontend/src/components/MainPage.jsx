import avatar from "../assets/avatar.png";
import add from "../assets/add.svg";
import search from "../assets/search.svg";
import today from "../assets/today.svg";
import future from "../assets/future.svg";
import filters from "../assets/filters.svg";
import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import axios from "axios";

export default function MainPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:5300/api/Task/GetAllTask",
          { withCredentials: true }
        );
        setTasks(response.data);
      } catch (error) {
        setError(error.message || "An error occurred");
        console.error("Fetching tasks failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Error fetching tasks: {error}</p>;
  }
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
        <ul className="mama">
          {tasks.map((task) => (
            <li key={task.id}>
              {/* <p>{task.nameTask}</p>
                  <p>Description: {task.description}</p>
                  <p>Data:{task.date}</p> */}
              {/* <p>Due Date: {new Date(task.Date).toLocaleString()}</p> */}
              {/* <Note
                title={task.nameTask}
                description={task.description}
                data={task.date}
              /> */}
              <div className="note">
                <p className="date">{task.date}</p>
                <div className="description">
                  <p className="title">{task.nameTask}</p>
                  <p className="task">{task.description}</p>
                  <div className="create">
                    <button className="cancelbutton">Удалить задачу</button>
                    <button className="addbutton">Редактировать</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li className="asd">
            <CreateNote />
          </li>
        </ul>
      </section>
    </main>
  );
}
