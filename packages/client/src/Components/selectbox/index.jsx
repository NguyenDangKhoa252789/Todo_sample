import React, { useState } from "react";
import "./Selectbox.css";
const Selectbox = ({ onSelectFilter }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onSelectFilter(selectedFilter);
  };

  return (
    <select
      className="selectbox"
      name="filter"
      id="filter"
      onChange={handleFilterChange}
      value={filter}
    >
      <option value="All">All</option>
      <option value="Incomplete">Incomplete</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default Selectbox;
