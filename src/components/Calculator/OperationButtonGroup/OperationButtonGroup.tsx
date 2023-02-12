import { type Operator, OPERATE, OPERATORS } from '@/constants/operator';

import styles from './OperationButtonGroup.module.css';

type Props = {
  onClick: (o: Operator | typeof OPERATE) => () => void;
};

const OperationButtonGroup = (props: Props) => {
  return (
    <div className={`${styles.operations} subgrid`}>
      {OPERATORS.map((operation) => (
        <button
          key={operation}
          className={styles.operation}
          onClick={props.onClick(operation)}
        >
          {operation}
        </button>
      ))}
      <button className={styles.operation} onClick={props.onClick(OPERATE)}>
        {OPERATE}
      </button>
    </div>
  );
};

export default OperationButtonGroup;
