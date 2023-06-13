'use client'
import Link from "next/link";
import Courses from "@/components/Courses";
import CourseSearch from "@/components/CourseSearch";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch(`/api/courses`);
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  }, []);

  if (loading) return <LoadingPage />;
  
  return (
    <>
      <CourseSearch getSearchResults={(results: any) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
}

export default HomePage;
