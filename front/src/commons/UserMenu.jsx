import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import menuConfigs from "../configs/menu.configs";
import { setUser } from "../redux/features/userSlice";

const UserMenu = () => {
  const [menuUser, setMenuUser] = useState(menuConfigs.user);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (e) => setAnchorEl(e.currentTarget);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    navigate("/");
  };

  useEffect(() => {
    if (user.is_admin === false && user.is_super_admin === false) {
      const listMenu = menuConfigs.user.filter(
        (item) => item.display !== "Admin"
      );
      setMenuUser(listMenu);
    }
  }, []);

  return (
    <div className="mr-4">
      {user && (
        <>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", userSelect: "none" }}
            onClick={toggleMenu}
          >
            {user.username}
          </Typography>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { padding: 0 } }}
          >
            {menuUser.map((item, index) => (
              <ListItemButton
                component={Link}
                to={item.path}
                key={index}
                onClick={() => setAnchorEl(null)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography textTransform="uppercase">
                      {item.display}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
            <ListItemButton
              sx={{ borderRadius: "10px" }}
              onClick={handleLogout}
            >
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography textTransform="uppercase">
                    Cerrar sesión
                  </Typography>
                }
              />
            </ListItemButton>
          </Menu>
        </>
      )}
    </div>
  );
};

export default UserMenu;
