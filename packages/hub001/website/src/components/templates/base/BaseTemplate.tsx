import { createUseStyles } from 'react-jss';
import { IBaseTemplate } from './BaseTemplate.interface';

const useStyles = createUseStyles({
  wrapper: {},
});

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{sampleTextProp}</div>;
};

export default BaseTemplate;
