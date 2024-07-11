import Alert from '@mui/material/Alert';
import {
  AlertTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function ErrorBanner({ errors }) {
  const multiple = Object.keys(errors).length > 1;
  return (
    <Alert
      severity="error"
      sx={{
        borderRadius: '8px',
        borderTop: '5px solid',
        borderColor: 'error.main',
        mb: 2,
      }}
    >
      {multiple ? (
        <>
          <AlertTitle>The following items need your attention:</AlertTitle>
          <List dense={false}>
            {Object.values(errors).map((ele, index) => {
              return (
                <ListItem disablePadding key={index}>
                  <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={ele} />
                </ListItem>
              );
            })}
          </List>
        </>
      ) : (
        errors?.message
      )}
    </Alert>
  );
}
