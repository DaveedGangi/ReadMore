// Style your elements here

import styled from 'styled-components'

export const Image = styled.img`
  height: 200px;
  width: 300px;
  @media screen and (min-width: 767px) {
    width: 400px;
    height: 220px;
  }
`
export const Heading = styled.h1`
  text-align: center;
  color: #1e293b;
  font-family: Roboto;
`

export const TopSidePara = styled.p`
  text-align: center;
  color: #334155;
`

export const ImageBg = styled.div`
  text-align: center;
`
export const Description = styled.p`
  color: #334155;
`
export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border-radius: 8px;
  border: 0px;
  height: 33px;
  width: 100px;
  line-height: 1.5;
`

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  height: 300px;
  width: 300px;
  @media screen and (min-width: 767px) {
    width: 400px;
  }
`
export const ButtonBg = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
