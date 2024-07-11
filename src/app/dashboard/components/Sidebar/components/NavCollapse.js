import {
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  List,
  ListItemIcon,
} from '@mui/material';
import Link from 'next/link';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { grey } from '@mui/material/colors';

const NavCollapse = ({ menu }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (menu.menu === pathname.split('/')[2]) {
      setOpen(true);
    } else {
      const isSubMenuSelected = menu.children.some(
        (el) => el.path === pathname
      );
      setOpen(isSubMenuSelected);
    }
  }, [pathname]);
  return (
    <>
      <ListItemButton
        sx={{
          py: '6px',
          borderBottom: open ? '2px solid' : 0,
          borderColor: 'primary.main',
        }}
        onClick={handleClick}
      >
        <ListItemAvatar sx={{ minWidth: '46px' }}>
          <Avatar
            sx={{
              bgcolor: open ? 'primary.main' : 'default',
              width: '32px',
              height: '32px',
              color: open ? 'common.white' : 'default',
            }}
          >
            {menu.icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ variant: 'body2' }}
          primary={menu.title}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.children.map((ele, index) => {
            const selected = pathname == ele?.path;
            return (
              <ListItemButton
                component={Link}
                href={ele.path}
                selected={selected}
                sx={{
                  pl: 4,
                  '&.Mui-selected': {
                    backgroundColor: grey[400],
                  },
                }}
                key={index}
              >
                <ListItemAvatar sx={{ minWidth: '46px' }}>
                  <Avatar
                    sx={{
                      bgcolor: selected ? 'primary.main' : 'default',
                      width: '32px',
                      height: '32px',
                      color: selected ? 'common.white' : 'default',
                    }}
                  >
                    {ele.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ele.title} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default NavCollapse;
