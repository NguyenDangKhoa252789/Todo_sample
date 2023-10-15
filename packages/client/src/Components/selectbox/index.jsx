import React, { useState } from "react";
import { Select } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
const Selectbox = ({ onSelectFilter }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onSelectFilter(selectedFilter);
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
