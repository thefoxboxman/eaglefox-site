import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, styles, Title } from '../../../utils'
import { ReadMoreButton} from '../../../utils/ReadMoreButton'

export function ServicesList() {
  return (
    <ServicesSection>
			<Title message="make your choice" title="services menu"></Title>
      <Section>
        <ServicesListWrapper>
          <div className="item">
            <h2>SEO</h2>
            <p>
              Get found on Google, Yahoo! and Bing. We follow SEO best
              practices, ensuring you have the best chance of attracting more
              customers.
            </p>
						<div className='linkButton'>
						<Link to="/about/" style={{ textDecoration: 'none' }}>
							<ReadMoreButton style={{ margin: '2rem auto' }}>about</ReadMoreButton>
						</Link>
						</div>
          </div>
          <div className="item">
            <h2>Website Design & Build</h2>
            <p>
              Make a great first impression with a hand-crafted website that
              reflects your professionalism and is built to work for your small
              business.
            </p>
						<div className='linkButton'>
							<Link to="/about/" style={{ textDecoration: 'none' }}>
								<ReadMoreButton style={{ margin: '2rem auto' }}>about</ReadMoreButton>
							</Link>
						</div>
          </div>

          <div className="item">
            <h2>Social Media Marketing</h2>
            <p>
              Running paid advertising on Social Media? You’d better have a well
              thought out strategy. Facebook and other social media advertising
              platforms can be an expensive mistake if you are not prepared.
            </p>
						<div className='linkButton'>
							<Link to="/about/" style={{ textDecoration: 'none' }}>
								<ReadMoreButton style={{ margin: '2rem auto' }}>about</ReadMoreButton>
							</Link>
						</div>
          </div>
          <div className="item">
            <h2>Content Marketing & Copywriting</h2>
            <p>
              A form of marketing that involves the creation and sharing of online material (such as videos, blogs, and social media posts) that does not explicitly promote a brand but is intended to stimulate interest in its products or services.
            </p>
						<div className='linkButton'>
							<Link to="/about/" style={{ textDecoration: 'none' }}>
								<ReadMoreButton style={{ margin: '2rem auto' }}>about</ReadMoreButton>
							</Link>
						</div>
          </div>
          <div className="item">
            <h2>Website Maintenance</h2>
            <p>
              There comes a time when a business outgrows their website or the website's platform reaches the end of its life cycle. We will assemble a dedicated project team to rebuild or revamp your platform.
            </p>
						<div className='linkButton'>
							<Link to="/about/" style={{ textDecoration: 'none' }}>
								<ReadMoreButton style={{ margin: '2rem auto' }}>about</ReadMoreButton>
							</Link>
						</div>
          </div>
          <div className="item">
            <h2>WordPress Sites</h2>
            <p>
              Your WordPress website setup and maintained.
            </p>
						<div className='linkButton'>
							<Link to="/about/" style={{ textDecoration: 'none' }}>
								<ReadMoreButton /> 
							</Link>
						</div>
          </div>
        </ServicesListWrapper>
      </Section>
    </ServicesSection>
  )
}
const ServicesSection = styled(Section)`
  background: ${styles.colors.lightGrey};
  min-width: 100vw;
`
const ServicesListWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

  .item {
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
  p {
    letter-spacing: 0.1rem;
    line-height: 1.4rem;
    padding: 1px 5px 1px 10px;
  }

	.linkButton{
		display: flex;
		justify-content: space-around;
		margin: 1rem;
	}
`
