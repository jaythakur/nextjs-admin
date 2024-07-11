import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { drawerWidth, navItems } from '@/utils/constants';
import { useTheme } from '@emotion/react';
import NavItem from './components/NavItem';
import NavCollapse from './components/NavCollapse';
import { usePathname } from 'next/navigation';

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const pathname = usePathname();

  const DrawerList = (
    <Box role="presentation" sx={{ overflow: 'auto' }}>
      <List>
        {navItems.map((item, index) => {
          if (!item.children) {
            const selected = pathname === item?.path;
            return <NavItem menu={{ ...item, selected }} key={index} />;
          } else {
            const selected = item.children.some((el) => el.path === pathname);
            return <NavCollapse menu={{ ...item, selected }} key={index} />;
          }
        })}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
    >
      <Drawer
        container={container}
        open={drawerOpen}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        ModalProps={{ keepMounted: true }}
        onClose={drawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{ elevation: 3 }}
      >
        <Toolbar />
        <Box display="flex" flexDirection="column" py={1} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src={'/images/user.jpg'}
            sx={{
              width: '95px',
              height: '95px',
              border: '1px solid',
              borderColor: 'grey.300',
            }}
          />
          <Typography variant="h5" component="h2" lineHeight="24px" mt={1}>
            Jaypal Thakur
          </Typography>
          <Typography component="p" fontSize="13px" color="grey.400">
            thakurjay25@gmail.com
          </Typography>
        </Box>
        <Divider />
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
