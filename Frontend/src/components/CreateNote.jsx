export default function CreateNote() {
  return (
    <div className="note">
      <p className="date">Сегодня</p>
      <div className="description">
        <input placeholder="Название задачи" type="text" />
        <input placeholder="Описание" type="text" />
        <input placeholder="Описание" type="date" />
        <div className="create">
          <button className="cancelbutton">Отмена</button>
          <button className="addbutton">Добавить задачу</button>
        </div>
      </div>
    </div>
  );
}
