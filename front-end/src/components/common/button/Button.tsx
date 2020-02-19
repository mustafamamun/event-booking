import React from 'react';
import { Button } from 'react-bootstrap';
const GenericButton = ({ text, ...rest }: any) => {
  return <Button {...rest}>{text}</Button>;
};

export default GenericButton;
