import { Box, Typography } from '@mui/material';

const PageHeader = ({ heading, subHeading }) => {
  if (heading === '' && subHeading === '') return null;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="primary.main"
        color="common.white"
        alignItems="center"
        py={2}
        sx={{
          backgroundImage: `url(${'/images/header-bg.png'})`,
          backgroundSize: '300px',
          backgroundBlendMode: 'overlay',
        }}
      >
        {heading && (
          <Typography variant="h1" component="h1" color="common.white">
            {heading}
          </Typography>
        )}
        {subHeading && (
          <Typography
            variant="h4"
            component="h4"
            fontWeight="300"
            lineHeight="27px"
            color="grey.200"
            p={1}
          >
            {subHeading}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default PageHeader;
