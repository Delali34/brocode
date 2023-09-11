import React, { useState, useEffect, useRef } from "react";
import { SubmitComment, submitComment } from "@/services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localstorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmit = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="max-w-[1800px] mx-auto mt-20 px-10 flex justify-between">
      <div></div>
      <div className="bg-primary lg:w-[70%] w-full  shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Leave a comment
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            ref={commentEl}
            className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white text-gray-700"
            placeholder="comment"
            name="comment"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            ref={nameEl}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white text-gray-700"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            ref={emailEl}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white text-gray-700"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input
              ref={storeDataEl}
              type="checkbox"
              id="storeData"
              value="true"
            />
            <label
              className="text-black ml-2 cursor-pointer"
              htmlFor="storeData"
            >
              Save email and name
            </label>
          </div>
        </div>
        {error && (
          <p className="text-xs text-red-500">All fields are required</p>
        )}
        <div className="mt-8">
          <button
            className="transition duration-300 ease hover:bg-blue-700 bg-black font-semibold text-lg text-white rounded-full px-8 py-3 cursor-pointer "
            type="button"
            onClick={handleCommentSubmit}
          >
            Post Comment
          </button>
          {showSuccessMessage && (
            <span className="text-xl float-right mt-3 text-green-500">
              Comment submitted for review
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
