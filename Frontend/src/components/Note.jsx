export default function Note(title, description, data) {
  return (
    <div className="note">
      <p className="date">{data}</p>
      <div className="description">
        <p className="title">{title}</p>
        <p className="task">{description}</p>
        <div className="create">
          <button className="cancelbutton">Удалить задачу</button>
          <button className="addbutton">Редактировать</button>
        </div>
      </div>
    </div>
  );
}
// export default function Note(){
//     return(
//     <div className="note">
//       <p className="date"></p>
//       <div className="description">
//         <p className="title">Анжумания</p>
//         <p className="task">отжаться 10 раз</p>
//         <div className="create">
//           <button className="cancelbutton">Удалить задачу</button>
//           <button className="addbutton">Редактировать</button>
//         </div>
//       </div>
//     </div>
//     )
// }
