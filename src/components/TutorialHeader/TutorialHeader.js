import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Document Extraction">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName as={Link} to="/" prefix="GDX">
          Document Extraction
        </HeaderName>
        <HeaderNavigation aria-label="Document Extraction">
          {/* <HeaderMenuItem as={Link} to="/repos">
            Repositories
          </HeaderMenuItem> */}
          <HeaderMenuItem as={Link} to="/schemas">
            Schemas
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/tasks">
            Tasks
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/demos">
            Demos
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              {/* <HeaderMenuItem as={Link} to="/repos">
                Repositories
              </HeaderMenuItem> */}
              <HeaderMenuItem as={Link} to="/schemas">
                Schemas
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/tasks">
                Tasks
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/demos">
                Demos
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
