import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import Login from "./components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login } from "./features/UserSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
useEffect(()=>{
  onAuthStateChanged(auth , (AuthUser)=>{
    console.log(AuthUser);
    dispatch(
    login ({
      user: AuthUser.name ,
      photo: AuthUser.photoURL,
      id: AuthUser.uid,
      email: AuthUser.email
    })
      )
  })
}, [dispatch])
  
  return (
    <>
      {user ? (
        <div className='quora container'>
          <Header />

          <div className='quora-contents mt-5 '>
            <div className='quora-content d-flex justify-content-center gap-4'>
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
