"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[494],{"./src/button/example.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js"),_stripezilla_web_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/button/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Button/ta-button",component:"ta-button"},Example=(()=>(setTimeout((()=>{const buttonComponent=document.getElementById("test-button-1");buttonComponent&&buttonComponent.focus()}),4e3),lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ta-button
      id="test-button-1"
      .variant="${_stripezilla_web_components_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Secondary}"
      @click="${()=>alert("Button clicked!")}">
      Button</ta-button
    >
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column
        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
      >
      <ta-grid-column><div class="story-description">${"Sets focus on the button after 4 second"}</div></ta-grid-column>
    </ta-grid-container>
  `)).bind({});Example.args={};const __namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'() => {\n  setTimeout(() => {\n    const buttonComponent = document.getElementById(\'test-button-1\') as ButtonComponentWC;\n    if (buttonComponent) {\n      buttonComponent.focus();\n    }\n  }, 4000);\n  return html`\n    <ta-button\n      id="test-button-1"\n      .variant="${ButtonVariant.Secondary}"\n      @click="${() => alert(\'Button clicked!\')}">\n      Button</ta-button\n    >\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column\n        ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n      >\n      <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...Example.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=button-example-stories.316a3c21.iframe.bundle.js.map