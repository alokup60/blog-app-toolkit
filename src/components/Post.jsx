import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Post = () => {
  const [data, setData] = useState({
    title: "",
    email: "",
    author: "",
    content: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.title) {
      errors.title = "Title is required";
    }

    if (!values.content) {
      errors.content = "Content is required";
    } else if (values.content.length < 10) {
      errors.content = "Content must be more than 10 characters.";
    }

    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email format";
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = validate(data);
    setFormErrors(errors);
    setIsSubmit(true);
    console.log(data);

    if (Object.keys(errors).length === 0) {
      toast.success("Form Submitted successfully!");
      setData({
        title: "",
        email: "",
        author: "",
        content: "",
      });
    }
  };

  return (
    <div>
      <div className="w-6/12 flex flex-col  justify-center gap-4 mx-auto mt-[2rem]">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-2 w-8/12 justify-center mx-auto bg-gray-200 px-4 py-[2rem] rounded-md"
        >
          <h2 className="font-semibold text-2xl text-violet-500">
            Add a New post
          </h2>
          <div className="flex flex-col">
            <label className="font-semibold">
              Post Title<sup className="text-red-500">*</sup>{" "}
            </label>
            <input
              type="text"
              value={data.title}
              onChange={changeHandler}
              name="title"
              className="border-2 outline-none px-2 py-1 border-violet-300 caret-violet-500 rounded-md"
            />
            <span className="text-red-500">{formErrors.title}</span>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">
              Email<sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              value={data.email}
              onChange={changeHandler}
              name="email"
              className="border-2 outline-none px-2 py-1 border-violet-300 caret-violet-500 rounded-md"
            />
            <span className="text-red-500">{formErrors.email}</span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold"> Author:</label>
            <select
              value={data.author}
              onChange={changeHandler}
              name="author"
              className="border-2 px-2 py-1 rounded-md border-violet-300 outline-none cursor-pointer text-violet-500"
            >
              <option value="Jack" className="text-violet-500">
                Jack
              </option>
              <option value="Ryan" className="text-violet-500">
                Ryan
              </option>
              <option value="Ryder" className="text-violet-500">
                Ryder
              </option>
              <option value="Ram" className="text-violet-500">
                Ram
              </option>
              <option value="Rajendra" className="text-violet-500">
                Rajendra
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">
              Content:<sup className="text-red-500">*</sup>
            </label>
            <textarea
              value={data.content}
              onChange={changeHandler}
              name="content"
              className="border-2 resize-y outline-none border-violet-300 rounded-md px-2"
              rows={6}
            ></textarea>
            <span className="text-red-500">{formErrors.content}</span>
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
