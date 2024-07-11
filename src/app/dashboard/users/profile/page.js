'use client';
import { subjectFormStages } from '@/utils/constants';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ProfileForm from './ProfileForm';
import ChangePassword from './ChangePassword';
import { useAppSelector } from '@/redux/hooks';
import ErrorBanner from '@/ui-components/Alerts/ErrorBanner';
import SuccessBanner from '@/ui-components/Alerts/SuccessBanner';

const ProfilePage = () => {
  const [stage, setStage] = useState(0);
  const { error } = useAppSelector((state) => state.userReducer);

  return (
    <>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h2" component="h3">
          Profile
        </Typography>
      </Box>
      <SuccessBanner />
      {error?.errors && Object.keys(error.errors).length > 0 && (
        <ErrorBanner errors={error?.errors} />
      )}

      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <List>
                {subjectFormStages.map((ele, index) => {
                  const selected = stage === index;
                  return (
                    <ListItem disablePadding sx={{ mb: '8px' }} key={index}>
                      <ListItemButton
                        sx={{
                          padding: '1rem',
                          borderRadius: '6px',
                          bgcolor: selected ? 'primary.main' : 'default',
                          color: selected ? 'common.white' : 'default',
                          '&:hover': {
                            bgcolor: selected ? 'primary.main' : 'default',
                            color: selected ? 'common.white' : 'default',
                          },
                        }}
                        onClick={() => setStage(index)}
                      >
                        <ListItemIcon>
                          <Avatar
                            sx={{
                              bgcolor: selected ? 'common.white' : 'default',
                              color: selected ? 'primary.main' : 'default',
                            }}
                          >
                            {index + 1}
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={ele.primary}
                          secondary={ele.secondary}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={12} sm={9}>
              <>{stage === 0 ? <ProfileForm /> : <ChangePassword />}</>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfilePage;
