import React from 'react'

import { Link } from 'gatsby'

import {HomeHeader, Banner, BannerButton} from '../utils'

import homeImg from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
/*disable Gallery  and menu Components
import Gallery from '../components/HomePageComponents/Gallery1'
import Menu from '../components/HomePageComponents/Menu'
*/
import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web marketing`, `web site`, `SEO`]} />
    <HomeHeader img={homeImg}>
      <Banner title="Web Marketing" subtitle="helping you go from good... to great!" >
				<Link to="/menu/" style={{ textDecoration: 'none' }}>
					<BannerButton style={{ margin: '2rem auto' }}>Services</BannerButton>
				</Link>
			</Banner>
    </HomeHeader>
		<QuickInfo />
		
  </Layout>
)


export default IndexPage
