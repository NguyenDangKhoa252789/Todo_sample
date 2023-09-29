import "./selectbox.css";
const Selectbox = () => {
  return (
    <select className="selectbox" name="filter" id="filter">
      <option value="All">All</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  );
};

export default Selectbox;
