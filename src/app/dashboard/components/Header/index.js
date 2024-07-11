import { Box, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from '@/utils/constants';
import React from 'react';
import routes from '@/config/routes';
import staticText from '@/utils/staticText.json';
import Link from 'next/link';

const Header = ({ handleLeftDrawerToggle }) => {
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);
  const { buttons } = staticText;

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  //   // localStorage.removeItem('accessToken');
  //   // localStorage.removeItem('sessionId');
  //   // window.location.href = '/login';
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   } else if (event.key === 'Escape') {
  //     setOpen(false);
  //   }
  // }

  // // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  // const leftDrawerMenus = [
  //   {
  //     title: 'Profile',
  //     icon: <PersonIcon fontSize="small" />,
  //     path: routes.PROFILE,
  //   },
  //   {
  //     title: 'Logout',
  //     icon: <PowerSettingsNewIcon fontSize="small" />,
  //   },
  // ];

  return (
    <>
      <Typography
        variant="h4"
        component={Box}
        fontWeight="500"
        width={drawerWidth}
      >
        Dashboard
      </Typography>
      <IconButton color="inherit" onClick={handleLeftDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Box flexGrow={1} />
      <Box display="flex" gap={1}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          href={routes.PROFILE}
        >
          {buttons.myProfileBtn}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('sessionId');
            window.location.href = '/login';
          }}
        >
          {buttons.logoutBtn}
        </Button>
        {/*<IconButton
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AccountCircleIcon sx={{ color: 'common.white' }} />
        </IconButton>
         <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {leftDrawerMenus.map((ele, index) => (
                      <MenuItem key={index} onClick={handleClose}>
                        <ListItemIcon>{ele.icon}</ListItemIcon>
                        <ListItemText>{ele.title}</ListItemText>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> */}
      </Box>
    </>
  );
};

export default Header;
