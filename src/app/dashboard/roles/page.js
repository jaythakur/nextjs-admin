'use client';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import staticText from '@/utils/staticText.json';
import { useForm } from 'react-hook-form';
import CUSTextField from '@/ui-components/FormControls/CUSTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { addRoleFrmSchema } from '@/utils/validationSchema';
import DeleteConfirmation from '@/ui-components/Dialogs/DeleteConfirmation';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from '@/redux/features/roles/api';
import { StyledTableCell } from '@/ui-components/UI';

const ManageRoles = () => {
  const {
    pageDetails: { manageRoles: pageDetails },
    formMeta,
    buttons,
  } = staticText;
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(addRoleFrmSchema),
  });
  const [delOpen, setDelOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const dispatch = useAppDispatch();
  const { roles, status, error } = useAppSelector(
    (state) => state.rolesReducer
  );

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const onSubmit = (data) => {
    if (selectedRole !== null && Object.keys(selectedRole).length > 0) {
      dispatch(updateRole({ roleId: editRole.roleId, name: data.role }));
    } else {
      dispatch(createRole({ name: data.role }));
    }
    reset({ role: '' });
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h2" component="h2">
          {pageDetails.heading}
        </Typography>
      </Box>

      <Grid container display="flex" gap={5}>
        <Grid item>
          <Card variant="outlined" sx={{ width: '500px' }}>
            <CardContent sx={{ p: 0 }}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead
                    sx={{ border: '1px solid', borderColor: 'grey.500' }}
                  >
                    <TableRow>
                      <StyledTableCell>S.No</StyledTableCell>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roles.length === 0 && status === 'loading' && (
                      <TableRow
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell colSpan={3} align="center">
                          <Skeleton animation="wave" />
                        </TableCell>
                      </TableRow>
                    )}
                    {roles.length === 0 &&
                      (status === 'idle' || status === 'rejected') && (
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell colSpan={3} align="center">
                            No data found!
                          </TableCell>
                        </TableRow>
                      )}
                    {roles.length > 0 &&
                      roles.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>
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
                                setSelectedRole(row);
                                reset({ role: row.name });
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
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
                                setSelectedRole(row);
                                setDelOpen(true);
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ width: '500px' }}>
            <CardContent>
              <Typography component="h3" variant="h3" fontWeight="bold">
                Add/Update Role
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CUSTextField
                  name="role"
                  id="role"
                  type="text"
                  control={control}
                  lableText={formMeta?.role?.lableText}
                  helperText={formMeta.role?.helperText}
                  errorMessage={errors?.role?.message}
                  textFieldProps={{
                    inputProps: { maxLength: formMeta.role.maxlength },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ mt: '10px' }}
                >
                  {buttons.saveBtn}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <DeleteConfirmation
        open={delOpen}
        onClose={() => setDelOpen(false)}
        onConfirm={() => {
          dispatch(deleteRole({ roleId: selectedRole?.roleId }));
          setDelOpen(false);
        }}
      />
    </>
  );
};

export default ManageRoles;
