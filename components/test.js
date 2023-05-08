import React from "react"
import styled from "styled-components"
import { useIntl } from "react-intl"

const Title = styled.div`
  width: 100%;
  color: black;
  font-size: 36px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestCom = () => {
  const intl = useIntl()

  return (
    <Title>{intl.formatMessage({id: 'title_welcome_msg'})}</Title>
  )
}

export default TestCom