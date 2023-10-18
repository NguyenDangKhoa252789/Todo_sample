import info from "./info.js";
import tags from "./tags.js";
import server from "./servers.js";
import components from "./components.js";
import path from "./todo/index.js";
const options = {
  ...info,
  ...server,
  ...components,
  ...tags,
  ...path,
};

export default options;
