import styled from 'styled-components'

import theme from 'styles/theme'

export const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 280px;
  width: 280px;
  height: 280px;
  padding: 14px;
  background: ${theme.colors.orange};
  border-radius: 8px;
`

export const JobCardTitle = styled.span``
export const JobCardName = styled.span``
export const JobCardDescription = styled.p`
  word-break: break-all;
`
