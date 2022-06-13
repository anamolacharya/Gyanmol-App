import React from "react";

export default function SearchBar() {
  return (
    <>
      <form>
        <label>
          <span>Search Courses</span>
          <input type="text" placeholder="Search Courses" />
          <button>Search</button>
        </label>
      </form>
    </>
  );
}
