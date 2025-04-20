import React, { ComponentProps, ElementType } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  placeholder?: string;
  disabled?: boolean;
  as?: ElementType;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
}
