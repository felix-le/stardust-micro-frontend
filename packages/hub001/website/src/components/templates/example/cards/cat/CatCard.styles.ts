import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  container: {
    '& > *': { boxSizing: 'border-box', padding: '0', margin: '0' },
    margin: '1rem',
  },
  card__image: { maxWidth: '100%', display: 'block', objectFit: 'cover' },
  card: {
    fontFamily: "'Quicksand', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    width: 'clamp(20rem, calc(20rem + 2vw), 22rem)',
    overflow: 'hidden',
    boxShadow: '0 0.1rem 1rem rgba(0, 0, 0, 0.1)',
    borderRadius: '1em',
    background: ['#ece9e6', 'linear-gradient(to right, #ffffff, #ece9e6)'],
  },
  card__body: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    h4: { fontSize: '1.5rem', textTransform: 'capitalize' },
  },
  card__header: {},
  tag: {
    alignSelf: 'flex-start',
    padding: '0.25em 0.75em',
    borderRadius: '1em',
    fontSize: '0.75rem',
  },
  'tag-blue': {
    background: ['#56ccf2', 'linear-gradient(to bottom, #2f80ed, #56ccf2)'],
    color: '#fafafa',
  },
  card__footer: { display: 'flex', padding: '1rem', marginTop: 'auto' },
  user: { display: 'flex', gap: '0.5rem' },
  user__image: { borderRadius: '50%' },
  user__info: {
    small: { color: '#666' },
  },
});
export { useStyles };
