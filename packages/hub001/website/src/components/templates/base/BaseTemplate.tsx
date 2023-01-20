import { IBaseTemplate } from './BaseTemplate.interface';
import { useStyles } from './BaseTemplate.styles';

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  const styles = useStyles();
  return <div className={styles.wrapper}>{sampleTextProp}</div>;
};

export default BaseTemplate;
