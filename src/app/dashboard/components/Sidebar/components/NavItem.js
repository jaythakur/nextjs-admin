import {
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';

const NavItem = ({ menu }) => {
  return (
    <ListItemButton
      selected={menu?.selected}
      component={Link}
      href={menu.path}
      sx={{
        py: '6px',
        '&.Mui-selected': {
          backgroundColor: grey[400],
        },
      }}
    >
      <ListItemAvatar sx={{ minWidth: '46px' }}>
        <Avatar
          sx={{
            bgcolor: menu?.selected ? 'primary.main' : 'default',
            width: '32px',
            height: '32px',
            color: menu?.selected ? 'common.white' : 'default',
          }}
        >
          {menu.icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={menu.title}
        sx={{ color: menu?.selected ? 'primary.main' : 'default' }}
      />
    </ListItemButton>
  );
};

export default NavItem;
