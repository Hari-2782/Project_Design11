import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import HistoryIcon from "@mui/icons-material/History";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import Breadcrumb from "../AdminBreadcrumbs/AdminBreadcrumbs";
import AdminCards from "../AdminCards/AdminCards";
import AdminCharts from "../AdminCharts/AdminCharts";
import CustomerTable from "../CustomerTable/CustomerTable";
import OrderStatus from "../OrderStatus/OrderStatus.jsx";
import OrderDetails from "../OrderDetails/OrderDetails";
import MaterialDetail from "../MaterialDeatails/MaterialDeatails.jsx";
import MaterialStates from "../MaterialStates/MaterialStates.jsx";
import PaymentHistory from "../PaymentHistory/PaymentHistory.jsx";
import OrderHistory from "../OrderHistory/OrderHistory.jsx";
import PromotionalMailPage from "../PromotionalMailPage/PromotionalMailPage.jsx";
import PersonalMail from "../PersonalMail/PersonalMail.jsx";

const drawerWidth = 260;

const nestedListItems = [
  {
    text: "Customers",
    icon: <PeopleIcon />,
    children: [
      {
        text: "Registered Customers",
        icon: <PeopleIcon />,
        path: "/admin/CustomerTable",
      },
    ],
  },
  {
    text: "Orders",
    icon: <ShoppingCartIcon />,
    children: [
      {
        text: "Order Details",
        icon: <ShoppingCartIcon />,
        path: "/admin/orders/details",
      },
      {
        text: "Order History",
        icon: <HistoryIcon />,
        path: "/admin/orders/history",
      },
      {
        text: "Order Status",
        icon: <ShoppingCartIcon />,
        path: "/admin/orders/OrderStatus",
      },
    ],
  },
  {
    text: "Materials",
    icon: <InventoryIcon />,
    children: [
      {
        text: "Material Details",
        icon: <InventoryIcon />,
        path: "/admin/materials/details",
      },
      {
        text: "Material States",
        icon: <InventoryIcon />,
        path: "/admin/materials/states",
      },
    ],
  },
  {
    text: "Payment History",
    icon: <HistoryIcon />,
    path: "/admin/payment-history",
  },
  {
    text: "Mailing",
    icon: <MailIcon />,
    children: [
      {
        text: "PromotionalMail",
        icon: <MailIcon />,
        path: "/admin/mailing/PromotionalMail",
      },
      {
        text: "PersonalMail",
        icon: <MailIcon />,
        path: "/admin/mailing/PersonalMail",
      },
      {
        text: "MailHistory",
        icon: <HistoryIcon />,
        path: "/admin/mailing/MailHistory",
      },
    ],
  },
  { text: "Invoice", icon: <ReceiptIcon />, path: "/admin/invoice" },
  { text: "feedbacks", icon: <SettingsIcon />, path: "/admin/settings" },
];

function AdminSidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (text) => {
    setOpenDrawer((prevDrawer) => (prevDrawer === text ? null : text));
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElUser(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#b71c1c",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link
              to="/admin/AdminCards"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              UNIQUECREATION
            </Link>
          </Typography>
        </Toolbar>
        <Tooltip title="Open profile menu">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt="User" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>
            Profile Management
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.removeItem("userInfo");
              navigate("/");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              padding: 0, // Ensure there is no padding
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Breadcrumb />
        <Routes>
          <Route path="/CustomerTable" element={<CustomerTable />} />
          <Route path="/orders/details" element={<OrderDetails />} />
          <Route path="/orders/History" element={<OrderHistory />} />
          <Route path="/orders/OrderStatus" element={<OrderStatus />} />
          <Route path="/materials/details" element={<MaterialDetail />} />
          <Route path="/materials/states" element={<MaterialStates />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route
            path="/mailing/PromotionalMail"
            element={<PromotionalMailPage />}
          />
          <Route path="/mailing/PersonalMail" element={<PersonalMail />} />
          <Route
            path="/AdminCards"
            element={
              <>
                <AdminCards />
                <AdminCharts />
              </>
            }
          />
        </Routes>
      </Box>
    </Box>
  );

  function DrawerContent() {
    return (
      <div>
        <Toolbar />
        <Divider />
        <List sx={{ padding: 0 }}>
          {nestedListItems.map((item) => (
            <React.Fragment key={item.text}>
              {item.children ? (
                <>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleClick(item.text)}
                      sx={{ paddingLeft: 2, paddingRight: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{ marginLeft: 0 }}
                      />
                      {openDrawer === item.text ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                  </ListItem>
                  <Collapse
                    in={openDrawer === item.text}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItem
                          key={child.text}
                          disablePadding
                          sx={{ paddingLeft: 4 }}
                        >
                          <ListItemButton
                            component={Link}
                            to={child.path}
                            sx={{ paddingLeft: 2, paddingRight: 2 }}
                          >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={child.text}
                              sx={{ marginLeft: 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    sx={{ paddingLeft: 2, paddingRight: 2 }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ marginLeft: 0 }} />
                  </ListItemButton>
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }
}

AdminSidebar.propTypes = {
  window: PropTypes.func,
};

export default AdminSidebar;
