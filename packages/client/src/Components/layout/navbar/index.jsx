import { Box } from "@components/mui-components";
import { NAVBAR_ITEMS } from "@constants";
import { Link } from "react-router-dom";

// const useStyles = makeStyles(() => ({
//   sidebarContainer: {
//     position: "fixed",
//     height: "100%",
//     width: "13rem",
//     backgroundColor: "#E8E8E8",
//     zIndex: 999,
//     paddingLeft: "1rem",
//   },
//   sidebarList: {
//     width: "12.5rem",
//     height: "22.25rem",
//     margin: "2rem auto auto",
//     marginTop: "6.25rem",
//     listStyleType: "none",
//     "& li": {
//       marginTop: "0.5rem",
//     },
//   },
//   sidebarItem: {
//     listStyleType: "none",
//     paddingBottom: "2.5rem",
//   },
// }));
export default function Navbar() {
  return (
    <Box sx={{ backgroundColor: "blue", width: "80%", height: "41rem" }}>
      {NAVBAR_ITEMS.map((item) => {
        return (
          <Link to={item.link}>
            <Box
              key={item.link}
              sx={{
                color: "white",
                height: "2.5rem",
                fontSize: "1.5rem",
                padding: "0.375rem 0",
              }}
            >
              {item.title}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
