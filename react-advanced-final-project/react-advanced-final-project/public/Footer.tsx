import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <FooterContainer>
      <div className='container py-5'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <SocialLink href='https://facebook.com'>
              <FaFacebookF />
            </SocialLink>
            <SocialLink href='https://twitter.com'>
              <FaTwitter />
            </SocialLink>
            <SocialLink href='https://youtube.com'>
              <FaYoutube />
            </SocialLink>
            <SocialLink href='https://instagram.com'>
              <FaInstagram />
            </SocialLink>
          </div>
          <div className='col-md-12'>
            <p className='mt-3'>
              {year} Copyright &copy; All rights reserved{' '}
              <a href='https://yourwebsite.com'>MIT license</a>.
            </p>
            <span>
              Give this <a href='https://github.com/yourrepo'>repo</a> a &#11088;
            </span>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin-top: 5rem;
  background: #f8f8f8;
`;

const SocialLink = styled.a`
  color: #888;
  width: 18px;
  font-size: 22px;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default Footer;
