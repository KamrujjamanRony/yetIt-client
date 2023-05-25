import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBlogs } from "../features/blogs/blogsSlice";

const useBlogs = () => {
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch("blog.json").then(res=>res.json()).then(data=>{
        setBlogs(data)
        dispatch(getBlogs(data))
    });
  },[dispatch]);
  return [blogs];
};

export default useBlogs;