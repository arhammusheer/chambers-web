import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Material UI components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
// top right form
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// Custom component import
import VerificationCard from './VerificationCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 15, 5),
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  marginTop: {
    marginTop: theme.spacing(5)
  },
  rightColumnFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function MemeCardList(props) {
  const classes = useStyles();
  const { id, verificationList } = props;
  // initialize pagination constants
  const numItemsPerPage = 30;
  const [pageNumber, setPageNumber] = React.useState(1);
  const numPages = Math.ceil(verificationList.length / numItemsPerPage);
  const handlePageChange = (event, value) => {
    setPageNumber(value);
    window.scrollTo(0, 0); // scroll to top
  };
  
  return (
    <Container id={id} className={classes.root}>
      <Container className={classes.columnFlex}>
        <Grid container justify="center" spacing={1}>
          {verificationList.slice(((pageNumber - 1)*(numItemsPerPage)), ((pageNumber)*(numItemsPerPage))).map((obj, idx) => (
            <Grid key={`${obj.name} ${idx}`} item xs={12} sm={6} lg={4} xl={3}>
              <VerificationCard
                obj={obj}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination count={numPages} page={pageNumber} onChange={handlePageChange} color="primary" size="large" showFirstButton showLastButton className={classes.marginTop} />
      </Container>
    </Container>
  );
}
