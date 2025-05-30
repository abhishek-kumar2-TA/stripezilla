"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[518],{"./src/theme/theme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SetTheme:()=>SetTheme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Set Theme"},SetTheme=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.E,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,{style:{fontSize:"16px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"In your entry index.ts/js file, include the following code"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__.bO,null,"// Import the ThemeWrapper"),"import { ThemeWrapper, UserCustomTheme } from '@stripezilla/react/theme';",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__.bO,null,"// Create required theme object of type ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",null,"UserCustomTheme"),", which is similar to"," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/?path=/docs/theme-default-theme-config--docs"},"Default theme config")," but all keys are optional. Example:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,"const theme: UserCustomTheme = {\n  colors: { primary: { base: 'red', hover: 'pink', active: 'green' } },\n};\n        "),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__.bO,null,"// Pass theme to ThemeWrapper"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,"return (\n  <ThemeWrapper theme={theme}>\n    <App />\n  </ThemeWrapper>\n);\n          ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))).bind({});SetTheme.args={};const __namedExportsOrder=["SetTheme"];SetTheme.parameters={...SetTheme.parameters,docs:{...SetTheme.parameters?.docs,source:{originalSource:"() => <GridContainer>\n    <GridColumn style={{\n    fontSize: '16px'\n  }}>\n      <p>In your entry index.ts/js file, include the following code</p>\n      <br />\n      <pre>\n        <CommentBlock>// Import the ThemeWrapper</CommentBlock>\n        {`import { ThemeWrapper, UserCustomTheme } from '@stripezilla/react/theme';`}\n        <br />\n        <br />\n        <CommentBlock>\n          // Create required theme object of type <i>UserCustomTheme</i>, which is similar to{' '}\n          <a href=\"/?path=/docs/theme-default-theme-config--docs\">Default theme config</a> but all\n          keys are optional. Example:\n        </CommentBlock>\n        <pre>{`const theme: UserCustomTheme = {\n  colors: { primary: { base: 'red', hover: 'pink', active: 'green' } },\n};\n        `}</pre>\n        <CommentBlock>// Pass theme to ThemeWrapper</CommentBlock>\n        <pre>{`return (\n  <ThemeWrapper theme={theme}>\n    <App />\n  </ThemeWrapper>\n);\n          `}</pre>\n      </pre>\n      <br />\n    </GridColumn>\n  </GridContainer>",...SetTheme.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--colors-primary-base);
  margin-bottom: 10px;
  width: 100%;
`,ImportBlock=({importStatement})=>react.createElement(grid.H,null,react.createElement(ImportBlockDiv,null,importStatement));ImportBlock.__docgenInfo={description:"",methods:[],displayName:"ImportBlock",props:{importStatement:{required:!0,tsType:{name:"ReactNode"},description:""}}};const DescriptionBeforeSpacer=(0,styled_components_browser_esm.Ay)(grid.H)`
  border-bottom: 1px solid var(--colors-primary-base);
  font-weight: bold;
`,DescriptionContent=(0,styled_components_browser_esm.Ay)(grid.H)`
  font-size: 14px;
`,DescriptionBlock=({description})=>react.createElement(grid.E,{showSideMargin:!1},react.createElement(grid.H,null,react.createElement(DescriptionBeforeSpacer,null,"       ")),react.createElement(DescriptionContent,null,description));DescriptionBlock.__docgenInfo={description:"",methods:[],displayName:"DescriptionBlock",props:{description:{required:!0,tsType:{name:"ReactNode"},description:""}}};const CommentContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  font-size: 12px;
  color: var(--colors-success-base);
  display: flex;
  flex-wrap: wrap;
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
  grid-column: ${props=>`span ${props.sm||props.theme.grid.small.columns}`};
  display: ${props=>0===props.sm?"none":"flex"};
  flex-direction: column;
  align-items: flex-start;

  ${({theme,md,lg})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${theme.breakpoints.medium}`}) {
      grid-column: ${props=>`span ${md||lg||props.theme.grid.medium.columns}`};
      display: ${0===md?"none":"flex"};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}`}) {
      grid-column: ${props=>`span ${lg||props.theme.grid.large.columns}`};
      display: ${0===lg?"none":"flex"};
    }
  `}
`,GridContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  width: 100%;
  grid-gap: ${({theme})=>theme.grid.small.gutter};
  grid-template-columns: repeat(${({theme})=>theme.grid.small.columns}, 1fr);
  grid-template-rows: initial;
  grid-auto-rows: initial;
  margin: 0;
  max-width: 100%;
  grid-column: span ${({theme})=>theme.grid.small.columns};

  ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
      max-width: calc(100% - ${({theme})=>theme.grid.small.margin} * 2);
      margin-left: ${({theme})=>theme.grid.small.margin} !important;
      margin-right: ${({theme})=>theme.grid.small.margin} !important;
    `}

  ${({restrictHeightToMaxContent})=>restrictHeightToMaxContent&&styled_components_browser_esm.AH`
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${({theme})=>theme.grid.medium.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme})=>theme.grid.medium.gutter};
    max-width: 100%;
    grid-column: span ${({theme})=>theme.grid.medium.columns};

    ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme})=>theme.grid.medium.margin} * 2);
        margin-left: ${({theme})=>theme.grid.medium.margin} !important;
        margin-right: ${({theme})=>theme.grid.medium.margin} !important;
      `}
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(${({theme})=>theme.grid.large.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme})=>theme.grid.large.gutter};
    grid-column: span ${({theme})=>theme.grid.large.columns};

    ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme})=>theme.grid.large.margin} * 2);
        margin-left: ${({theme})=>theme.grid.large.margin} !important;
        margin-right: ${({theme})=>theme.grid.large.margin} !important;
      `}
  }
`}}]);
//# sourceMappingURL=theme-theme-stories.93b7f440.iframe.bundle.js.map