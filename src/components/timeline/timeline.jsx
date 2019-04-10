import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false,
          expanded5: false,
          expanded6: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}


    handleExpandChange1 = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };

    handleExpandChange5 = (expanded5) => {
      this.setState({expanded5: expanded5});
    };

    handleExpandChange6 = (expanded6) => {
      this.setState({expanded6: expanded6});
    };


    handleExpand1 = () => {
      this.setState({expanded1: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
      this.setState({expanded4: true});
    };

    handleExpand5 = () => {
      this.setState({expanded5: true});
    };

    handleExpand6 = () => {
      this.setState({expanded6: true});
    };


    handleReduce1 = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };

    handleReduce4 = () => {
      this.setState({expanded4: false});
    };

    handleReduce5 = () => {
      this.setState({expanded5: false});
    };
    handleReduce6 = () => {
      this.setState({expanded6: false});
    };

    render() {
        return (
            <div className="timeline">
              <p className="headline">Professional Experience</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange1}>
                      <CardHeader title="Full-Stack Coding Bootcamp" subtitle="Georgia Institute of Technology"
                      actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          January	2019 - April 2019. Full-time student.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>MERN</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>SERN</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>React.js</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Node.js</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Express.js</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Javascript</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>mySQL</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>MongoDB</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>jQuery</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Restful APIs</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>HTML5</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>CSS3</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Product Owner / Project Manager" subtitle="Definition 6"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            August 2017 - December 2018. Atlanta, GA. <br/><br/>
                            My team and I built websites for a living. I managed all aspects of the SDLC from the initial sale through production support. Highly experienced working within industry-leading CMS Platforms
                            including Sitecore, Drupal, WordPress, and Umbraco. 
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Project Management</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Product Owner</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Scrum Master</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Agile</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SDLC</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>CMS Platforms</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Confluence, JIRA</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Production Support Manager / Project Manager" subtitle="HGS Colibrium"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          April 2016 - June 2017. Atlanta, GA. <br/><br/>
                          Served as a hybrid Project Manager & Business Analyst role until there was a larger need running Production Support team for all clients. As a Production Support Manager, I served as the primary point of contact for all clients. Triaging client needs into change requests, bugs, and additional growth opportunities. I also played a large role in business improvement initiatives, designing and driving an updated business model that transitioned clients from Implementation into Support.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Client Service</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Project Management</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Triage</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Change Requests</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Process Improvement</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Support</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Health Insurance</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="Product Analyst" subtitle="Hublogix"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          June 2015	-	August 2015. Atlanta, GA. <br/> <br/>
                          Following my Entrepreneurial sprit, I joined on with a start-up seeking its series-B investment phase. I was able to drive process improvements and standardization while getting my hands in the day-to-day development of an intricate SaaS product. Unfortunately, my time there was cut short once the company transitioned into a sale at Channel Advisor. The experience gained in the start-up world was fulfilling and pushed my drive further.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Start-up</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SaaS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>E-commerce</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded5} onExpandChange={this.handleExpandChange5}>
                      <CardHeader title="Business Delivery Manager / Business Analyst" subtitle="Colibrium"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          June 2013	-	May 2015. Atlanta, GA. <br/> <br/>
                          I grew my career at Colibrium from being a Business Analyst into the Business Delivery Manager, managing a large team of all Business Analysts in the company. Served as lead Business Analyst for the company’s largest client while also serving as a Product Manager, developing the next version of the company’s proprietary health insurance quoting product. I was the Subject matter expert of product integration with the federal government health exchange marketplace (ACA). 

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Management</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Business Analyst</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Health Insurance</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>ACA</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Product Development</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SDLC</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded6} onExpandChange={this.handleExpandChange6}>
                      <CardHeader title="Manager / Financial Analyst II" subtitle="The Hanover Insurance Group"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          June 2009	-	May 2013. Atlanta, GA. <br/> <br/>
                          For my first job out of College, I became a Financial Analyst at a large Property/Casualty insuracne company at Hanover. During my time there, I broadened the financial analyst role, incorporate employee management, client relationship building, and internal process efficiency solutions. I Solely maintained, reported, and analyzed all financial and operational metrics for a $100+ million business unit within the Hanover. After some time, I got my hands into developing & improving upon an existing CRM systsm; developing multiple tools and systems using Microsoft Access, VBA, and SQL Server from the ground-up. These tools became critical to the Customer Service Center and are used in daily standard operation by all call center employees.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>SQL</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>VBA</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Microsoft Access</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Business Improvement</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Financial Analysis</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Budgeting</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
