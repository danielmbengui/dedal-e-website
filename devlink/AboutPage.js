import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Navbar } from "./Navbar";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "./Footer";

const _interactionsData = JSON.parse(
  '{"events":{"e-189":{"id":"e-189","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".uui-team02_image-wrapper","originalId":"65b180853409d6020739d754|63de56a8-671a-ca14-2759-86848bd5d6af","appliesTo":"CLASS"},"targets":[{"selector":".uui-team02_image-wrapper","originalId":"65b180853409d6020739d754|63de56a8-671a-ca14-2759-86848bd5d6af","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195033092},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FLIP_EFFECT","instant":false,"config":{"actionListId":"flipInLeft","autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".name-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c2","appliesTo":"CLASS"},"targets":[{"selector":".name-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1706195141738},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".role-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c4","appliesTo":"CLASS"},"targets":[{"selector":".role-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195194826},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"},"targets":[{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195231812},"e-201":{"id":"e-201","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".social-link","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c9","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195260780}},"actionLists":{"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"flipInLeft":{"id":"flipInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"duration":0,"delay":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":-90,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AboutPage({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper" tag="div">
      <Navbar />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="About us" textSizeRegluarText="Creation" />
        <_Builtin.Block className="section-change-log" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="uui-section_heroheader02" tag="header">
                <_Builtin.Block className="uui-page-padding-4" tag="div">
                  <_Builtin.Block className="uui-container-large-4" tag="div">
                    <_Builtin.Block
                      className="uui-padding-vertical-xhuge"
                      tag="div"
                    >
                      <_Builtin.Grid
                        className="uui-heroheader02_component"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-heroheader02_content"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="text-block-15"
                            id="w-node-e07ce6f8-44bf-073c-6b5d-4048d1c08958-d1c0894b"
                            tag="div"
                          >
                            {"Our Story"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="uui-space-small"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="uui-max-width-small"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="paragraph-normal"
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
                            className="uui-space-large"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="uui-button-row is-reverse-mobile-landscape"
                            tag="div"
                          >
                            <_Builtin.Link
                              className="fn-button"
                              button={true}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              {"Chat To Us"}
                            </_Builtin.Link>
                            <_Builtin.Link
                              className="fn-button-secondery"
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
                          className="uui-heroheader02_image-wrapper"
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
        <_Builtin.Block className="section-team" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="uui-section_team02-2" tag="section">
                <_Builtin.Block className="uui-page-padding-7" tag="div">
                  <_Builtin.Block className="uui-container-large-6" tag="div">
                    <_Builtin.Block
                      className="uui-padding-vertical-xhuge-4"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="uui-text-align-center-6"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-max-width-large-6 align-center"
                          tag="div"
                        >
                          <_Builtin.Heading
                            className="uui-heading-medium-3"
                            tag="h2"
                          >
                            {"Meet our team"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className="uui-space-xsmall-3"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="uui-text-size-large-4"
                            tag="div"
                          >
                            {
                              "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-space-medium-2"
                        tag="div"
                      />
                      <_Builtin.Block
                        className="uui-team02_component-2"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-team02_list-wrapper-2"
                          tag="div"
                        >
                          <_Builtin.Grid
                            className="uui-team02_list-2"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="uui-team02_item-2"
                              tag="div"
                            >
                              <_Builtin.Block
                                className=" uui-team02_image-wrapper-2"
                                tag="div"
                              >
                                <_Builtin.Image
                                  className="uui-team02_image-2"
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Floriane img"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b273704fed840e6b632109_floriane.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-heading-tiny-2"
                                tag="div"
                              >
                                {"Olivia Rhye"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-text-size-medium-4 text-color-primary700"
                                tag="div"
                              >
                                {"Founder & CEO"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-space-xsmall-3"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="uui-text-size-medium-4"
                                tag="div"
                              >
                                {
                                  "Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="uui-team02_social-2"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.55016%2021.7502C16.6045%2021.7502%2021.5583%2014.2469%2021.5583%207.74211C21.5583%207.53117%2021.5536%207.31554%2021.5442%207.1046C22.5079%206.40771%2023.3395%205.5445%2024%204.55554C23.1025%204.95484%2022.1496%205.21563%2021.1739%205.32898C22.2013%204.71315%2022.9705%203.74572%2023.3391%202.60601C22.3726%203.1788%2021.3156%203.58286%2020.2134%203.80085C19.4708%203.01181%2018.489%202.48936%2017.4197%202.3143C16.3504%202.13923%2015.2532%202.32129%2014.2977%202.83234C13.3423%203.34339%2012.5818%204.15495%2012.1338%205.14156C11.6859%206.12816%2011.5754%207.23486%2011.8195%208.29054C9.86249%208.19233%207.94794%207.68395%206.19998%206.79834C4.45203%205.91274%202.90969%204.66968%201.67297%203.14976C1.0444%204.23349%200.852057%205.51589%201.13503%206.73634C1.418%207.95678%202.15506%209.02369%203.19641%209.72023C2.41463%209.69541%201.64998%209.48492%200.965625%209.10617V9.1671C0.964925%2010.3044%201.3581%2011.4068%202.07831%2012.287C2.79852%2013.1672%203.80132%2013.7708%204.91625%2013.9952C4.19206%2014.1934%203.43198%2014.2222%202.69484%2014.0796C3.00945%2015.0577%203.62157%2015.9131%204.44577%2016.5266C5.26997%2017.14%206.26512%2017.4808%207.29234%2017.5015C5.54842%2018.8714%203.39417%2019.6144%201.17656%2019.6109C0.783287%2019.6103%200.390399%2019.5861%200%2019.5387C2.25286%2020.984%204.87353%2021.7516%207.55016%2021.7502Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%200C5.37527%200%200%205.37527%200%2012C0%2018.6248%205.37527%2024%2012%2024C18.6117%2024%2024%2018.6248%2024%2012C24%205.37527%2018.6117%200%2012%200ZM19.9262%205.53145C21.3579%207.27549%2022.217%209.50107%2022.243%2011.9089C21.9046%2011.8439%2018.5206%2011.154%2015.1106%2011.5835C15.0325%2011.4143%2014.9675%2011.2321%2014.8894%2011.0499C14.6811%2010.5554%2014.4469%2010.0477%2014.2126%209.56618C17.9869%208.0304%2019.705%205.81779%2019.9262%205.53145ZM12%201.77007C14.603%201.77007%2016.9848%202.74621%2018.7939%204.34707C18.6117%204.60738%2017.0629%206.67679%2013.4186%208.04338C11.7397%204.95878%209.87855%202.43384%209.5922%202.04338C10.3601%201.86117%2011.1671%201.77007%2012%201.77007ZM7.63995%202.73319C7.91325%203.09761%209.73538%205.63558%2011.4404%208.65508C6.65076%209.9306%202.42083%209.90458%201.96529%209.90458C2.62907%206.72885%204.77657%204.08676%207.63995%202.73319ZM1.74404%2012.0131C1.74404%2011.9089%201.74404%2011.8048%201.74404%2011.7007C2.18655%2011.7136%207.15835%2011.7787%2012.2733%2010.243C12.5727%2010.8156%2012.846%2011.4013%2013.1063%2011.9869C12.9761%2012.026%2012.8329%2012.0651%2012.7028%2012.1041C7.41865%2013.8091%204.60738%2018.4685%204.3731%2018.859C2.7462%2017.0499%201.74404%2014.6421%201.74404%2012.0131ZM12%2022.256C9.6312%2022.256%207.44469%2021.449%205.71367%2020.0954C5.89588%2019.718%207.97827%2015.7094%2013.757%2013.692C13.783%2013.679%2013.7961%2013.679%2013.8221%2013.666C15.2668%2017.4013%2015.8525%2020.5379%2016.0087%2021.436C14.7722%2021.9696%2013.4186%2022.256%2012%2022.256ZM17.7136%2020.4989C17.6096%2019.8742%2017.0629%2016.8807%2015.7223%2013.1974C18.9371%2012.6898%2021.7484%2013.5228%2022.0998%2013.6399C21.6573%2016.4902%2020.0173%2018.9501%2017.7136%2020.4989Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Grid>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="uui-team02_item-2"
                              tag="div"
                            >
                              <_Builtin.Block
                                className=" uui-team02_image-wrapper-2"
                                tag="div"
                              >
                                <_Builtin.Image
                                  className="uui-team02_image-2"
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Ines image"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b2736fcd3d1dac3366b086_ines.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-heading-tiny-2"
                                tag="div"
                              >
                                {"Phoenix Baker"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-text-size-medium-4 text-color-primary700"
                                tag="div"
                              >
                                {"Engineering Manager"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-space-xsmall-3"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="uui-text-size-medium-4"
                                tag="div"
                              >
                                {
                                  "Lead engineering teams at Figma, Pitch, and Protocol Labs."
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="uui-team02_social-2"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.55016%2021.7502C16.6045%2021.7502%2021.5583%2014.2469%2021.5583%207.74211C21.5583%207.53117%2021.5536%207.31554%2021.5442%207.1046C22.5079%206.40771%2023.3395%205.5445%2024%204.55554C23.1025%204.95484%2022.1496%205.21563%2021.1739%205.32898C22.2013%204.71315%2022.9705%203.74572%2023.3391%202.60601C22.3726%203.1788%2021.3156%203.58286%2020.2134%203.80085C19.4708%203.01181%2018.489%202.48936%2017.4197%202.3143C16.3504%202.13923%2015.2532%202.32129%2014.2977%202.83234C13.3423%203.34339%2012.5818%204.15495%2012.1338%205.14156C11.6859%206.12816%2011.5754%207.23486%2011.8195%208.29054C9.86249%208.19233%207.94794%207.68395%206.19998%206.79834C4.45203%205.91274%202.90969%204.66968%201.67297%203.14976C1.0444%204.23349%200.852057%205.51589%201.13503%206.73634C1.418%207.95678%202.15506%209.02369%203.19641%209.72023C2.41463%209.69541%201.64998%209.48492%200.965625%209.10617V9.1671C0.964925%2010.3044%201.3581%2011.4068%202.07831%2012.287C2.79852%2013.1672%203.80132%2013.7708%204.91625%2013.9952C4.19206%2014.1934%203.43198%2014.2222%202.69484%2014.0796C3.00945%2015.0577%203.62157%2015.9131%204.44577%2016.5266C5.26997%2017.14%206.26512%2017.4808%207.29234%2017.5015C5.54842%2018.8714%203.39417%2019.6144%201.17656%2019.6109C0.783287%2019.6103%200.390399%2019.5861%200%2019.5387C2.25286%2020.984%204.87353%2021.7516%207.55016%2021.7502Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%200C5.37527%200%200%205.37527%200%2012C0%2018.6248%205.37527%2024%2012%2024C18.6117%2024%2024%2018.6248%2024%2012C24%205.37527%2018.6117%200%2012%200ZM19.9262%205.53145C21.3579%207.27549%2022.217%209.50107%2022.243%2011.9089C21.9046%2011.8439%2018.5206%2011.154%2015.1106%2011.5835C15.0325%2011.4143%2014.9675%2011.2321%2014.8894%2011.0499C14.6811%2010.5554%2014.4469%2010.0477%2014.2126%209.56618C17.9869%208.0304%2019.705%205.81779%2019.9262%205.53145ZM12%201.77007C14.603%201.77007%2016.9848%202.74621%2018.7939%204.34707C18.6117%204.60738%2017.0629%206.67679%2013.4186%208.04338C11.7397%204.95878%209.87855%202.43384%209.5922%202.04338C10.3601%201.86117%2011.1671%201.77007%2012%201.77007ZM7.63995%202.73319C7.91325%203.09761%209.73538%205.63558%2011.4404%208.65508C6.65076%209.9306%202.42083%209.90458%201.96529%209.90458C2.62907%206.72885%204.77657%204.08676%207.63995%202.73319ZM1.74404%2012.0131C1.74404%2011.9089%201.74404%2011.8048%201.74404%2011.7007C2.18655%2011.7136%207.15835%2011.7787%2012.2733%2010.243C12.5727%2010.8156%2012.846%2011.4013%2013.1063%2011.9869C12.9761%2012.026%2012.8329%2012.0651%2012.7028%2012.1041C7.41865%2013.8091%204.60738%2018.4685%204.3731%2018.859C2.7462%2017.0499%201.74404%2014.6421%201.74404%2012.0131ZM12%2022.256C9.6312%2022.256%207.44469%2021.449%205.71367%2020.0954C5.89588%2019.718%207.97827%2015.7094%2013.757%2013.692C13.783%2013.679%2013.7961%2013.679%2013.8221%2013.666C15.2668%2017.4013%2015.8525%2020.5379%2016.0087%2021.436C14.7722%2021.9696%2013.4186%2022.256%2012%2022.256ZM17.7136%2020.4989C17.6096%2019.8742%2017.0629%2016.8807%2015.7223%2013.1974C18.9371%2012.6898%2021.7484%2013.5228%2022.0998%2013.6399C21.6573%2016.4902%2020.0173%2018.9501%2017.7136%2020.4989Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Grid>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="uui-team02_item-2"
                              tag="div"
                            >
                              <_Builtin.Block
                                className=" uui-team02_image-wrapper-2"
                                tag="div"
                              >
                                <_Builtin.Image
                                  className="uui-team02_image-2"
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Daniel image"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b273706aed99cd1daeeccd_daniel.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-heading-tiny-2"
                                tag="div"
                              >
                                {"Lana Steiner"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-text-size-medium-4 text-color-primary700"
                                tag="div"
                              >
                                {"Product Manager"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-space-xsmall-3"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="uui-text-size-medium-4"
                                tag="div"
                              >
                                {
                                  "Former PM for Linear, Lambda School, and On Deck."
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="uui-team02_social-2"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.55016%2021.7502C16.6045%2021.7502%2021.5583%2014.2469%2021.5583%207.74211C21.5583%207.53117%2021.5536%207.31554%2021.5442%207.1046C22.5079%206.40771%2023.3395%205.5445%2024%204.55554C23.1025%204.95484%2022.1496%205.21563%2021.1739%205.32898C22.2013%204.71315%2022.9705%203.74572%2023.3391%202.60601C22.3726%203.1788%2021.3156%203.58286%2020.2134%203.80085C19.4708%203.01181%2018.489%202.48936%2017.4197%202.3143C16.3504%202.13923%2015.2532%202.32129%2014.2977%202.83234C13.3423%203.34339%2012.5818%204.15495%2012.1338%205.14156C11.6859%206.12816%2011.5754%207.23486%2011.8195%208.29054C9.86249%208.19233%207.94794%207.68395%206.19998%206.79834C4.45203%205.91274%202.90969%204.66968%201.67297%203.14976C1.0444%204.23349%200.852057%205.51589%201.13503%206.73634C1.418%207.95678%202.15506%209.02369%203.19641%209.72023C2.41463%209.69541%201.64998%209.48492%200.965625%209.10617V9.1671C0.964925%2010.3044%201.3581%2011.4068%202.07831%2012.287C2.79852%2013.1672%203.80132%2013.7708%204.91625%2013.9952C4.19206%2014.1934%203.43198%2014.2222%202.69484%2014.0796C3.00945%2015.0577%203.62157%2015.9131%204.44577%2016.5266C5.26997%2017.14%206.26512%2017.4808%207.29234%2017.5015C5.54842%2018.8714%203.39417%2019.6144%201.17656%2019.6109C0.783287%2019.6103%200.390399%2019.5861%200%2019.5387C2.25286%2020.984%204.87353%2021.7516%207.55016%2021.7502Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="social-link-2"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-4"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%200C5.37527%200%200%205.37527%200%2012C0%2018.6248%205.37527%2024%2012%2024C18.6117%2024%2024%2018.6248%2024%2012C24%205.37527%2018.6117%200%2012%200ZM19.9262%205.53145C21.3579%207.27549%2022.217%209.50107%2022.243%2011.9089C21.9046%2011.8439%2018.5206%2011.154%2015.1106%2011.5835C15.0325%2011.4143%2014.9675%2011.2321%2014.8894%2011.0499C14.6811%2010.5554%2014.4469%2010.0477%2014.2126%209.56618C17.9869%208.0304%2019.705%205.81779%2019.9262%205.53145ZM12%201.77007C14.603%201.77007%2016.9848%202.74621%2018.7939%204.34707C18.6117%204.60738%2017.0629%206.67679%2013.4186%208.04338C11.7397%204.95878%209.87855%202.43384%209.5922%202.04338C10.3601%201.86117%2011.1671%201.77007%2012%201.77007ZM7.63995%202.73319C7.91325%203.09761%209.73538%205.63558%2011.4404%208.65508C6.65076%209.9306%202.42083%209.90458%201.96529%209.90458C2.62907%206.72885%204.77657%204.08676%207.63995%202.73319ZM1.74404%2012.0131C1.74404%2011.9089%201.74404%2011.8048%201.74404%2011.7007C2.18655%2011.7136%207.15835%2011.7787%2012.2733%2010.243C12.5727%2010.8156%2012.846%2011.4013%2013.1063%2011.9869C12.9761%2012.026%2012.8329%2012.0651%2012.7028%2012.1041C7.41865%2013.8091%204.60738%2018.4685%204.3731%2018.859C2.7462%2017.0499%201.74404%2014.6421%201.74404%2012.0131ZM12%2022.256C9.6312%2022.256%207.44469%2021.449%205.71367%2020.0954C5.89588%2019.718%207.97827%2015.7094%2013.757%2013.692C13.783%2013.679%2013.7961%2013.679%2013.8221%2013.666C15.2668%2017.4013%2015.8525%2020.5379%2016.0087%2021.436C14.7722%2021.9696%2013.4186%2022.256%2012%2022.256ZM17.7136%2020.4989C17.6096%2019.8742%2017.0629%2016.8807%2015.7223%2013.1974C18.9371%2012.6898%2021.7484%2013.5228%2022.0998%2013.6399C21.6573%2016.4902%2020.0173%2018.9501%2017.7136%2020.4989Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
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
              <_Builtin.Block className="uui-section_team02" tag="section">
                <_Builtin.Block className="uui-page-padding-4" tag="div">
                  <_Builtin.Block className="uui-container-large-4" tag="div">
                    <_Builtin.Block
                      className="uui-padding-vertical-xhuge-2"
                      tag="div"
                      id="id-section-team"
                    >
                      <_Builtin.Block
                        className="uui-text-align-center-4"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-max-width-large-4 align-center"
                          tag="div"
                        >
                          <_Builtin.Heading className="head-line" tag="h2">
                            {"Meet our team"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="text-size-regluar team"
                            tag="div"
                          >
                            {
                              "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="uui-team02_component"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-team02_list-wrapper"
                          tag="div"
                        >
                          <_Builtin.Grid className="uui-team02_list" tag="div">
                            <_Builtin.Block
                              className="uui-team02_item"
                              id="w-node-e07ce6f8-44bf-073c-6b5d-4048d1c089bf-d1c0894b"
                              tag="div"
                            >
                              <_Builtin.Image
                                className="uui-team02_image"
                                height="auto"
                                loading="lazy"
                                width="auto"
                                alt="Floriane img"
                                src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b273704fed840e6b632109_floriane.jpeg"
                              />
                              <_Builtin.Block
                                className="uui-space-xsmall"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="name-member-team"
                                tag="div"
                              >
                                {"Floriane Roeslin"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="role-member-team"
                                tag="div"
                              >
                                {"Founder & CEO"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-space-xsmall"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="text-size-regluar description-team"
                                tag="div"
                              >
                                {"Management, Financial engineer, blockchain"}
                              </_Builtin.Block>
                              <_Builtin.Link
                                className="social-link"
                                button={false}
                                id="linkedin-floriane"
                                block="inline"
                                options={{
                                  href: "https://www.linkedin.com/in/floriane-roeslin-6b3933164/",
                                  target: "_blank",
                                }}
                              >
                                <_Builtin.HtmlEmbed
                                  className="social-icon-3"
                                  value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="uui-team02_item"
                              tag="div"
                            >
                              <_Builtin.Block
                                className=" uui-team02_image-wrapper"
                                tag="div"
                              >
                                <_Builtin.Image
                                  className="uui-team02_image"
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Ines image"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b2736fcd3d1dac3366b086_ines.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="name-member-team"
                                tag="div"
                              >
                                {"Ines Yunting Lu"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="role-member-team"
                                tag="div"
                              >
                                {"Data analyst"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-space-xsmall"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="text-size-regluar description-team"
                                tag="div"
                              >
                                {
                                  "Management, Data analysis, financial analysis"
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="uui-team02_social"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="social-link"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "https://www.linkedin.com/in/ines-lu/",
                                    target: "_blank",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-3"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Grid>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="uui-team02_item"
                              tag="div"
                            >
                              <_Builtin.Block
                                className=" uui-team02_image-wrapper"
                                tag="div"
                              >
                                <_Builtin.Image
                                  className="uui-team02_image"
                                  height="auto"
                                  loading="lazy"
                                  width="auto"
                                  alt="Daniel image"
                                  src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b273706aed99cd1daeeccd_daniel.jpeg"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="name-member-team"
                                tag="div"
                              >
                                {"Daniel Mbengui"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="role-member-team"
                                tag="div"
                              >
                                {"Developer"}
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-space-xsmall"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="text-size-regluar description-team"
                                tag="div"
                              >
                                {
                                  "Management, Web & blockchain development, Database admin"
                                }
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="uui-team02_social"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="social-link"
                                  button={false}
                                  block="inline"
                                  options={{
                                    href: "https://www.linkedin.com/in/daniel-mbengui/",
                                    target: "_blank",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className="social-icon-3"
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
