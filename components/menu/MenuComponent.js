import React, {useEffect} from "react";
import * as _Builtin from "@/devlink/_Builtin";
import * as _interactions from "@/devlink/interactions";
import {LINK_ABOUT_PAGE, LINK_BUY_PAGE, LINK_DEDALAB_PAGE, LINK_GALLERY_PAGE, LINK_HOME_PAGE, LINK_VR_PAGE} from "@/constants/pages";
import {LANGUAGE_ARABIC, LANGUAGE_CHINESE, LANGUAGE_ENGLISH, LANGUAGE_FRENCH, LANGUAGE_GERMAN, LANGUAGE_HINDI, LANGUAGE_JAPANESE, LANGUAGE_PORTUGUESE, LANGUAGE_RUSSIAN, LANGUAGE_SPANISH} from "@/constants/languages";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';

const _interactionsData = JSON.parse(
  '{"events":{"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702184189866},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"665f320f-61ce-b358-051b-3023e0eeec97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702184189866},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-208":{"id":"e-208","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-210":{"id":"e-210","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-209"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|0ba8026a-a7cd-4c78-f1ff-96dd6d4a8c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650242269412},"e-221":{"id":"e-221","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".uui-navbar07_menu-dropdown","originalId":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706389501519},"e-222":{"id":"e-222","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-221"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".uui-navbar07_menu-dropdown","originalId":"087b38d3-bb16-de61-e483-c97c79ade6ae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706389501520}},"actionLists":{"a-3":{"id":"a-3","title":"Menu open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.middle","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4ab"]},"widthValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678172047049},"a-4":{"id":"a-4","title":"Menu colse","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.middle","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4ab"]},"widthValue":24,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.top","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-line.last","selectorGuids":["6000625a-90ba-e1db-4249-edf2b278f4a0","6000625a-90ba-e1db-4249-edf2b278f4a6"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678172047049},"a-51":{"id":"a-51","title":"Navbar07 dropdown (tablet) -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-51-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-52":{"id":"a-52","title":"Navbar07 dropdown (tablet) -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157},"a-41":{"id":"a-41","title":"Navbar07 -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"value":0,"unit":""}},{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-dropdown-icon","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0b"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-41-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"value":1,"unit":""}},{"id":"a-41-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-49":{"id":"a-49","title":"Navbar07 -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".uui-dropdown-icon","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0b"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-49-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-49-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0c0a"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-33":{"id":"a-33","title":"Navbar menu -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf7"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-33-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-34":{"id":"a-34","title":"Navbar menu -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf5"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf8"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["fb080817-588a-1e46-5e1e-311fdcbc0bf7"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export default function MenuComponent({ as: _Component = _Builtin.NavbarWrapper, zIndex=1000, isGallery=false }) {
  _interactions.useInteractions(_interactionsData);

  const router = useRouter();
  const url = router.asPath;
  const lang = router.locale;
  const { t, i18n } = useTranslation();

  const ChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push(router.pathname, undefined, { locale: lang });
  }

  return (
    <_Component
      className={`${isGallery ? 'navbar-gallery' : 'navbar'}`}
      style={{zIndex: zIndex}}
      tag="div"
      id="menu"
      config={{
        animation: "default",
        collapse: "medium",
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
                  href: LINK_HOME_PAGE,
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
                    {t('home', {ns: 'navbar'})}
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
                    {t('about', {ns: 'navbar'})}
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
                    {t('buy', {ns: 'navbar'})}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
                <_Builtin.ListItem className="nav-link-list-item" style={{display:'none'}}>
                  <_Builtin.NavbarLink
                    className={`nav-link ${LINK_VR_PAGE === router.asPath ? 'w--current' : ''}`}
                    id="id-nav-vr-page"
                    options={{
                      href: `/${lang}/${LINK_VR_PAGE}`,
                    }}
                  >
                    {t('vr', {ns: 'navbar'})}
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
                    {t('dedalab', {ns: 'navbar'})}
                  </_Builtin.NavbarLink>
                </_Builtin.ListItem>
              </_Builtin.List>
              <_Builtin.Link
                className="fn-button show-menu"
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Login"}
              </_Builtin.Link>
            </_Builtin.NavbarMenu>
            <_Builtin.Block className="div-block-4" tag="div">
              <_Builtin.Link
                className="quick-phone-call cart"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className="social-icon-2 menu cart"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.0%22%20width%3D%222305.000000pt%22%20height%3D%222049.000000pt%22%20viewBox%3D%220%200%202305.000000%202049.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C2049.000000)%20scale(0.100000%2C-0.100000)%22%20fill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M793%2020475%20c-372%20-67%20-661%20-336%20-766%20-714%20-20%20-71%20-21%20-104%20-25%20-508%20-4%20-479%201%20-538%2058%20-696%2094%20-260%20323%20-485%20584%20-573%20163%20-56%20109%20-54%201671%20-54%20l1442%200%2021%20-102%20c51%20-257%202784%20-13615%202787%20-13628%203%20-10%20-29%20-36%20-97%20-80%20-684%20-434%20-1085%20-1242%20-1019%20-2047%2046%20-545%20268%20-1029%20651%20-1413%20601%20-604%201483%20-812%202294%20-543%20740%20246%201295%20860%201475%201633%2071%20300%2068%20693%20-6%201005%20-88%20372%20-256%20691%20-524%20994%20l-80%2091%204187%200%204187%200%20-24%20-27%20c-13%20-16%20-47%20-53%20-74%20-83%20-214%20-233%20-402%20-579%20-489%20-900%20-86%20-320%20-100%20-704%20-35%20-1025%20150%20-745%20666%20-1365%201366%20-1644%20675%20-269%201444%20-194%202046%20198%20547%20358%20903%20911%201004%201563%2024%20154%2024%20480%200%20633%20-76%20490%20-276%20896%20-612%201244%20-168%20174%20-362%20321%20-548%20417%20-42%2021%20-77%2044%20-77%2051%200%206%2053%20240%20117%20520%20l117%20508%200%20155%20c-1%20138%20-4%20165%20-28%20245%20-100%20335%20-330%20568%20-663%20672%20l-88%2028%20-5457%203%20-5458%202%20-5%2023%20c-10%2042%20-255%201242%20-255%201249%200%204%202667%209%205928%2011%205677%202%205930%203%206002%2021%20332%2080%20603%20320%20703%20623%2014%2043%20456%201972%20983%204288%20l958%204210%200%20145%20c0%20120%20-4%20160%20-23%20230%20-94%20353%20-348%20606%20-706%20703%20l-80%2022%20-7932%202%20c-4363%202%20-7933%204%20-7933%206%200%2022%20-376%201832%20-391%201882%20-30%20101%20-99%20228%20-173%20320%20-143%20179%20-348%20299%20-584%20340%20-111%2020%20-4319%2020%20-4429%200z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
              <_Builtin.DropdownWrapper
                className="dropdown"
                tag="div"
                delay={0}
                hover={false}
                //style={{zIndex:10000}}
              >     
                <_Builtin.DropdownToggle
                  className="dropdown-lang-toogle"
                  tag="div"
                >
                  {
<_Builtin.HtmlEmbed
                    className="html-embed-2"
                    value="%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%2020010904%2F%2FEN%22%0A%20%22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20010904%2FDTD%2Fsvg10.dtd%22%3E%0A%3Csvg%20version%3D%221.0%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20499.000000%20500.000000%22%0A%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C500.000000)%20scale(0.100000%2C-0.100000)%22%0Afill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M2345%204989%20c-347%20-18%20-645%20-99%20-979%20-266%20-183%20-92%20-360%20-212%20-522%0A-354%20-111%20-98%20-262%20-260%20-329%20-353%20-11%20-16%20-34%20-47%20-52%20-70%20-35%20-48%20-139%20-220%0A-188%20-312%20-105%20-198%20-191%20-458%20-241%20-729%20-25%20-138%20-31%20-562%20-10%20-725%2026%20-195%0A98%20-473%20159%20-610%20159%20-361%20304%20-578%20547%20-820%2080%20-80%20163%20-159%20184%20-175%2022%20-17%0A53%20-41%2070%20-56%20234%20-193%20607%20-367%20961%20-448%20209%20-48%20289%20-56%20555%20-56%20269%201%20378%0A13%20592%2066%20333%2082%20693%20255%20914%20438%2017%2015%2048%2039%2070%2055%2052%2040%20336%20324%20360%20361%2010%0A16%2046%2066%2079%20111%2090%20123%20212%20328%20245%20414%207%2019%2026%2062%2040%2095%2036%2080%2095%20262%20114%0A355%209%2041%2020%2091%2025%20110%2025%2088%2042%20294%2042%20485%200%20291%20-33%20507%20-118%20770%20-35%20110%0A-110%20296%20-137%20338%20-7%2012%20-30%2054%20-51%2092%20-63%20116%20-96%20170%20-149%20241%20-17%2023%20-40%0A55%20-51%2070%20-62%2087%20-258%20294%20-365%20385%20-36%2031%20-114%2090%20-175%20132%20-60%2042%20-114%2080%0A-120%2085%20-33%2025%20-147%2086%20-255%20136%20-309%20144%20-592%20219%20-875%20231%20-66%203%20-138%207%0A-160%209%20-22%201%20-103%20-1%20-180%20-5z%20m46%20-216%20c2%20-10%203%20-296%201%20-636%20l-2%20-619%20-98%206%0Ac-293%2019%20-772%20100%20-868%20147%20l-21%2011%2024%2066%20c130%20362%20314%20652%20527%20830%20121%20101%0A165%20128%20286%20172%2068%2025%20101%2034%20136%2039%207%200%2013%20-7%2015%20-16z%20m286%201%20c15%20-3%2052%20-16%0A81%20-30%2029%20-13%2055%20-24%2058%20-24%2030%200%20233%20-153%20299%20-224%2079%20-86%20149%20-176%20189%20-242%0A17%20-27%2045%20-73%2063%20-102%2031%20-52%20113%20-214%20113%20-225%200%20-3%2013%20-34%2029%20-69%2043%20-93%2066%0A-179%2051%20-188%20-7%20-4%20-78%20-24%20-159%20-44%20-186%20-45%20-499%20-89%20-718%20-100%20l-83%20-5%20-1%0A117%20c-4%20353%20-4%201129%20-1%201139%202%208%2014%2011%2028%208%2013%20-3%2036%20-8%2051%20-11z%20m698%20-152%0Ac11%20-6%2067%20-34%20125%20-61%20116%20-57%20264%20-144%20324%20-192%206%20-5%2047%20-37%2091%20-71%2079%20-61%0A342%20-315%20334%20-322%20-8%20-7%20-210%20-126%20-214%20-126%20-3%200%20-38%20-16%20-79%20-35%20-85%20-40%0A-186%20-79%20-191%20-73%20-1%201%20-24%2057%20-49%20123%20-119%20305%20-278%20569%20-459%20762%20l-49%2052%2073%0A-23%20c41%20-12%2083%20-27%2094%20-34z%20m-1656%201%20c-125%20-131%20-226%20-278%20-333%20-486%20-41%20-78%0A-77%20-153%20-81%20-167%20-4%20-14%20-17%20-47%20-30%20-75%20-12%20-27%20-28%20-68%20-35%20-90%20-20%20-64%0A-25%20-67%20-83%20-44%20-48%2019%20-103%2044%20-197%2088%20-20%209%20-77%2041%20-128%2070%20-75%2044%20-90%2056%0A-82%2070%2016%2030%20254%20256%20330%20314%2041%2031%2080%2061%2085%2065%20141%20110%20507%20297%20590%20301%205%201%0A-11%20-20%20-36%20-46z%20m-1049%20-828%20c65%20-51%20317%20-179%20438%20-221%2045%20-16%2052%20-22%2047%20-39%0A-15%20-52%20-67%20-289%20-80%20-365%20-19%20-112%20-45%20-385%20-45%20-474%200%20-39%20-3%20-95%20-6%20-123%0Al-7%20-53%20-408%200%20-409%200%205%2048%20c2%2026%207%2092%2010%20147%208%20125%2049%20344%2089%20465%2024%2075%2065%0A184%2076%20203%206%2010%2019%2040%2030%2067%2023%2059%20154%20296%20175%20317%209%208%2020%2023%2025%2033%2011%2020%2031%0A18%2060%20-5z%20m3742%20-42%20c59%20-89%20144%20-242%20169%20-306%2012%20-29%2024%20-56%2028%20-62%2012%20-16%0A89%20-243%20107%20-315%2032%20-126%2053%20-266%2059%20-380%203%20-63%208%20-127%2010%20-142%20l5%20-28%20-420%200%0A-420%200%200%20108%20c0%20240%20-51%20621%20-111%20841%20-12%2040%20-17%2077%20-12%2081%204%204%2026%2013%2048%2020%0A73%2023%20285%20125%20367%20177%2021%2013%2041%2023%2045%2023%205%200%2022%2011%2038%2025%2017%2013%2033%2024%2036%2025%204%0A0%2027%20-30%2051%20-67z%20m-2867%20-318%20c77%20-19%20199%20-43%20270%20-54%2072%20-12%20159%20-25%20195%20-31%0A49%20-8%20310%20-29%20373%20-30%204%200%207%20-180%207%20-400%20l0%20-400%20-585%200%20-585%200%205%2043%20c2%2023%207%0A110%2010%20192%208%20217%2066%20607%20106%20707%2010%2024%2014%2026%2037%2017%2015%20-6%2090%20-26%20167%20-44z%0Am2101%20-5%20c19%20-62%2071%20-345%2084%20-455%206%20-49%2013%20-172%2017%20-272%20l6%20-183%20-576%200%20-577%0A0%200%20399%200%20399%2063%206%20c34%203%20107%208%20162%2011%2055%203%20125%2010%20155%2016%2030%205%20116%2018%20191%2029%0A74%2012%20202%2038%20285%2059%2082%2022%20155%2038%20163%2038%208%20-1%2020%20-22%2027%20-47z%20m-2612%20-1212%0Ac10%20-156%2034%20-365%2051%20-443%2041%20-190%2064%20-292%2070%20-307%205%20-13%20-6%20-21%20-50%20-37%20-138%0A-52%20-356%20-164%20-461%20-237%20-20%20-14%20-23%20-13%20-45%2022%20-109%20171%20-211%20371%20-263%20520%0A-60%20167%20-102%20354%20-120%20527%20l-6%2057%20408%200%20409%200%207%20-102z%20m1356%20-216%20l0%20-319%0A-181%20-12%20c-100%20-6%20-202%20-16%20-228%20-21%20-25%20-4%20-95%20-16%20-156%20-25%20-96%20-15%20-420%0A-86%20-460%20-101%20-20%20-8%20-30%2020%20-61%20166%20-32%20156%20-60%20366%20-70%20515%20l-7%20115%20582%200%0A581%200%200%20-318z%20m1360%20290%20c0%20-80%20-34%20-366%20-60%20-510%20-34%20-185%20-50%20-242%20-67%20-249%0A-7%20-3%20-76%2011%20-155%2030%20-79%2020%20-201%2045%20-273%2057%20-71%2011%20-155%2025%20-185%2030%20-30%205%0A-135%2015%20-232%2021%20l-178%2013%200%20318%200%20318%20575%200%20575%200%200%20-28z%20m1030%2016%20c0%20-7%20-9%0A-71%20-19%20-143%20-36%20-239%20-97%20-435%20-207%20-660%20-70%20-144%20-117%20-230%20-144%20-260%20-10%0A-11%20-23%20-30%20-29%20-43%20-12%20-22%20-14%20-22%20-34%20-8%20-104%2073%20-336%20192%20-472%20241%20-27%2010%0A-51%2019%20-53%2021%20-2%201%206%2037%2018%2080%2018%2070%2043%20194%2071%20349%209%2049%2039%20368%2039%20413%20l0%2022%0A415%200%20c325%200%20415%20-3%20415%20-12z%20m-2390%20-1459%20l0%20-632%20-45%206%20c-88%2012%20-253%2091%0A-349%20167%20-96%2075%20-237%20232%20-316%20350%20-84%20128%20-210%20382%20-245%20494%20-9%2028%20-20%2059%0A-26%2068%20-13%2025%20-14%2025%2039%2042%20116%2037%20262%2066%20497%20101%20186%2027%20227%2031%20358%2033%20l87%202%0A0%20-631z%20m655%20596%20c93%20-14%20204%20-31%20245%20-39%2082%20-16%20272%20-65%20278%20-71%209%20-9%20-20%0A-101%20-64%20-204%20-113%20-266%20-243%20-470%20-399%20-626%20-103%20-103%20-116%20-114%20-205%20-172%0A-82%20-53%20-232%20-113%20-282%20-113%20-17%200%20-18%2037%20-18%20632%20l0%20631%20137%20-7%20c76%20-4%20214%0A-18%20308%20-31z%20m965%20-281%20c116%20-57%20230%20-124%20230%20-135%200%20-19%20-157%20-182%20-270%20-279%0A-156%20-134%20-353%20-256%20-590%20-364%20-34%20-15%20-148%20-56%20-158%20-56%20-4%200%2082%20106%20102%20125%0A19%2018%2090%20109%20118%20150%20120%20181%20242%20426%20302%20612%20l17%2051%2077%20-28%20c42%20-16%20120%20-50%0A172%20-76z%20m-2782%2069%20c6%20-16%2018%20-50%2028%20-78%2010%20-27%2021%20-54%2024%20-60%204%20-5%2017%20-36%2029%0A-68%2022%20-60%20127%20-267%20159%20-315%2011%20-15%2040%20-58%2065%20-97%2049%20-75%2076%20-110%20147%20-190%0A24%20-27%2053%20-60%2064%20-73%20l20%20-22%20-60%2020%20c-66%2023%20-91%2034%20-214%2093%20-87%2042%20-105%2052%0A-225%20128%20-170%20107%20-364%20272%20-482%20412%20-38%2044%20-40%2055%20-15%2064%209%204%2040%2021%2067%2038%2082%0A52%20336%20171%20371%20174%206%201%2016%20-11%2022%20-26z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
              }
                  
                </_Builtin.DropdownToggle>
                
                <_Builtin.DropdownList className="dropdown-lang-list" tag="nav">
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
                        {t('en', {ns: 'langs'})}
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
                        {t('fr', {ns: 'langs'})}
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
                      {t('zh', {ns: 'langs'})}
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
                      {t('es', {ns: 'langs'})}
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
                      {t('hi', {ns: 'langs'})}
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
                      {t('ar', {ns: 'langs'})}
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
                      {t('pt', {ns: 'langs'})}
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
                      {t('ru', {ns: 'langs'})}
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
                      <span color="red">{t('ja', {ns: 'langs'})}</span>
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
                      {t('de', {ns: 'langs'})}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className="uui-navbar07_menu-dropdown"
                data-w-id="087b38d3-bb16-de61-e483-c97c79ade6ae"
                tag="div"
                delay={300}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className="uui-navbar07_dropdown-toggle"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="uui-dropdown-icon"
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewbox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.67%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-block-4" tag="div">
                    {"Langues"}
                  </_Builtin.Block>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className="uui-navbar07_dropdown-list"
                  tag="nav"
                >
                  <_Builtin.Block
                    className="uui-navbar07_dropdown-link-list"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-_087b38d3-bb16-de61-e483-c97c79ade6b5-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="Auto"
                          height="Auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a93f6ecac66d67f34_france.png"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Français"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-_087b38d3-bb16-de61-e483-c97c79ade6bd-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144abcf4bc439934e122_united_kingdom.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Anglais"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-abbb1c25-98c6-6dfa-be8e-cf21e6cd62cf-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a51797514d68b8077_italy.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Italien"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-d427e37c-a5fb-6be1-8ef3-12a8b5b15043-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144aa46af18ccbce76e2_spain.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Espagnol"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-e1800e03-b07b-8f18-d481-dd264916953f-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144abfcd4304a378db29_portugal.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Portugais"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-a3b7329e-e12a-e313-0227-4cdc0d51c21b-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144afe4f70889087ef0d_china.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Chinois"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-_339b36f4-92e2-d6dc-0daa-a0b2e3c5ca3a-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a04bb30bf3a41b26f_russia.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Russe"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-f8376cda-4124-f347-4d3d-b4d43a31446c-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a5e51907e32e9ef81_india.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Indien"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-b70deb88-6ddd-a13e-c74f-740f716618a5-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a3a20da597ff179f3_japanese.jpeg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Japonais"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="uui-navbar07_dropdown-link"
                      id="w-node-_065c7fe8-b6d3-d452-20a4-8de6509bc3a3-e0eeec7b"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="uui-navbar07_icon-wrapper"
                        tag="div"
                      >
                        <_Builtin.Image
                          className="image-4"
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b4144a22d6ae9e9ca814c4_arabic_league.svg"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-navbar07_item-right"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-navbar07_item-heading"
                          tag="div"
                        >
                          {"Arabe"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.Link
                className="link-login"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className="html-embed-3"
                  value="%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%2020010904%2F%2FEN%22%0A%20%22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20010904%2FDTD%2Fsvg10.dtd%22%3E%0A%3Csvg%20version%3D%221.0%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20600.000000%20600.000000%22%0A%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C600.000000)%20scale(0.100000%2C-0.100000)%22%0Afill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M2810%204954%20c-240%20-29%20-449%20-87%20-648%20-180%20-63%20-29%20-91%20-47%20-86%20-55%204%0A-7%203%20-9%20-4%20-5%20-14%209%20-63%20-14%20-55%20-27%203%20-6%201%20-7%20-5%20-3%20-20%2012%20-34%20-4%20-20%20-22%0A12%20-15%2011%20-16%20-4%20-4%20-19%2015%20-42%207%20-32%20-10%204%20-7%202%20-8%20-5%20-4%20-11%207%20-91%20-37%20-91%0A-50%200%20-3%206%20-2%2013%202%208%205%208%202%20-2%20-9%20-15%20-19%20-26%20-23%20-15%20-6%204%207%201%2010%20-7%207%20-8%20-3%0A-13%20-11%20-11%20-17%201%20-7%20-2%20-10%20-6%20-7%20-5%203%20-30%20-11%20-56%20-31%20-44%20-34%20-61%20-53%20-33%0A-37%207%204%209%203%204%20-2%20-5%20-5%20-12%20-9%20-15%20-10%20-18%20-2%20-42%20-17%20-42%20-26%200%20-5%204%20-7%209%20-3%0A5%203%2012%201%2016%20-4%203%20-6%20-5%20-8%20-19%20-5%20-19%203%20-39%20-12%20-111%20-87%20-109%20-115%20-199%20-234%0A-189%20-250%204%20-7%203%20-9%20-4%20-5%20-14%208%20-68%20-75%20-142%20-220%20-88%20-171%20-147%20-351%20-185%0A-559%20-22%20-122%20-30%20-394%20-16%20-525%2014%20-130%2042%20-275%2050%20-261%204%205%207%20-7%207%20-27%200%0A-20%2013%20-76%2029%20-124%2024%20-75%2031%20-86%2043%20-75%2013%2010%2014%209%202%20-9%20-11%20-18%20-5%20-36%2053%0A-158%2045%20-93%2070%20-135%2078%20-130%208%204%209%203%205%20-5%20-11%20-18%2054%20-116%2066%20-99%207%209%208%207%204%0A-7%20-7%20-24%2090%20-159%20106%20-149%206%204%208%202%205%20-3%20-8%20-12%2030%20-64%2043%20-60%204%201%209%20-2%2010%20-8%0A3%20-18%2043%20-54%2053%20-48%206%203%207%201%204%20-4%20-7%20-12%2026%20-46%2036%20-38%204%203%205%202%202%20-2%20-8%20-10%0A16%20-33%2028%20-26%205%203%207%201%204%20-5%20-9%20-13%20137%20-137%20161%20-137%209%200%2017%20-6%2017%20-12%200%20-18%0A43%20-45%2058%20-37%206%204%209%204%205%20-1%20-4%20-4%207%20-19%2024%20-32%2035%20-25%2053%20-30%2042%20-10%20-4%207%20-3%0A9%202%204%205%20-5%209%20-13%209%20-19%200%20-18%20245%20-135%20373%20-178%20324%20-108%20675%20-132%201009%20-69%0A72%2013%20110%2025%20106%2032%20-3%206%20-1%207%205%203%2015%20-9%20143%2024%20136%2035%20-3%205%201%206%208%204%2016%20-6%0A161%2050%20235%2090%2026%2014%2040%2024%2030%2021%20-11%20-4%20-16%20-2%20-12%205%204%206%2014%208%2022%205%208%20-4%2039%208%0A69%2024%2039%2023%2052%2035%2048%2048%20-5%2013%20-4%2014%204%203%208%20-12%2016%20-10%2046%208%2021%2014%2033%2027%2029%2034%0A-3%207%20-3%209%202%205%2011%20-11%2047%2011%2039%2024%20-4%207%20-3%208%204%204%2015%20-9%2084%2043%2075%2057%20-3%206%20-1%207%0A5%203%2022%20-13%20252%20208%20244%20236%20-1%205%202%207%207%204%2012%20-8%2053%2043%2044%2057%20-3%205%20-1%207%204%204%2014%0A-9%2066%2060%2057%2075%20-4%207%20-3%208%204%204%207%20-4%2026%2015%2048%2050%2029%2045%2033%2058%2023%2066%20-11%207%20-10%208%0A5%206%2013%20-2%2029%2017%2062%2077%2024%2044%2042%2086%2039%2093%20-3%207%20-1%2011%204%208%207%20-5%2032%2047%2077%20162%2014%0A36%2014%2045%203%2060%20-12%2015%20-12%2016%202%204%2014%20-11%2019%20-1%2042%2085%2084%20315%2093%20647%2026%20958%20-20%0A93%20-82%20286%20-89%20275%20-4%20-6%20-7%202%20-7%2018%200%2036%20-124%20287%20-143%20287%20-7%200%20-15%207%20-17%0A15%20-4%2013%20-3%2013%206%200%2014%20-19%2014%20-5%200%2021%20-5%2011%20-15%2016%20-21%2013%20-7%20-4%20-8%20-3%20-4%204%209%0A15%20-43%2094%20-57%2085%20-5%20-3%20-7%20-1%20-4%204%208%2013%20-60%20104%20-75%20100%20-5%20-1%20-12%206%20-13%2016%0A-2%2010%20-9%2025%20-16%2033%20-10%2012%20-14%2012%20-22%202%20-6%20-10%20-8%20-9%20-4%204%206%2018%20-25%2052%20-37%2041%0A-4%20-5%20-6%20-1%20-4%207%202%208%20-3%2014%20-10%2012%20-8%20-1%20-11%202%20-8%207%208%2012%20-18%2033%20-29%2023%20-5%20-4%0A-5%20-2%20-2%204%207%2012%20-47%2067%20-137%20138%20-45%2037%20-61%2045%20-68%2034%20-6%20-9%20-8%20-8%20-6%207%202%2013%0A-3%2020%20-14%2020%20-9%200%20-20%204%20-25%209%20-4%205%20-3%206%205%202%206%20-4%2012%20-5%2012%20-2%200%2012%20-112%2076%0A-122%2070%20-6%20-4%20-8%20-3%20-4%204%2013%2021%20-329%20180%20-361%20168%20-8%20-3%20-11%20-2%20-8%203%203%205%20-20%0A17%20-50%2025%20-30%209%20-80%2023%20-111%2032%20-31%209%20-80%2017%20-109%2017%20-29%201%20-51%205%20-49%208%202%204%0A-13%209%20-34%2013%20-48%207%20-426%2016%20-472%2010z%20m83%20-11%20c-7%20-2%20-19%20-2%20-25%200%20-7%203%20-2%205%0A12%205%2014%200%2019%20-2%2013%20-5z%20m50%200%20c-7%20-2%20-19%20-2%20-25%200%20-7%203%20-2%205%2012%205%2014%200%2019%20-2%0A13%20-5z%20m190%200%20c-18%20-2%20-48%20-2%20-65%200%20-18%202%20-4%204%2032%204%2036%200%2050%20-2%2033%20-4z%20m113%0A-12%20c-3%20-5%20-15%20-7%20-26%20-4%20-28%207%20-25%2013%206%2013%2014%200%2023%20-4%2020%20-9z%20m174%20-25%20c0%20-3%0A-4%20-8%20-10%20-11%20-5%20-3%20-10%20-1%20-10%204%200%206%205%2011%2010%2011%206%200%2010%20-2%2010%20-4z%20m-77%20-145%0Ac132%20-27%20293%20-79%20406%20-132%2046%20-21%2088%20-36%2095%20-32%206%203%208%203%204%20-2%20-5%20-5%2018%20-24%2050%0A-42%20134%20-81%20280%20-194%20376%20-292%2027%20-27%2053%20-48%2058%20-45%205%203%207%201%206%20-4%20-2%20-5%2020%0A-38%2048%20-73%2028%20-35%2066%20-85%2086%20-111%2019%20-26%2039%20-44%2043%20-40%205%204%205%202%201%20-5%20-4%20-7%204%0A-29%2017%20-50%2013%20-21%2036%20-62%2051%20-90%2020%20-40%2030%20-51%2044%20-47%2012%204%2013%203%204%20-3%20-20%20-15%0A13%20-94%2036%20-86%2013%204%2014%203%203%20-5%20-11%20-8%20-8%20-24%2017%20-88%2016%20-44%2033%20-94%2037%20-112%204%0A-19%2011%20-30%2017%20-26%207%204%208%202%204%20-4%20-9%20-16%204%20-83%2015%20-76%205%203%206%20-2%203%20-10%20-3%20-8%20-1%0A-37%205%20-63%205%20-27%2015%20-108%2022%20-181%2013%20-148%202%20-349%20-27%20-487%20-9%20-42%20-13%20-84%20-9%0A-93%203%20-9%203%20-13%20-1%20-9%20-9%209%20-65%20-164%20-59%20-181%203%20-7%201%20-11%20-4%20-7%20-12%207%20-35%20-61%0A-25%20-76%204%20-7%203%20-9%20-3%20-6%20-13%208%20-36%20-41%20-27%20-55%204%20-6%203%20-8%20-3%20-5%20-5%203%20-21%20-18%0A-36%20-47%20-14%20-30%20-46%20-86%20-72%20-125%20-25%20-40%20-43%20-76%20-40%20-82%204%20-5%201%20-8%20-6%20-7%20-6%0A2%20-14%20-3%20-17%20-11%20-3%20-9%200%20-11%208%20-6%209%205%2011%204%206%20-4%20-4%20-6%20-11%20-9%20-15%20-6%20-14%208%0A-71%20-72%20-65%20-92%205%20-15%204%20-16%20-5%20-3%20-10%2014%20-16%207%20-11%20-15%201%20-5%20-2%20-7%20-6%20-2%20-4%0A4%20-20%20-5%20-36%20-20%20-29%20-27%20-38%20-50%20-15%20-37%207%204%209%203%204%20-2%20-5%20-5%20-14%20-9%20-20%20-9%0A-7%20-1%20-11%20-6%20-9%20-13%201%20-7%20-4%20-11%20-10%20-10%20-7%202%20-12%20-3%20-10%20-10%201%20-6%20-4%20-11%20-10%0A-10%20-7%202%20-12%20-3%20-10%20-10%201%20-8%20-2%20-11%20-7%20-8%20-5%204%20-25%20-7%20-45%20-24%20l-34%20-31%20-17%0A56%20c-8%2031%20-20%2053%20-25%2050%20-5%20-3%20-7%201%20-4%209%207%2018%20-34%2099%20-46%2091%20-12%20-7%20-29%2026%0A-22%2044%203%209%200%2011%20-8%206%20-9%20-5%20-11%20-4%20-6%203%204%206%20-9%2028%20-28%2049%20-20%2021%20-36%2032%20-36%0A25%200%20-7%20-5%20-10%20-11%20-6%20-8%204%20-7%209%202%2015%2018%2011%20-17%2050%20-37%2042%20-9%20-3%20-14%200%20-12%207%0A4%2017%20-100%20102%20-114%2094%20-7%20-5%20-8%20-2%20-3%206%206%209%204%2012%20-7%208%20-8%20-4%20-21%20-2%20-29%204%20-11%0A8%20-9%208%206%204%20l20%20-6%20-20%2016%20c-38%2030%20-94%2054%20-112%2048%20-13%20-4%20-14%20-3%20-5%203%209%207%20-3%0A17%20-45%2035%20-320%20142%20-709%20162%20-1070%2056%20-40%20-11%20-70%20-24%20-68%20-28%203%20-5%20-3%20-6%20-12%0A-4%20-23%205%20-229%20-97%20-226%20-113%201%20-6%20-4%20-14%20-13%20-17%20-9%20-4%20-12%20-2%20-8%205%204%207%200%207%0A-15%20-1%20-12%20-6%20-18%20-16%20-15%20-22%204%20-7%202%20-8%20-5%20-4%20-15%2010%20-43%20-13%20-34%20-27%203%20-5%201%0A-7%20-5%20-3%20-13%208%20-74%20-42%20-66%20-55%203%20-5%200%20-8%20-8%20-7%20-7%202%20-12%20-4%20-10%20-12%202%20-8%200%0A-12%20-4%20-7%20-10%209%20-45%20-23%20-38%20-35%203%20-4%200%20-7%20-7%20-6%20-30%207%20-169%20-244%20-169%20-305%200%0A-21%20-13%20-22%20-30%20-2%20-7%208%20-16%2012%20-21%209%20-5%20-3%20-8%200%20-7%208%202%207%20-4%2012%20-12%2010%20-8%20-2%0A-12%200%20-7%204%209%2010%20-83%20105%20-95%2098%20-5%20-3%20-7%20-1%20-6%204%205%2014%20-85%20122%20-95%20115%20-6%20-3%0A-7%20-2%20-4%204%208%2012%20-21%2055%20-33%2048%20-5%20-3%20-12%200%20-16%206%20-4%208%20-3%209%204%205%2019%20-11%2014%207%0A-9%2034%20-11%2014%20-18%2019%20-14%2013%203%20-7%201%20-13%20-5%20-13%20-7%200%20-10%207%20-7%2015%207%2018%20-67%20148%0A-78%20137%20-5%20-4%20-5%20-2%20-2%204%204%207%20-13%2054%20-37%20105%20-24%2052%20-50%20113%20-57%20136%20-6%2023%0A-16%2040%20-20%2037%20-5%20-3%20-7%201%20-4%208%205%2015%20-28%20141%20-35%20134%20-3%20-2%20-5%208%20-6%2022%200%2015%20-8%0A83%20-18%20150%20-24%20162%20-18%20447%2013%20592%2071%20329%20211%20610%20422%20849%2027%2030%2045%2059%2042%2065%0A-3%206%20-2%208%202%203%2011%20-10%2046%2023%2038%2036%20-3%205%20-1%207%204%204%206%20-4%2038%2018%2072%2048%2034%2030%2073%2062%0A86%2071%2014%209%2022%2021%2018%2028%20-3%206%20-3%208%202%204%2012%20-11%2047%2011%2039%2025%20-4%207%20-4%209%201%205%2011%0A-11%2047%2011%2039%2024%20-4%207%20-3%208%204%204%206%20-4%2053%2018%20103%2048%2050%2030%20144%2076%20208%20103%2064%2026%0A118%2051%20119%2055%202%205%208%206%2013%203%205%20-3%2037%203%2071%2013%2054%2017%20182%2042%20283%2056%2017%202%20120%203%0A230%201%20158%20-2%20223%20-7%20308%20-24z%20m164%20-17%20c-3%20-3%20-12%20-4%20-19%20-1%20-8%203%20-5%206%206%206%2011%0A1%2017%20-2%2013%20-5z%20m400%20-20%20c-3%20-3%20-12%20-4%20-19%20-1%20-8%203%20-5%206%206%206%2011%201%2017%20-2%2013%20-5z%0Am-1507%20-14%20c0%20-5%20-2%20-10%20-4%20-10%20-3%200%20-8%205%20-11%2010%20-3%206%20-1%2010%204%2010%206%200%2011%20-4%0A11%20-10z%20m-720%20-284%20c0%20-3%20-4%20-8%20-10%20-11%20-5%20-3%20-10%20-1%20-10%204%200%206%205%2011%2010%2011%206%0A0%2010%20-2%2010%20-4z%20m2637%20-188%20c-3%20-8%20-6%20-5%20-6%206%20-1%2011%202%2017%205%2013%203%20-3%204%20-12%201%0A-19z%20m-2942%20-428%20c3%20-5%201%20-10%20-4%20-10%20-6%200%20-11%205%20-11%2010%200%206%202%2010%204%2010%203%200%208%0A-4%2011%20-10z%20m-301%20-1046%20c3%20-8%202%20-12%20-4%20-9%20-6%203%20-10%2010%20-10%2016%200%2014%207%2011%2014%20-7z%0Am39%20-169%20c-3%20-9%20-8%20-14%20-10%20-11%20-3%203%20-2%209%202%2015%209%2016%2015%2013%208%20-4z%20m1632%20-265%0Ac-3%20-5%20-16%20-10%20-28%20-9%20-20%201%20-20%202%203%209%2014%204%2026%208%2028%209%202%201%200%20-3%20-3%20-9z%20m558%0A-7%20c-7%20-2%20-21%20-2%20-30%200%20-10%203%20-4%205%2012%205%2017%200%2024%20-2%2018%20-5z%20m-663%20-17%20c0%20-2%0A-11%20-6%20-25%20-8%20-13%20-3%20-22%20-1%20-19%203%205%209%2044%2013%2044%205z%20m-120%20-36%20c0%20-5%20-2%20-10%20-4%0A-10%20-3%200%20-8%205%20-11%2010%20-3%206%20-1%2010%204%2010%206%200%2011%20-4%2011%20-10z%20m-163%20-66%20c-3%20-3%20-12%0A-4%20-19%20-1%20-8%203%20-5%206%206%206%2011%201%2017%20-2%2013%20-5z%20m-1017%20-214%20c0%20-5%20-2%20-10%20-4%20-10%0A-3%200%20-8%205%20-11%2010%20-3%206%20-1%2010%204%2010%206%200%2011%20-4%2011%20-10z%20m1075%20-840%20c13%20-6%2015%20-9%0A5%20-9%20-8%200%20-22%204%20-30%209%20-18%2012%20-2%2012%2025%200z%22%2F%3E%0A%3Cpath%20d%3D%22M2851%203895%20c-80%20-19%20-203%20-74%20-194%20-88%203%20-6%201%20-7%20-5%20-3%20-15%209%20-64%0A-23%20-55%20-37%203%20-6%201%20-7%20-5%20-3%20-16%209%20-123%20-92%20-120%20-113%202%20-8%20-3%20-16%20-9%20-16%20-18%0A0%20-46%20-43%20-37%20-57%204%20-6%203%20-8%20-3%20-5%20-11%207%20-47%20-49%20-39%20-62%204%20-5%202%20-11%20-4%20-13%0A-23%20-7%20-53%20-124%20-58%20-225%20-5%20-118%204%20-217%2020%20-207%207%204%208%202%204%20-5%20-10%20-16%2035%0A-142%2047%20-134%206%203%207%201%203%20-5%20-10%20-16%2061%20-125%2076%20-116%207%204%208%203%204%20-4%20-10%20-16%2083%0A-114%20101%20-108%208%203%2011%201%208%20-4%20-8%20-13%2071%20-64%2086%20-54%207%204%2010%203%206%20-3%20-8%20-13%2020%0A-26%2035%20-16%206%203%208%201%204%20-5%20-8%20-14%2083%20-48%20170%20-63%2037%20-6%20106%20-9%20153%20-7%2092%206%20214%0A35%20205%2049%20-3%205%202%206%2010%203%2021%20-8%20149%2064%20140%2078%20-5%207%20-2%208%205%203%209%20-5%2039%2019%2090%2071%0A130%20133%20193%20284%20195%20464%201%20104%20-10%20193%20-24%20185%20-4%20-3%20-6%204%20-3%2015%203%2012%200%2020%20-6%0A20%20-7%200%20-10%204%20-6%209%2015%2025%20-97%20227%20-118%20214%20-7%20-3%20-9%20-3%20-5%202%2011%2011%20-12%2036%20-25%0A28%20-5%20-3%20-7%20-1%20-4%204%206%2010%20-20%2041%20-35%2042%20-5%201%20-8%204%20-9%209%20-2%2016%20-23%2033%20-35%2028%0A-7%20-3%20-16%200%20-20%206%20-5%207%20-2%208%207%204%208%20-4%205%200%20-6%209%20-40%2033%20-102%2064%20-180%2091%20-100%0A33%20-263%2042%20-364%2019z%20m109%20-5%20c0%20-5%20-4%20-10%20-10%20-10%20-5%200%20-10%205%20-10%2010%200%206%205%2010%0A10%2010%206%200%2010%20-4%2010%20-10z%20m-165%20-30%20c3%20-5%201%20-10%20-4%20-10%20-6%200%20-11%205%20-11%2010%200%206%0A2%2010%204%2010%203%200%208%20-4%2011%20-10z%20m-80%20-30%20c-3%20-5%20-12%20-10%20-18%20-10%20-7%200%20-6%204%203%2010%0A19%2012%2023%2012%2015%200z%20m252%20-1276%20c-3%20-3%20-12%20-4%20-19%20-1%20-8%203%20-5%206%206%206%2011%201%2017%20-2%0A13%20-5z%22%2F%3E%0A%3Cpath%20d%3D%22M4066%201867%20c3%20-10%209%20-15%2012%20-12%203%203%200%2011%20-7%2018%20-10%209%20-11%208%20-5%20-6z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
            </_Builtin.Block>
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
        <_Builtin.HtmlEmbed
          className="uui-logos-loop-css-embed"
          value="%3Cscript%3E%0A%2F*%0Aif%20(window.innerWidth%20%3E%3D%20768)%20%7B%0A%20%20%2F%2F%20S%C3%A9lectionnez%20votre%20menu%20par%20son%20ID%0A%20%20var%20menu%20%3D%20document.getElementById(%22menu%22)%3B%0A%20%20menu.style.display%20%3D%20%22block%22%3B%0A%20%20%2F%2F%20Initialisez%20une%20variable%20pour%20suivre%20la%20position%20du%20d%C3%A9filement%20pr%C3%A9c%C3%A9dent%0A%20%20var%20lastScrollTop%20%3D%200%3B%0A%0A%20%20%2F%2F%20Ajoutez%20un%20gestionnaire%20d'%C3%A9v%C3%A9nement%20de%20d%C3%A9filement%20%C3%A0%20la%20fen%C3%AAtre%0A%20%20window.addEventListener(%22scroll%22%2C%20function()%20%7B%0A%20%20%20%20%2F%2F%20Obtenez%20la%20position%20actuelle%20du%20d%C3%A9filement%0A%20%20%20%20var%20scrollTop%20%3D%20window.pageYOffset%20%7C%7C%20document.documentElement.scrollTop%3B%0A%0A%20%20%20%20%2F%2F%20V%C3%A9rifiez%20si%20le%20d%C3%A9filement%20se%20fait%20vers%20le%20haut%20et%20que%20la%20position%20actuelle%20du%20d%C3%A9filement%20est%20sup%C3%A9rieure%20%C3%A0%20la%20pr%C3%A9c%C3%A9dente%0A%20%20%20%20if%20(scrollTop%20%3C%20lastScrollTop)%20%7B%0A%20%20%20%20%20%20%2F%2F%20Affichez%20le%20menu%0A%20%20%20%20%20%20menu.style.display%20%3D%20%22block%22%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Cachez%20le%20menu%0A%20%20%20%20%20%20menu.style.display%20%3D%20%22none%22%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Mettez%20%C3%A0%20jour%20la%20position%20du%20d%C3%A9filement%20pr%C3%A9c%C3%A9dent%0A%20%20%20%20lastScrollTop%20%3D%20scrollTop%3B%0A%20%20%7D)%3B%0A%7D%0A*%2F%0A%3C%2Fscript%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
