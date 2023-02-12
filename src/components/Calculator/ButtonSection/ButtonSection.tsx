import { memo } from 'react';

import {
  AllClearButton,
  DigitButtonGroup,
  OperationButtonGroup,
} from '@/components/Calculator';
import type { CalculatorArgs } from '@/components/Calculator/Calculator';

type Props = {
  onClick: (arg?: CalculatorArgs) => () => void;
};

const ButtonSection = (props: Props) => {
  return (
    <>
      <DigitButtonGroup onClick={props.onClick} />
      <AllClearButton onClick={props.onClick} />
      <OperationButtonGroup onClick={props.onClick} />
    </>
  );
};

export default memo(ButtonSection);
