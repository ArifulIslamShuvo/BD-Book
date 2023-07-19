
import { ToastContainer } from "react-toastify"
import MainLayout from "./layouts/Mainlayout"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <MainLayout/>
      <ToastContainer />
    </div>
  )
}

export default App