import React from 'react';
import { Heading } from './header.styles';

const Header = ({ name }) => (
  <div>
    <Heading>{name}</Heading>
  </div>
)

export default Header;
