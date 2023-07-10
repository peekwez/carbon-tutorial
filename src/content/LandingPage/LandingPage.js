import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import { InfoSection, InfoCard } from '../../components/Info';
import {
  Globe,
  Application,
  PersonFavorite,
  ContainerServices,
} from '@carbon/react/icons';

const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Analyze &amp; Parse Documents using GDX
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content">
                  <h2 className="landing-page__subheading">What is GDX?</h2>
                  <p className="landing-page__p">
                    Generative Document Extraction is a platform for analysis
                    document and extracting relevant information into structured
                    data output. The platform uses advanced Optical Character
                    Recognition (OCR) and Generative AI tools to extract data.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    alt="Carbon illustration"
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles">
          <InfoCard
            heading="Accuracy"
            body="GDX uses the best in class OCR and AI tools to extract data from documents. The platform is built on top Googles Document AI and Open AI's GPT models."
            icon={() => <Application size={32} />}
          />
          <InfoCard
            heading="Customization"
            body="GDX's can be customized to each users needs. Users can define their own extraction schemas and use the best in class OCR and AI tools to extract data from documents."
            icon={() => <PersonFavorite size={32} />}
          />
          <InfoCard
            heading="Scalability"
            body="GDX can be run in both online and batch mode. The platform is built on top of Kubernetes and can be scaled to meet the needs of any organization."
            icon={() => <ContainerServices size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
};

export default LandingPage;
