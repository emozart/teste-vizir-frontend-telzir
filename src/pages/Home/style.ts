import styled from 'styled-components'
import { shade } from 'polished'
import seta from '../../assets/seta-para-baixo.png'

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 20px auto 0;
    padding: 20px;

    .title {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 60px;
        color: #114166;
        margin: 10px;
      }

      h2 {
        font-size: 40px;
        color: #114166;
      }
    }

    div {
      display: flex;
      flex-direction: row;

      @media (max-width: 767px) {
        flex-direction: column;
      }

      form {
        flex: 1;
        margin-top: 40px;
        margin-left: 30px;
        max-width: 500px;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        input,
        select {
          height: 50px;
          padding: 0 24px;
          border: 0;
          border-radius: 10px 0 0 10px;
          color: #3a3a3a;
          border: 3px solid #114166;
          font-size: 25px;
          appearance: none;
        }

        select {
          background: url(${seta}) no-repeat right #fff;
          background-size: 35px;
        }

        button {
          width: 300px;
          height: 50px;
          background: #2895e6;
          border-radius: 10px;
          border: 0;
          font-size: 25px;
          color: #fff;
          font-weight: bold;
          transition: background-color 0.2s;

          &:hover {
            background: ${shade(0.2, '#04D361')};
          }
        }
      }

      div {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: initial;
        align-items: center;
        height: 60vh;

        h2 {
          font-size: 40px;
        }

        & h2 {
          margin: 10px auto;
        }

        svg {
          align-self: flex-end;
        }
      }
    }
  }
`
