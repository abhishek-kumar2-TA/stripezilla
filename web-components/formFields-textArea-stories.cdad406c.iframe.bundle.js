"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[177],{"./src/formFields/textArea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/ta-text-area",component:"ta-text-area",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},label:{description:"Label for the input",table:{defaultValue:{summary:""}},control:"text"},description:{description:"Additional description for the field",table:{defaultValue:{summary:""}},control:"text"},value:{description:"value of the text area field",table:{defaultValue:{summary:""}},control:"text"},placeholder:{description:"Placeholder text",table:{defaultValue:{summary:""}},control:"text"},disabled:{description:"enable or disable the input",table:{defaultValue:{summary:"false"}},control:"boolean"},required:{description:"mark input as required",table:{defaultValue:{summary:"false"}},control:"boolean"},rows:{description:"number of rows to display",table:{defaultValue:{summary:"4"}},control:"number"},minlength:{description:"minimum length for the input",table:{defaultValue:{summary:"0"}},control:"number"},maxlength:{description:"maximum length for the input",table:{defaultValue:{summary:"524288"}},control:"number"},input:{description:"Triggered when the input value is modified",table:{category:"Events"},control:!1},focus:{description:"Focuses the text area",table:{category:"Methods"},control:!1}}},CodeAndAccessibility=(args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column>
        <ta-text-area
          id="${args.id}"
          .label="${args.label}"
          ?disabled="${args.disabled}"
          .description="${args.description}"
          .value="${args.value}"
          .placeholder="${args.placeholder}"
          .required="${args.required}"
          .minlength="${args.minlength}"
          .maxlength="${args.maxlength}"
          .rows="${args.rows}"
          @input="${e=>(event=>{const inputTarget=event.target,outputElement=document.getElementById("entered-text");outputElement&&(outputElement.innerHTML=inputTarget.value)})(e)}"></ta-text-area>
        <p>Entered text: <span id="entered-text"></span></p>
      </ta-grid-column>
      <ta-grid-column
        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
      >
      <ta-grid-column
        ><div class="story-description">${"ta-text-area is a customizable text area component designed for use in forms and user input fields. It supports dynamic customization of attributes such as label, placeholder, and validation properties (e.g., required, minlength, maxlength). The component allows users to control the number of visible lines with the rows property, making it adaptable for varying content lengths. Additionally, it includes support for descriptions, focus management, and input change handling, ensuring ease of use and flexibility for different types of text input requirements. Whether for comments, messages, or other multiline inputs, ta-text-area is a versatile solution for capturing user input in a structured way."}</div>
        <div class="story-description">
          <b>Note :</b>To group multiple input fields, fieldset should be used.
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
            target="_blank"
            >Read more about fieldset</a
          >
        </div></ta-grid-column
      >
    </ta-grid-container>
  `).bind({});CodeAndAccessibility.args={id:"test-input",label:"Label",disabled:!1,description:"Some description",value:"",placeholder:"Enter text",required:!1,minlength:0,maxlength:524288,rows:4};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const inputChangeHandler = (event: Event) => {\n    const inputTarget = event.target as HTMLInputElement;\n    const outputElement = document.getElementById(\'entered-text\');\n    if (outputElement) outputElement.innerHTML = inputTarget.value;\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column>\n        <ta-text-area\n          id="${args.id}"\n          .label="${args.label}"\n          ?disabled="${args.disabled}"\n          .description="${args.description}"\n          .value="${args.value}"\n          .placeholder="${args.placeholder}"\n          .required="${args.required}"\n          .minlength="${args.minlength}"\n          .maxlength="${args.maxlength}"\n          .rows="${args.rows}"\n          @input="${(e: Event) => inputChangeHandler(e)}"></ta-text-area>\n        <p>Entered text: <span id="entered-text"></span></p>\n      </ta-grid-column>\n      <ta-grid-column\n        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n      >\n      <ta-grid-column\n        ><div class="story-description">${description}</div>\n        <div class="story-description">\n          <b>Note :</b>To group multiple input fields, fieldset should be used.\n          <a\n            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"\n            target="_blank"\n            >Read more about fieldset</a\n          >\n        </div></ta-grid-column\n      >\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=formFields-textArea-stories.cdad406c.iframe.bundle.js.map