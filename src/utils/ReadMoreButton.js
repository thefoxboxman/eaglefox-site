import React from 'react'
import styled from 'styled-components'
import { FaPhone } from 'react-icons/fa'

import { styles } from '../utils'


export function ReadMoreButton() {
	return (
		<CallButtonWrapper >
			<h4>Read More...</h4>
		</CallButtonWrapper>
	)
}

const CallButtonWrapper = styled.div`
	

max-width: 10rem;
background: transparent;
padding: 0.6rem 3rem;
text-transform: capitalize;
font-size: 0.8rem;
text-align: center;
font-weight: 900px;
background:${styles.colors.mainYellow};
${styles.border({ color: `${styles.colors.mainYellow}` })};
border-radius: 5px;
cursor: pointer;

${styles.transition({})};
&:hover{
	background:${styles.colors.mainWhite};
	color:${styles.colors.mainBlack};
	${styles.border({ color: `${styles.colors.mainBlack}` })};
	
}
a{
	text-decoration: none;
	font-size: 1rem;
	color:${styles.colors.mainBlack};
}
`

