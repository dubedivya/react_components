import { createContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const [blogList, setBlogList] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  //Add blog to db
  const handleSaveBlogToDatabase = async () => {
    const response = isEdit
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.getCurrentBlog._id}`,
          {
            title: formData.title,
            description: formData.description,
          },
        )
      : await axios.post("http://localhost:5000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });
    const result = await response.data;
    console.log(result);
    if (result) {
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        handleSaveBlogToDatabase,
        blogList,
        setBlogList,
        pending,
        setPending,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
