import { styled } from '@stitches/react';
import { ComponentProps, ElementType, ReactNode } from 'react';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 120,
  ButtonSizing: 'border-Button',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabled):hover': {
          background: '$green500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',
        border: '2px solid $gray100',

        '&:not(:disabled):hover': {
          background: '$gray700',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
          borderColor: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  disabled?: boolean;
  as?: ElementType;
}

Button.displayName = 'Button';
