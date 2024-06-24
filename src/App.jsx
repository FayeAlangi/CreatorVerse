import { Route, Routes } from "react-router-dom"
import ShowCreators  from "./pages/ShowCreators.jsx"
import  AddCreator  from "./pages/AddCreator.jsx"
import EditCreator from "./pages/EditCreator.jsx"
import ViewCreator from "./pages/ViewCreator.jsx"

const App =() => {
  console.log(import.meta.env.VITE_SUPABASE_URL)

  return (
    <Routes>
      <Route path="/" element={<ShowCreators />}></Route>
      <Route path="/create" element={<AddCreator />}></Route>
      <Route path="/edit" element={<EditCreator />}></Route>
      <Route path="/view" element={<ViewCreator />}></Route>
    </Routes>
  )
}
export default App;