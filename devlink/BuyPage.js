import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";

export function BuyPage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <Navbar />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="Buy" textSizeRegluarText="Creation" />
        <_Builtin.Block className="section-change-log" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="padding-section-large" tag="div">
                <_Builtin.Block className="uui-footer01_component" tag="footer">
                  <_Builtin.Block className="uui-page-padding-5" tag="div">
                    <_Builtin.Block className="uui-container-large-5" tag="div">
                      <_Builtin.Block
                        className="uui-padding-vertical-xlarge-2"
                        tag="div"
                      >
                        <_Builtin.Grid
                          className="uui-footer01_top-wrapper"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="uui-footer01_left-wrapper"
                            tag="div"
                          >
                            <_Builtin.NavbarBrand
                              className="uui-footer01_logo-link"
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.Block
                                className="uui-logo_component-3"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="uui-logo_logomark-3"
                                  tag="div"
                                >
                                  <_Builtin.Image
                                    className="uui-styleguide_logomark-bg-3"
                                    loading="eager"
                                    width="auto"
                                    alt="Untitled UI logomark"
                                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65afce72bb670e3d3a7ebfcd_logomark-bg.svg"
                                  />
                                  <_Builtin.Block
                                    className="uui-logo_logomark-blur-3"
                                    tag="div"
                                  />
                                  <_Builtin.Block
                                    className="uui-logo_logomark-dot-3"
                                    tag="div"
                                  />
                                </_Builtin.Block>
                                <_Builtin.Image
                                  className="uui-logo_logotype-3"
                                  loading="lazy"
                                  width="auto"
                                  height="auto"
                                  alt="Untitled UI logotext"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65afce72bb670e3d3a7ebfce_logotype.svg"
                                />
                                <_Builtin.Image
                                  className="uui-logo_image-3"
                                  loading="lazy"
                                  width="auto"
                                  height="auto"
                                  alt="Logo"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65afce72bb670e3d3a7ebfcf_untitled-ui-logo.png"
                                />
                              </_Builtin.Block>
                            </_Builtin.NavbarBrand>
                            <_Builtin.Block
                              className="uui-text-size-medium-3"
                              tag="div"
                            >
                              {
                                "Join our newsletter to stay up to date on features and releases."
                              }
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
                                  placeholder="Enter your email"
                                  type="email"
                                  disabled={false}
                                  required={true}
                                  id="email"
                                />
                                <_Builtin.FormButton
                                  className="uui-button-3 is-button-small"
                                  type="submit"
                                  value="Subscribe"
                                  data-wait="Please wait..."
                                />
                              </_Builtin.FormForm>
                              <_Builtin.Block
                                className="uui-text-size-small-3"
                                tag="div"
                              >
                                {"We care about your data in our "}
                                <_Builtin.Link
                                  className="uui-text-style-link"
                                  button={false}
                                  block=""
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"privacy policy"}
                                </_Builtin.Link>
                                {"."}
                              </_Builtin.Block>
                              <_Builtin.FormSuccessMessage className="success-message-2">
                                <_Builtin.Block tag="div">
                                  {
                                    "Thank you! Your submission has been received!"
                                  }
                                </_Builtin.Block>
                              </_Builtin.FormSuccessMessage>
                              <_Builtin.FormErrorMessage className="error-message-2">
                                <_Builtin.Block tag="div">
                                  {
                                    "Oops! Something went wrong while submitting the form."
                                  }
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
                                {"Product"}
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Overview"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Features"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Solutions"}
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="uui-badge-small-success-2"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    {"New"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Tutorials"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Pricing"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Releases"}
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
                                {"Resources"}
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Blog"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Newsletter"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Events"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Help centre"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Tutorials"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.Block tag="div">
                                  {"Support"}
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
                                {"Social"}
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="uui-footer01_social-link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.HtmlEmbed
                                  className="uui-footer01_social-icon"
                                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24%2012C24%205.37258%2018.6274%200%2012%200C5.37258%200%200%205.37258%200%2012C0%2017.9895%204.3882%2022.954%2010.125%2023.8542V15.4688H7.07812V12H10.125V9.35625C10.125%206.34875%2011.9166%204.6875%2014.6576%204.6875C15.9701%204.6875%2017.3438%204.92188%2017.3438%204.92188V7.875H15.8306C14.34%207.875%2013.875%208.80008%2013.875%209.75V12H17.2031L16.6711%2015.4688H13.875V23.8542C19.6118%2022.954%2024%2017.9895%2024%2012Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                                <_Builtin.Block tag="div">
                                  {"Facebook"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_social-link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.HtmlEmbed
                                  className="uui-footer01_social-icon"
                                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%202.16094C15.2063%202.16094%2015.5859%202.175%2016.8469%202.23125C18.0188%202.28281%2018.6516%202.47969%2019.0734%202.64375C19.6313%202.85938%2020.0344%203.12188%2020.4516%203.53906C20.8734%203.96094%2021.1313%204.35938%2021.3469%204.91719C21.5109%205.33906%2021.7078%205.97656%2021.7594%207.14375C21.8156%208.40937%2021.8297%208.78906%2021.8297%2011.9906C21.8297%2015.1969%2021.8156%2015.5766%2021.7594%2016.8375C21.7078%2018.0094%2021.5109%2018.6422%2021.3469%2019.0641C21.1313%2019.6219%2020.8688%2020.025%2020.4516%2020.4422C20.0297%2020.8641%2019.6313%2021.1219%2019.0734%2021.3375C18.6516%2021.5016%2018.0141%2021.6984%2016.8469%2021.75C15.5813%2021.8063%2015.2016%2021.8203%2012%2021.8203C8.79375%2021.8203%208.41406%2021.8063%207.15313%2021.75C5.98125%2021.6984%205.34844%2021.5016%204.92656%2021.3375C4.36875%2021.1219%203.96563%2020.8594%203.54844%2020.4422C3.12656%2020.0203%202.86875%2019.6219%202.65313%2019.0641C2.48906%2018.6422%202.29219%2018.0047%202.24063%2016.8375C2.18438%2015.5719%202.17031%2015.1922%202.17031%2011.9906C2.17031%208.78438%202.18438%208.40469%202.24063%207.14375C2.29219%205.97187%202.48906%205.33906%202.65313%204.91719C2.86875%204.35938%203.13125%203.95625%203.54844%203.53906C3.97031%203.11719%204.36875%202.85938%204.92656%202.64375C5.34844%202.47969%205.98594%202.28281%207.15313%202.23125C8.41406%202.175%208.79375%202.16094%2012%202.16094ZM12%200C8.74219%200%208.33438%200.0140625%207.05469%200.0703125C5.77969%200.126563%204.90313%200.332812%204.14375%200.628125C3.35156%200.9375%202.68125%201.34531%202.01563%202.01562C1.34531%202.68125%200.9375%203.35156%200.628125%204.13906C0.332812%204.90313%200.126563%205.775%200.0703125%207.05C0.0140625%208.33437%200%208.74219%200%2012C0%2015.2578%200.0140625%2015.6656%200.0703125%2016.9453C0.126563%2018.2203%200.332812%2019.0969%200.628125%2019.8563C0.9375%2020.6484%201.34531%2021.3188%202.01563%2021.9844C2.68125%2022.65%203.35156%2023.0625%204.13906%2023.3672C4.90313%2023.6625%205.775%2023.8687%207.05%2023.925C8.32969%2023.9812%208.7375%2023.9953%2011.9953%2023.9953C15.2531%2023.9953%2015.6609%2023.9812%2016.9406%2023.925C18.2156%2023.8687%2019.0922%2023.6625%2019.8516%2023.3672C20.6391%2023.0625%2021.3094%2022.65%2021.975%2021.9844C22.6406%2021.3188%2023.0531%2020.6484%2023.3578%2019.8609C23.6531%2019.0969%2023.8594%2018.225%2023.9156%2016.95C23.9719%2015.6703%2023.9859%2015.2625%2023.9859%2012.0047C23.9859%208.74688%2023.9719%208.33906%2023.9156%207.05938C23.8594%205.78438%2023.6531%204.90781%2023.3578%204.14844C23.0625%203.35156%2022.6547%202.68125%2021.9844%202.01562C21.3188%201.35%2020.6484%200.9375%2019.8609%200.632812C19.0969%200.3375%2018.225%200.13125%2016.95%200.075C15.6656%200.0140625%2015.2578%200%2012%200Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M12%205.83594C8.59688%205.83594%205.83594%208.59688%205.83594%2012C5.83594%2015.4031%208.59688%2018.1641%2012%2018.1641C15.4031%2018.1641%2018.1641%2015.4031%2018.1641%2012C18.1641%208.59688%2015.4031%205.83594%2012%205.83594ZM12%2015.9984C9.79219%2015.9984%208.00156%2014.2078%208.00156%2012C8.00156%209.79219%209.79219%208.00156%2012%208.00156C14.2078%208.00156%2015.9984%209.79219%2015.9984%2012C15.9984%2014.2078%2014.2078%2015.9984%2012%2015.9984Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M19.8469%205.59214C19.8469%206.38902%2019.2%207.0312%2018.4078%207.0312C17.6109%207.0312%2016.9688%206.38433%2016.9688%205.59214C16.9688%204.79526%2017.6156%204.15308%2018.4078%204.15308C19.2%204.15308%2019.8469%204.79995%2019.8469%205.59214Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                                <_Builtin.Block tag="div">
                                  {"Instagram"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_social-link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.HtmlEmbed
                                  className="uui-footer01_social-icon"
                                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.55016%2021.75C16.6045%2021.75%2021.5583%2014.2467%2021.5583%207.74186C21.5583%207.53092%2021.5536%207.3153%2021.5442%207.10436C22.5079%206.40746%2023.3395%205.54425%2024%204.5553C23.1025%204.9546%2022.1496%205.21538%2021.1739%205.32874C22.2013%204.71291%2022.9705%203.74547%2023.3391%202.60577C22.3726%203.17856%2021.3156%203.58261%2020.2134%203.80061C19.4708%203.01156%2018.489%202.48912%2017.4197%202.31405C16.3504%202.13899%2015.2532%202.32105%2014.2977%202.8321C13.3423%203.34314%2012.5818%204.15471%2012.1338%205.14131C11.6859%206.12792%2011.5754%207.23462%2011.8195%208.2903C9.86249%208.19209%207.94794%207.6837%206.19998%206.7981C4.45203%205.91249%202.90969%204.66944%201.67297%203.14952C1.0444%204.23324%200.852057%205.51565%201.13503%206.73609C1.418%207.95654%202.15506%209.02345%203.19641%209.71999C2.41463%209.69517%201.64998%209.48468%200.965625%209.10592V9.16686C0.964925%2010.3041%201.3581%2011.4066%202.07831%2012.2868C2.79852%2013.167%203.80132%2013.7706%204.91625%2013.995C4.19206%2014.1931%203.43198%2014.222%202.69484%2014.0794C3.00945%2015.0574%203.62157%2015.9129%204.44577%2016.5263C5.26997%2017.1398%206.26512%2017.4806%207.29234%2017.5012C5.54842%2018.8711%203.39417%2019.6141%201.17656%2019.6106C0.783287%2019.61%200.390399%2019.5859%200%2019.5384C2.25286%2020.9837%204.87353%2021.7514%207.55016%2021.75Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                                <_Builtin.Block tag="div">
                                  {"Twitter"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                              <_Builtin.Link
                                className="uui-footer01_social-link"
                                button={false}
                                block="inline"
                                options={{
                                  href: "#",
                                }}
                              >
                                <_Builtin.HtmlEmbed
                                  className="uui-footer01_social-icon"
                                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                                <_Builtin.Block tag="div">
                                  {"LinkedIn"}
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
                            {"© 2077 Untitled UI. All rights reserved."}
                          </_Builtin.Block>
                          <_Builtin.Grid
                            className="uui-footer01_legal-list"
                            tag="div"
                          >
                            <_Builtin.Link
                              className="uui-footer01_legal-link"
                              button={false}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              {"Terms"}
                            </_Builtin.Link>
                            <_Builtin.Link
                              className="uui-footer01_legal-link"
                              button={false}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              {"Privacy"}
                            </_Builtin.Link>
                            <_Builtin.Link
                              className="uui-footer01_legal-link"
                              button={false}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              {"Cookies"}
                            </_Builtin.Link>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <Footer />
    </_Component>
  );
}
