import { useState } from "react";
import "../css/Header.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from 'axios'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";

const Header = () => {
  const [ismodalopen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question , setQuestion] = useState("")
  const dispatch = useDispatch()
  const user =  useSelector(selectUser)
  
  const handleQuestion =  async () =>{
   if(question !== '' ) {
    await axios.post('http://localhost:3000/api/question' , {
      questionName: question , 
      questionUrl: inputUrl,
      user: user
    })
    .then((res)=>{
      console.log(res.data)
      setIsModalOpen(false)})
    .catch((e)=>{
      console.log(e);
    })
   }
  }



  const handleLogout  = () =>{
    if(window.confirm('Are you surely want to Logout?')) {
      signOut(auth).then(()=>{
       dispatch(logout())
      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }

  return (
    <div className='header-main container-fluid justify-content-center mt-3 d-flex  align-items-center'>
      <div className='d-flex align-items-center  justify-content-center gap-2'>
        <div className='header-img  me-2'>
          <h2 className='font-weight-bolder text-danger  name'>Quora</h2>
        </div>
        <div className='header-icons d-flex gap-3 justify-content-center align-items-center'>
          <div className='icons'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-house'
              viewBox='0 0 16 16'
            >
              <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' />
            </svg>
          </div>
          <div className='icons'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-chat-left-dots'
              viewBox='0 0 16 16'
            >
              <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
              <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
            </svg>
          </div>
          <div className='icons'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-pencil-square'
              viewBox='0 0 16 16'
            >
              <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
              <path
                fillRule='evenodd'
                d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
              />
            </svg>
          </div>
          <div className='icons'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-people-fill'
              viewBox='0 0 16 16'
            >
              <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
            </svg>
          </div>
          <div className='icons me-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-bell'
              viewBox='0 0 16 16'
            >
              <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
            </svg>
          </div>
        </div>

        <div className='header-input d-flex gap-2 align-items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
            fill='currentColor'
            className='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>

          <input
            type='text'
            className='search-field'
            placeholder='Search Quora'
          />
        </div>

        <div className='header-avatar'>
          <span className='avatar-span' onClick={handleLogout} >
            {/* <svg onClick={handleLogout}
            
              xmlns={user?.photo}
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-person'
              viewBox='0 0 16 16'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
            </svg> */}
            <img src={user?.photo} width={'30px'} height={'30px'}  style={{borderRadius:'50%'}}/>
          </span>
        </div>

        <div className='addBtn'>
          <button
            className='btn btn-dark'
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Add&nbsp; Question
          </button>
          <Modal
            open={ismodalopen}
            center
            onClose={() => {
              setIsModalOpen(false);
            }}
            closeOnEsc
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div
              className='modal-title d-flex gap-2 '
              style={{ marginBottom: "-10px" }}
            >
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>

            <hr />

            <div className='modal-info d-flex gap-2  align-content-center'>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-person'
                viewBox='0 0 16 16'
              >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
              </svg> */}
 <img src={user?.photo} width={'30px'} height={'30px'}  style={{borderRadius:'50%'}}/>
              <div className='modal-scope d-flex gap-1 align-content-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-people-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                </svg>

                <p style={{ fontSize: "12px" }}>Public</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  fill='currentColor'
                  className='bi bi-arrow-down-short'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'
                  />
                </svg>
              </div>
            </div>

            <div className='modal-field'>
              <input value={question} onChange={(e)=> setQuestion(e.target.value)}
                style={{
                  margin: "5px 0",
                  // borderBottom: "1px solid lightgray",
                  padding: "10px",
                  outline: "none",
                  width: "500px",
                }}
                type='text'
                placeholder='Start your Question with what, why, how etc.'
              />
              <hr />

              <div className='modal-link d-flex flex-column gap-1 justify-content-center align-items-center'>
                <input
                  style={{
                    margin: "5px 0",
                    // borderBottom: "1px solid lightgray",
                    padding: "10px",
                    outline: "none",
                    width: "500px",
                  }}
                  type='text'
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                  }}
                  placeholder="'Optional': You can use Link that gives context."
                />
                {inputUrl !== "" && <img className="link-image" src={inputUrl} alt='myimage' />}
              </div>
            </div>

            <div className='modal-buttons d-flex flex-column align-items-center  gap-1 mt-2'>
              <button className=' btn btn-dark  addQuestion ' onClick={handleQuestion}>
                Add Question
              </button>
              <button
                type='submit'
                className='btn btn-danger cancel'
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Header;
