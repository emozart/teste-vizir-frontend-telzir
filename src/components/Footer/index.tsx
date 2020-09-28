import React from 'react'

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin
} from 'react-icons/ti'

import { MdPhonelinkRing } from 'react-icons/md'

import { Container } from './styles'

const Footer: React.FC = () => (
  <Container>
    <div>
      <p>RD 2017. Todos os direitos reservados</p>
      <ul>
        <li>
          <TiSocialFacebook color="#2895E6" size={35} />
        </li>
        <li>
          <TiSocialInstagram color="#2895E6" size={35} />
        </li>
        <li>
          <TiSocialTwitter color="#2895E6" size={35} />
        </li>
        <li>
          <TiSocialYoutube color="#2895E6" size={35} />
        </li>
        <li>
          <TiSocialLinkedin color="#2895E6" size={35} />
        </li>
      </ul>
      <div />
      <div />
      <MdPhonelinkRing color="#6EB4EA" size={45} />
    </div>
  </Container>
)

export default Footer
