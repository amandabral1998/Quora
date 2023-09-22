/* eslint-disable react/prop-types */
import "../css/Post.css";
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Timestamp from "react-timestamp";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";

const Post = ({ post }) => {
  const [ismodalopen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const user = useSelector(selectUser);

  useEffect(()=>{
axios.get('http://localhost:3000/api/answer')
.then((res)=>{
  console.log(res);
  setAnswer(res);
})
  } ,  [])

  const handleAnswer = async () => {
    if (post?._id && answer !== "") {
      await axios
        .post("http://localhost:3000/api/answer", {
          answer: answer,
          questionId: post?._id,
          user: user,
        })
        .then((res) => {
         
          // console.log(res.data);
          setIsModalOpen(false);
        })
        .catch((e) => {
          console.log("Error Adding Answer", e);
        });
    }
  };

  return (
    <div className='post d-flex flex-column mt-4 mb-4'>
      <div className='post-info d-flex align-content-center gap-2'>
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

        <img
          src={post?.user.photo}
          alt=''
          width={"30px"}
          height={"30px"}
          style={{ borderRadius: "50%" }}
        />

        <h6>{post?.user?.email}</h6>
        <small>
          <Timestamp relative date={post?.createdAt} autoUpdate />
        </small>
      </div>

      <div className='post-body d-flex justify-content-between  align-items-center'>
        <p className='q-name mb-2'> {post?.questionName}</p>
        <button
          className='postBtn-answer btn btn-dark'
          onClick={() => setIsModalOpen(true)}
        >
          {" "}
          Answer
        </button>
        <Modal
          open={ismodalopen}
          center
          closeOnEsc
          onClose={() => setIsModalOpen(false)}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className='modal-question mt-3'>
            <h1> {post?.questionName} </h1>
            <p>
              {" "}
              asked by {""} <span> {post?.user?.email} </span>
              <span>
                {" "}
                <Timestamp date={post?.createdAt} />
              </span>{" "}
            </p>
          </div>

          <div className='modal-answer d-flex  justify-content-center'>
            <textarea
              className='answer-area'
              onChange={(e) => setAnswer(e.target.value)}
              cols='30'
              rows='10'
              style={{
                minWidth: "98%",
                minHeight: "30vh",
                resize: "none",
                padding: "10px",
              }}
            ></textarea>
          </div>

          <div className='modal-buttons d-flex gap-2 mt-2'>
            <button className='btn btn-dark' onClick={handleAnswer}>
              Add Answer
            </button>
            <button
              className='btn btn-danger'
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>

      <div className='question-image d-flex justify-content-center mb-2 mt-2 '>
        {/* <img src={post?.questionUrl} alt="image" style={{maxWidth:'500px' , maxHeight:'400px'}} /> */}
        {post?.questionUrl ? (
          <img
            src={post.questionUrl}
            alt='image'
            style={{ maxWidth: "500px", maxHeight: "400px" }}
          />
        ) : null}
      </div>

      <div className='postFooter d-flex gap-3 align-items-center '>
        <div className='postfooter-action d-flex  gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-90deg-up'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-90deg-down'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z'
            />
          </svg>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='bi bi-repeat'
          viewBox='0 0 16 16'
        >
          <path d='M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z' />
        </svg>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='bi bi-chat-left'
          viewBox='0 0 16 16'
        >
          <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
        </svg>

        <div className='postfooter-left d-flex align-items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-share'
            viewBox='0 0 16 16'
          >
            <path d='M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z' />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-three-dots '
            viewBox='0 0 16 16'
          >
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        </div>
      </div>

      {/* answer columns */}
      <p
        style={{
          fontSize: "12px",
          fontWeight: "600",
          opacity: "0.5",
          marginTop: "4px",
        }}
      >
        {" "}
        {post?.allAnswers.length} Answer(s)
      </p>
      <hr />

      {post?.allAnswers?.map((answers, index) => {
        return (
          <>
            <div className='post-answer' key={index}>
              <div className='postanswer-container'>
                <div className='postanswered d-flex gap-1 align-content-center'>
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    fill='currentColor'
                    className='bi bi-person '
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
                  </svg> */}

                  <img
                    src={answers?.user.photo}
                    alt=''
                    width={"30px"}
                    height={"30px"}
                    style={{ borderRadius: "50%" }}
                  />

                  <div className='post-info d-flex align-items-center gap-1'>
                    <p style={{ fontWeight: "600" }}>{answers?.user?.email}</p>
                    <p>
                      {" "}
                      <Timestamp
                        style={{ fontSize: "12px" }}
                        relative
                        date={answers?.createdAt}
                        autoUpdate
                      />{" "}
                    </p>
                  </div>
                </div>

                <div
                  className='post-answer '
                  style={{
                    fontWeight: "500",
                    marginBottom: "20px",
                    paddingLeft: "15px",
                  }}
                >
                  {answers.answer}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Post;
