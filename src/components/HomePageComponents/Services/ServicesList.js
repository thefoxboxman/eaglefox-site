import React from 'react'
import styled from 'styled-components'

import {Section, styles} from '../../../utils'


export  function ServicesList() {
	return (
		<ServicesSection>
			<Section>
		<ServicesListWrapper>
			<div className='item'> 
			<h2>SEO</h2>
					<p>Get found on Google, Yahoo! and Bing. We follow SEO best practices, ensuring you have the best chance of attracting more customers.
		
 </p>
			</div>
			<div className='item'>
					<h2>Website Design</h2>
					<p>Make a great first impression with a hand-crafted website that reflects your professionalism and is built to work for your small business.

</p>
			</div>
			<div className='item'>website build</div>
			<div className='item'> SEO</div>
			<div className='item'>web sit design</div>
			<div className='item'>website build</div>
		</ServicesListWrapper>
			</Section>
		</ServicesSection>
	)
}
const ServicesSection = styled(Section)`
	background: ${styles.colors.lightGrey};
	min-width: 100vw;
	
`
const ServicesListWrapper = styled.div `
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*:before, *:after {
  box-sizing: border-box;
}


display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

	.item{
	background-color: white;
	border: 2px solid #000;
	border-radius: 5px;
	}

@media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
		grid-gap: 2rem;
  }
  @media (min-width: 992px) {
    grid-gap: 3rem;
  }
	h2 {
		color: ${styles.colors.mainYellow};
		text-align: center;
		letter-spacing: 0.1rem;
	}
	p{
		letter-spacing: 0.1rem;
		line-height: 1.4rem;
	}
`
