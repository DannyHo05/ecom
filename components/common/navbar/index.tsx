import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import logo from "@/assets/images/logoGHTK.png";
import { useTranslation, Trans } from "next-i18next";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 100,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyleNav = styled(BottomNavigationAction)(({ theme }) => ({
  "& Mui-selected": {
    "$ span": {
      fontSize: "20px",
    },
  },
  "& 	.MuiBottomNavigationAction-label": {
    fontSize: "20px",
  },
}));

export default function PrimarySearchAppBar() {
  const pages = ["Home", "Shop", "Contact", "Blog", "About"];
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isHiddenSearch, setIsHiddenSearch] = React.useState<boolean>(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [valueSearch, setValueSearch] = React.useState("");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  let auth: boolean = false;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [option, setOption] = React.useState<string>("Home");

  const setOptionNav = (
    e: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setOption(newValue);
  };

  const handleHiddenSearch = () => {
    setIsHiddenSearch(!isHiddenSearch);
    setValueSearch("");
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    if (!isHiddenSearch) setIsHiddenSearch(true);
    setAnchorElNav(null);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuLogin = ()=>{
    router.replace("/auth/login")
  }

  const handleMenuSignUp = () =>{

  }
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {auth && <MenuItem onClick={handleMenuClose}>Profile</MenuItem>}
      {auth && <MenuItem onClick={handleMenuClose}>My account</MenuItem>}
      {!auth && <MenuItem onClick={handleMenuLogin}>Login</MenuItem>}
      {!auth && <MenuItem onClick={handleMenuSignUp}>Sign Up</MenuItem>}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  function handlerRedirectHome(): void {
    router.replace("/home", undefined, {
      scroll: true,
    });
  }

  return (
    <Box sx={{ height: "64px", width: 1, display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          maxHeight: "64px",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Image
                src={logo}
                alt={"HAHA"}
                className="h-[50px] w-fit cursor-pointer"
                onClick={() => handlerRedirectHome()}
              ></Image>
            </Box>
            <BottomNavigation
              showLabels
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
              value={option}
              onChange={setOptionNav}
            >
              {pages.map((page) => (
                <StyleNav
                  label={page}
                  value={page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  classes={{}}
                ></StyleNav>
              ))}
            </BottomNavigation>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: red,
                  }}
                >
                  <Typography textAlign="center">{t(`${page}`)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              // display: { xs: "flex", md: "none" },
              position: "absolute",
              left: 0,
              right: 0,
              zIndex: -99999,
            }}
            className="hidden md:flex lg:hidden"
          >
            <Image
              src={logo}
              alt={"HAHA"}
              className="h-[50px] w-fit cursor-pointer m-auto"
              onClick={() => handlerRedirectHome()}
            ></Image>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Search>
              <SearchIconWrapper onClick={() => handleHiddenSearch()}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  display: "block",
                  backgroundColor: "white",
                  "& .MuiInputBase-input": {
                    width: `${isHiddenSearch ? "0px" : "20ch"}`,
                    border: "1px solid black",
                    borderRadius: "16px",
                  },
                }}
                onChange={(e) => setValueSearch(e.target.value)}
                value={valueSearch}
              />
            </Search>

            <Box sx={{}} />
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {auth && (
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                )}
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={1} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={1} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </>
          </Box>
        </Toolbar>
      </AppBar>
      {!auth && renderMobileMenu}
      {!auth && renderMenu}
    </Box>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { red } from "@mui/material/colors";

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const { data } = await   // your fetch function here

//   return {
//     props: {

//     }
//   }
// }
