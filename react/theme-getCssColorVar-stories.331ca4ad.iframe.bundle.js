"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[10],{"./src/theme/getCssColorVar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/grid/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/getCssColorVar",tags:["autodocs","!dev"]},CodeAndAccessibility=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.E,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,{style:{fontSize:"16px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,"export type ColorGroup = | 'primary' | 'secondary' | 'tertiary' | 'background' | 'secondaryBackground' | 'textPrimary' | 'textSecondary' | 'error' | 'warning' | 'success' | 'info';"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,"export type ColorState = 'base' | 'hover' | 'active';"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,"getCssColorVar(group: ColorGroup, state: ColorState = 'base')")))).bind({});CodeAndAccessibility.args={};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"() => <GridContainer>\n    <GridColumn style={{\n    fontSize: '16px'\n  }}>\n      <pre>\n        export type ColorGroup = | 'primary' | 'secondary' | 'tertiary' | 'background' |\n        'secondaryBackground' | 'textPrimary' | 'textSecondary' | 'error' | 'warning' | 'success' |\n        'info';\n      </pre>\n      <br />\n      <pre>export type ColorState = 'base' | 'hover' | 'active';</pre>\n      <br />\n      <h2>Usage</h2>\n      <pre>getCssColorVar(group: ColorGroup, state: ColorState = 'base')</pre>\n    </GridColumn>\n  </GridContainer>",...CodeAndAccessibility.parameters?.docs?.source}}}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
  grid-column: ${e=>`span ${e.sm||e.theme.grid.small.columns}`};
  display: ${e=>0===e.sm?"none":"flex"};
  flex-direction: column;
  align-items: flex-start;

  ${({theme:e,md:n,lg:m})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${e.breakpoints.medium}`}) {
      grid-column: ${e=>`span ${n||m||e.theme.grid.medium.columns}`};
      display: ${0===n?"none":"flex"};
    }

    @media screen and (min-width: ${`${e.breakpoints.large}`}) {
      grid-column: ${e=>`span ${m||e.theme.grid.large.columns}`};
      display: ${0===m?"none":"flex"};
    }
  `}
`,GridContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  width: 100%;
  grid-gap: ${({theme:i})=>i.grid.small.gutter};
  grid-template-columns: repeat(${({theme:i})=>i.grid.small.columns}, 1fr);
  grid-template-rows: initial;
  grid-auto-rows: initial;
  margin: 0;
  max-width: 100%;
  grid-column: span ${({theme:i})=>i.grid.small.columns};

  ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
      max-width: calc(100% - ${({theme:i})=>i.grid.small.margin} * 2);
      margin-left: ${({theme:i})=>i.grid.small.margin} !important;
      margin-right: ${({theme:i})=>i.grid.small.margin} !important;
    `}

  ${({restrictHeightToMaxContent:i})=>i&&styled_components_browser_esm.AH`
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${({theme:i})=>i.grid.medium.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme:i})=>i.grid.medium.gutter};
    max-width: 100%;
    grid-column: span ${({theme:i})=>i.grid.medium.columns};

    ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme:i})=>i.grid.medium.margin} * 2);
        margin-left: ${({theme:i})=>i.grid.medium.margin} !important;
        margin-right: ${({theme:i})=>i.grid.medium.margin} !important;
      `}
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(${({theme:i})=>i.grid.large.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme:i})=>i.grid.large.gutter};
    grid-column: span ${({theme:i})=>i.grid.large.columns};

    ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme:i})=>i.grid.large.margin} * 2);
        margin-left: ${({theme:i})=>i.grid.large.margin} !important;
        margin-right: ${({theme:i})=>i.grid.large.margin} !important;
      `}
  }
`}}]);
//# sourceMappingURL=theme-getCssColorVar-stories.331ca4ad.iframe.bundle.js.map