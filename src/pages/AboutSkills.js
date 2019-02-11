import React from 'react'


import AboutSkillsText from '../components/AboutPageComponents/AboutSkillsText'
import { PageHeader, Banner } from '../utils'
import aboutSkillsImg from '../images/bcg/aboutskillsBcg.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutSkillsPage = () => (
	<Layout>
		<SEO title="AboutSkills" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={aboutSkillsImg}>
			<Banner title='my skills' subtitle='the good oil' />
		</PageHeader>
		<AboutSkillsText />
	</Layout>
)

export default AboutSkillsPage