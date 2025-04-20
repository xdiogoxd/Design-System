import { ComponentProps } from 'react';
import { styled } from '../styles';

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  TextAreaSizing: 'border-TextArea',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea';
