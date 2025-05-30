"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[714],{"./src/formFields/textInput.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js"),_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/ta-input",component:"ta-input",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},label:{description:"Label for the input",table:{defaultValue:{summary:""}},control:"text"},description:{description:"Additional description for the field",table:{defaultValue:{summary:""}},control:"text"},value:{description:"value of the input field",table:{defaultValue:{summary:""}},control:"text"},placeholder:{description:"Placeholder text",table:{defaultValue:{summary:""}},control:"text"},type:{options:["text","password","email","number"],description:"type of the input",table:{defaultValue:{summary:"text"}},control:{type:"select"}},size:{options:[_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Default,_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Small],description:"size of the input",table:{defaultValue:{summary:_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Default}},control:{type:"select"}},disabled:{description:"enable or disable the input",table:{defaultValue:{summary:"false"}},control:"boolean"},required:{description:"mark input as required",table:{defaultValue:{summary:"false"}},control:"boolean"},minlength:{description:"minimum length for the input",table:{defaultValue:{summary:"0"}},control:"number"},maxlength:{description:"maximum length for the input",table:{defaultValue:{summary:"524288"}},control:"number"},pattern:{description:"input pattern",table:{defaultValue:{summary:""}},control:"text"},input:{description:"Triggered when the input value is modified",table:{category:"Events"},control:!1},focus:{description:"Focuses the text input",table:{category:"Methods"},control:!1}}},CodeAndAccessibility=(args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column>
        <ta-input
          id="${args.id}"
          .label="${args.label}"
          .size="${args.size}"
          ?disabled="${args.disabled}"
          .description="${args.description}"
          .type="${args.type}"
          .value="${args.value}"
          .placeholder="${args.placeholder}"
          .required="${args.required}"
          .minlength="${args.minlength}"
          .maxlength="${args.maxlength}"
          .pattern="${args.pattern}"
          @input="${e=>(event=>{const inputTarget=event.target,outputElement=document.getElementById("entered-text");outputElement&&(outputElement.innerHTML=inputTarget.value)})(e)}"></ta-input>
        <p>Entered text: <span id="entered-text"></span></p>
      </ta-grid-column>
      <ta-grid-column
        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
      >
      <ta-grid-column
        ><div class="story-description">${"ta-input is a customizable input field component. It supports various input types such as text, password, email, and number, and allows customization of attributes like label, placeholder, size, and validation properties (e.g., required, minlength, maxlength, pattern). The component also includes support for descriptions, focus management, and input change handling, making it a versatile solution for forms and user input fields."}</div>
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
  `).bind({});CodeAndAccessibility.args={id:"test-input",label:"Label",size:_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Default,disabled:!1,description:"Some description",type:"text",value:"",placeholder:"Enter text",required:!1,minlength:0,maxlength:524288,pattern:""};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const inputChangeHandler = (event: Event) => {\n    const inputTarget = event.target as HTMLInputElement;\n    const outputElement = document.getElementById(\'entered-text\');\n    if (outputElement) outputElement.innerHTML = inputTarget.value;\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column>\n        <ta-input\n          id="${args.id}"\n          .label="${args.label}"\n          .size="${args.size}"\n          ?disabled="${args.disabled}"\n          .description="${args.description}"\n          .type="${args.type}"\n          .value="${args.value}"\n          .placeholder="${args.placeholder}"\n          .required="${args.required}"\n          .minlength="${args.minlength}"\n          .maxlength="${args.maxlength}"\n          .pattern="${args.pattern}"\n          @input="${(e: Event) => inputChangeHandler(e)}"></ta-input>\n        <p>Entered text: <span id="entered-text"></span></p>\n      </ta-grid-column>\n      <ta-grid-column\n        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n      >\n      <ta-grid-column\n        ><div class="story-description">${description}</div>\n        <div class="story-description">\n          <b>Note :</b>To group multiple input fields, fieldset should be used.\n          <a\n            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"\n            target="_blank"\n            >Read more about fieldset</a\n          >\n        </div></ta-grid-column\n      >\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=formFields-textInput-stories.ddf0efb5.iframe.bundle.js.map