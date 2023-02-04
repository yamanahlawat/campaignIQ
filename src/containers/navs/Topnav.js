/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import Select from 'react-select';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
} from 'redux/actions';

import {
  searchPath,
  isDarkSwitchActive,
  // adminRoot,
} from 'constants/defaultValues';

import CustomSelectInput from 'components/common/CustomSelectInput';
import { Colxx } from 'components/common/CustomBootstrap';

import { MobileMenuIcon, MenuIcon } from 'components/svg';
import TopnavNotifications from './Topnav.Notifications';
import TopnavDarkSwitch from './Topnav.DarkSwitch';

const selectData = [
  { label: 'Cake', value: 'cake', key: 0 },
  { label: 'Cupcake', value: 'cupcake', key: 1 },
  { label: 'Dessert', value: 'dessert', key: 2 },
];

const TopNav = ({
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
}) => {
  const [isInFullScreen, setIsInFullScreen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  // const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword('');
  };

  const isInFullScreenFn = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };

  const handleDocumentClickSearch = (e) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      removeEventsSearch();
      setSearchKeyword('');
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener('click', handleDocumentClickSearch, true);
  };

  const toggleFullScreen = () => {
    const isFS = isInFullScreenFn();

    const docElm = document.documentElement;
    if (!isFS) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsInFullScreen(!isFS);
  };

  const handleLogout = () => {
    console.log('logout');
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>
        <Colxx xxs="3">
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          id="form-field-name"
          value={selectedOptions}
          onChange={setSelectedOptions}
          options={selectData}
          placeholder="Select Advertiser"

        />
      </Colxx>
      </div>
      

      {/* <NavLink className="navbar-logo" to={adminRoot}>
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink> */}

      <div className="navbar-right">
        {isDarkSwitchActive && <TopnavDarkSwitch />}
        <div className="header-icons d-inline-block align-middle">
          <TopnavNotifications />
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">John Smith</span>
              <span>
                <img alt="Profile" src="/assets/img/profiles/l-2.jpg" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Features</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
