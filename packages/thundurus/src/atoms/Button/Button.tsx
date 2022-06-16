import React, {
  useState,
  ReactNode,
  useEffect,
  FC
} from 'react';
import styled from 'styled-components';
import {
  JSXElementConstructor
} from '../../../../../../../../../Applications/IntelliJ IDEA.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react';

type ThundurusSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps<partial> {
  children: ReactNode | string;
  onClick?: () => void;
  color?: string;
  size?: ThundurusSizes;
  radius?: ThundurusSizes;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  padding?: string;
  verticalPadding?: string
  horizontalPadding?: string
  style?: React.CSSProperties;
}

export interface ButtonStyleProps<partial> {
  color?: string;
  radiusValue?: string;
  size?: string;
  buttonSize?: string;
  radiusSize?: string;
  padding?: string;
  verticalPadding?: string;
  horizontalPadding?: string;
}

const StyledButton: JSXElementConstructor<any> = styled.button<ButtonStyleProps<string>>`
    border: none;
    
    
    text-align: center;
    font-weight: 600;
    wrap: nowrap;
    width: auto;
    color: white;
    background-color: ${({color}) => color ? color : 'red'};
    border-radius: ${({radiusSize}) => radiusSize ? radiusSize : '4px'};
    ${({buttonSize}) => buttonSize ? buttonSize : 'sm'};
    ${({padding}) =>
  
      padding
        ? padding
        : '5px 20px;'
      };
      
    ${({verticalPadding}) => 
      verticalPadding
        ? `
          padding-top: ${verticalPadding};
          padding-bottom: ${verticalPadding};
          ` 
        : null
      };
    ;`;


const Button: FC<ButtonProps> = ({
  children,
  radius,
  color,
  rightIcon,
  onClick,
  size,
  padding,
  verticalPadding,
  horizontalPadding,
  style,
  ...props
}: ButtonProps) => {

  const buttonSize =
    size === 'xs'
      ? `
        height: 30px;
        font-size: 12px;
        `
      : size === 'sm'
        ? `
          height: 36px;
          font-size: 14px;
          `
        : size === 'md'
          ? `
            height: 42px;
            font-size: 16px;
            `
          : size === 'lg'
            ? `
              height: 50px;
              font-size: 18px;
              `
            : `
              height: 56px;
              font-size: 20px;
              `;

  const paddingSizes = `
    padding-left: ${verticalPadding};
    padding-right: ${verticalPadding};
  `;

  const radiusSize =
    radius === 'xs'
      ? '2px'
      : radius === 'sm'
        ? '4px'
        : radius === 'md'
          ? '8px'
          : radius === 'lg'
            ? '16px'
            : '32px';


  return (
    <StyledButton
      style={style}
      color={color}
      buttonSize={buttonSize}
      radiusSize={radiusSize}
      onClick={onClick}
      padding={padding}
      verticalPadding={verticalPadding}
    >
      {children}
    </StyledButton>
  )
}

export default Button;
