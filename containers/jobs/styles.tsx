import { motion } from 'framer-motion'
import styled from 'styled-components'

import theme from 'styles/theme'

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const SearchWrapper = styled.div`
  display: flex;

  @media ${(props) => props.theme.media.large} {
    margin-bottom: 16px;
  }
`

export const JobCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 8px;
`

export const JobCardTitle = styled.span``
export const JobCardName = styled.span``
export const JobCardDescription = styled.p``
