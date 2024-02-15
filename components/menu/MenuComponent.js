import React, { useEffect, useState } from "react";
import * as _Builtin from "@/devlink/_Builtin";
import * as _interactions from "@/devlink/interactions";
import { LINK_ABOUT_PAGE, LINK_ACCOUNT_PAGE, LINK_BUY_PAGE, LINK_DEDALAB_PAGE, LINK_GALLERY_PAGE, LINK_HOME_PAGE, LINK_MEDIA_LIBRARY_PAGE, LINK_VR_PAGE } from "@/constants/pages";
import { LANGUAGE_ARABIC, LANGUAGE_CHINESE, LANGUAGE_ENGLISH, LANGUAGE_FRENCH, LANGUAGE_GERMAN, LANGUAGE_HINDI, LANGUAGE_JAPANESE, LANGUAGE_PORTUGUESE, LANGUAGE_RUSSIAN, LANGUAGE_SPANISH } from "@/constants/languages";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon';
import { IMAGE_DANIEL } from "@/constants/images";
import { getAuth, onAuthStateChanged, linkWithCredential, linkWithPopup, fetchSignInMethodsForEmail, signOut, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider, unlink, linkWithRedirect, reauthenticateWithRedirect, reauthenticateWithPopup, getRedirectResult, signInWithRedirect } from "firebase/auth";

