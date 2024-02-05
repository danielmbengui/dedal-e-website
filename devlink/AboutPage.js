import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Navbar } from "./Navbar";
import { PaddingLarge } from "./PaddingLarge";
import { Footer } from "./Footer";
import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "@/components/footer/FooterComponent";

const _interactionsData = JSON.parse(
  '{"events":{"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FLIP_EFFECT","instant":false,"config":{"actionListId":"flipInLeft","autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".name-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c2","appliesTo":"CLASS"},"targets":[{"selector":".name-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1706195141738},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".role-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c4","appliesTo":"CLASS"},"targets":[{"selector":".role-member-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195194826},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"},"targets":[{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195231812},"e-201":{"id":"e-201","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".social-link","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c9","appliesTo":"CLASS"},"targets":[{"selector":".social-link","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195260780},"e-235":{"id":"e-235","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","config":{"actionListId":"growIn","autoStopEventId":"e-236"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".uui-team02_image","originalId":"1629aff5-1347-8293-3e78-80a280086e2a","appliesTo":"CLASS"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1707100188844},"e-237":{"id":"e-237","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-238"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"498c9820-6e40-323c-937f-0fa9a6d4b553"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1707103602866},"e-239":{"id":"e-239","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-240"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"498c9820-6e40-323c-937f-0fa9a6d4b557"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1707103626440},"e-241":{"id":"e-241","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-242"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"4e52e76f-9e9e-e74c-4553-1bf3decc78db"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1707103659694},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-244"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"877db1d9-dbd1-3c33-a165-63fa70876b38"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1707103662680},"e-245":{"id":"e-245","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInLeft","autoStopEventId":"e-246"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"073a5f13-0e46-ef5a-f776-574639906bbf"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":250,"direction":"LEFT","effectIn":true},"createdOn":1707103887677},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInLeft","autoStopEventId":"e-248"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"498c9820-6e40-323c-937f-0fa9a6d4b561"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1707103917761},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInRight","autoStopEventId":"e-250"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"498c9820-6e40-323c-937f-0fa9a6d4b563"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"RIGHT","effectIn":true},"createdOn":1707103930346},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","config":{"actionListId":"growIn","autoStopEventId":"e-252"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"498c9820-6e40-323c-937f-0fa9a6d4b566"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1707103945160},"e-253":{"id":"e-253","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-254"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"e07ce6f8-44bf-073c-6b5d-4048d1c089b7"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1707103986711},"e-255":{"id":"e-255","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-256"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"e07ce6f8-44bf-073c-6b5d-4048d1c089ba"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1707104001971}},"actionLists":{"flipInLeft":{"id":"flipInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"duration":0,"delay":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":-90,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AboutPage({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent />
      <_Builtin.Block className="main-wrapper" tag="div">
        <_Builtin.Block className="section-header about-us" tag="div">
          <_Builtin.Block className="padding-global about-us" tag="div">
            <_Builtin.Block className="header-content-left" tag="div">
              <_Builtin.Image
                className="header-line"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b240e92cb1a3cc9ac26e35_line_2_gold.svg"
              />
              <_Builtin.Block
                className="header-social-icon-wrapper"
                data-w-id="073a5f13-0e46-ef5a-f776-574639906bbf"
                tag="div"
              >
                <_Builtin.Block className="text-block-14" tag="div">
                  {"D"}
                </_Builtin.Block>
                <_Builtin.Block className="text-block-14" tag="div">
                  {"E"}
                </_Builtin.Block>
                <_Builtin.Block className="text-block-14" tag="div">
                  {"D"}
                </_Builtin.Block>
                <_Builtin.Block className="text-block-14" tag="div">
                  {"A"}
                </_Builtin.Block>
                <_Builtin.Block className="text-block-14" tag="div">
                  {"L"}
                </_Builtin.Block>
                <_Builtin.Block className="text-block-14" tag="div">
                  {"-"}
                </_Builtin.Block>
                <_Builtin.Block className="text-block-14" tag="div">
                  {"E"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Image
                className="header-line"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b240e98aafb9c10059f8d2_line_1_gold.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block className="container-large about-us" tag="div">
              <_Builtin.Block className="uui-section_heroheader02" tag="header">
                <_Builtin.Block
                  className="uui-page-padding-4 about-us"
                  tag="div"
                >
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
                            id="w-node-_498c9820-6e40-323c-937f-0fa9a6d4b553-d1c0894b"
                            data-w-id="498c9820-6e40-323c-937f-0fa9a6d4b553"
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
                              data-w-id="498c9820-6e40-323c-937f-0fa9a6d4b557"
                              tag="div"
                            >
                              {
                                "We are a team of technology innovation enthusiasts who appreciate the beauty of art."
                              }
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="paragraph-normal"
                              data-w-id="4e52e76f-9e9e-e74c-4553-1bf3decc78db"
                              tag="div"
                            >
                              {
                                "Our team is predominantly composed of women who aim to redefine the norms of entrepreneurship and innovation."
                              }
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="paragraph-normal"
                              data-w-id="877db1d9-dbd1-3c33-a165-63fa70876b38"
                              tag="div"
                            >
                              {
                                "We came together by the serendipity of life, united by a shared determination."
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
                              data-w-id="498c9820-6e40-323c-937f-0fa9a6d4b561"
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
                              data-w-id="498c9820-6e40-323c-937f-0fa9a6d4b563"
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
                            data-w-id="498c9820-6e40-323c-937f-0fa9a6d4b566"
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
        <_Builtin.Block className="section-team" tag="div" id="id-section-team">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="uui-section_team02" tag="section">
                <_Builtin.Block className="uui-page-padding-4" tag="div">
                  <_Builtin.Block className="uui-container-large-4" tag="div">
                    <_Builtin.Block
                      className="uui-padding-vertical-xhuge-2"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="uui-text-align-center-4"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="uui-max-width-large-4 align-center"
                          tag="div"
                        >
                          <_Builtin.Heading
                            className="text-block-15"
                            data-w-id="e07ce6f8-44bf-073c-6b5d-4048d1c089b7"
                            tag="h2"
                          >
                            {"Meet our team"}
                          </_Builtin.Heading>
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="text-size-regluar team"
                            data-w-id="e07ce6f8-44bf-073c-6b5d-4048d1c089ba"
                            tag="div"
                          >
                            {
                              "Our philosophy is simple — explore a new artistic era where artificial intelligence blends visual imagination, captivating movements, and enchanting melodies, creating an infinite canvas of inspiration for artists and art enthusiasts."
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <PaddingLarge />
                      <_Builtin.Block className="div-block-28" tag="div">
                        <_Builtin.Block className="uui-team02_item" tag="div">
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
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
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
                        <_Builtin.Block className="uui-team02_item" tag="div">
                          <_Builtin.Image
                            className="uui-team02_image"
                            height="auto"
                            loading="lazy"
                            width="auto"
                            alt="Ines image"
                            src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b2736fcd3d1dac3366b086_ines.jpeg"
                          />
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
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
                            {"Co-Founder & Data analyst"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="text-size-regluar description-team"
                            tag="div"
                          >
                            {"Management, Data analysis, financial analysis"}
                            <br />
                            {""}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
                          <_Builtin.Link
                            className="social-link"
                            button={false}
                            id="linkedin-ines"
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
                        <_Builtin.Block className="uui-team02_item" tag="div">
                          <_Builtin.Image
                            className="uui-team02_image"
                            height="auto"
                            loading="lazy"
                            width="auto"
                            alt="daniel image"
                            src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65c045d3fc83fff3c6ded2ed_daniel.jpeg"
                          />
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
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
                            {"Co-Founder & Developer"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
                          <_Builtin.Block
                            className="text-size-regluar description-team"
                            tag="div"
                          >
                            {"Management, Development, blockchain"}
                            <br />
                            {""}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="uui-space-xsmall"
                            tag="div"
                          />
                          <_Builtin.Link
                            className="social-link"
                            button={false}
                            id="linkedin-daniel"
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
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <FooterComponent />
    </_Component>
  );
}
