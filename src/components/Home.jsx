import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  //scroll-y can't access
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="w-full">
      <div className="w-10/12 flex flex-col justify-center items-center mx-auto mt-[1.5rem] main-div">
        <div className="w-6/12 border-2 rounded-md flex flex-col gap-2 px-4 py-2 sub-main">
          <h2 className="font-semibold text-2xl">Title</h2>
          <p>hey!</p>
          <div>
            <Link to="/editPost" className="underline">
              Edit Post
            </Link>
            <span> by 'nameAuthor' </span>
          </div>
          <button className="border" onClick={toggleModal}>
            Modal Popup
          </button>
        </div>
      </div>
      {/* onClick={toggleModal} -> on overlay  */}
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content relative flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Hello Modal</h2>
            <p>
              A paragraph is defined as “a group of sentences or a single
              sentence that forms a unit” (Lunsford and Connors 116). Length and
              appearance do not determine whether a section in a paper is a
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long.
            </p>
            <button
              className="close-modal absolute top-4 right-2 text-2xl text-violet-500 font-semibold hover:text-violet-600"
              onClick={toggleModal}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
