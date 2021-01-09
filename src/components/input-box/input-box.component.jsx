import React from 'react';
import { InputBoxContainer } from "./input-box.styles";

const InputBox = (props) => (
  <InputBoxContainer
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.handleChange}
    onKeyPress={props.handleKeyPress}
  />
)

export default InputBox;
