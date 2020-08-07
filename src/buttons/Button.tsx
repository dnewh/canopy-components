import React, {forwardRef} from 'react'
import classnames from 'classnames';

import './btn.scss';

interface Props {
  children?: React.ReactNode,
  className?: string,
  primary?: boolean,
  outline?: boolean,
  compact?: boolean
};

export type Ref = HTMLButtonElement;

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = forwardRef<Ref, Props>(({children, className, primary, outline, compact, ...restProps}, ref) => (
  <button ref={ref} className={classnames('btn', {primary: 'btn--style-primary', outline: 'btn--style-outline', compact: 'btn--size-compact'}, className)} {...restProps} >
    {children}
  </button>
));

export default Button;
