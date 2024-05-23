import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/index.jsx";
import axios from "axios";
import classes from "./style.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogList, setBlogList, pending, setPending, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const fetchListOfBlogs = async () => {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  };

  //edit and update
  const handleEditAndUpdateBlog = (getCurrentBlog) => {
    console.log(getCurrentBlog);
    navigate("/add-blog", { state: { getCurrentBlog } });
    // const response = await axios.put(
    //   `http://localhost:5000/api/blogs/update/${getCurrentBlogId}`,
    // );
    // const result = await response.data;
    // console.log(result);
  };

  //Delete blog handler
  const handleDeleteBlog = async (getCurrentBlogId) => {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentBlogId}`,
    );
    const result = await response.data;
    console.log(result);

    if (result?.message) {
      fetchListOfBlogs();
    }
  };

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading Blogs ! Please wait...</h1>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((blog) => (
              <div key={blog._id}>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className={classes.icons}>
                  <FaEdit
                    size={20}
                    onClick={() => handleEditAndUpdateBlog(blog)}
                  />
                  <FaTrash
                    size={20}
                    onClick={() => handleDeleteBlog(blog._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <h3>No Blogs found</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
