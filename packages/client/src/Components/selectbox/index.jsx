import React, { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@components/mui-components";
const Selectbox = ({ setSelectedFilter }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    setSelectedFilter(selectedFilter);
  };

  return (
    <Box sx={{ minWidth: 180, ml: "31.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleFilterChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Incomplete"}>Incomplete</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selectbox;
