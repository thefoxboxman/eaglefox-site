import React from 'react'

import { Link } from 'gatsby'

import { HomeHeader, Banner, BannerButton, Section } from '../utils'

import homeImg from '../images/bcg/homeBcg.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
/*disable Gallery  and menu Components
import Gallery from '../components/HomePageComponents/Gallery1'
import Menu from '../components/HomePageComponents/Menu'
*/
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ServicesList } from '../components/HomePageComponents/Services/ServicesList'



const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`web marketing`, `web site`, `SEO`]} />
		
		<HomeHeader img={homeImg}>
			
			<Banner title="Everything Web" subtitle="helping you go from OK... to great!" >
				<Link to="/menu/" style={{ textDecoration: 'none' }}>
					<BannerButton style={{ margin: '2rem auto' }}>Services</BannerButton>
				</Link>
			</Banner>
			
		</HomeHeader>
		
		<QuickInfo />
		<ServicesList />

	</Layout>
)


export default IndexPage
