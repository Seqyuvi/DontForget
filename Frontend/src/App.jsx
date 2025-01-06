import { useEffect } from "react";
import HelloPage from "./components/HelloPage";
import { fetchNotes } from "./services/note";

export default function App() {
 
  return (
    <>
      <HelloPage />
    </>
  );
}
