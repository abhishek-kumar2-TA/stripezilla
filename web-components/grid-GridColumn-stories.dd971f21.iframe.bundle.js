"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[386],{"./src/grid/GridColumn.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../packages/ui/dist/index.js");var lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Grid/ta-grid-column",component:"ta-grid-column",parameters:{controls:{expanded:!0}},argTypes:{sm:{control:"number",type:"number",description:"number of columns to use on small screen",table:{defaultValue:{summary:"6"}}},md:{control:"number",type:"number",description:"number of columns to use on medium screen",table:{defaultValue:{summary:"12"}}},lg:{control:"number",type:"number",description:"number of columns to use on large screen",table:{defaultValue:{summary:"12"}}}}},CodeAndAccessibility=(args=>lit__WEBPACK_IMPORTED_MODULE_1__.qy`
  <ta-grid-container style="background: violet;" .showSideMargin="${!1}">
    <ta-grid-column
      .sm="${args.sm}"
      .md="${args.md}"
      .lg="${args.lg}"
      style="background: yellowgreen;"
      >Column</ta-grid-column
    >
  </ta-grid-container>
  <ta-grid-container .showSideMargin="${!1}">
    <ta-grid-column
      ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column
    >
    <ta-grid-column><div class="story-description">${"The <ta-grid-column> web component is used to create child elements within a grid container, allowing for flexible column spans. You can specify the number of columns the element should occupy using the span attribute. This enables easy control over the width of child elements relative to the grid container. <ta-grid-column> is designed to be used inside a <ta-grid-container>, and its span value determines how much space it should occupy in the grid, ensuring a fluid and adaptive layout."}</div></ta-grid-column>
  </ta-grid-container>
`).bind({});CodeAndAccessibility.args={sm:6,md:12,lg:12};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => html`\n  <ta-grid-container style="background: violet;" .showSideMargin="${false}">\n    <ta-grid-column\n      .sm="${args.sm}"\n      .md="${args.md}"\n      .lg="${args.lg}"\n      style="background: yellowgreen;"\n      >Column</ta-grid-column\n    >\n  </ta-grid-container>\n  <ta-grid-container .showSideMargin="${false}">\n    <ta-grid-column\n      ><div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ta-grid-column\n    >\n    <ta-grid-column><div class="story-description">${description}</div></ta-grid-column>\n  </ta-grid-container>\n`',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=grid-GridColumn-stories.dd971f21.iframe.bundle.js.map