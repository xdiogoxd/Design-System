import React, {
  ComponentProps,
  ComponentRef,
  ElementType,
  forwardRef,
} from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  placeholder?: string;
  disabled?: boolean;
}
export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);
