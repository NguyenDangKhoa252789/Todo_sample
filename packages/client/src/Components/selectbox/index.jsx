import "./selectbox.css";
const Selectbox = () => {
  return (
    <select className="selectbox" name="filter" id="filter">
      <option value="All">All</option>
      <option value="1">Incomplete</option>
      <option value="2">Completed</option>
    </select>
  );
};

export default Selectbox;
