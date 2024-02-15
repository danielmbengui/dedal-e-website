import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { PaddingSmall } from "@/devlink/PaddingSmall";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { LINK_ABOUT_PAGE, LINK_BUY_PAGE, LINK_CONTACT_PAGE, LINK_DEDALAB_PAGE, LINK_GALLERY_PAGE, LINK_HOME_PAGE, LINK_MEDIA_LIBRARY_PAGE, LINK_PARTNERS_PAGE, LINK_SUPPORT_PAGE, LINK_VR_PAGE } from "@/constants/pages";
import { LINK_FACEBOOK, LINK_INSTAGRAM, LINK_LINKEDIN, LINK_TIKTOK, LINK_TWITTER, LINK_YOUTUBE } from "@/constants/links";

export function FooterComponent({ as: _Component = _Builtin.Block, isGallery=false }) {
  const router = useRouter();
  const url = router.asPath;
  const lang = router.locale;
  const { t, i18n } = useTranslation();

  return (
    <_Component
    //className={`${isGallery ? 'section-footer-gallery' : 'section-footer'}`}
    className='section-footer'
    
    style={{
      //width: isGallery ? `calc(100% - ${240}px)` : '100%',
      //ml: { sm: `${drawerWidth}px` },
      //ml: isGallery ? `${240}px` : '0px',
      //position:'absolute',
      //left:240,
      //bottom:0,
      //right:0
    }}
    
    tag="div"
    >
      <_Builtin.Block className="padding-global" tag="div">
        <PaddingSmall />
        <_Builtin.Block className="uui-footer01_component" tag="footer">
          <_Builtin.Block className="uui-page-padding-5" tag="div">
            <_Builtin.Block className="uui-container-large-5" tag="div">
              <_Builtin.Block
                className="uui-padding-vertical-xlarge-2"
                tag="div"
              >
                <_Builtin.Grid className="uui-footer01_top-wrapper" tag="div">
                  <_Builtin.Block
                    className="uui-footer01_left-wrapper"
                    tag="div"
                  >
                    <_Builtin.Block className="div-block-6" tag="div">
                      <_Builtin.Block className="logo-footer" tag="div">
                        <_Builtin.Link
                          className="link-block"
                          button={false}
                          block="inline"
                          options={{
                            href: `/${lang}/${LINK_HOME_PAGE}`,
                          }}
                        >
                          <_Builtin.Block className="div-block-22" tag="div">
                            <_Builtin.Block
                              className="uui-logo_logomark"
                              tag="div"
                            >
                              <_Builtin.Image
                                className="uui-styleguide_logomark-bg"
                                loading="eager"
                                height="40"
                                width="auto"
                                alt="Untitled UI logomark"
                                src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65ae74decc83dc40a2b4b792_Dedalart1%20(1).png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Paragraph className="text-dedalsarl footer">
                              {"Dedal-E"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Image
                          className="uui-logo_image"
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt="Logo"
                          src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65afce72bb670e3d3a7ebfcf_untitled-ui-logo.png"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block className="div-block-10" tag="div" />
                    </_Builtin.Block>
                    <_Builtin.FormWrapper className="uui-footer01_form-block">
                      <_Builtin.FormForm
                        className="uui-footer01_form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        id="email-form"
                      >
                        <_Builtin.FormTextInput
                          className="uui-form_input"
                          autoFocus={false}
                          maxLength={256}
                          name="email-2"
                          data-name="Email 2"
                          placeholder={t('enter_your_email', {ns: 'footer'})}
                          type="email"
                          disabled={false}
                          required={true}
                          id="email"
                        />
                        <_Builtin.FormButton
                          className="fn-button subscribe"
                          type="submit"
                          value={t('subscribe', {ns: 'footer'})}
                          data-wait={t('please_wait', {ns: 'footer'})}
                        />
                      </_Builtin.FormForm>
                      <_Builtin.Block
                        className="uui-text-size-medium-3"
                        tag="div"
                      >
                        {t('slogan_website', {ns: 'footer'})}
                      </_Builtin.Block>
                      <_Builtin.FormSuccessMessage className="success-message-2">
                        <_Builtin.Block tag="div">
                          {t('submission_received', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.FormSuccessMessage>
                      <_Builtin.FormErrorMessage className="error-message-2">
                        <_Builtin.Block tag="div">
                          {t('something_went_wrong', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.FormErrorMessage>
                    </_Builtin.FormWrapper>
                  </_Builtin.Block>
                  <_Builtin.Grid
                    className="uui-footer01_menu-wrapper"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="uui-footer01_link-list"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="uui-footer01_link-list-heading"
                        tag="div"
                      >
                        {t('resources.title', {ns: 'footer'})}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_PARTNERS_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_PARTNERS_PAGE}`,
                        }}
                      >
                        <_Builtin.Block className="text-block-12" tag="div">
                        {t('resources.partners', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_CONTACT_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_CONTACT_PAGE}`,
                        }}
                      >
                        <_Builtin.Block className="" tag="div">
                        {t('resources.contact', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_SUPPORT_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_SUPPORT_PAGE}`,
                        }}
                      >
                        <_Builtin.Block className="" tag="div">
                        {t('resources.support', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="uui-footer01_link-list"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="uui-footer01_link-list-heading"
                        tag="div"
                      >
                        {t('products.title', {ns: 'footer'})}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_HOME_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_HOME_PAGE}`,
                        }}
                      >
                        <_Builtin.Block className="text-block-7" tag="div">
                        {t('products.home', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_ABOUT_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_ABOUT_PAGE}`,
                        }}
                      >
                        <_Builtin.Block className="text-block-7" tag="div">
                        {t('products.about', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_BUY_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_BUY_PAGE}`,
                        }}
                      >
                        <_Builtin.Block className="text-block-11" tag="div">
                        {t('products.buy', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_VR_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        style={{display:'none'}}
                        options={{
                          href: `/${lang}/${LINK_VR_PAGE}`,
                        }}
                      >
                        <_Builtin.Block tag="div">
                        {t('products.vr', {ns: 'footer'})}
                          </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_DEDALAB_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_DEDALAB_PAGE}`,
                        }}
                      >
                        <_Builtin.Block tag="div">
                        {t('products.dedalab', {ns: 'footer'})}
                          </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={`uui-footer01_link ${LINK_MEDIA_LIBRARY_PAGE === url ? 'w--current' : ''}`}
                        button={false}
                        block="inline"
                        options={{
                          href: `/${lang}/${LINK_MEDIA_LIBRARY_PAGE}`,
                        }}
                      >
                        <_Builtin.Block tag="div">
                        {t('products.media-library', {ns: 'footer'})}
                          </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="uui-footer01_link-list"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="uui-footer01_link-list-heading"
                        tag="div"
                      >
                        {t('socials.title', {ns: 'footer'})}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className="uui-footer01_social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: LINK_INSTAGRAM,
                          target: "_blank",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className="uui-footer01_social-icon"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2026%2025%22%20fill%3D%22currentColor%22%3E%0A%3Cpath%20d%3D%22M15.825%2012.6C15.825%2013.2329%2015.6373%2013.8516%2015.2857%2014.3778C14.9341%2014.904%2014.4343%2015.3142%2013.8496%2015.5564C13.2649%2015.7986%2012.6215%2015.862%2012.0007%2015.7385C11.38%2015.615%2010.8098%2015.3102%2010.3623%2014.8627C9.91473%2014.4152%209.60996%2013.845%209.48649%2013.2243C9.36301%2012.6035%209.42638%2011.9601%209.66859%2011.3754C9.91079%2010.7907%2010.3209%2010.2909%2010.8472%209.93927C11.3734%209.58765%2011.9921%209.39998%2012.625%209.39998C13.4729%209.40261%2014.2853%209.7406%2014.8848%2010.3401C15.4844%2010.9397%2015.8224%2011.7521%2015.825%2012.6ZM22.625%208.19998V17C22.625%2018.4852%2022.035%2019.9096%2020.9848%2020.9598C19.9346%2022.01%2018.5102%2022.6%2017.025%2022.6H8.225C6.73979%2022.6%205.31541%2022.01%204.2652%2020.9598C3.215%2019.9096%202.625%2018.4852%202.625%2017V8.19998C2.625%206.71476%203.215%205.29038%204.2652%204.24018C5.31541%203.18997%206.73979%202.59998%208.225%202.59998H17.025C18.5102%202.59998%2019.9346%203.18997%2020.9848%204.24018C22.035%205.29038%2022.625%206.71476%2022.625%208.19998ZM17.425%2012.6C17.425%2011.6506%2017.1435%2010.7226%2016.6161%209.93324C16.0886%209.14388%2015.339%208.52866%2014.4619%208.16535C13.5848%207.80205%2012.6197%207.707%2011.6886%207.89221C10.7575%208.07742%209.90218%208.53457%209.23089%209.20586C8.5596%209.87716%208.10244%2010.7324%207.91723%2011.6635C7.73202%2012.5947%207.82708%2013.5598%208.19038%2014.4369C8.55368%2015.3139%209.16891%2016.0636%209.95826%2016.591C10.7476%2017.1185%2011.6756%2017.4%2012.625%2017.4C13.898%2017.4%2015.1189%2016.8943%2016.0191%2015.9941C16.9193%2015.0939%2017.425%2013.873%2017.425%2012.6ZM19.025%207.39998C19.025%207.16264%2018.9546%206.93063%2018.8228%206.73329C18.6909%206.53595%2018.5035%206.38215%2018.2842%206.29132C18.0649%206.2005%2017.8237%206.17673%2017.5909%206.22303C17.3581%206.26934%2017.1443%206.38362%2016.9765%206.55145C16.8087%206.71927%2016.6944%206.93309%2016.6481%207.16587C16.6018%207.39864%2016.6255%207.63992%2016.7163%207.8592C16.8072%208.07847%2016.961%208.26588%2017.1583%208.39774C17.3557%208.5296%2017.5877%208.59998%2017.825%208.59998C18.1433%208.59998%2018.4485%208.47355%2018.6735%208.2485C18.8986%208.02346%2019.025%207.71824%2019.025%207.39998Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                        {t('socials.instagram', {ns: 'footer'})}
                          </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="uui-footer01_social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: LINK_FACEBOOK,
                          target: "_blank",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className="uui-footer01_social-icon"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%0A%3Cpath%20d%3D%22M14%2013.5H16.5L17.5%209.5H14V7.5C14%206.47%2014%205.5%2016%205.5H17.5V2.14C17.174%202.097%2015.943%202%2014.643%202C11.928%202%2010%203.657%2010%206.7V9.5H7V13.5H10V22H14V13.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block className="text-block-8" tag="div">
                        {t('socials.facebook', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="uui-footer01_social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: LINK_TIKTOK,
                          target: "_blank",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className="uui-footer01_social-icon"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20512%20512%22%20id%3D%22icons%22%3E%3Cpath%20d%3D%22M412.19%2C118.66a109.27%2C109.27%2C0%2C0%2C1-9.45-5.5%2C132.87%2C132.87%2C0%2C0%2C1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14%2C23.9%2C350%2C16%2C350.13%2C16H267.69V334.78c0%2C4.28%2C0%2C8.51-.18%2C12.69%2C0%2C.52-.05%2C1-.08%2C1.56%2C0%2C.23%2C0%2C.47-.05.71%2C0%2C.06%2C0%2C.12%2C0%2C.18a70%2C70%2C0%2C0%2C1-35.22%2C55.56%2C68.8%2C68.8%2C0%2C0%2C1-34.11%2C9c-38.41%2C0-69.54-31.32-69.54-70s31.13-70%2C69.54-70a68.9%2C68.9%2C0%2C0%2C1%2C21.41%2C3.39l.1-83.94a153.14%2C153.14%2C0%2C0%2C0-118%2C34.52%2C161.79%2C161.79%2C0%2C0%2C0-35.3%2C43.53c-3.48%2C6-16.61%2C30.11-18.2%2C69.24-1%2C22.21%2C5.67%2C45.22%2C8.85%2C54.73v.2c2%2C5.6%2C9.75%2C24.71%2C22.38%2C40.82A167.53%2C167.53%2C0%2C0%2C0%2C115%2C470.66v-.2l.2.2C155.11%2C497.78%2C199.36%2C496%2C199.36%2C496c7.66-.31%2C33.32%2C0%2C62.46-13.81%2C32.32-15.31%2C50.72-38.12%2C50.72-38.12a158.46%2C158.46%2C0%2C0%2C0%2C27.64-45.93c7.46-19.61%2C9.95-43.13%2C9.95-52.53V176.49c1%2C.6%2C14.32%2C9.41%2C14.32%2C9.41s19.19%2C12.3%2C49.13%2C20.31c21.48%2C5.7%2C50.42%2C6.9%2C50.42%2C6.9V131.27C453.86%2C132.37%2C433.27%2C129.17%2C412.19%2C118.66Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block className="text-block-8" tag="div">
                        {t('socials.tiktok', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="uui-footer01_social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: LINK_TWITTER,
                          target: "_blank",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className="uui-footer01_social-icon"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.0%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2025.000000%2025.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C25.000000)%20scale(0.100000%2C-0.100000)%22%20fill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M54%20176%20l46%20-63%20-41%20-47%20c-53%20-60%20-45%20-71%209%20-12%20l42%2045%2030%20-44%20c27%20-39%2036%20-45%2066%20-45%20l35%200%20-47%2065%20-46%2066%2041%2049%20c23%2028%2038%2050%2032%2050%20-5%200%20-25%20-18%20-44%20-40%20-19%20-22%20-36%20-40%20-39%20-40%20-3%200%20-17%2018%20-32%2040%20-22%2034%20-31%2040%20-62%2040%20l-35%200%2045%20-64z%20m86%20-49%20c76%20-107%2076%20-107%2058%20-107%20-8%200%20-47%2045%20-86%20100%20-52%2073%20-67%20100%20-54%20100%2010%20-1%2044%20-39%2082%20-93z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                        {t('socials.twitter', {ns: 'footer'})}
                          </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="uui-footer01_social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: LINK_LINKEDIN,
                          target: "_blank",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className="uui-footer01_social-icon"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.0%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20225.000000%20225.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C225.000000)%20scale(0.100000%2C-0.100000)%22%20fill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M230%202144%20c-112%20-49%20-171%20-199%20-121%20-309%2068%20-148%20273%20-180%20380%20-59%2085%2097%2075%20246%20-23%20332%20-59%2051%20-164%2067%20-236%2036z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M90%20835%20l0%20-745%20230%200%20230%200%200%20745%200%20745%20-230%200%20-230%200%200%20-745z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M1532%201549%20c-100%20-19%20-223%20-96%20-283%20-175%20-18%20-24%20-35%20-41%20-39%20-39%20-4%203%20-11%2037%20-14%2077%20-13%20132%2013%20118%20-224%20118%20l-205%200%206%20-157%20c4%20-87%207%20-411%207%20-720%20l0%20-563%20230%200%20230%200%200%20453%200%20452%2028%2060%20c51%20107%20142%20165%20236%20150%2052%20-9%2084%20-26%20117%20-62%2074%20-79%2079%20-119%2079%20-623%20l0%20-430%20231%200%20230%200%20-4%20512%20c-3%20454%20-5%20520%20-21%20573%20-60%20206%20-188%20337%20-364%20374%20-61%2013%20-177%2013%20-240%200z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block className="text-block-10" tag="div">
                        {t('socials.linkedin', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="uui-footer01_social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: LINK_YOUTUBE,
                          target: "_blank",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className="uui-footer01_social-icon"
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2025%2025%22%20fill%3D%22currentColor%22%3E%0A%3Cpath%20d%3D%22M10.625%2015.6L15.815%2012.6L10.625%209.59998V15.6ZM22.185%207.76998C22.315%208.23998%2022.405%208.86998%2022.465%209.66998C22.535%2010.47%2022.565%2011.16%2022.565%2011.76L22.625%2012.6C22.625%2014.79%2022.465%2016.4%2022.185%2017.43C21.935%2018.33%2021.355%2018.91%2020.455%2019.16C19.985%2019.29%2019.125%2019.38%2017.805%2019.44C16.505%2019.51%2015.315%2019.54%2014.215%2019.54L12.625%2019.6C8.435%2019.6%205.825%2019.44%204.795%2019.16C3.895%2018.91%203.315%2018.33%203.065%2017.43C2.935%2016.96%202.845%2016.33%202.785%2015.53C2.715%2014.73%202.685%2014.04%202.685%2013.44L2.625%2012.6C2.625%2010.41%202.785%208.79998%203.065%207.76998C3.315%206.86998%203.895%206.28998%204.795%206.03998C5.265%205.90998%206.125%205.81998%207.445%205.75998C8.745%205.68998%209.935%205.65998%2011.035%205.65998L12.625%205.59998C16.815%205.59998%2019.425%205.75998%2020.455%206.03998C21.355%206.28998%2021.935%206.86998%2022.185%207.76998Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block className="text-block-10" tag="div">
                        {t('socials.youtube', {ns: 'footer'})}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Grid>
                <_Builtin.Block
                  className="uui-footer01_bottom-wrapper"
                  tag="div"
                >
                  <_Builtin.Block
                    className="uui-text-size-small-3 text-color-gray500"
                    tag="div"
                  >
                    {t('all_rights_reserved', {ns: 'footer'})}
                  </_Builtin.Block>
                  <_Builtin.Grid className="uui-footer01_legal-list" tag="div">
                    <_Builtin.Link
                      className="link-footer"
                      id="w-node-_098ec6d7-d6a4-277e-436d-c98cc36ffa9b-bbe58542"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        id="w-node-_41611fa6-6a62-af85-1c07-2572b4259d72-bbe58542"
                        tag="div"
                      >
                        {t('legal.terms', {ns: 'footer'})}
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="link-footer"
                      id="w-node-_2a80609c-254e-c572-2046-7ab17e0a8cd3-bbe58542"
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        id="w-node-_2a80609c-254e-c572-2046-7ab17e0a8cd4-bbe58542"
                        tag="div"
                      >
                        {t('legal.privacy', {ns: 'footer'})}
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
