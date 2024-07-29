import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { NavContainer, NavLink } from "./Navigation.style";

const navLink = [
  { path: "/", label: "Products", icon: <AppsIcon /> },
  { path: "/category", label: "Category", icon: <CategoryIcon /> },
  { path: "/cart", label: "Cart", icon: <ShoppingCartCheckoutIcon /> },
  { path: "/users", label: "User", icon: <PersonIcon /> },
];

const Navigation = () => {
  return (
    <Box component="nav" p={2} color={"#fff"}>
      <NavContainer>
        {navLink.map((link) => (
          <NavLink
            key={link.path}
            component={RouterLink}
            to={link.path}
            underline="none"
            color={"#fff"}>
            {link.icon} {link.label}
          </NavLink>
        ))}
      </NavContainer>
    </Box>
  );
};

export default Navigation;
