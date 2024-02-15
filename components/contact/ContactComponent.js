import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { HeroBanner } from "@/devlink/HeroBanner";
import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "@/components/footer/FooterComponent";

export function ContactComponent({ as: _Component = _Builtin.Block, connectedUser, setConnectedUser }) {
  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
      <_Builtin.Block className="main-wrapper" tag="div">
        <HeroBanner heading2Text="Support" textSizeRegluarText="Creation" />
        <_Builtin.Block className="section-change-log contact" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
              <_Builtin.Block className="padding-section-large" tag="div">
                <_Builtin.Block className="uui-section_contact04" tag="section">
                  <_Builtin.Block className="uui-page-padding-6" tag="div">
                    <_Builtin.Block className="uui-container-large-5" tag="div">
                      <_Builtin.Block
                        className="uui-padding-vertical-xhuge-3"
                        tag="div"
                      >
                        <_Builtin.Grid
                          className="uui-contact04_component"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="uui-contact04_content"
                            tag="div"
                          >
                            <_Builtin.Heading className="head-line" tag="h2">
                              {"Contact us"}
                            </_Builtin.Heading>
                            <_Builtin.Block
                              className="uui-space-xsmall-2"
                              tag="div"
                            />
                            <_Builtin.Block
                              className="uui-text-size-large-3"
                              tag="div"
                            >
                              {"Our friendly team would love to hear from you."}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="uui-contact04_contact-list"
                              tag="div"
                            >
                              <_Builtin.Link
                                className="link-block-5 w-node-b505d92e-9b2d-9273-9876-7a6b651c7512-6334fd1e"
                                id="link-block-contact-mail"
                                button={false}
                                block="inline"
                                options={{
                                  href: "mailto:info@dedal-e.ch?subject=Contact",
                                }}
                              >
                                <_Builtin.Block
                                  className="uui-contact04_item"
                                  id="w-node-_580bdb5f-9c7d-c739-269f-46166334fd32-6334fd1e"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="uui-contact04_icon-wrapper"
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className="uui-icon-1x1-xsmall-2"
                                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2%207L10.1649%2012.7154C10.8261%2013.1783%2011.1567%2013.4097%2011.5163%2013.4993C11.8339%2013.5785%2012.1661%2013.5785%2012.4837%2013.4993C12.8433%2013.4097%2013.1739%2013.1783%2013.8351%2012.7154L22%207M6.8%2020H17.2C18.8802%2020%2019.7202%2020%2020.362%2019.673C20.9265%2019.3854%2021.3854%2018.9265%2021.673%2018.362C22%2017.7202%2022%2016.8802%2022%2015.2V8.8C22%207.11984%2022%206.27976%2021.673%205.63803C21.3854%205.07354%2020.9265%204.6146%2020.362%204.32698C19.7202%204%2018.8802%204%2017.2%204H6.8C5.11984%204%204.27976%204%203.63803%204.32698C3.07354%204.6146%202.6146%205.07354%202.32698%205.63803C2%206.27976%202%207.11984%202%208.8V15.2C2%2016.8802%202%2017.7202%202.32698%2018.362C2.6146%2018.9265%203.07354%2019.3854%203.63803%2019.673C4.27976%2020%205.11984%2020%206.8%2020Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="uui-text-style-link-02"
                                    tag="div"
                                  >
                                    {"This is some text inside of a div block."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Link>
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.FormWrapper className="uui-contact04_form-wrapper">
                            <_Builtin.FormForm
                              className="uui-contact04_form"
                              name="wf-form-Contact-04-form"
                              data-name="Contact 04 form"
                              method="get"
                              id="wf-form-Contact-04-form"
                            >
                              <_Builtin.Block
                                className="form-field-2col"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="uui-form-field-wrapper"
                                  tag="div"
                                >
                                  <_Builtin.FormBlockLabel
                                    className="uui-field-label"
                                    htmlFor="Contact-04-first-name-2"
                                  >
                                    {"First name"}
                                  </_Builtin.FormBlockLabel>
                                  <_Builtin.FormTextInput
                                    className="uui-form_input"
                                    autoFocus={false}
                                    maxLength={256}
                                    name="Contact-04-first-name-2"
                                    data-name="Contact 04 First Name 2"
                                    placeholder="First name"
                                    type="text"
                                    disabled={false}
                                    required={true}
                                    id="Contact-04-first-name-2"
                                  />
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="uui-form-field-wrapper"
                                  tag="div"
                                >
                                  <_Builtin.FormBlockLabel
                                    className="uui-field-label"
                                    htmlFor="Contact-04-last-name-2"
                                  >
                                    {"Last name"}
                                  </_Builtin.FormBlockLabel>
                                  <_Builtin.FormTextInput
                                    className="uui-form_input"
                                    autoFocus={false}
                                    maxLength={256}
                                    name="Contact-04-last-name-2"
                                    data-name="Contact 04 Last Name 2"
                                    placeholder="Last name"
                                    type="text"
                                    disabled={false}
                                    required={true}
                                    id="Contact-04-last-name-2"
                                  />
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="form-field-2col"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="uui-form-field-wrapper"
                                  tag="div"
                                >
                                  <_Builtin.FormBlockLabel
                                    className="uui-field-label"
                                    htmlFor="Contact-04-email-2"
                                  >
                                    {"Email"}
                                  </_Builtin.FormBlockLabel>
                                  <_Builtin.FormTextInput
                                    className="uui-form_input"
                                    autoFocus={false}
                                    maxLength={256}
                                    name="Contact-04-email-2"
                                    data-name="Contact 04 Email 2"
                                    placeholder="your@email.com"
                                    type="email"
                                    disabled={false}
                                    required={true}
                                    id="Contact-04-email-2"
                                  />
                                </_Builtin.Block>
                                <_Builtin.Block
                                  className="uui-form-field-wrapper"
                                  tag="div"
                                >
                                  <_Builtin.FormBlockLabel
                                    className="uui-field-label"
                                    htmlFor="Contact-04-phone-2"
                                  >
                                    {"Phone number"}
                                  </_Builtin.FormBlockLabel>
                                  <_Builtin.FormTextInput
                                    className="uui-form_input"
                                    autoFocus={false}
                                    maxLength={256}
                                    name="Contact-04-phone-2"
                                    data-name="Contact 04 Phone 2"
                                    placeholder="+41 (76) 000 00 00"
                                    type="tel"
                                    disabled={false}
                                    required={true}
                                    id="Contact-04-phone-2"
                                  />
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-form-field-wrapper"
                                tag="div"
                              >
                                <_Builtin.FormBlockLabel
                                  className="uui-field-label"
                                  htmlFor="Contact-04-select-2"
                                >
                                  {"Choose a topic"}
                                </_Builtin.FormBlockLabel>
                                <_Builtin.FormSelect
                                  className="uui-form_input select"
                                  name="Contact-04-select-2"
                                  data-name="Contact 04 Select 2"
                                  required={true}
                                  multiple={false}
                                  id="Contact-04-select-2"
                                  options={[
                                    {
                                      t: "Select",
                                      v: "",
                                    },
                                    {
                                      t: "Contact",
                                      v: "First",
                                    },
                                    {
                                      t: "Partnership",
                                      v: "Second",
                                    },
                                    {
                                      t: "Marketing",
                                      v: "Third",
                                    },
                                  ]}
                                />
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-form-field-wrapper"
                                tag="div"
                              >
                                <_Builtin.FormBlockLabel
                                  className="uui-field-label"
                                  htmlFor="Contact-2-Select"
                                >
                                  {"Which best describes you?"}
                                </_Builtin.FormBlockLabel>
                                <_Builtin.Grid
                                  className="form-radio-2col"
                                  tag="div"
                                >
                                  <_Builtin.FormCheckboxWrapper
                                    className="uui-form-checkbox"
                                    id="contact-website"
                                  >
                                    <_Builtin.FormCheckboxInput
                                      className="uui-form-checkbox-icon"
                                      type="checkbox"
                                      name="Contact-04-checkbox-2"
                                      data-name="Contact 04 Checkbox 2"
                                      required={true}
                                      checked={false}
                                      id="check-website"
                                      form={{
                                        type: "checkbox-input",
                                        name: "Contact 04 Checkbox 2",
                                      }}
                                      inputType="custom"
                                      customClassName="w-checkbox-input--inputType-custom"
                                    />
                                    <_Builtin.FormInlineLabel
                                      className="uui-form-radio-label"
                                      htmlFor="Contact 2 Checkbox-2"
                                    >
                                      {"Website design"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormCheckboxWrapper>
                                  <_Builtin.FormCheckboxWrapper
                                    className="uui-form-checkbox"
                                    id="contact-content-creations"
                                  >
                                    <_Builtin.FormCheckboxInput
                                      className="uui-form-checkbox-icon"
                                      type="checkbox"
                                      name="Contact-04-checkbox-2"
                                      data-name="Contact 04 Checkbox 2"
                                      required={true}
                                      checked={false}
                                      id="check-content-creations"
                                      form={{
                                        type: "checkbox-input",
                                        name: "Contact 04 Checkbox 2",
                                      }}
                                      inputType="custom"
                                      customClassName="w-checkbox-input--inputType-custom"
                                    />
                                    <_Builtin.FormInlineLabel
                                      className="uui-form-radio-label"
                                      htmlFor="Contact 2 Checkbox-2"
                                    >
                                      {"Content creations"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormCheckboxWrapper>
                                  <_Builtin.FormCheckboxWrapper
                                    className="uui-form-checkbox"
                                    id="contact-ux-design"
                                  >
                                    <_Builtin.FormCheckboxInput
                                      className="uui-form-checkbox-icon"
                                      type="checkbox"
                                      name="Contact-04-checkbox-2"
                                      data-name="Contact 04 Checkbox 2"
                                      required={true}
                                      checked={false}
                                      id="check-ux-design"
                                      form={{
                                        type: "checkbox-input",
                                        name: "Contact 04 Checkbox 2",
                                      }}
                                      inputType="custom"
                                      customClassName="w-checkbox-input--inputType-custom"
                                    />
                                    <_Builtin.FormInlineLabel
                                      className="uui-form-radio-label"
                                      htmlFor="Contact 2 Checkbox-2"
                                    >
                                      {"UX design"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormCheckboxWrapper>
                                  <_Builtin.FormCheckboxWrapper
                                    className="uui-form-checkbox"
                                    id="contact-strategy"
                                  >
                                    <_Builtin.FormCheckboxInput
                                      className="uui-form-checkbox-icon"
                                      type="checkbox"
                                      name="Contact-04-checkbox-2"
                                      data-name="Contact 04 Checkbox 2"
                                      required={true}
                                      checked={false}
                                      id="check-strategy"
                                      form={{
                                        type: "checkbox-input",
                                        name: "Contact 04 Checkbox 2",
                                      }}
                                      inputType="custom"
                                      customClassName="w-checkbox-input--inputType-custom"
                                    />
                                    <_Builtin.FormInlineLabel
                                      className="uui-form-radio-label"
                                      htmlFor="Contact 2 Checkbox-2"
                                    >
                                      {"Strategy & consulting"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormCheckboxWrapper>
                                  <_Builtin.FormCheckboxWrapper
                                    className="uui-form-checkbox"
                                    id="contact-user-research"
                                  >
                                    <_Builtin.FormCheckboxInput
                                      className="uui-form-checkbox-icon"
                                      type="checkbox"
                                      name="Contact-04-checkbox-2"
                                      data-name="Contact 04 Checkbox 2"
                                      required={true}
                                      checked={false}
                                      id="check-user-research"
                                      form={{
                                        type: "checkbox-input",
                                        name: "Contact 04 Checkbox 2",
                                      }}
                                      inputType="custom"
                                      customClassName="w-checkbox-input--inputType-custom"
                                    />
                                    <_Builtin.FormInlineLabel
                                      className="uui-form-radio-label"
                                      htmlFor="Contact 2 Checkbox-2"
                                    >
                                      {"User research"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormCheckboxWrapper>
                                  <_Builtin.FormCheckboxWrapper
                                    className="uui-form-checkbox"
                                    id="contact-other"
                                  >
                                    <_Builtin.FormCheckboxInput
                                      className="uui-form-checkbox-icon"
                                      type="checkbox"
                                      name="Contact-04-checkbox-2"
                                      data-name="Contact 04 Checkbox 2"
                                      required={true}
                                      checked={false}
                                      id="check-other"
                                      form={{
                                        type: "checkbox-input",
                                        name: "Contact 04 Checkbox 2",
                                      }}
                                      inputType="custom"
                                      customClassName="w-checkbox-input--inputType-custom"
                                    />
                                    <_Builtin.FormInlineLabel
                                      className="uui-form-radio-label"
                                      htmlFor="Contact 2 Checkbox-2"
                                    >
                                      {"Other"}
                                    </_Builtin.FormInlineLabel>
                                  </_Builtin.FormCheckboxWrapper>
                                </_Builtin.Grid>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="uui-form-field-wrapper"
                                tag="div"
                              >
                                <_Builtin.FormBlockLabel
                                  className="uui-field-label"
                                  htmlFor="Contact-04-message-2"
                                >
                                  {"How can we help?"}
                                </_Builtin.FormBlockLabel>
                                <_Builtin.FormTextarea
                                  className="uui-form_input text-area"
                                  name="Contact-04-message-2"
                                  maxLength={5000}
                                  data-name="Contact 04 Message 2"
                                  placeholder="Type your message..."
                                  required={true}
                                  autoFocus={false}
                                  id="Contact-04-message-2"
                                />
                              </_Builtin.Block>
                              <_Builtin.FormCheckboxWrapper
                                className="uui-form-checkbox"
                                id="Contact-2-Checkbox"
                              >
                                <_Builtin.FormCheckboxInput
                                  className="uui-form-checkbox-icon"
                                  type="checkbox"
                                  name="Contact-04-checkbox-2"
                                  data-name="Contact 04 Checkbox 2"
                                  required={true}
                                  checked={false}
                                  id="Contact-04-checkbox-2"
                                  form={{
                                    type: "checkbox-input",
                                    name: "Contact 04 Checkbox 2",
                                  }}
                                  inputType="custom"
                                  customClassName="w-checkbox-input--inputType-custom"
                                />
                                <_Builtin.FormInlineLabel
                                  className="uui-form-checkbox-label"
                                  htmlFor="Contact 2 Checkbox-2"
                                >
                                  {"You agree to our friendly "}
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
                                </_Builtin.FormInlineLabel>
                              </_Builtin.FormCheckboxWrapper>
                              <_Builtin.Block
                                className="uui-form-button-wrapper"
                                id="w-node-_580bdb5f-9c7d-c739-269f-46166334fd76-6334fd1e"
                                tag="div"
                              >
                                <_Builtin.FormButton
                                  className="fn-button"
                                  id="w-node-_580bdb5f-9c7d-c739-269f-46166334fd77-6334fd1e"
                                  type="submit"
                                  value="Send message"
                                  data-wait="Please wait..."
                                />
                              </_Builtin.Block>
                            </_Builtin.FormForm>
                            <_Builtin.FormSuccessMessage className="success-message-2">
                              <_Builtin.Block
                                className="success-text"
                                tag="div"
                              >
                                {
                                  "Thank you! Your submission has been received!"
                                }
                              </_Builtin.Block>
                            </_Builtin.FormSuccessMessage>
                            <_Builtin.FormErrorMessage className="error-message-2">
                              <_Builtin.Block className="error-text" tag="div">
                                {
                                  "Oops! Something went wrong while submitting the form."
                                }
                              </_Builtin.Block>
                            </_Builtin.FormErrorMessage>
                          </_Builtin.FormWrapper>
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
      <FooterComponent />
    </_Component>
  );
}
