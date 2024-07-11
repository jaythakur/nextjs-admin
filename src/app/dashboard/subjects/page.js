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
import ErrorBanner from '@/ui-components/Alerts/ErrorBanner';
import SuccessBanner from '@/ui-components/Alerts/SuccessBanner';
import { StyledTableCell } from '@/ui-components/UI';
import DeleteConfirmation from '@/ui-components/Dialogs/DeleteConfirmation';
import { deleteSubject, fetchSubjects } from '@/redux/features/subjects/api';
import AddSubjectModal from './components/AddSubjectModal';

const SubjectsPage = () => {
  const {
    pageDetails: { manageSubjects },
    buttons,
  } = staticText;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [showAddSubModal, setShowAddSubModal] = useState(false);

  const dispatch = useAppDispatch();
  const { subjects, error } = useAppSelector((state) => state.subjectReducer);

  useEffect(() => {
    dispatch(fetchSubjects());
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
          {manageSubjects.heading}
        </Typography>
        <Button
          variant="contained"
          size="medium"
          onClick={() => setShowAddSubModal(true)}
        >
          {buttons.addSubject}
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
                  <StyledTableCell>S. No</StyledTableCell>
                  <StyledTableCell align="left">Subject</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                  <StyledTableCell align="left">Created On</StyledTableCell>
                  <StyledTableCell align="left">Updated On</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.length === 0 && (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={0}
                  >
                    <TableCell
                      colSpan={6}
                      align="center"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      No Data found!
                    </TableCell>
                  </TableRow>
                )}
                {subjects &&
                  subjects.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="left">{row.subjectName}</TableCell>
                      <TableCell align="left">{row.subjectSlug}</TableCell>
                      <TableCell align="left">{row.createdOn}</TableCell>
                      <TableCell align="left">{row.updatedOn}</TableCell>
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
                          onClick={() => {
                            setSelectedRow(row);
                            setShowAddSubModal(true);
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
                            setSelectedRow(row);
                            setShowConfirmation(true);
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
      {showConfirmation && (
        <DeleteConfirmation
          open={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={() => {
            dispatch(deleteSubject({ subjectId: selectedRow.subjectId }));
            setShowConfirmation(false);
          }}
        />
      )}
      {showAddSubModal && (
        <AddSubjectModal
          open={showAddSubModal}
          onClose={() => setShowAddSubModal(false)}
          subjectInfo={selectedRow}
        />
      )}
    </>
  );
};

export default SubjectsPage;
