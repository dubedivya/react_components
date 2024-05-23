import React, { useContext, useEffect } from "react";
import classes from "./style.module.css";
import { GlobalContext } from "../../context/index.jsx";
import { useLocation } from "react-router-dom";

const AddNewBlog = () => {
  const { formData, setFormData, handleSaveBlogToDatabase, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlog } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlog.title,
        description: getCurrentBlog.description,
      });
    }
  }, [location]);
  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit a blog" : "Add a blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name={"title"}
          id={"title"}
          placeholder={"Enter Blog Title"}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          name={"description"}
          placeholder={"Enter Blog Description"}
          id={"description"}
          rows={5}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <button onClick={handleSaveBlogToDatabase}>
          {isEdit ? "Edit blog" : "Add new blog"}
        </button>
      </div>
    </div>
  );
};

export default AddNewBlog;
