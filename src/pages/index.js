import React from 'react'

import { Link } from 'gatsby'

import { HomeHeader, Banner, BannerButton } from '../utils'

import homeImg from '../images/bcg/homeBcg.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Blurb from "../components/HomePageComponents/Blurb.js"




const IndexPage = () => (
	<Layout>
	
		<SEO title="Home"  />
		
		<HomeHeader img={homeImg}>
			
			<Banner title="Everything Web" subtitle="Helping Your business go from ok... to GREAT!" >
				<Link to="/services/" style={{ textDecoration: 'none' }}>
					<BannerButton style={{ margin: '2rem auto' }}>Services</BannerButton>
				</Link>
			</Banner>
			
		</HomeHeader>
		<Blurb />
		<QuickInfo />
		

	</Layout>
)


export default IndexPage
