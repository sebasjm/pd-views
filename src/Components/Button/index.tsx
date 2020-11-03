import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { EButtonTypes } from '../../enums';

const Anchor = styled.a<{ full?: boolean; format: EButtonTypes }>`
  width: ${(props): string => (props.full ? '100%' : 'auto')};
  padding: 18px;
  line-height: 32px;
  min-width: 224px;
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  border: 2px solid var(--colorPrimary);
  border-radius: 5px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height:20px;
  text-decoration: none;
  text-align: center;
  svg {
    margin-right: 8px;
    vertical-align: middle;
    position: relative;
    top: -2px;
  }

  &:disabled {
    background-color: var(--ultra-light-gray);
    border-color: var(--ultra-light-gray);
    color: var(--light-gray);
    cursor: not-allowed;
  }

  ${(props): string => {
    const { format } = props;
    switch (format) {
      case EButtonTypes.PRIMARY:
        return `
          color: white;
          background: var(--colorPrimary);
          svg path {
            stroke: white;
          }
        `;
      case EButtonTypes.SECONDARY:
        return `
          color: var(--colorPrimary);
          background: white;
          svg path {
            stroke: var(--colorPrimary);
          }
        `;
      case EButtonTypes.SECONDARYICON:
        return `
          color: var(--colorPrimary);
          background: white;
        `;
      default:
        return '';
    }
  }}
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button: FunctionComponent<{
  type: 'button' | 'submit' | 'reset';
  format: EButtonTypes;
  href?: string;
  onClick?: (p?: any) => void;
  loading?: boolean;
  disabled: boolean;
  full?: boolean;
  external?: boolean;
}> = ({
  href,
  children,
  type,
  onClick,
  loading,
  disabled,
  format,
  full,
  external
}) => {
  if (href) {
    const isExternal = href && href.startsWith('http');
    const a = (
      <Anchor href={href} format={format} full={full}>
        {loading ? '...loading' : children}
      </Anchor>
    );

    return isExternal || external ? a : <a href={href}>{a}</a>;
  }

  return (
    <Anchor
      as='button'
      type={type}
      onClick={onClick}
      format={format}
      disabled={disabled}
      full={full}
    >
      {loading ? 'loading...' : children}
    </Anchor>
  );
};

export default Button;
