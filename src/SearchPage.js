import React, { useState } from "react";
import "./styles.css";

const sampleData = [
  { id: 1, title: "React Basics", category: "React" },
  { id: 2, title: "Understanding JavaScript Closures", category: "JavaScript" },
  { id: 3, title: "CSS Grid and Flexbox", category: "CSS" },
  { id: 4, title: "Advanced React Patterns", category: "React" },
  { id: 5, title: "TypeScript Essentials", category: "TypeScript" },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = sampleData.filter((item) => {
    const matchesSearchTerm = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="search-page">
      <h1>Blog Search</h1>
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-box"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-dropdown"
        >
          <option value="All">All Categories</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="TypeScript">TypeScript</option>
        </select>
      </div>
      <div className="results">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="result-item">
              <h2>{item.title}</h2>
              <p>Category: {item.category}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
