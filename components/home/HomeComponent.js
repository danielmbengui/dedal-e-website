import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import * as _interactions from "@/devlink/interactions";
//import { Navbar } from "./Navbar";
import { PaddingSmall } from "@/devlink/PaddingSmall";
//import { PaddingXSmall } from "./PaddingXSmall";
//import { PaddingLarge } from "./PaddingLarge";
//import { PaddingMedium } from "./PaddingMedium";
//import { PaddingXxSmall } from "./PaddingXxSmall";
import { Footer } from "@/devlink/Footer";
import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "../footer/FooterComponent";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1702184568555},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e3b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e3b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":"BOTTOM","effectIn":true},"createdOn":1702184726649},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e3e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e3e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":600,"direction":"BOTTOM","effectIn":true},"createdOn":1702184798378},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e45","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e45","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":"BOTTOM","effectIn":true},"createdOn":1702185689697},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e63","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e63","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1702186353041},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e6f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e6f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":400,"direction":"RIGHT","effectIn":true},"createdOn":1702186376481},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812ea6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812ea6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1702186996666},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812eae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812eae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":400,"direction":"BOTTOM","effectIn":true},"createdOn":1702187115250},"e-53":{"id":"e-53","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812f16","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812f16","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1702187937033},"e-55":{"id":"e-55","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812f21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812f21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":400,"direction":"BOTTOM","effectIn":true},"createdOn":1702187993081},"e-93":{"id":"e-93","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["main"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e73","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e73","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705131624869},"e-94":{"id":"e-94","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e73","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e73","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705131624870},"e-133":{"id":"e-133","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08490f9c-290d-493f-1ef3-68f271812e2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08490f9c-290d-493f-1ef3-68f271812e2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":250,"direction":"LEFT","effectIn":true},"createdOn":1705955859715},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ae6f1a145b7954f56170fe|5777dbc1-9dc9-325f-a56d-710af1f7595c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ae6f1a145b7954f56170fe|5777dbc1-9dc9-325f-a56d-710af1f7595c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":null,"effectIn":true},"createdOn":1706132102663},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"},"targets":[{"selector":".text-size-regluar.description-team","originalId":"e07ce6f8-44bf-073c-6b5d-4048d1c089c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1706195231812},"e-203":{"id":"e-203","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e873cba8-4419-69d2-01d1-264f6007f5b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e873cba8-4419-69d2-01d1-264f6007f5b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706264219719}},"actionLists":{"a-6":{"id":"a-6","title":"Service item hover in","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h5.service","selectorGuids":["44d8ce5b-ab09-ba7a-3369-4fffc7452dfd","16355895-27a6-31f0-8b4c-d9c7ca7797ea"]},"yValue":4,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-icon._1st","selectorGuids":["c00142a7-c03c-1fbb-bf3f-7f8883eacda0","8129a4f8-e1c4-2fde-20d5-e74cc1ee76df"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-icon._2nd","selectorGuids":["c00142a7-c03c-1fbb-bf3f-7f8883eacda0","b66edb5f-6e03-d07b-3472-659c0715806d"]},"xValue":-16,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-6-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h5.service","selectorGuids":["44d8ce5b-ab09-ba7a-3369-4fffc7452dfd","16355895-27a6-31f0-8b4c-d9c7ca7797ea"]},"yValue":-42,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-icon._1st","selectorGuids":["c00142a7-c03c-1fbb-bf3f-7f8883eacda0","8129a4f8-e1c4-2fde-20d5-e74cc1ee76df"]},"xValue":16,"yValue":-16,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-icon._2nd","selectorGuids":["c00142a7-c03c-1fbb-bf3f-7f8883eacda0","b66edb5f-6e03-d07b-3472-659c0715806d"]},"xValue":0,"yValue":-16,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705131630160},"a-7":{"id":"a-7","title":"Service item hover out","actionItemGroups":[{"actionItems":[{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h5.service","selectorGuids":["44d8ce5b-ab09-ba7a-3369-4fffc7452dfd","16355895-27a6-31f0-8b4c-d9c7ca7797ea"]},"yValue":4,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-icon._1st","selectorGuids":["c00142a7-c03c-1fbb-bf3f-7f8883eacda0","8129a4f8-e1c4-2fde-20d5-e74cc1ee76df"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-icon._2nd","selectorGuids":["c00142a7-c03c-1fbb-bf3f-7f8883eacda0","b66edb5f-6e03-d07b-3472-659c0715806d"]},"xValue":-16,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1705131630160},"a-32":{"id":"a-32","title":"Animation image logo","actionItemGroups":[{"actionItems":[{"id":"a-32-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image-logo-header-home","selectorGuids":["c1bb186e-55ab-47ca-dd85-b7964d2ba26f"]},"yValue":-195,"zValue":-332,"xUnit":"PX","yUnit":"px","zUnit":"px"}},{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".image-logo-header-home","selectorGuids":["c1bb186e-55ab-47ca-dd85-b7964d2ba26f"]},"value":0.5,"unit":""}}]},{"actionItems":[{"id":"a-32-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":3000,"target":{"selector":".image-logo-header-home","selectorGuids":["c1bb186e-55ab-47ca-dd85-b7964d2ba26f"]},"xValue":10000,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706264228618},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeComponent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);
  const router = useRouter();
  const url = router.asPath;
  const lang = router.locale;
  const { t, i18n } = useTranslation();

  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent />
      <_Builtin.Block className="main-wrapper" tag="div">
        <_Builtin.Block className="section-header" tag="div">
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
              data-w-id="08490f9c-290d-493f-1ef3-68f271812e2a"
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
          <_Builtin.Block className="header-content" tag="div">
            <_Builtin.Heading
              className="heading-style-h1"
              data-w-id="08490f9c-290d-493f-1ef3-68f271812e39"
              tag="h1"
            >
              {t('head_title', { ns: 'home' })}
            </_Builtin.Heading>
            <_Builtin.Block
              className="text-size-large"
              data-w-id="08490f9c-290d-493f-1ef3-68f271812e3b"
              tag="div"
            >
              {t('slogan_website', { ns: 'common' })}
            </_Builtin.Block>
            <PaddingSmall />
            <_Builtin.Block
              className="header-button-row"
              data-w-id="08490f9c-290d-493f-1ef3-68f271812e3e"
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
                {t('customize_your_bot', { ns: 'home' })}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className="header-scroll-down-arrow home"
            data-w-id="08490f9c-290d-493f-1ef3-68f271812e45"
            tag="div"
          >
            <_Builtin.Block className="div-block-23" tag="div">
              <_Builtin.Image
                className="image-logo-header-home"
                loading="lazy"
                width="70"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65ae74decc83dc40a2b4b792_Dedalart1%20(1).png"
              />
            </_Builtin.Block>
            <_Builtin.Link
              className="fn-button"
              data-w-id="e873cba8-4419-69d2-01d1-264f6007f5b4"
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {t('next', { ns: 'home' })}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Section
          className="section-partners"
          grid={{
            type: "section",
          }}
          tag="div"
        >
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="fn-section" tag="div">
              <_Builtin.Block className="fn-container-grid-3" tag="div">
                <_Builtin.Block
                  className="fn-column-2"
                  id="w-node-_2e7715b2-4b3d-d4e5-9b86-6af5dc4f0ba0-71812e24"
                  tag="div"
                >
                  <_Builtin.Heading className="head-line" tag="h2">
                    {"Ours Partners"}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph className="fn-paragraph-2">
                    {
                      "Aliquet tellus imperdiet morbi tincidunt gravida nulla. Vitae cum vel vulputate at mauris. Consectetur integer maecenas lectus lorem dui mattis neque, nibh pellentesque."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className="fn-button-secondery-2"
                    id="w-node-_2e7715b2-4b3d-d4e5-9b86-6af5dc4f0ba5-71812e24"
                    button={true}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Learn More"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className="fn-logos-grid"
                  id="w-node-_2e7715b2-4b3d-d4e5-9b86-6af5dc4f0ba7-71812e24"
                  tag="div"
                >
                  <_Builtin.Block className="fn-logos-card" tag="div">
                    <_Builtin.HtmlEmbed
                      className="fn-logos-masonary-logo"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20116%2035%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M36.9435%2026.4834L44.0105%207.15965H47.9857L55.0526%2026.4834H51.2983L49.7524%2022.0113H42.2161L40.6426%2026.4834H36.9435ZM43.1823%2019.2508H48.7862L45.9705%2011.2176L43.1823%2019.2508ZM57.459%2032.5566V12.7911H60.606L60.9925%2014.7511C61.4342%2014.1438%2062.0139%2013.6101%2062.7317%2013.15C63.4678%2012.6899%2064.4156%2012.4599%2065.575%2012.4599C66.8633%2012.4599%2068.0135%2012.7727%2069.0257%2013.3985C70.0379%2014.0242%2070.8384%2014.8799%2071.4273%2015.9658C72.0163%2017.0516%2072.3107%2018.2846%2072.3107%2019.6649C72.3107%2021.0451%2072.0163%2022.2782%2071.4273%2023.364C70.8384%2024.4314%2070.0379%2025.278%2069.0257%2025.9037C68.0135%2026.511%2066.8633%2026.8147%2065.575%2026.8147C64.5444%2026.8147%2063.6426%2026.6214%2062.8697%2026.235C62.0967%2025.8485%2061.471%2025.3056%2060.9925%2024.6062V32.5566H57.459ZM64.8297%2023.7229C65.9523%2023.7229%2066.8817%2023.3456%2067.6178%2022.591C68.354%2021.8365%2068.722%2020.8611%2068.722%2019.6649C68.722%2018.4686%2068.354%2017.4841%2067.6178%2016.7111C66.8817%2015.9382%2065.9523%2015.5517%2064.8297%2015.5517C63.6886%2015.5517%2062.7501%2015.9382%2062.0139%2016.7111C61.2962%2017.4656%2060.9373%2018.441%2060.9373%2019.6373C60.9373%2020.8335%2061.2962%2021.8181%2062.0139%2022.591C62.7501%2023.3456%2063.6886%2023.7229%2064.8297%2023.7229ZM75.4672%2032.5566V12.7911H78.6142L79.0007%2014.7511C79.4424%2014.1438%2080.0221%2013.6101%2080.7398%2013.15C81.476%2012.6899%2082.4238%2012.4599%2083.5832%2012.4599C84.8714%2012.4599%2086.0217%2012.7727%2087.0339%2013.3985C88.0461%2014.0242%2088.8466%2014.8799%2089.4355%2015.9658C90.0244%2017.0516%2090.3189%2018.2846%2090.3189%2019.6649C90.3189%2021.0451%2090.0244%2022.2782%2089.4355%2023.364C88.8466%2024.4314%2088.0461%2025.278%2087.0339%2025.9037C86.0217%2026.511%2084.8714%2026.8147%2083.5832%2026.8147C82.5526%2026.8147%2081.6508%2026.6214%2080.8779%2026.235C80.1049%2025.8485%2079.4792%2025.3056%2079.0007%2024.6062V32.5566H75.4672ZM82.8378%2023.7229C83.9605%2023.7229%2084.8898%2023.3456%2085.626%2022.591C86.3621%2021.8365%2086.7302%2020.8611%2086.7302%2019.6649C86.7302%2018.4686%2086.3621%2017.4841%2085.626%2016.7111C84.8898%2015.9382%2083.9605%2015.5517%2082.8378%2015.5517C81.6968%2015.5517%2080.7582%2015.9382%2080.0221%2016.7111C79.3044%2017.4656%2078.9455%2018.441%2078.9455%2019.6373C78.9455%2020.8335%2079.3044%2021.8181%2080.0221%2022.591C80.7582%2023.3456%2081.6968%2023.7229%2082.8378%2023.7229ZM93.4754%2026.4834V6.60754H97.0089V26.4834H93.4754ZM102.331%2032.5566L105.506%2025.5724H104.677L99.3495%2012.7911H103.187L107.024%2022.4254L111.027%2012.7911H114.781L106.085%2032.5566H102.331Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Crect%20y%3D%220.0664062%22%20width%3D%2225.1263%22%20height%3D%2234.8662%22%20rx%3D%225.81165%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Ccircle%20cx%3D%2212.5628%22%20cy%3D%2228.138%22%20r%3D%222.7513%22%20fill%3D%22currentColor%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="fn-logos-card" tag="div">
                    <_Builtin.HtmlEmbed
                      className="fn-logos-masonary-logo"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20159%2045%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M59.9218%2031.6064V15.126H54.2903V12.2827H69.1143V15.126H63.4552V31.6064H59.9218ZM75.8218%2031.9377C74.4415%2031.9377%2073.2177%2031.6433%2072.1503%2031.0543C71.0829%2030.4654%2070.2455%2029.6373%2069.6382%2028.5699C69.0309%2027.5024%2068.7272%2026.2694%2068.7272%2024.8707C68.7272%2023.4537%2069.0217%2022.193%2069.6106%2021.0888C70.2179%2019.9846%2071.0461%2019.1288%2072.0951%2018.5215C73.1625%2017.8958%2074.4139%2017.5829%2075.8494%2017.5829C77.1929%2017.5829%2078.3799%2017.8774%2079.4105%2018.4663C80.4411%2019.0552%2081.2416%2019.865%2081.8122%2020.8956C82.4011%2021.9078%2082.6955%2023.0396%2082.6955%2024.291C82.6955%2024.4935%2082.6863%2024.7051%2082.6679%2024.9259C82.6679%2025.1468%2082.6587%2025.3768%2082.6403%2025.6161H72.2331C72.3067%2026.6835%2072.6748%2027.5209%2073.3373%2028.1282C74.0182%2028.7355%2074.8372%2029.0391%2075.7942%2029.0391C76.5119%2029.0391%2077.11%2028.8827%2077.5885%2028.5699C78.0854%2028.2386%2078.4535%2027.8153%2078.6928%2027.3H82.2814C82.0238%2028.165%2081.5913%2028.9563%2080.984%2029.6741C80.3951%2030.3734%2079.6589%2030.9255%2078.7756%2031.3304C77.9106%2031.7353%2076.926%2031.9377%2075.8218%2031.9377ZM75.8494%2020.4539C74.9844%2020.4539%2074.2207%2020.7023%2073.5582%2021.1992C72.8956%2021.6777%2072.4723%2022.4139%2072.2883%2023.4077H79.1068C79.0516%2022.5059%2078.7204%2021.7881%2078.113%2021.2544C77.5057%2020.7207%2076.7512%2020.4539%2075.8494%2020.4539ZM92.3755%2031.9377C90.9768%2031.9377%2089.7438%2031.6341%2088.6764%2031.0267C87.609%2030.4194%2086.7624%2029.5729%2086.1367%2028.487C85.5294%2027.4012%2085.2257%2026.159%2085.2257%2024.7603C85.2257%2023.3616%2085.5294%2022.1194%2086.1367%2021.0336C86.7624%2019.9478%2087.609%2019.1012%2088.6764%2018.4939C89.7438%2017.8866%2090.9768%2017.5829%2092.3755%2017.5829C94.1239%2017.5829%2095.5961%2018.043%2096.7924%2018.9632C97.9886%2019.865%2098.7524%2021.1164%2099.0836%2022.7175H95.3569C95.1729%2022.055%2094.8048%2021.5397%2094.2527%2021.1716C93.719%2020.7851%2093.0841%2020.5919%2092.3479%2020.5919C91.3725%2020.5919%2090.5444%2020.96%2089.8634%2021.6961C89.1825%2022.4323%2088.842%2023.4537%2088.842%2024.7603C88.842%2026.067%2089.1825%2027.0884%2089.8634%2027.8245C90.5444%2028.5607%2091.3725%2028.9287%2092.3479%2028.9287C93.0841%2028.9287%2093.719%2028.7447%2094.2527%2028.3766C94.8048%2028.0085%2095.1729%2027.484%2095.3569%2026.8031H99.0836C98.7524%2028.349%2097.9886%2029.5913%2096.7924%2030.5298C95.5961%2031.4684%2094.1239%2031.9377%2092.3755%2031.9377ZM102.22%2031.6064V11.7306H105.753V20.0122C106.213%2019.2577%20106.83%2018.6687%20107.603%2018.2455C108.394%2017.8038%20109.296%2017.5829%20110.308%2017.5829C112.001%2017.5829%20113.308%2018.1166%20114.228%2019.184C115.167%2020.2514%20115.636%2021.8157%20115.636%2023.8769V31.6064H112.13V24.2082C112.13%2023.0304%20111.891%2022.1286%20111.412%2021.5029C110.952%2020.8772%20110.216%2020.5643%20109.204%2020.5643C108.21%2020.5643%20107.382%2020.914%20106.72%2021.6133C106.075%2022.3126%20105.753%2023.288%20105.753%2024.5395V31.6064H102.22ZM119.015%2031.6064V11.7306H122.548V31.6064H119.015ZM128.064%2015.7886C127.42%2015.7886%20126.886%2015.5953%20126.463%2015.2089C126.058%2014.8224%20125.855%2014.3347%20125.855%2013.7458C125.855%2013.1569%20126.058%2012.6784%20126.463%2012.3103C126.886%2011.9238%20127.42%2011.7306%20128.064%2011.7306C128.708%2011.7306%20129.232%2011.9238%20129.637%2012.3103C130.06%2012.6784%20130.272%2013.1569%20130.272%2013.7458C130.272%2014.3347%20130.06%2014.8224%20129.637%2015.2089C129.232%2015.5953%20128.708%2015.7886%20128.064%2015.7886ZM126.297%2031.6064V17.9142H129.83V31.6064H126.297ZM134.153%2031.6064V20.868H132.276V17.9142H134.153V16.3131C134.153%2014.6568%20134.567%2013.4789%20135.396%2012.7796C136.242%2012.0803%20137.383%2011.7306%20138.819%2011.7306H140.337V14.7396H139.371C138.764%2014.7396%20138.331%2014.8592%20138.073%2015.0984C137.816%2015.3377%20137.687%2015.7426%20137.687%2016.3131V17.9142H140.641V20.868H137.687V31.6064H134.153ZM145.151%2037.6796L148.325%2030.6955H147.497L142.169%2017.9142H146.006L149.844%2027.5485L153.846%2017.9142H157.601L148.905%2037.6796H145.151Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M23.9639%206.40302C23.9639%204.24297%2026.5908%203.17838%2028.0946%204.72899L41.9511%2019.0168C42.8637%2019.9577%2043.374%2021.217%2043.374%2022.5279V39.0659C43.374%2041.2259%2040.7471%2042.2905%2039.2433%2040.7399L25.3868%2026.4521C24.4742%2025.5111%2023.9639%2024.2518%2023.9639%2022.941V6.40302Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M11.9355%205.9333C11.9355%203.77324%2014.5624%202.70865%2016.0663%204.25926L29.7183%2018.3362C30.762%2019.4124%2031.3457%2020.8527%2031.3457%2022.3519V38.5961C31.3457%2040.7562%2028.7188%2041.8208%2027.215%2040.2702L13.3585%2025.9824C12.4459%2025.0414%2011.9355%2023.7821%2011.9355%2022.4713V5.9333Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M0.308594%206.40302C0.308594%204.24297%202.93549%203.17838%204.4393%204.72899L18.2958%2019.0168C19.2084%2019.9577%2019.7188%2021.217%2019.7188%2022.5279V39.0659C19.7188%2041.2259%2017.0919%2042.2905%2015.5881%2040.7399L1.73152%2026.4521C0.818951%2025.5111%200.308594%2024.2518%200.308594%2022.941V6.40302Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="fn-logos-card" tag="div">
                    <_Builtin.HtmlEmbed
                      className="fn-logos-masonary-logo"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20174%2045%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M61.6086%2031.9387C60.1916%2031.9387%2058.9401%2031.6994%2057.8543%2031.2209C56.7685%2030.7241%2055.9127%2030.0247%2055.287%2029.1229C54.6613%2028.2028%2054.3392%2027.0893%2054.3208%2025.7827H58.0475C58.0843%2026.6845%2058.4064%2027.4482%2059.0137%2028.0739C59.6395%2028.6813%2060.4952%2028.9849%2061.581%2028.9849C62.5196%2028.9849%2063.265%2028.7641%2063.8171%2028.3224C64.3692%2027.8623%2064.6452%2027.255%2064.6452%2026.5004C64.6452%2025.7091%2064.3968%2025.0926%2063.8999%2024.6509C63.4214%2024.2092%2062.7773%2023.8503%2061.9675%2023.5743C61.1577%2023.2982%2060.2928%2023.0038%2059.3726%2022.6909C57.8819%2022.1756%2056.7409%2021.5131%2055.9495%2020.7033C55.1766%2019.8936%2054.7901%2018.8169%2054.7901%2017.4735C54.7717%2016.3325%2055.0386%2015.3571%2055.5907%2014.5473C56.1612%2013.7192%2056.9341%2013.0842%2057.9095%2012.6425C58.8849%2012.1825%2060.0075%2011.9524%2061.2774%2011.9524C62.5656%2011.9524%2063.6974%2012.1825%2064.6728%2012.6425C65.6666%2013.1026%2066.4396%2013.7468%2066.9917%2014.5749C67.5622%2015.4031%2067.8658%2016.3877%2067.9027%2017.5287H64.1207C64.1023%2016.8478%2063.8355%2016.2496%2063.3202%2015.7343C62.8233%2015.2006%2062.1239%2014.9338%2061.2222%2014.9338C60.4492%2014.9154%2059.7959%2015.1086%2059.2622%2015.5135C58.7469%2015.9%2058.4892%2016.4705%2058.4892%2017.225C58.4892%2017.8692%2058.6917%2018.3845%2059.0965%2018.7709C59.5014%2019.139%2060.0535%2019.4519%2060.7529%2019.7095C61.4522%2019.9672%2062.2528%2020.2432%2063.1545%2020.5377C64.1115%2020.8689%2064.9857%2021.2554%2065.777%2021.6971C66.5684%2022.1388%2067.2033%2022.7277%2067.6818%2023.4638C68.1603%2024.1816%2068.3995%2025.111%2068.3995%2026.252C68.3995%2027.2642%2068.1419%2028.2028%2067.6266%2029.0677C67.1113%2029.9327%2066.3476%2030.632%2065.3354%2031.1657C64.3232%2031.681%2063.0809%2031.9387%2061.6086%2031.9387ZM77.9698%2031.9387C76.6447%2031.9387%2075.4485%2031.635%2074.3811%2031.0277C73.3321%2030.4204%2072.4947%2029.583%2071.869%2028.5156C71.2617%2027.4298%2070.958%2026.1784%2070.958%2024.7613C70.958%2023.3442%2071.2709%2022.102%2071.8966%2021.0346C72.5223%2019.9488%2073.3597%2019.1022%2074.4087%2018.4949C75.4761%2017.8876%2076.6723%2017.5839%2077.9974%2017.5839C79.304%2017.5839%2080.4819%2017.8876%2081.5309%2018.4949C82.5983%2019.1022%2083.4356%2019.9488%2084.0429%2021.0346C84.6687%2022.102%2084.9815%2023.3442%2084.9815%2024.7613C84.9815%2026.1784%2084.6687%2027.4298%2084.0429%2028.5156C83.4356%2029.583%2082.5983%2030.4204%2081.5309%2031.0277C80.4634%2031.635%2079.2764%2031.9387%2077.9698%2031.9387ZM77.9698%2028.8745C78.8899%2028.8745%2079.6905%2028.534%2080.3714%2027.8531C81.0524%2027.1538%2081.3928%2026.1232%2081.3928%2024.7613C81.3928%2023.3994%2081.0524%2022.378%2080.3714%2021.6971C79.6905%2020.9978%2078.8991%2020.6481%2077.9974%2020.6481C77.0588%2020.6481%2076.249%2020.9978%2075.5681%2021.6971C74.9056%2022.378%2074.5743%2023.3994%2074.5743%2024.7613C74.5743%2026.1232%2074.9056%2027.1538%2075.5681%2027.8531C76.249%2028.534%2077.0496%2028.8745%2077.9698%2028.8745ZM88.7758%2031.6074V20.8689H86.8986V17.9152H88.7758V16.3141C88.7758%2014.6577%2089.1898%2013.4799%2090.018%2012.7806C90.8646%2012.0812%2092.0056%2011.7316%2093.4411%2011.7316H94.9594V14.7406H93.9932C93.3858%2014.7406%2092.9534%2014.8602%2092.6957%2015.0994C92.4381%2015.3387%2092.3092%2015.7435%2092.3092%2016.3141V17.9152H95.263V20.8689H92.3092V31.6074H88.7758ZM104.162%2031.6074C102.727%2031.6074%20101.577%2031.2578%20100.712%2030.5584C99.8466%2029.8591%2099.4142%2028.6168%2099.4142%2026.8317V20.8689H97.0677V17.9152H99.4142L99.8282%2014.2437H102.948V17.9152H106.647V20.8689H102.948V26.8593C102.948%2027.5218%20103.086%2027.9819%20103.362%2028.2396C103.656%2028.4788%20104.153%2028.5984%20104.852%2028.5984H106.564V31.6074H104.162ZM112.358%2031.6074L108.355%2017.9152H111.861L114.235%2027.7703L116.996%2017.9152H120.916L123.676%2027.7703L126.078%2017.9152H129.584L125.554%2031.6074H121.882L118.956%2021.3658L116.03%2031.6074H112.358ZM135.833%2031.9387C134.655%2031.9387%20133.689%2031.7547%20132.934%2031.3866C132.18%2031.0001%20131.619%2030.494%20131.25%2029.8683C130.882%2029.2426%20130.698%2028.5524%20130.698%2027.7979C130.698%2026.528%20131.195%2025.4974%20132.189%2024.7061C133.183%2023.9147%20134.674%2023.5191%20136.661%2023.5191H140.139V23.1878C140.139%2022.2492%20139.873%2021.5591%20139.339%2021.1174C138.805%2020.6757%20138.143%2020.4549%20137.351%2020.4549C136.634%2020.4549%20136.008%2020.6297%20135.474%2020.9794C134.94%2021.3106%20134.609%2021.8075%20134.48%2022.47H131.03C131.122%2021.4763%20131.453%2020.6113%20132.023%2019.8751C132.612%2019.139%20133.367%2018.5777%20134.287%2018.1912C135.207%2017.7863%20136.238%2017.5839%20137.379%2017.5839C139.33%2017.5839%20140.866%2018.0716%20141.989%2019.047C143.112%2020.0224%20143.673%2021.4026%20143.673%2023.1878V31.6074H140.664L140.333%2029.399C139.928%2030.1351%20139.357%2030.7425%20138.621%2031.2209C137.903%2031.6994%20136.974%2031.9387%20135.833%2031.9387ZM136.634%2029.1782C137.646%2029.1782%20138.428%2028.8469%20138.98%2028.1844C139.55%2027.5218%20139.909%2026.7029%20140.057%2025.7275H137.048C136.109%2025.7275%20135.437%2025.9023%20135.032%2026.252C134.628%2026.5832%20134.425%2026.9973%20134.425%2027.4942C134.425%2028.0279%20134.628%2028.442%20135.032%2028.7365C135.437%2029.0309%20135.971%2029.1782%20136.634%2029.1782ZM147.045%2031.6074V17.9152H150.192L150.523%2020.4825C151.02%2019.5991%20151.692%2018.8998%20152.538%2018.3845C153.403%2017.8508%20154.415%2017.5839%20155.575%2017.5839V21.3106H154.581C153.808%2021.3106%20153.118%2021.4302%20152.511%2021.6695C151.903%2021.9087%20151.425%2022.3228%20151.075%2022.9117C150.744%2023.5006%20150.578%2024.3196%20150.578%2025.3686V31.6074H147.045ZM164.4%2031.9387C163.02%2031.9387%20161.796%2031.6442%20160.729%2031.0553C159.661%2030.4664%20158.824%2029.6382%20158.217%2028.5708C157.609%2027.5034%20157.306%2026.2704%20157.306%2024.8717C157.306%2023.4546%20157.6%2022.194%20158.189%2021.0898C158.796%2019.9856%20159.624%2019.1298%20160.673%2018.5225C161.741%2017.8968%20162.992%2017.5839%20164.428%2017.5839C165.771%2017.5839%20166.958%2017.8784%20167.989%2018.4673C169.019%2019.0562%20169.82%2019.8659%20170.391%2020.8965C170.979%2021.9087%20171.274%2023.0406%20171.274%2024.292C171.274%2024.4944%20171.265%2024.7061%20171.246%2024.9269C171.246%2025.1478%20171.237%2025.3778%20171.219%2025.6171H160.811C160.885%2026.6845%20161.253%2027.5218%20161.916%2028.1291C162.597%2028.7365%20163.416%2029.0401%20164.373%2029.0401C165.09%2029.0401%20165.688%2028.8837%20166.167%2028.5708C166.664%2028.2396%20167.032%2027.8163%20167.271%2027.301H170.86C170.602%2028.166%20170.17%2028.9573%20169.562%2029.675C168.973%2030.3744%20168.237%2030.9265%20167.354%2031.3314C166.489%2031.7362%20165.504%2031.9387%20164.4%2031.9387ZM164.428%2020.4549C163.563%2020.4549%20162.799%2020.7033%20162.137%2021.2002C161.474%2021.6787%20161.051%2022.4148%20160.867%2023.4086H167.685C167.63%2022.5069%20167.299%2021.7891%20166.691%2021.2554C166.084%2020.7217%20165.33%2020.4549%20164.428%2020.4549Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Crect%20x%3D%228.66992%22%20y%3D%228.6875%22%20width%3D%2227.6231%22%20height%3D%2227.6231%22%20rx%3D%225.81165%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2214.3252%22%20y%3D%220.563477%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2220.373%22%20y%3D%220.563477%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2226.4229%22%20y%3D%220.563477%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%220.544922%22%20y%3D%2230.6562%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20transform%3D%22rotate(-90%200.544922%2030.6562)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%220.544922%22%20y%3D%2224.6074%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20transform%3D%22rotate(-90%200.544922%2024.6074)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%220.544922%22%20y%3D%2218.5586%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20transform%3D%22rotate(-90%200.544922%2018.5586)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2237.918%22%20y%3D%2230.6562%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20transform%3D%22rotate(-90%2037.918%2030.6562)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2237.918%22%20y%3D%2224.6074%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20transform%3D%22rotate(-90%2037.918%2024.6074)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2237.918%22%20y%3D%2218.5586%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20transform%3D%22rotate(-90%2037.918%2018.5586)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2214.3252%22%20y%3D%2237.9365%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2220.373%22%20y%3D%2237.9365%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2226.4229%22%20y%3D%2237.9365%22%20width%3D%224.21532%22%20height%3D%226.49954%22%20rx%3D%222.10766%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="fn-logos-card" tag="div">
                    <_Builtin.HtmlEmbed
                      className="fn-logos-masonary-logo"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20168%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M65.006%2026.4914C63.0552%2026.4914%2061.3805%2026.0773%2059.9818%2025.2492C58.5831%2024.4026%2057.5065%2023.234%2056.752%2021.7433C55.9974%2020.2342%2055.6202%2018.4951%2055.6202%2016.5259C55.6202%2014.5567%2055.9974%2012.8176%2056.752%2011.3085C57.5065%209.79938%2058.5831%208.62156%2059.9818%207.77499C61.3805%206.92843%2063.0552%206.50514%2065.006%206.50514C67.3248%206.50514%2069.2204%207.08486%2070.6927%208.24428C72.1834%209.3853%2073.1128%2010.9956%2073.4808%2013.0752H69.5885C69.3492%2012.0262%2068.8339%2011.2073%2068.0426%2010.6183C67.2696%2010.011%2066.239%209.70737%2064.9508%209.70737C63.1656%209.70737%2061.767%2010.3147%2060.7548%2011.5293C59.7426%2012.744%2059.2365%2014.4095%2059.2365%2016.5259C59.2365%2018.6423%2059.7426%2020.3078%2060.7548%2021.5225C61.767%2022.7187%2063.1656%2023.3168%2064.9508%2023.3168C66.239%2023.3168%2067.2696%2023.0408%2068.0426%2022.4886C68.8339%2021.9181%2069.3492%2021.136%2069.5885%2020.1422H73.4808C73.1128%2022.1298%2072.1834%2023.6849%2070.6927%2024.8075C69.2204%2025.9301%2067.3248%2026.4914%2065.006%2026.4914ZM83.0959%2026.4914C81.7709%2026.4914%2080.5746%2026.1878%2079.5072%2025.5804C78.4582%2024.9731%2077.6208%2024.1358%2076.9951%2023.0684C76.3878%2021.9825%2076.0841%2020.7311%2076.0841%2019.314C76.0841%2017.897%2076.397%2016.6547%2077.0227%2015.5873C77.6485%2014.5015%2078.4858%2013.6549%2079.5348%2013.0476C80.6022%2012.4403%2081.7985%2012.1366%2083.1235%2012.1366C84.4302%2012.1366%2085.608%2012.4403%2086.657%2013.0476C87.7244%2013.6549%2088.5618%2014.5015%2089.1691%2015.5873C89.7948%2016.6547%2090.1077%2017.897%2090.1077%2019.314C90.1077%2020.7311%2089.7948%2021.9825%2089.1691%2023.0684C88.5618%2024.1358%2087.7244%2024.9731%2086.657%2025.5804C85.5896%2026.1878%2084.4026%2026.4914%2083.0959%2026.4914ZM83.0959%2023.4272C84.0161%2023.4272%2084.8166%2023.0868%2085.4976%2022.4058C86.1785%2021.7065%2086.519%2020.6759%2086.519%2019.314C86.519%2017.9522%2086.1785%2016.9308%2085.4976%2016.2498C84.8166%2015.5505%2084.0253%2015.2008%2083.1235%2015.2008C82.1849%2015.2008%2081.3752%2015.5505%2080.6942%2016.2498C80.0317%2016.9308%2079.7004%2017.9522%2079.7004%2019.314C79.7004%2020.6759%2080.0317%2021.7065%2080.6942%2022.4058C81.3752%2023.0868%2082.1757%2023.4272%2083.0959%2023.4272ZM99.561%2026.4914C98.2727%2026.4914%2097.1225%2026.1786%2096.1103%2025.5528C95.0981%2024.9271%2094.2976%2024.0714%2093.7087%2022.9855C93.1197%2021.8997%2092.8253%2020.6667%2092.8253%2019.2864C92.8253%2017.9062%2093.1197%2016.6823%2093.7087%2015.6149C94.2976%2014.5291%2095.0981%2013.6825%2096.1103%2013.0752C97.1225%2012.4495%2098.2727%2012.1366%2099.561%2012.1366C100.592%2012.1366%20101.493%2012.3299%20102.266%2012.7163C103.039%2013.1028%20103.665%2013.6457%20104.143%2014.3451V6.2843H107.677V26.1602H104.53L104.143%2024.2002C103.702%2024.8075%20103.113%2025.3412%20102.377%2025.8013C101.659%2026.2614%20100.72%2026.4914%2099.561%2026.4914ZM100.306%2023.3996C101.447%2023.3996%20102.377%2023.0223%20103.094%2022.2678C103.831%2021.4949%20104.199%2020.5103%20104.199%2019.314C104.199%2018.1178%20103.831%2017.1424%20103.094%2016.3879C102.377%2015.6149%20101.447%2015.2284%20100.306%2015.2284C99.1837%2015.2284%2098.2543%2015.6057%2097.5182%2016.3603C96.7821%2017.1148%2096.414%2018.0902%2096.414%2019.2864C96.414%2020.4827%2096.7821%2021.4672%2097.5182%2022.2402C98.2543%2023.0131%2099.1837%2023.3996%20100.306%2023.3996ZM117.928%2026.4914C116.548%2026.4914%20115.324%2026.197%20114.257%2025.608C113.189%2025.0191%20112.352%2024.191%20111.744%2023.1236C111.137%2022.0562%20110.833%2020.8231%20110.833%2019.4244C110.833%2018.0074%20111.128%2016.7467%20111.717%2015.6425C112.324%2014.5383%20113.152%2013.6825%20114.201%2013.0752C115.269%2012.4495%20116.52%2012.1366%20117.956%2012.1366C119.299%2012.1366%20120.486%2012.4311%20121.517%2013.02C122.547%2013.6089%20123.348%2014.4187%20123.918%2015.4493C124.507%2016.4615%20124.802%2017.5933%20124.802%2018.8447C124.802%2019.0472%20124.793%2019.2588%20124.774%2019.4797C124.774%2019.7005%20124.765%2019.9305%20124.747%2020.1698H114.339C114.413%2021.2372%20114.781%2022.0746%20115.444%2022.6819C116.124%2023.2892%20116.943%2023.5929%20117.9%2023.5929C118.618%2023.5929%20119.216%2023.4364%20119.695%2023.1236C120.192%2022.7923%20120.56%2022.369%20120.799%2021.8537H124.388C124.13%2022.7187%20123.698%2023.51%20123.09%2024.2278C122.501%2024.9271%20121.765%2025.4792%20120.882%2025.8841C120.017%2026.289%20119.032%2026.4914%20117.928%2026.4914ZM117.956%2015.0076C117.091%2015.0076%20116.327%2015.256%20115.664%2015.7529C115.002%2016.2314%20114.579%2016.9676%20114.395%2017.9614H121.213C121.158%2017.0596%20120.827%2016.3419%20120.219%2015.8081C119.612%2015.2744%20118.857%2015.0076%20117.956%2015.0076ZM127.774%2026.1602V6.2843H131.307V26.1602H127.774ZM136.822%2010.3423C136.178%2010.3423%20135.645%2010.1491%20135.221%209.76258C134.816%209.3761%20134.614%208.88841%20134.614%208.29949C134.614%207.71058%20134.816%207.23209%20135.221%206.86401C135.645%206.47754%20136.178%206.2843%20136.822%206.2843C137.467%206.2843%20137.991%206.47754%20138.396%206.86401C138.819%207.23209%20139.031%207.71058%20139.031%208.29949C139.031%208.88841%20138.819%209.3761%20138.396%209.76258C137.991%2010.1491%20137.467%2010.3423%20136.822%2010.3423ZM135.056%2026.1602V12.4679H138.589V26.1602H135.056ZM142.912%2026.1602V15.4217H141.035V12.4679H142.912V10.8668C142.912%209.21047%20143.326%208.03264%20144.154%207.3333C145.001%206.63397%20146.142%206.2843%20147.577%206.2843H149.096V9.29329H148.13C147.522%209.29329%20147.09%209.41291%20146.832%209.65215C146.574%209.8914%20146.446%2010.2963%20146.446%2010.8668V12.4679H149.399V15.4217H146.446V26.1602H142.912ZM153.909%2032.2333L157.084%2025.2492H156.256L150.928%2012.4679H154.765L158.602%2022.1022L162.605%2012.4679H166.359L157.664%2032.2333H153.909Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M19.3367%2032.6419C19.0845%2032.6419%2018.8197%2032.6166%2018.5549%2032.541C16.8273%2032.1122%2015.7681%2030.3595%2016.1968%2028.6319L22.6531%202.80666C23.0945%201.07909%2024.8473%200.0324686%2026.5748%200.448597C28.3024%200.889944%2029.349%202.64273%2028.9203%204.3703L22.464%2030.1955C22.0983%2031.6583%2020.7869%2032.6419%2019.3367%2032.6419Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M34.5231%2026.1853C33.6908%2026.1853%2032.8712%2025.8701%2032.2407%2025.2396C30.9797%2023.9786%2030.9797%2021.9358%2032.2407%2020.6748L36.4146%2016.5009L32.2407%2012.327C30.9797%2011.066%2030.9797%209.02315%2032.2407%207.76215C33.5017%206.50116%2035.5445%206.50116%2036.8055%207.76215L43.2618%2014.2185C44.5228%2015.4795%2044.5228%2017.5223%2043.2618%2018.7833L36.8055%2025.2396C36.175%2025.8701%2035.3553%2026.1853%2034.5231%2026.1853Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M10.5966%2026.1853C9.76431%2026.1853%208.94466%2025.8701%208.31417%2025.2396L1.85786%2018.7833C0.59686%2017.5223%200.59686%2015.4795%201.85786%2014.2185L8.31417%207.76215C9.57516%206.50116%2011.618%206.50116%2012.879%207.76215C14.14%209.02315%2014.14%2011.066%2012.879%2012.327L8.70507%2016.5009L12.879%2020.6748C14.14%2021.9358%2014.14%2023.9786%2012.879%2025.2396C12.2485%2025.8701%2011.4288%2026.1853%2010.5966%2026.1853Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="fn-logos-card" tag="div">
                    <_Builtin.HtmlEmbed
                      className="fn-logos-masonary-logo"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20144%2039%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M47.3%2028.2441V8.92039H55.0571C57.0631%208.92039%2058.5906%209.38968%2059.6396%2010.3283C60.707%2011.2484%2061.2407%2012.4355%2061.2407%2013.8894C61.2407%2015.104%2060.9095%2016.0794%2060.2469%2016.8155C59.6028%2017.5333%2058.8114%2018.021%2057.8729%2018.2786C58.9771%2018.4995%2059.8881%2019.0516%2060.6058%2019.9349C61.3235%2020.7999%2061.6824%2021.8121%2061.6824%2022.9715C61.6824%2024.499%2061.1303%2025.7597%2060.0261%2026.7535C58.9219%2027.7472%2057.3576%2028.2441%2055.3332%2028.2441H47.3ZM50.8335%2017.0364H54.5326C55.5264%2017.0364%2056.2902%2016.8063%2056.8239%2016.3462C57.3576%2015.8861%2057.6244%2015.2328%2057.6244%2014.3863C57.6244%2013.5765%2057.3576%2012.9416%2056.8239%2012.4815C56.3086%2012.003%2055.5264%2011.7637%2054.4774%2011.7637H50.8335V17.0364ZM50.8335%2025.3732H54.7811C55.8301%2025.3732%2056.6398%2025.1339%2057.2103%2024.6554C57.7993%2024.1585%2058.0937%2023.4684%2058.0937%2022.585C58.0937%2021.6833%2057.7901%2020.9747%2057.1827%2020.4594C56.5754%2019.9441%2055.7565%2019.6865%2054.7259%2019.6865H50.8335V25.3732ZM64.6323%2028.2441V8.36829H68.1658V28.2441H64.6323ZM78.3463%2028.5754C77.0213%2028.5754%2075.825%2028.2717%2074.7576%2027.6644C73.7086%2027.0571%2072.8713%2026.2197%2072.2455%2025.1523C71.6382%2024.0665%2071.3346%2022.8151%2071.3346%2021.398C71.3346%2019.9809%2071.6474%2018.7387%2072.2732%2017.6713C72.8989%2016.5855%2073.7362%2015.7389%2074.7852%2015.1316C75.8526%2014.5243%2077.0489%2014.2206%2078.3739%2014.2206C79.6806%2014.2206%2080.8584%2014.5243%2081.9074%2015.1316C82.9748%2015.7389%2083.8122%2016.5855%2084.4195%2017.6713C85.0452%2018.7387%2085.3581%2019.9809%2085.3581%2021.398C85.3581%2022.8151%2085.0452%2024.0665%2084.4195%2025.1523C83.8122%2026.2197%2082.9748%2027.0571%2081.9074%2027.6644C80.84%2028.2717%2079.653%2028.5754%2078.3463%2028.5754ZM78.3463%2025.5112C79.2665%2025.5112%2080.0671%2025.1707%2080.748%2024.4898C81.4289%2023.7905%2081.7694%2022.7599%2081.7694%2021.398C81.7694%2020.0361%2081.4289%2019.0148%2080.748%2018.3338C80.0671%2017.6345%2079.2757%2017.2848%2078.3739%2017.2848C77.4354%2017.2848%2076.6256%2017.6345%2075.9447%2018.3338C75.2821%2019.0148%2074.9509%2020.0361%2074.9509%2021.398C74.9509%2022.7599%2075.2821%2023.7905%2075.9447%2024.4898C76.6256%2025.1707%2077.4262%2025.5112%2078.3463%2025.5112ZM95.2255%2028.5754C93.8268%2028.5754%2092.5938%2028.2717%2091.5264%2027.6644C90.459%2027.0571%2089.6124%2026.2105%2088.9867%2025.1247C88.3794%2024.0389%2088.0757%2022.7967%2088.0757%2021.398C88.0757%2019.9993%2088.3794%2018.7571%2088.9867%2017.6713C89.6124%2016.5855%2090.459%2015.7389%2091.5264%2015.1316C92.5938%2014.5243%2093.8268%2014.2206%2095.2255%2014.2206C96.9738%2014.2206%2098.4461%2014.6807%2099.6424%2015.6009C100.839%2016.5027%20101.602%2017.7541%20101.934%2019.3552H98.2069C98.0228%2018.6927%2097.6548%2018.1774%2097.1027%2017.8093C96.569%2017.4228%2095.934%2017.2296%2095.1979%2017.2296C94.2225%2017.2296%2093.3943%2017.5977%2092.7134%2018.3338C92.0325%2019.07%2091.692%2020.0914%2091.692%2021.398C91.692%2022.7047%2092.0325%2023.7261%2092.7134%2024.4622C93.3943%2025.1983%2094.2225%2025.5664%2095.1979%2025.5664C95.934%2025.5664%2096.569%2025.3824%2097.1027%2025.0143C97.6548%2024.6462%2098.0228%2024.1217%2098.2069%2023.4408H101.934C101.602%2024.9867%20100.839%2026.2289%2099.6424%2027.1675C98.4461%2028.1061%2096.9738%2028.5754%2095.2255%2028.5754ZM105.07%2028.2441V8.36829H108.603V20.1006L113.462%2014.5519H117.658L112.054%2020.7907L118.569%2028.2441H114.152L108.603%2021.3704V28.2441H105.07ZM120.76%2028.2441V8.36829H124.293V28.2441H120.76ZM129.615%2034.3173L132.79%2027.3332H131.962L126.634%2014.5519H130.471L134.308%2024.1862L138.311%2014.5519H142.065L133.369%2034.3173H129.615Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cmask%20id%3D%22mask0_49_638%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2239%22%3E%0A%3Cpath%20d%3D%22M14.5084%201.27381C16.5548%200.0923249%2019.0761%200.0923233%2021.1225%201.27381L31.9459%207.52274C33.9923%208.70422%2035.253%2010.8877%2035.253%2013.2507V25.7485C35.253%2028.1115%2033.9923%2030.295%2031.9459%2031.4765L21.1225%2037.7254C19.0761%2038.9069%2016.5548%2038.9069%2014.5084%2037.7254L3.68495%2031.4765C1.63856%2030.295%200.37793%2028.1115%200.37793%2025.7485V13.2507C0.37793%2010.8877%201.63856%208.70423%203.68495%207.52274L14.5084%201.27381Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_49_638)%22%3E%0A%3Crect%20width%3D%2222.071%22%20height%3D%2222.071%22%20transform%3D%22matrix(0.866025%200.5%20-0.866025%200.5%2017.8154%20-0.963867)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20width%3D%2220.3084%22%20height%3D%2220.3084%22%20transform%3D%22matrix(0.866025%200.5%20-2.20305e-08%201%200.227539%2010.2314)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3Crect%20width%3D%2220.3084%22%20height%3D%2220.3084%22%20transform%3D%22matrix(0.866025%20-0.5%202.20305e-08%201%2017.8154%2020.3887)%22%20fill%3D%22currentColor%22%3E%3C%2Frect%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="fn-logos-card" tag="div">
                    <_Builtin.Image
                      className="fn-logos-masonary-logo"
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Flow Ninja Asset For Testimonial "
                      src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65b160040bbcbbcc9c87777c_Group%2039788.svg"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Section>
        <_Builtin.Block className="uui-section_logos03" tag="section">
          <_Builtin.Block className="uui-page-padding-3" tag="div">
            <_Builtin.Block className="uui-container-large-3" tag="div">
              <_Builtin.Block className="uui-logos03_component" tag="div">
                <_Builtin.Block className="uui-logos03_logo-list" tag="div">
                  <_Builtin.Block
                    className="uui-logos03_wrapper"
                    id="w-node-_5e4a5e74-f7d1-b130-1ba8-d76cacbb0af6-71812e24"
                    tag="div"
                  >
                    <_Builtin.Image
                      className="uui-logos03_logo"
                      loading="lazy"
                      width="auto"
                      height="Auto"
                      alt="Company logo"
                      src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef7ff89170f1b33c553a9_smart%20chain.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="uui-logos03_wrapper" tag="div">
                    <_Builtin.Image
                      className="uui-logos03_logo"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Company logo"
                      src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef8001eb87497813eea39_wiseart-new-logo.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="uui-logos03_wrapper" tag="div">
                    <_Builtin.Image
                      className="uui-logos03_logo"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Company logo"
                      src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef800086ce1ff8717fbe4_ace.jpeg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="uui-logos03_wrapper last"
                    tag="div"
                  >
                    <_Builtin.Image
                      className="uui-logos03_logo"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Company logo"
                      src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef8c254f96ffbf3263a04_exclusible.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="uui-logos03_wrapper"
                    id="w-node-_5e4a5e74-f7d1-b130-1ba8-d76cacbb0afe-71812e24"
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="uui-section_logos03" tag="section">
          <_Builtin.Block className="uui-page-padding-3" tag="div">
            <_Builtin.HtmlEmbed
              className="uui-logos-loop-css-embed"
              value="%3C!--%20Marquee%20track%2001--%3E%0A%0A%3Cstyle%3E%0A%0A.uui-container-large-3%7B%0A%20%20position%3A%20absolute%3B%0A%20%20white-space%3A%20nowrap%3B%0A%20%20will-change%3A%20transform%3B%0A%20%20animation%3A%20marquee%2030s%20linear%20infinite%3B%0A%7D%0A%0A%40keyframes%20marquee%20%7B%0A%20%20from%20%7B%20transform%3A%20translateX(0)%3B%20%7D%0A%20%20to%20%7B%20transform%3A%20translateX(-50%25)%3B%20%7D%0A%7D%0A%0A%3C%2Fstyle%3E"
            />
            <_Builtin.Block tag="div">
              <_Builtin.Block className="uui-logos04_list" tag="div">
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32874-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef7ff89170f1b33c553a9_smart%20chain.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32876-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef8c254f96ffbf3263a04_exclusible.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32878-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="Auto"
                    height="Auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef8001eb87497813eea39_wiseart-new-logo.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec3287a-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef800086ce1ff8717fbe4_ace.jpeg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec3287c-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39109_webflow.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec3287e-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910f_zoom.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32880-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39110_stripe.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39113_loom.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910c_notion.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39112_hopin.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910e_outreach.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39115_segment.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910a_productboard.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="uui-logos04_list" tag="div">
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec3288f-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef7ff89170f1b33c553a9_smart%20chain.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32891-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef8c254f96ffbf3263a04_exclusible.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32893-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef8001eb87497813eea39_wiseart-new-logo.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32895-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aef800086ce1ff8717fbe4_ace.jpeg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32897-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39109_webflow.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec32899-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910f_zoom.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  id="w-node-a0175ace-1ece-22c5-2291-a14f5ec3289b-71812e24"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39110_stripe.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39113_loom.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910c_notion.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39112_hopin.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910e_outreach.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda39115_segment.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="uui-logos04_wrapper invisible"
                  tag="div"
                >
                  <_Builtin.Image
                    className="uui-logos04_logo"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Company logo"
                    src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65af7fcdc07516fadda3910a_productboard.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="section-newsletter" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="padding-section-newsletter" tag="div">
                <_Builtin.Block
                  className="newsletter-component"
                  data-w-id="5777dbc1-9dc9-325f-a56d-710af1f7595c"
                  tag="div"
                >
                  <_Builtin.Block className="newsletter-left-content" tag="div">
                    <_Builtin.Block
                      className="newsletter-icon-wrapper"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="newsletter-icon"
                        loading="lazy"
                        width="40"
                        height="40"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65ae6f1a145b7954f56170cc/65aec70b93889006a36d1739_newsletter_yellow.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block tag="div">
                      <_Builtin.Heading
                        className="heading-style-h6 newsletter"
                        tag="h6"
                      >
                        {"Subscribe to our newsletter"}
                      </_Builtin.Heading>
                      <_Builtin.Block className="text-size-tiny" tag="div">
                        {
                          "Achieve your goal with our personalized support: buy, sell, create and more !"
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="newsletter-right-content"
                    tag="div"
                  >
                    <_Builtin.FormWrapper className="newsletter-from-block">
                      <_Builtin.FormForm
                        className="newsletter-from"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        id="email-form-newsletter"
                      >
                        <_Builtin.FormTextInput
                          className="newsletter-input"
                          autoFocus={false}
                          maxLength={256}
                          name="Email-4"
                          data-name="Email 4"
                          placeholder="Enter your email address"
                          type="email"
                          disabled={false}
                          required={true}
                          id="Email-4"
                        />
                        <_Builtin.FormButton
                          className="button cta fn-button"
                          type="submit"
                          value="Submit"
                          data-wait="Please wait..."
                        />
                      </_Builtin.FormForm>
                      <_Builtin.FormSuccessMessage className="success-message">
                        <_Builtin.Block tag="div">
                          {"Thank you! Your submission has been received!"}
                        </_Builtin.Block>
                      </_Builtin.FormSuccessMessage>
                      <_Builtin.FormErrorMessage className="error-message">
                        <_Builtin.Block tag="div">
                          {
                            "Oops! Something went wrong while submitting the form."
                          }
                        </_Builtin.Block>
                      </_Builtin.FormErrorMessage>
                    </_Builtin.FormWrapper>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>

        <FooterComponent />
      </_Builtin.Block>
    </_Component>
  );
}
