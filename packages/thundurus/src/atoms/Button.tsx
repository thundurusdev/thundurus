import React, {
  ReactNode,
  FC
} from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick
}: ButtonProps) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button;
