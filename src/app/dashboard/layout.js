'use client';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Main } from '@/ui-components/UI';
import routes from '@/config/routes';
import { redirect } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getUserDetail } from '@/redux/features/users/api';
import { fetchStatusList } from '@/redux/features/common/api';

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(getUserDetail());
      dispatch(fetchStatusList());
    } else {
      redirect(routes.LOGIN);
    }
  }, []);

  return (
    <>
      {Object.keys(currentUser).length > 0 && (
        <Box display="flex" height="100%">
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Header handleLeftDrawerToggle={() => setOpen(!open)} />
            </Toolbar>
          </AppBar>

          <Sidebar
            drawerOpen={!matchDownMd ? open : !open}
            drawerToggle={() => setOpen(!open)}
          />
          <Main theme={theme} open={open}>
            <Toolbar />
            <Container
              maxWidth={false}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                width: '100%',
                p: 5,
              }}
            >
              {children}
            </Container>
          </Main>
        </Box>
      )}
    </>
  );
};

export default DashboardLayout;
