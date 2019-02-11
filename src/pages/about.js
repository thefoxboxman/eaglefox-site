import React from 'react'


import AboutText from '../components/AboutPageComponents/AboutText'
import {PageHeader, Banner, InternalLink} from '../utils/'
import aboutImg from '../images/bcg/aboutBcg.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title='about us' subtitle='the inside story' />
    </PageHeader>
		<AboutText />
		<InternalLink linkTo='/aboutskills/' linkText='Review My Skills' />
  </Layout>
)

export default AboutPage
