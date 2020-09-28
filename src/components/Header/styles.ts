import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: #114166;

  div {
    display: flex;
    max-width: 1200px;
    height: 100px;
    border-bottom: 1px solid;
    border-color: #2895e6;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    .logo {
      margin: 15px;
    }

    h1 {
      color: #2895e6;
    }

    div {
      flex: 1;
      width: 100%;
    }

    ul {
      list-style: none;
      align-content: flex-end;

      @media (max-width: 767px) {
        position: absolute;
        top: 70px;
        right: 0;
        background-color: #fff;
      }

      li {
        display: inline;
        padding: 12px 10px;
        border: 1px solid #114166;

        @media (max-width: 767px) {
          display: list-item;
        }

        a {
          background-color: rgba(255, 255, 255, 0);
          vertical-align: 20px;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: -2px;
          font-stretch: ultra-condensed;
          text-decoration: none;
          color: #6eb4ea;
          cursor: pointer;
        }
      }
    }

    .menu-fixo {
      list-style: none;
      align-content: flex-end;

      @media (max-width: 767px) {
        display: none;
      }

      li {
        display: inline;
        margin: 12px 10px;

        a {
          background-color: rgba(255, 255, 255, 0);
          vertical-align: 20px;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: -2px;
          font-stretch: ultra-condensed;
          text-decoration: none;
          color: #6eb4ea;
          cursor: pointer;
        }
      }
    }

    button {
      display: none;
      width: 35px;
      height: 35px;
      margin: 15px;
      background-color: transparent;
      align-items: center;
      border: none;

      svg {
        margin-right: 15px;
        margin-top: -3px;
      }

      @media (max-width: 767px) {
        display: inline-block;
      }
    }
  }
`
