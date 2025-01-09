import avatar from "../assets/avatar.png";
import add from "../assets/add.svg";
import search from "../assets/search.svg";
import today from "../assets/today.svg";
import future from "../assets/future.svg";
import filters from "../assets/filters.svg";
import React, { useEffect, useState } from "react";
// import CreateNote from "./CreateNote";
import axios from "axios";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [tasks, setTasks] = useState([]);
  const [login, setLogin] = useState("");
  const [id, setID] = useState("");
  const [modal, setModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [name,setNameTask]=useState('');
  const [description,setDescription]=useState('');
  const [date,setDate]=useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5300/api/Task/GetAllTask",
        { withCredentials: true }
      );
      const getUser = await axios.get(
        "http://localhost:5300/api/Auth/UserInfo",
        { withCredentials: true }
      );
      setTasks(response.data);
      setLogin(getUser.data.userName);
      setID(getUser.data.userId);
    };
    fetchData();
  }, []);

  const openModal = (taskId) => {
    setModal(true);
    setTaskToDelete(taskId);
  };
  const handleDeleteTask = async () => {
    if (taskToDelete) {
      await axios.delete(
        "http://localhost:5300/api/Task/DeleteTask/" + taskToDelete,
        { withCredentials: true }
      );
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
    }
    setModal(false);
    setTaskToDelete(null);
  };
  const handleCreateTask = async (event) => {
    event.preventDefault();
    const response=await axios.post(
      "http://localhost:5300/api/Task/CreateNewTask",
      {
        nameTask: name,
        date: date,
        description: description,
        idUser: id
      },
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      location.reload()
    }
  };
  return (
    <main className="dontForget">
      <section className="menu">
        {modal ? (
          <Modal>
            <h1>Вы точно хотите удалить задачу?</h1>
            <button className="cancelmodal" onClick={handleDeleteTask}>
              Да
            </button>
            <button
              style={{ background: "#d9d9d9" }}
              className="cancelmodal"
              onClick={() => setModal(false)}
            >
              Нет
            </button>
          </Modal>
        ) : (
          <p></p>
        )}
        <div className="profile">
          <img src={avatar} alt="" />
          <button className="logbutton">{login}</button>
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
              {task.idUser == id ? (
                <div className="note">
                  <p className="date">{task.date}</p>
                  <div className="description">
                    <p className="title">{task.nameTask}</p>
                    <p className="task">{task.description}</p>
                    <div className="create">
                      <button
                        className="cancelbutton"
                        onClick={() => openModal(task.id)}
                      >
                        Удалить задачу
                      </button>
                      <button className="addbutton">Редактировать</button>
                    </div>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </li>
          ))}
          <li>
            <div className="note">
              <p className="date">Добавить задачу</p>
              <form onSubmit={handleCreateTask}>
                <div className="description">
                  <input placeholder="Название задачи" type="text" onChange={(e) => setNameTask(e.target.value)}/>
                  <input placeholder="Описание" type="text" onChange={(e) => setDescription(e.target.value)}/>
                  <input type="date" onChange={(e) => setDate(e.target.value)}/>
                  <div className="create">
                    <input
                      type="submit"
                      value={"Добавить задачу"}
                      className="submit"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
