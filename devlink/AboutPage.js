import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";
import * as _utils from "./utils";
import _styles from "./AboutPage.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-189":{"id":"e-189","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".uui-team02_image-wrapper","originalId":"65b180853409d6020739d754|63de56a8-671a-ca14-2759-86848bd5d6af","appliesTo":"CLASS"},"targets":[{"selector":".uui-team02_image-wrapper","originalId":"65b180853409d6020739d754|63de56a8-671a-ca14-2759-86848bd5d6af","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195033092},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FLIP_EFFECT","instant":false,"config":{"actionListId":"flipInLeft","autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".name-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c2","appliesTo":"CLASS"},"targets":[{"selector":".name-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1706195141738},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".role-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c4","appliesTo":"CLASS"},"targets":[{"selector":".role-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195194826},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"},"targets":[{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195231812},"e-201":{"id":"e-201","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".social-link","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c9","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195260780}},"actionLists":{"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"flipInLeft":{"id":"flipInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"duration":0,"delay":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":-90,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AboutPage({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <HeroBanner heading2Text="About us" textSizeRegluarText="Creation" />
        <_Builtin.Block
          className={_utils.cx(_styles, "section-change-log")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-global")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-large")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "uui-section_heroheader02")}
                tag="header"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "uui-page-padding-4")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "uui-container-large-4")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-padding-vertical-xhuge"
                      )}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(
                          _styles,
                          "uui-heroheader02_component"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "uui-heroheader02_content"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-block-15")}
                            id={_utils.cx(
                              _styles,
                              "w-node-e07ce6f8-44bf-073c-6b5d-4048d1c08958-d1c0894b"
                            )}
                            tag="div"
                          >
                            {"Our Story"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "uui-space-small")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "uui-max-width-small"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "paragraph-normal")}
                              tag="div"
                            >
                              {
                                "Nous sommes une équipe de passionné(e)s par l'innovation technologique et la beauté de l'art."
                              }
                              <br />
                              <br />
                              {
                                "Une équipe majoritairement composé de femmes voulant basculer les codes de l'entreprenariat et de l'innovation."
                              }
                              <br />
                              <br />
                              {
                                "Nous nous sommes rencontrés par le hasard de la vie qui nous a réunis même temps liés à une volonté commune. "
                              }
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "uui-space-large")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "uui-button-row",
                              "is-reverse-mobile-landscape"
                            )}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(_styles, "fn-button")}
                              button={true}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              {"Chat To Us"}
                            </_Builtin.Link>
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "fn-button-secondery"
                              )}
                              button={true}
                              block=""
                              options={{
                                href: "#id-section-team",
                              }}
                            >
                              {"Our Team"}
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "uui-heroheader02_image-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt="About page feature"
                            src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b27c8914da8705e0091fbc_Eternal%20Void.jpg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "section-team")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-global")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-large")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "uui-section_team02")}
                tag="section"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "uui-page-padding-4")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "uui-container-large-4")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-padding-vertical-xhuge-2"
                      )}
                      tag="div"
                      id="id-section-team"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-text-align-center-4"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "uui-max-width-large-4",
                            "align-center"
                          )}
                          tag="div"
                        >
                          <_Builtin.Heading
                            className={_utils.cx(_styles, "head-line")}
                            tag="h2"
                          >
                            {"Meet our team"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "uui-space-xsmall")}
                            tag="div"
                          />
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-regluar",
                              "team"
                            )}
                            tag="div"
                          >
                            {
                              "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-team02_component")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "uui-team02_list-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "uui-team02_list")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "uui-team02_item")}
                              id={_utils.cx(
                                _styles,
                                "w-node-e07ce6f8-44bf-073c-6b5d-4048d1c089bf-d1c0894b"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "uui-team02_image"
                                )}
                                height="auto"
                                loading="lazy"
                                width="auto"
                                alt="Floriane img"
                                src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b273704fed840e6b632109_floriane.jpeg"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "uui-space-xsmall"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "name-member-team"
                                )}
                                tag="div"
                              >
                                {"Floriane Roeslin"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "role-member-team"
                                )}
                                tag="div"
                              >
                                {"Founder & CEO"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "uui-space-xsmall"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-regluar",
                                  "description-team"
                                )}
                                tag="div"
                              >
                                {"Management, Financial engineer, blockchain"}
                              </_Builtin.Block>
                              <_Builtin.Link
                                className={_utils.cx(_styles, "social-link")}
                                button={false}
                                id="linkedin-floriane"
                                block="inline"
                                options={{
                                  href: "https://www.linkedin.com/in/floriane-roeslin-6b3933164/",
                                  target: "_blank",
                                }}
                              >
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(
                                    _styles,
                                    "social-icon-3"
                                  )}
                                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "uui-team02_item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "",
                                  "uui-team02_image-wrapper"
                                )}
                                tag="div"
                              >
                                <_Builtin.Image
                                  className={_utils.cx(
                                    _styles,
                                    "uui-team02_image"
                                  )}
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Ines image"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b2736fcd3d1dac3366b086_ines.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "name-member-team"
                                )}
                                tag="div"
                              >
                                {"Ines Yunting Lu"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "role-member-team"
                                )}
                                tag="div"
                              >
                                {"Data analyst"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "uui-space-xsmall"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-regluar",
                                  "description-team"
                                )}
                                tag="div"
                              >
                                {
                                  "Management, Data analysis, financial analysis"
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className={_utils.cx(
                                  _styles,
                                  "uui-team02_social"
                                )}
                                tag="div"
                              >
                                <_Builtin.Link
                                  className={_utils.cx(_styles, "social-link")}
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "https://www.linkedin.com/in/ines-lu/",
                                    target: "_blank",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "social-icon-3"
                                    )}
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Grid>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "uui-team02_item")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "",
                                  "uui-team02_image-wrapper"
                                )}
                                tag="div"
                              >
                                <_Builtin.Image
                                  className={_utils.cx(
                                    _styles,
                                    "uui-team02_image"
                                  )}
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Daniel image"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b273706aed99cd1daeeccd_daniel.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "name-member-team"
                                )}
                                tag="div"
                              >
                                {"Daniel Mbengui"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "role-member-team"
                                )}
                                tag="div"
                              >
                                {"Developer"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "uui-space-xsmall"
                                )}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "text-size-regluar",
                                  "description-team"
                                )}
                                tag="div"
                              >
                                {
                                  "Management, Web & blockchain development, Database admin"
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className={_utils.cx(
                                  _styles,
                                  "uui-team02_social"
                                )}
                                tag="div"
                              >
                                <_Builtin.Link
                                  className={_utils.cx(_styles, "social-link")}
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "https://www.linkedin.com/in/daniel-mbengui/",
                                    target: "_blank",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "social-icon-3"
                                    )}
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Grid>
                            </_Builtin.Block>
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
