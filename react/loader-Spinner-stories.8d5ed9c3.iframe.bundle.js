"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[146],{"./src/loader/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/grid/index.js"),_stripezilla_react_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/loader/index.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Loader/Spinner",component:_stripezilla_react_loader__WEBPACK_IMPORTED_MODULE_2__.y,parameters:{controls:{expanded:!0}},argTypes:{size:{description:"Size of the loader",table:{defaultValue:{summary:"40"}},control:"text"},color:{description:"border color of the loader",table:{defaultValue:{summary:"var(--colors-primary-base)"}},control:"text"}}},CodeAndAccessibility=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.Tx,{importStatement:"import { Spinner } from '@stripezilla/react/overlay';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,{style:{gap:"10px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_loader__WEBPACK_IMPORTED_MODULE_2__.y,{size:args.size,color:args.color})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-title"},"       ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.ur,{description:"A full page Loader component"})))).bind({});CodeAndAccessibility.args={size:"40",color:"var(--colors-primary-base)"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Spinner } from '@stripezilla/react/overlay';`} />\n      <GridColumn style={{\n      gap: '10px'\n    }}>\n        <Spinner size={args.size} color={args.color} />\n      </GridColumn>\n\n      <GridColumn>\n        <div className=\"story-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`},"../../packages/react/dist/loader/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>LoadingBar,y:()=>Spinner});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const rotate=styled_components_browser_esm.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Spinner=styled_components_browser_esm.Ay.div`
  width: ${({size:r})=>`${r}px`};
  height: ${({size:r})=>`${r}px`};
  border-radius: 50%;
  border: ${({color:r="var(--colors-primary-base)"})=>`4px solid ${r}`};
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`,LoadingBar=styled_components_browser_esm.Ay.div`
  @keyframes expanding {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes moving {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  height: 1.25rem;
  width: 80%;
  margin: 2rem 0;
  position: relative;
  transform-origin: left;
  animation:
    expanding 0.4s 0.7s forwards linear,
    moving 1s 1s infinite forwards linear;
  border-radius: 0.125rem;
  background-image: ${({theme:r})=>`linear-gradient(to right, ${r.colors.background.base} 30%, ${r.colors.primary.base} 60%,  ${r.colors.background.base})`};
  background-size: 200% auto;
  opacity: 0;
  animation-delay: 100ms;

  &:before {
    display: block;
    height: 1.25rem;
    content: '';
    width: 60%;
    position: relative;
    top: -2rem;
    transform-origin: left;
    animation:
      expanding 0.4s 0.7s forwards linear,
      moving 1s 1s infinite forwards linear;
    border-radius: 0.125rem;
    background-image: ${({theme:r})=>`linear-gradient(to right, ${r.colors.background.base} 30%, ${r.colors.primary.base} 60%,  ${r.colors.background.base})`};
    background-size: 200% auto;
    opacity: 0;
    animation-delay: 100ms;
  }

  &:after {
    display: block;
    height: 1.25rem;
    content: '';
    width: 80%;
    position: relative;
    top: 0.75rem;
    transform-origin: left;
    animation:
      expanding 0.4s 0.7s forwards linear,
      moving 1s 1s infinite forwards linear;
    border-radius: 0.125rem;
    background-image: ${({theme:r})=>`linear-gradient(to right, ${r.colors.background.base} 30%, ${r.colors.primary.base} 60%,  ${r.colors.background.base})`};
    background-size: 200% auto;
    opacity: 0;
    animation-delay: 100ms;
  }
`}}]);
//# sourceMappingURL=loader-Spinner-stories.8d5ed9c3.iframe.bundle.js.map