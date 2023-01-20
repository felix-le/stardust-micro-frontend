import Image from 'next/image';
import { useStyles } from './CatCard.styles';
import { ICatCard } from './CatCard.interface';
import CatImage from '../../../../../asset/images/time-cat.jpeg';

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={CatImage}
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
