import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #114166;

  div {
    display: flex;
    width: 1200px;
    height: 80px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 1135px) {
      width: 100%;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      color: #6eb4ea;
      margin-right: 30px;

      @media (max-width: 1135px) {
        margin-right: 5px;
      }
    }

    ul {
      list-style: none;
      align-content: flex-end;
      margin: 0 30px;

      @media (max-width: 1135px) {
        display: none;
      }

      li {
        display: inline;
        margin: 6px 20px;
      }
    }

    div {
      flex: 1;
      width: 100%;

      @media (max-width: 1135px) {
        display: none;
      }
    }
  }
`
