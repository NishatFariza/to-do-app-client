
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './Pages/Auth/LogIn/LogIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import AddToDo from './Pages/AddToDo/AddToDo';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='toDoList' element={
          <RequireAuth>
            <AddToDo></AddToDo>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
