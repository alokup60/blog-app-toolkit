import React, { useState } from "react";

const Post = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="w-6/12 flex flex-col  justify-center gap-4 mx-auto mt-[4rem]">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-2 w-8/12 justify-center mx-auto"
        >
          <h2 className="font-semibold text-2xl">Add a New post</h2>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Post Title:</label>
            <input
              type="text"
              value={data.title}
              onChange={changeHandler}
              name="title"
              className="border-2 outline-none px-2 py-1 border-violet-300 caret-violet-500 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold"> Author:</label>
            <select
              value={data.author}
              onChange={changeHandler}
              name="author"
              className="border-2 px-2 py-1 rounded-md border-violet-300 outline-none"
            >
              <option value="Jack">Jack</option>
              <option value="Ryan">Ryan</option>
              <option value="Ryder">Ryder</option>
              <option value="Ram">Ram</option>
              <option value="Rajendra">Rajendra</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold"> Content:</label>
            <textarea
              value={data.content}
              onChange={changeHandler}
              name="content"
              className="border-2 resize-y outline-none border-violet-300 rounded-md px-2"
              rows={6}
            ></textarea>
          </div>
          <button className="bg-violet-500 py-1  text-white rounded-md hover:bg-violet-600 transition-all ease-in delay-100">
            Save Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
