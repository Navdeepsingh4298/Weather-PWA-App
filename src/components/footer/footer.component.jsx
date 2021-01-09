import React from 'react';
import { FooterContainer } from './footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <p>
        &copy; {year} MADE IN INDIA by
        <a
          href="https://github.com/navdeepsingh4298"
          rel="noreferrer"
          target="_blank"
        > Navdeep Singh
        </a>
      </p>
    </FooterContainer>
  )
}

export default Footer;