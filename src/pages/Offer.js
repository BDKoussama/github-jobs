import React from 'react';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Offer = () => {
    // import useParams from react-router-dom
   // let { job_id } = useParams();
    return (
        <div className = "offer-detail__wrapper">

            <div className = "left-sidebar" >
                <Link to = '/' className = 'back-link' >
                    <FontAwesomeIcon icon='long-arrow-alt-left'  size="sm" className = "back-icon" />
                    Back to Search
                </Link>

                <h2 className = "howto-apply">how to apply</h2>

                <p className = "contact-info">
                    Please email a copy of your resume <br/> and online portfolio to <br/>
                    <a href = '/'>wes@kasisto.com </a> & CC <a href = '/'>eric@kasisto.com</a>
                </p>

            </div>

            <div className = 'offer-detail'>

                <div className = "job-title__wrapper"> 
                    <h1 className ='job-title'>Front-End Software Engineer</h1>
                    <span className = 'job-type'>Full time</span>
                </div>

                <span className ="publish-time">
                    <FontAwesomeIcon icon='clock'  size="lg" className = "icon" />
                    5 days ago
                </span>

                <div className = "about-company">
                    <div className = 'company-logo'></div> 
                    <div className = "company-info" >
                        <h3 className ='company-name'>kasisto</h3>
                        <span className  = 'company-location'>
                            <FontAwesomeIcon icon='globe-africa'  size="lg" className = "icon" />
                            New York
                        </span>
                    </div>
                </div>


                <div className ='job-description'>
                    <p>
                        Humanizing Digital Experiences®
                        <br/>
                        Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.
                        <br/>
                        Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.
                        <br/>
                        This position
                        <br/>
                        We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.
                        <br/>
                        What you’ll be doing
                        <br/>
                        Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position
                        <br/>
                        3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus
                        <br/>
                        What we offer:
                        <br/>
                        Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks
                        <br/>
                        Location - NYC, Flatiron District
                        <br/>
                        We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.
                    </p>
                </div>

            </div>

        </div>
    )
}


export default Offer ;