import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import { MdPhonelinkRing } from 'react-icons/md'
import { ImMenu } from 'react-icons/im'

const Header: React.FC = () => {
  const [showMenuButton, setShowMenuButton] = useState(false)

  const handleShowMenuButton = useCallback(() => {
    if (showMenuButton) {
      setShowMenuButton(false)
    } else {
      setShowMenuButton(true)
    }
  }, [showMenuButton])

  return (
    <Container>
      <div>
        <MdPhonelinkRing className="logo" color="#6EB4EA" size={45} />
        <h1>Telzir</h1>
        <button onClick={handleShowMenuButton}>
          <ImMenu color="#6EB4EA" size={35} />
        </button>
        {showMenuButton && (
          <ul>
            <li>
              <Link to={'#'}>PLANOS</Link>
            </li>
            <li>
              <Link to={'#'}>INTERNET</Link>
            </li>
            <li>
              <Link to={'#'}>RECARGA</Link>
            </li>
            <li>
              <Link to={'#'}>PORTABILIDADE</Link>
            </li>
            <li>
              <Link to={'#'}>ATENDIMENTO</Link>
            </li>
          </ul>
        )}
        <ul className="menu-fixo">
          <li>
            <Link to={'#'}>PLANOS</Link>
          </li>
          <li>
            <Link to={'#'}>INTERNET</Link>
          </li>
          <li>
            <Link to={'#'}>RECARGA</Link>
          </li>
          <li>
            <Link to={'#'}>PORTABILIDADE</Link>
          </li>
          <li>
            <Link to={'#'}>ATENDIMENTO</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
