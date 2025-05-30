"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[68],{"./src/formFields/checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js"),_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/ta-checkbox",component:"ta-checkbox",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},label:{description:"Label for the checkbox",table:{defaultValue:{summary:""}},control:"text"},description:{description:"Additional description for the field",table:{defaultValue:{summary:""}},control:"text"},checked:{description:"Whether the checkbox is checked or not",table:{defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Enable or disable the checkbox",table:{defaultValue:{summary:"false"}},control:"boolean"},required:{description:"Mark checkbox as required",table:{defaultValue:{summary:"false"}},control:"boolean"},size:{options:[_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Default,_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Small],description:"Size of the checkbox",table:{defaultValue:{summary:_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Default}},control:{type:"select"}},change:{description:"Triggered when the checkbox value is changed",table:{category:"Events"},control:!1},focus:{description:"Focuses the checkbox",table:{category:"Methods"},control:!1}}},CodeAndAccessibility=(args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column>
        <ta-checkbox
          id="${args.id}"
          .label="${args.label}"
          .size="${args.size}"
          ?disabled="${args.disabled}"
          .description="${args.description}"
          .required="${args.required}"
          @change="${e=>(event=>{const checkboxTarget=event.target,outputElement=document.getElementById("checkbox-status");outputElement&&(outputElement.innerHTML=checkboxTarget.checked?"Checked":"Unchecked")})(e)}"></ta-checkbox>
        <p>Status: <span id="checkbox-status"></span></p>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-description">${"ta-checkbox is a custom checkbox input."}</div>
        <div class="story-description">
          <b>Note :</b>To group multiple input fields, fieldset should be used.
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
            target="_blank"
            >Read more about fieldset</a
          >
        </div>
      </ta-grid-column>
    </ta-grid-container>
  `).bind({});CodeAndAccessibility.args={id:"test-checkbox",label:"Accept Terms",size:_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_1__.S9.Default,disabled:!1,description:"Please check this box to agree to the terms and conditions.",checked:!1,required:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const checkboxChangeHandler = (event: Event) => {\n    const checkboxTarget = event.target as HTMLInputElement;\n    const outputElement = document.getElementById(\'checkbox-status\');\n    if (outputElement) outputElement.innerHTML = checkboxTarget.checked ? \'Checked\' : \'Unchecked\';\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column>\n        <ta-checkbox\n          id="${args.id}"\n          .label="${args.label}"\n          .size="${args.size}"\n          ?disabled="${args.disabled}"\n          .description="${args.description}"\n          .required="${args.required}"\n          @change="${(e: Event) => checkboxChangeHandler(e)}"></ta-checkbox>\n        <p>Status: <span id="checkbox-status"></span></p>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-description">${description}</div>\n        <div class="story-description">\n          <b>Note :</b>To group multiple input fields, fieldset should be used.\n          <a\n            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"\n            target="_blank"\n            >Read more about fieldset</a\n          >\n        </div>\n      </ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=formFields-checkbox-stories.b57e7877.iframe.bundle.js.map