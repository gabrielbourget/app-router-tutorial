'use client'
import { useState } from "react";

const CourseSearch = ({ getSearchResults }: any) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch (`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form"
      style={{ marginTop: 15 }}
    >
      <input
        type="text"
        className="search-input"
        placeholder="Search courses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default CourseSearch;
