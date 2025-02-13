import styles from './DigitButtonGroup.module.css';

type Props = {
  onClick: (n: number) => () => void;
};

const DigitButtonGroup = (props: Props) => {
  return (
    <div className={`${styles.digits} flex`}>
      {DIGIT_NUMBERS.map((n) => (
        <button className={styles.digit} key={n} onClick={props.onClick(n)}>
          {n}
        </button>
      ))}
    </div>
  );
};

export default DigitButtonGroup;

const DIGIT_NUMBERS = Array.from({ length: 10 }, (_, i) => 9 - i);
