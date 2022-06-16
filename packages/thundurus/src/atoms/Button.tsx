import React, {
  useState,
  ReactNode,
  useEffect,
  FC
} from 'react';

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: sizes;
  color?: string;
  radius?: sizes;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({
  children,
  size = 'sm',
  radius = 'sm',
  color = 'blue',
  leftIcon,
  rightIcon,
  onClick,
  style,
}: ButtonProps) => {

  const buttonSize =
    size === 'xs'
      ? {
        height: 30,
        fontSize: 12,
        }
          : size === 'sm'
          ? {
            height: 36,
            fontSize: 14,
            }
          : size === 'md'
            ? {
              height: 42,
              fontSize: 16,
              }
            : size === 'lg'
              ? {
                height: 50,
                fontSize: 18,
                }
              : {
                height: 56,
                fontSize: 20,
                };

  const radiusValue =
    radius === 'xs'
      ? 2
      : radius === 'sm'
        ? 4
        : radius === 'md'
          ? 8
          : radius === 'lg'
            ? 16
              : 32

  const defaultStyles = {
    border: 'none',
    borderRadius: radiusValue,
    padding: '5px 20px',
    textAlign: 'center',
    fontWeight: 600,
    wrap: 'nowrap',
    width: 'auto',
    color: 'white',
    backgroundColor: color,
    ...buttonSize,
    ...style,
    } as React.CSSProperties;

  return (
    <button
      onClick={onClick}
      style={defaultStyles}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}

export default Button;
