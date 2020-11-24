import React from 'react';
import {createCn, cx} from '@/helpers';
import {Sizes} from '@/interfaces';
import './styles.scss';

interface TextProps {
  bold?: boolean;
  size?: Sizes;
  color?: 'black' | 'gray';
  className?: string;
  htmlFor?: string;
  component?: 'p' | 'div' | 'span' | 'label';
  children: React.ReactNode;
}

const tcn = createCn('text');
export const Text: React.FC<TextProps> = ({
  bold,
  component = 'div',
  size = 'md',
  color = 'black',
  htmlFor,
  className,
  children,
}) => {
  return React.createElement(
    component,
    {className: cx(tcn({size, color, bold}), className), htmlFor},
    children
  );
};
