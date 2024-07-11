'use client';
import routes from '@/config/routes';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import staticText from '@/utils/staticText.json';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { deleteUser, fetchUsers } from '@/redux/features/users/api';
import ErrorBanner from '@/ui-components/Alerts/ErrorBanner';
import SuccessBanner from '@/ui-components/Alerts/SuccessBanner';
import { StyledTableCell } from '@/ui-components/UI';
import DeleteConfirmation from '@/ui-components/Dialogs/DeleteConfirmation';

const UsersPage = () => {
  const {
    pageDetails: { manageUsers },
    buttons,
  } = staticText;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const dispatch = useAppDispatch();
  const { users, error, currentUser } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h2" component="h2">
          {manageUsers.heading}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          href={routes.CREATE_USER}
          size="medium"
        >
          {buttons.addNewUser}
        </Button>
      </Box>
      <SuccessBanner />
      {error?.errors && Object.keys(error.errors).length > 0 && (
        <ErrorBanner errors={error?.errors} />
      )}
      <Card variant="outlined">
        <CardContent sx={{ p: 0 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ border: '1px solid', borderColor: 'grey.500' }}>
                <TableRow>
                  <StyledTableCell>Username/Email</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                  <StyledTableCell align="right">First name</StyledTableCell>
                  <StyledTableCell align="right">Middle name</StyledTableCell>
                  <StyledTableCell align="right">Last name</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((row) => (
                    <TableRow
                      key={row.userId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.username}
                      </TableCell>
                      <TableCell align="right">{row.role}</TableCell>
                      <TableCell align="right">{row.firstName}</TableCell>
                      <TableCell align="right">{row.middleName}</TableCell>
                      <TableCell align="right">{row.lastName}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          sx={{
                            color: 'primary.main',
                            '&:hover': {
                              bgcolor: 'primary.main',
                              color: 'common.white',
                            },
                          }}
                          component={Link}
                          href={routes.SUBJECTS + '/' + row.name}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        {currentUser.userId !== row.userId && (
                          <IconButton
                            size="small"
                            sx={{
                              color: 'primary.main',
                              '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'common.white',
                              },
                            }}
                            onClick={() => {
                              setSelectedUser(row);
                              setShowConfirmation(true);
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      {showConfirmation && (
        <DeleteConfirmation
          open={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={() => {
            dispatch(deleteUser({ userId: selectedUser?.userId }));
            setShowConfirmation(false);
          }}
        />
      )}
    </>
  );
};

export default UsersPage;
