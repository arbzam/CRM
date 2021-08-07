import { useMediaQuery, useTheme } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Navbar = () => {
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.down("xs"));

  if (sm || xs) {
    return <Topbar />;
  }

  return <Sidebar />;
};

export default Navbar;
