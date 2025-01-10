import axios from "axios";


export const fetchNotes = async () => {
  try {
    var responce = await axios.get("http://localhost:5300/api/Task/GetAllTask",{withCredentials: true});
    return responce.data;
  } catch (e) {
    console.error(e);
  }
};
