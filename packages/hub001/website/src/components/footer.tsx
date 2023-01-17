import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    padding: 40,
    textAlign: 'left',
  },
});

function Footer() {
  const classes = useStyles();

  return <h1 className={classes.wrapper}>Hub Footer</h1>;
}

export default Footer;
