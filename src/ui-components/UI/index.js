import { TableCell, styled, tableCellClasses } from '@mui/material';
import { drawerWidth } from '@/utils/constants';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme',
})(({ theme, open }) => ({
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  ),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down('md')]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));
