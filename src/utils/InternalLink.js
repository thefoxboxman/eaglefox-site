import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {SectionButton} from '../utils'

export function InternalLink() {
  return (
    <InternalLinkWrapper>
			
      <Link to="/about/" style={{ textDecoration: 'none' }}>
					<SectionButton style={{ margin: '0.5rem auto' }}>
						Back to About
            </SectionButton>
      </Link>
			
    </InternalLinkWrapper>
  )
}

const InternalLinkWrapper = styled.div`
`