const _interactionsData = JSON.parse(
  '{"events":{"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702184189866},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702184189866},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-208":{"id":"e-208","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-210":{"id":"e-210","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-209"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-221":{"id":"e-221","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".uui-navbar07_menu-dropdown","originalId":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706389501519},"e-222":{"id":"e-222","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-221"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".uui-navbar07_menu-dropdown","originalId":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706389501520}},"actionLists":{"a-3":{"id":"a-3","title":"Menu open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.middle","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4ab"]},"widthValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678172047049},"a-4":{"id":"a-4","title":"Menu colse","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.middle","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4ab"]},"widthValue":24,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678172047049},"a-51":{"id":"a-51","title":"Navbar07 dropdown (tablet) -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-51-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-52":{"id":"a-52","title":"Navbar07 dropdown (tablet) -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157},"a-41":{"id":"a-41","title":"Navbar07 -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"value":0,"unit":""}},{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-dropdown-icon","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0b"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-41-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"value":1,"unit":""}},{"id":"a-41-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-49":{"id":"a-49","title":"Navbar07 -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".uui-dropdown-icon","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0b"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-49-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-49-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-33":{"id":"a-33","title":"Navbar menu -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf7"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-33-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-34":{"id":"a-34","title":"Navbar menu -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf7"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export default function MenuComponent({ as: _Component = _Builtin.NavbarWrapper, zIndex = 1000, isGallery = false, connectedUser, setConnectedUser }) {
  _interactions.useInteractions(_interactionsData);
  const [langVisible, setLangVisible] = useState(true);
  const auth = getAuth();
  //const currentUserPhoto = auth.currentUser.photoURL;
  console.log("AUUUUTH", auth, auth.currentUser);
  const router = useRouter();
  const url = router.asPath;
  const lang = router.locale;
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState(new Set(["account"]));
  const descriptionsMap = {
    account:
      "Manage your profile, your personal information, preferences and access settings.",
    data_analyze:
      "Dive deep into your metrics, visualize trends, tracking performance and your behavior,",
    security: "Explore robust security features designed to safeguard your account, data, and communications.",
  };

  const labelsMap = {
    account: "Account",
    data_analyze: "Data analyze",
    security: "Security",
  }

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  const ChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push(router.pathname, undefined, { locale: lang });
  }

  return (
    <_Component
      className="navbar"
      tag="div"
      id="menu"
      style={{zIndex: zIndex, backgroundColor: isGallery ? 'black' : ''}}
      config={{
        animation: "default",
        collapse: "small",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block className="padding-global menu" tag="div">
        <_Builtin.Block className="nav-container" tag="div">
          <_Builtin.Block className="div-block" tag="div">
            <_Builtin.Block className="navigation-left" tag="div">
              <_Builtin.NavbarBrand
                className="nav-logo-wrapper"
                id="id-nav-logo"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="div-block-2" tag="div">
                  <_Builtin.Block className="div-block-20" tag="div">
                    <_Builtin.Image
                      className="nav-logo"
                      width="50"
                      height="50"
                      loading="lazy"
                      alt=""
                      src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65ae74decc83dc40a2b4b792_Dedalart1%20(1).png"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.NavbarBrand>
              <_Builtin.NavbarButton
                className="menu-button"
                data-w-id="665f320f-61ce-b358-051b-3023e0eeec97"
                tag="div"
              >
                 <_Builtin.Block className="menu-line-wrapper" tag="div">
                  <_Builtin.Block className="menu-line top" tag="div" />
                  <_Builtin.Block className="menu-line middle" tag="div" />
                  <_Builtin.Block className="menu-line last" tag="div" />
                </_Builtin.Block>
              </_Builtin.NavbarButton>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="navigation-right" tag="div">
            <_Builtin.NavbarMenu
              className="nav-menu"
              tag="nav"
              role="navigation"
            >
              <_Builtin.List
                className="nav-link-list"
                tag="ul"
                unstyled={false}
              >
                <_Builtin.ListItem className="nav-link-list-item">
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_HOME_PAGE === url ? 'w--current' : ''}`}
                    id="id-nav-home-page"
                    options={{
                      href: `/${lang}/${LINK_HOME_PAGE}`,
                    }}
                  >
                    {t('home', { ns: 'navbar' })}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
                <_Builtin.ListItem className="nav-link-list-item">
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_ABOUT_PAGE === router.asPath ? 'w--current' : ''}`}
                    id="id-nav-about-us-page"
                    options={{
                      href: `/${lang}/${LINK_ABOUT_PAGE}`,
                    }}
                  >
                    {t('about', { ns: 'navbar' })}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
                <_Builtin.ListItem className="nav-link-list-item">
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_BUY_PAGE === router.asPath ? 'w--current' : ''}`}
                    id="id-nav-gallery-3d-page"
                    options={{
                      href: `/${lang}/${LINK_BUY_PAGE}`,
                    }}
                  >
                    {t('buy', { ns: 'navbar' })}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
                <_Builtin.ListItem className="nav-link-list-item" style={{ display: 'none' }}>
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_VR_PAGE === router.asPath ? 'w--current' : ''}`}
                    id="id-nav-vr-page"
                    options={{
                      href: `/${lang}/${LINK_VR_PAGE}`,
                    }}
                  >
                    {t('vr', { ns: 'navbar' })}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
                <_Builtin.ListItem className="nav-link-list-item">
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_DEDALAB_PAGE === router.asPath ? 'w--current' : ''}`}
                    id="id-nav-dedalab-page"
                    options={{
                      href: `/${lang}/${LINK_DEDALAB_PAGE}`,
                    }}
                  >
                    {t('dedalab', { ns: 'navbar' })}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
                <_Builtin.ListItem className="nav-link-list-item">
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_MEDIA_LIBRARY_PAGE === router.asPath ? 'w--current' : ''}`}
                    id="id-nav-media-library-page"
                    options={{
                      href: `/${lang}/${LINK_MEDIA_LIBRARY_PAGE}`,
                    }}
                  >
                    {t('media-library', { ns: 'navbar' })}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.NavbarMenu>
            <_Builtin.Block className="div-block-4" tag="div">
              <_Builtin.Block className="div-block-29" tag="div">
                <_Builtin.DropdownWrapper
                  className="dropdown"
                  tag="div"
                  id="dropdown-lang"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className="dropdown-lang-toogle"
                    tag="div"
                    id="dropdown-lang-toogle"
                  >
                    {
                    <_Builtin.HtmlEmbed
                      className="html-embed-2"
                      value="%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%2020010904%2F%2FEN%22%0A%20%22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20010904%2FDTD%2Fsvg10.dtd%22%3E%0A%3Csvg%20version%3D%221.0%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20499.000000%20500.000000%22%0A%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C500.000000)%20scale(0.100000%2C-0.100000)%22%0Afill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M2345%204989%20c-347%20-18%20-645%20-99%20-979%20-266%20-183%20-92%20-360%20-212%20-522%0A-354%20-111%20-98%20-262%20-260%20-329%20-353%20-11%20-16%20-34%20-47%20-52%20-70%20-35%20-48%20-139%20-220%0A-188%20-312%20-105%20-198%20-191%20-458%20-241%20-729%20-25%20-138%20-31%20-562%20-10%20-725%2026%20-195%0A98%20-473%20159%20-610%20159%20-361%20304%20-578%20547%20-820%2080%20-80%20163%20-159%20184%20-175%2022%20-17%0A53%20-41%2070%20-56%20234%20-193%20607%20-367%20961%20-448%20209%20-48%20289%20-56%20555%20-56%20269%201%20378%0A13%20592%2066%20333%2082%20693%20255%20914%20438%2017%2015%2048%2039%2070%2055%2052%2040%20336%20324%20360%20361%2010%0A16%2046%2066%2079%20111%2090%20123%20212%20328%20245%20414%207%2019%2026%2062%2040%2095%2036%2080%2095%20262%20114%0A355%209%2041%2020%2091%2025%20110%2025%2088%2042%20294%2042%20485%200%20291%20-33%20507%20-118%20770%20-35%20110%0A-110%20296%20-137%20338%20-7%2012%20-30%2054%20-51%2092%20-63%20116%20-96%20170%20-149%20241%20-17%2023%20-40%0A55%20-51%2070%20-62%2087%20-258%20294%20-365%20385%20-36%2031%20-114%2090%20-175%20132%20-60%2042%20-114%2080%0A-120%2085%20-33%2025%20-147%2086%20-255%20136%20-309%20144%20-592%20219%20-875%20231%20-66%203%20-138%207%0A-160%209%20-22%201%20-103%20-1%20-180%20-5z%20m46%20-216%20c2%20-10%203%20-296%201%20-636%20l-2%20-619%20-98%206%0Ac-293%2019%20-772%20100%20-868%20147%20l-21%2011%2024%2066%20c130%20362%20314%20652%20527%20830%20121%20101%0A165%20128%20286%20172%2068%2025%20101%2034%20136%2039%207%200%2013%20-7%2015%20-16z%20m286%201%20c15%20-3%2052%20-16%0A81%20-30%2029%20-13%2055%20-24%2058%20-24%2030%200%20233%20-153%20299%20-224%2079%20-86%20149%20-176%20189%20-242%0A17%20-27%2045%20-73%2063%20-102%2031%20-52%20113%20-214%20113%20-225%200%20-3%2013%20-34%2029%20-69%2043%20-93%2066%0A-179%2051%20-188%20-7%20-4%20-78%20-24%20-159%20-44%20-186%20-45%20-499%20-89%20-718%20-100%20l-83%20-5%20-1%0A117%20c-4%20353%20-4%201129%20-1%201139%202%208%2014%2011%2028%208%2013%20-3%2036%20-8%2051%20-11z%20m698%20-152%0Ac11%20-6%2067%20-34%20125%20-61%20116%20-57%20264%20-144%20324%20-192%206%20-5%2047%20-37%2091%20-71%2079%20-61%0A342%20-315%20334%20-322%20-8%20-7%20-210%20-126%20-214%20-126%20-3%200%20-38%20-16%20-79%20-35%20-85%20-40%0A-186%20-79%20-191%20-73%20-1%201%20-24%2057%20-49%20123%20-119%20305%20-278%20569%20-459%20762%20l-49%2052%2073%0A-23%20c41%20-12%2083%20-27%2094%20-34z%20m-1656%201%20c-125%20-131%20-226%20-278%20-333%20-486%20-41%20-78%0A-77%20-153%20-81%20-167%20-4%20-14%20-17%20-47%20-30%20-75%20-12%20-27%20-28%20-68%20-35%20-90%20-20%20-64%0A-25%20-67%20-83%20-44%20-48%2019%20-103%2044%20-197%2088%20-20%209%20-77%2041%20-128%2070%20-75%2044%20-90%2056%0A-82%2070%2016%2030%20254%20256%20330%20314%2041%2031%2080%2061%2085%2065%20141%20110%20507%20297%20590%20301%205%201%0A-11%20-20%20-36%20-46z%20m-1049%20-828%20c65%20-51%20317%20-179%20438%20-221%2045%20-16%2052%20-22%2047%20-39%0A-15%20-52%20-67%20-289%20-80%20-365%20-19%20-112%20-45%20-385%20-45%20-474%200%20-39%20-3%20-95%20-6%20-123%0Al-7%20-53%20-408%200%20-409%200%205%2048%20c2%2026%207%2092%2010%20147%208%20125%2049%20344%2089%20465%2024%2075%2065%0A184%2076%20203%206%2010%2019%2040%2030%2067%2023%2059%20154%20296%20175%20317%209%208%2020%2023%2025%2033%2011%2020%2031%0A18%2060%20-5z%20m3742%20-42%20c59%20-89%20144%20-242%20169%20-306%2012%20-29%2024%20-56%2028%20-62%2012%20-16%0A89%20-243%20107%20-315%2032%20-126%2053%20-266%2059%20-380%203%20-63%208%20-127%2010%20-142%20l5%20-28%20-420%200%0A-420%200%200%20108%20c0%20240%20-51%20621%20-111%20841%20-12%2040%20-17%2077%20-12%2081%204%204%2026%2013%2048%2020%0A73%2023%20285%20125%20367%20177%2021%2013%2041%2023%2045%2023%205%200%2022%2011%2038%2025%2017%2013%2033%2024%2036%2025%204%0A0%2027%20-30%2051%20-67z%20m-2867%20-318%20c77%20-19%20199%20-43%20270%20-54%2072%20-12%20159%20-25%20195%20-31%0A49%20-8%20310%20-29%20373%20-30%204%200%207%20-180%207%20-400%20l0%20-400%20-585%200%20-585%200%205%2043%20c2%2023%207%0A110%2010%20192%208%20217%2066%20607%20106%20707%2010%2024%2014%2026%2037%2017%2015%20-6%2090%20-26%20167%20-44z%0Am2101%20-5%20c19%20-62%2071%20-345%2084%20-455%206%20-49%2013%20-172%2017%20-272%20l6%20-183%20-576%200%20-577%0A0%200%20399%200%20399%2063%206%20c34%203%20107%208%20162%2011%2055%203%20125%2010%20155%2016%2030%205%20116%2018%20191%2029%0A74%2012%20202%2038%20285%2059%2082%2022%20155%2038%20163%2038%208%20-1%2020%20-22%2027%20-47z%20m-2612%20-1212%0Ac10%20-156%2034%20-365%2051%20-443%2041%20-190%2064%20-292%2070%20-307%205%20-13%20-6%20-21%20-50%20-37%20-138%0A-52%20-356%20-164%20-461%20-237%20-20%20-14%20-23%20-13%20-45%2022%20-109%20171%20-211%20371%20-263%20520%0A-60%20167%20-102%20354%20-120%20527%20l-6%2057%20408%200%20409%200%207%20-102z%20m1356%20-216%20l0%20-319%0A-181%20-12%20c-100%20-6%20-202%20-16%20-228%20-21%20-25%20-4%20-95%20-16%20-156%20-25%20-96%20-15%20-420%0A-86%20-460%20-101%20-20%20-8%20-30%2020%20-61%20166%20-32%20156%20-60%20366%20-70%20515%20l-7%20115%20582%200%0A581%200%200%20-318z%20m1360%20290%20c0%20-80%20-34%20-366%20-60%20-510%20-34%20-185%20-50%20-242%20-67%20-249%0A-7%20-3%20-76%2011%20-155%2030%20-79%2020%20-201%2045%20-273%2057%20-71%2011%20-155%2025%20-185%2030%20-30%205%0A-135%2015%20-232%2021%20l-178%2013%200%20318%200%20318%20575%200%20575%200%200%20-28z%20m1030%2016%20c0%20-7%20-9%0A-71%20-19%20-143%20-36%20-239%20-97%20-435%20-207%20-660%20-70%20-144%20-117%20-230%20-144%20-260%20-10%0A-11%20-23%20-30%20-29%20-43%20-12%20-22%20-14%20-22%20-34%20-8%20-104%2073%20-336%20192%20-472%20241%20-27%2010%0A-51%2019%20-53%2021%20-2%201%206%2037%2018%2080%2018%2070%2043%20194%2071%20349%209%2049%2039%20368%2039%20413%20l0%2022%0A415%200%20c325%200%20415%20-3%20415%20-12z%20m-2390%20-1459%20l0%20-632%20-45%206%20c-88%2012%20-253%2091%0A-349%20167%20-96%2075%20-237%20232%20-316%20350%20-84%20128%20-210%20382%20-245%20494%20-9%2028%20-20%2059%0A-26%2068%20-13%2025%20-14%2025%2039%2042%20116%2037%20262%2066%20497%20101%20186%2027%20227%2031%20358%2033%20l87%202%0A0%20-631z%20m655%20596%20c93%20-14%20204%20-31%20245%20-39%2082%20-16%20272%20-65%20278%20-71%209%20-9%20-20%0A-101%20-64%20-204%20-113%20-266%20-243%20-470%20-399%20-626%20-103%20-103%20-116%20-114%20-205%20-172%0A-82%20-53%20-232%20-113%20-282%20-113%20-17%200%20-18%2037%20-18%20632%20l0%20631%20137%20-7%20c76%20-4%20214%0A-18%20308%20-31z%20m965%20-281%20c116%20-57%20230%20-124%20230%20-135%200%20-19%20-157%20-182%20-270%20-279%0A-156%20-134%20-353%20-256%20-590%20-364%20-34%20-15%20-148%20-56%20-158%20-56%20-4%200%2082%20106%20102%20125%0A19%2018%2090%20109%20118%20150%20120%20181%20242%20426%20302%20612%20l17%2051%2077%20-28%20c42%20-16%20120%20-50%0A172%20-76z%20m-2782%2069%20c6%20-16%2018%20-50%2028%20-78%2010%20-27%2021%20-54%2024%20-60%204%20-5%2017%20-36%2029%0A-68%2022%20-60%20127%20-267%20159%20-315%2011%20-15%2040%20-58%2065%20-97%2049%20-75%2076%20-110%20147%20-190%0A24%20-27%2053%20-60%2064%20-73%20l20%20-22%20-60%2020%20c-66%2023%20-91%2034%20-214%2093%20-87%2042%20-105%2052%0A-225%20128%20-170%20107%20-364%20272%20-482%20412%20-38%2044%20-40%2055%20-15%2064%209%204%2040%2021%2067%2038%2082%0A52%20336%20171%20371%20174%206%201%2016%20-11%2022%20-26z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                    />
                  }
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className="dropdown-lang-list"
                    tag="nav"
                    id="dropdown-lang-list"
                  >
                     <_Builtin.Link
                    className="link-block-lang first"
                    button={true}
                    block="inline"
                    onClick={() => ChangeLanguage('en')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144abcf4bc439934e122_united_kingdom.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_ENGLISH ? 'w--current' : ''}`} tag="div">
                        {t('en', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={true}
                    block="inline"
                    onClick={() => ChangeLanguage('fr')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="32"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a93f6ecac66d67f34_france.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_FRENCH ? 'w--current' : ''}`} tag="div">
                        {t('fr', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('zh')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144afe4f70889087ef0d_china.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_CHINESE ? 'w--current' : ''}`} tag="div">
                        {t('zh', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('es')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144aa46af18ccbce76e2_spain.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_SPANISH ? 'w--current' : ''}`} tag="div">
                        {t('es', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('hi')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a5e51907e32e9ef81_india.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_HINDI ? 'w--current' : ''}`} tag="div">
                        {t('hi', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('ar')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a22d6ae9e9ca814c4_arabic_league.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_ARABIC ? 'w--current' : ''}`} tag="div">
                        {t('ar', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('pt')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144abfcd4304a378db29_portugal.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_PORTUGUESE ? 'w--current' : ''}`} tag="div">
                        {t('pt', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('ru')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a04bb30bf3a41b26f_russia.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_RUSSIAN ? 'w--current' : ''}`} tag="div">
                        {t('ru', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('ja')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a3a20da597ff179f3_japanese.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_JAPANESE ? 'w--current' : ''}`} tag="div">
                        <span color="red">{t('ja', { ns: 'langs' })}</span>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="link-block-lang last"
                    button={false}
                    block="inline"
                    onClick={() => ChangeLanguage('de')}
                    options={{
                      //href: "#",
                    }}
                  >
                    <_Builtin.Block className="div-flag" tag="div">
                      <_Builtin.Image
                        className="image-5"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b9049e3b2721df299272e2_germany.jpeg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="div-text-flag" tag="div">
                      <_Builtin.Block className={`text-block-6 ${lang === LANGUAGE_GERMAN ? 'w--current' : ''}`} tag="div">
                        {t('de', { ns: 'langs' })}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.Link
                  className="quick-phone-call cart"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className="social-icon-2 menu cart flash"
                    value="%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%2020010904%2F%2FEN%22%0A%20%22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20010904%2FDTD%2Fsvg10.dtd%22%3E%0A%3Csvg%20version%3D%221.0%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20397.000000%20485.000000%22%0A%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C485.000000)%20scale(0.100000%2C-0.100000)%22%0Afill%3D%22currentcolor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M3211%204666%20l-464%20-152%20-126%2042%20c-1035%20346%20-2146%20-205%20-2490%20-1234%0A-165%20-493%20-127%20-1028%20105%20-1495%20101%20-203%20214%20-359%20383%20-526%20108%20-107%20115%20-113%0A125%20-92%208%2019%20-2%2033%20-89%20119%20-295%20292%20-476%20628%20-549%201019%20-92%20491%2014%201007%20292%0A1420%20474%20706%201352%201015%202164%20763%2054%20-17%2098%20-34%2098%20-39%200%20-4%20-33%20-18%20-74%20-31%0Al-74%20-23%20-84%2021%20c-163%2040%20-229%2047%20-438%2047%20-214%200%20-275%20-7%20-455%20-52%20-425%20-105%0A-813%20-385%20-1060%20-762%20-197%20-300%20-295%20-630%20-295%20-991%200%20-490%20184%20-932%20534%0A-1284%20l98%20-100%2010%20-280%20c5%20-155%2012%20-292%2015%20-306%205%20-24%206%20-24%2014%20-5%2011%2027%20209%0A574%20209%20578%200%202%20-28%2026%20-63%2053%20-211%20164%20-395%20388%20-508%20619%20-397%20816%20-58%201809%0A756%202214%20261%20130%20556%20193%20830%20175%20170%20-10%20171%20-15%205%20-68%20-80%20-25%20-232%20-75%0A-339%20-110%20-190%20-62%20-194%20-64%20-207%20-97%20-7%20-19%20-60%20-153%20-118%20-299%20-57%20-146%0A-121%20-308%20-141%20-360%20-20%20-52%20-86%20-219%20-145%20-370%20-60%20-151%20-153%20-385%20-206%20-520%0A-53%20-135%20-98%20-251%20-101%20-257%20-4%20-10%2083%20-13%20417%20-13%20l422%200%20-5%20-23%20c-2%20-12%0A-145%20-377%20-316%20-812%20-172%20-434%20-335%20-848%20-363%20-920%20-28%20-72%20-80%20-202%20-114%0A-289%20-35%20-88%20-62%20-161%20-61%20-163%202%20-1%2050%2057%20108%20130%2058%2073%20193%20240%20299%20372%20107%0A132%20275%20341%20375%20465%20100%20124%20271%20336%20381%20471%20109%20136%20297%20367%20416%20515%20310%20384%0A744%20922%20779%20967%20l31%2037%20-402%200%20c-221%200%20-400%204%20-398%208%203%208%20228%20318%20643%20887%2096%0A132%20181%20241%20189%20243%2015%203%20166%20-142%20245%20-238%20294%20-353%20462%20-854%20436%20-1305%20-52%0A-926%20-713%20-1662%20-1625%20-1810%20-52%20-8%20-110%20-15%20-128%20-15%20-19%200%20-48%20-11%20-70%20-26%0Al-37%20-26%2090%207%20c648%2049%201229%20415%201557%20981%20236%20409%20313%20900%20217%201378%20-75%20372%0A-291%20759%20-571%201020%20l-90%2084%20159%20217%20c294%20403%20288%20395%20276%20394%20-4%200%20-217%20-69%0A-472%20-153z%20m-42%20-160%20c-4%20-4%20-569%20-232%20-1179%20-477%20l-245%20-98%20-85%20-173%20c-47%0A-95%20-122%20-249%20-167%20-343%20-45%20-93%20-139%20-287%20-209%20-430%20-69%20-143%20-137%20-284%20-150%0A-314%20-13%20-30%20-26%20-52%20-29%20-50%20-2%203%2088%20234%20201%20514%20113%20281%20237%20591%20276%20690%2039%0A99%2076%20185%2082%20191%206%205%20126%2047%20266%2093%20140%2046%20471%20154%20735%20241%20433%20143%20518%20169%0A504%20156z%20m-255%20-1618%20c-5%20-7%20-40%20-53%20-79%20-103%20-39%20-49%20-94%20-119%20-121%20-155%20-47%0A-61%20-336%20-432%20-874%20-1124%20-249%20-319%20-273%20-350%20-377%20-487%20-39%20-52%20-88%20-112%0A-108%20-134%20-30%20-32%20-26%20-25%2017%2037%2052%2076%20489%20688%20658%20923%20125%20174%20436%20609%20489%0A685%2025%2036%2083%20116%20128%20179%2046%2063%2081%20116%2080%20117%20-2%202%20-68%2017%20-147%2034%20-79%2017%0A-146%2033%20-149%2035%20-2%203%20107%205%20243%205%20195%200%20246%20-3%20240%20-12z%22%2F%3E%0A%3Cpath%20d%3D%22M3292%203853%20c-23%20-32%20-114%20-159%20-203%20-283%20-89%20-124%20-178%20-247%20-198%0A-275%20l-36%20-49%2055%2030%20c30%2017%20155%2085%20276%20152%20122%2067%20226%20122%20232%20122%2013%200%2072%0A-113%20117%20-225%20133%20-331%20157%20-684%2070%20-1031%20-186%20-743%20-857%20-1262%20-1632%20-1264%0Al-78%200%20-76%20-93%20c-41%20-50%20-184%20-224%20-318%20-386%20-133%20-161%20-241%20-294%20-239%20-296%203%0A-2%20182%20123%20558%20390%20378%20268%20352%20252%20416%20259%2032%204%20114%2020%20181%2036%20639%20152%201159%0A659%201323%201293%20112%20435%2067%20886%20-129%201275%20-58%20115%20-114%20204%20-186%20297%20-91%20117%0A-85%20115%20-133%2048z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>

              {connectedUser && <ButtonGroup variant="flat" color="warning">
              
                {
                  
                  <Button 
                //startContent={}
                isIconOnly
                onPress={() => router.push(`/${lang}/${LINK_ACCOUNT_PAGE}`)}
                >
                  <Avatar src={IMAGE_DANIEL} isBordered color="warning" size="sm" />
                  {
                  //labelsMap[selectedOptionValue]
                  }
                </Button>
                
                }
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button isIconOnly>
                      <ChevronDownIcon />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="account options"
                    selectedKeys={selectedOption}
                    selectionMode="single"
                    onSelectionChange={setSelectedOption}
                    className="max-w-[300px]"
                    color="warning"
                  >
                    <DropdownItem key="account" description={descriptionsMap["account"]}>
                      {labelsMap["account"]}
                    </DropdownItem>
                    <DropdownItem key="data_analyze" description={descriptionsMap["data_analyze"]}>
                      {labelsMap["data_analyze"]}
                    </DropdownItem>
                    <DropdownItem key="security" description={descriptionsMap["security"]}>
                      {labelsMap["security"]}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>}
              {
                !connectedUser &&
                <_Builtin.Link
                className="fn-button login"
                button={true}
                block=""
                //onClick={() => router.push(`/${lang}/${LINK_ACCOUNT_PAGE}`)}
                options={{
                  href: `/${lang}/${LINK_ACCOUNT_PAGE}`,
                }}
              >
                {t('login', { ns: 'navbar' })}
              </_Builtin.Link>
              }
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
