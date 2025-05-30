"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[870],{"./src/overlay/Overlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/overlay/index.js"),_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/button/index.js"),_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/Overlay",component:_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of the overlay",table:{defaultValue:{summary:"false"}},control:!1},overlayContentAlign:{options:[_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.TopLeft,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.TopCenter,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.TopRight,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleLeft,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleCenter,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleRight,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.BottomLeft,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.BottomCenter,_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.BottomRight],description:"Alignment of the overlay content",table:{defaultValue:{summary:_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleCenter}},control:{type:"select"}},idToFocusOnClose:{description:"Accessibility - id of element to focus on close of overlay.",table:{defaultValue:{summary:""}},control:!1}}},CodeAndAccessibility=(args=>{const[isVisible,setIsVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleOverlayVisibility=()=>{setIsVisible(!isVisible)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.Tx,{importStatement:"import { Overlay } from '@stripezilla/react/overlay';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,{style:{gap:"10px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"activate-overlay",onClick:toggleOverlayVisibility,variant:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Secondary},"Show Overlay"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ,{id:"test-overlay",visible:isVisible,overlayContentAlign:args.overlayContentAlign,idToFocusOnClose:"activate-overlay"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"children-content-wrapper",style:{background:"white",padding:"16px",borderRadius:"8px",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.25)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Overlay Content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This is some content inside the overlay. Click the close button below to dismiss it."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"overlay-close",onClick:toggleOverlayVisibility,variant:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Secondary},"Close Overlay"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"overlay-dummy-button-1",onClick:()=>window.alert("Dummy button 1")},"Dummy button 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"overlay-dummy-button-2",onClick:()=>window.alert("Dummy button 2"),variant:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.Ak.Destruct},"Dummy button 2")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-title"},"       ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.ur,{description:"The Overlay component is the base for creating overlay-type components like modals. It provides focus management for accessibility. Before creating a new component with Overlay, please check the components list for any existing overlay components, such as modals, that may suit your needs."})))}).bind({});CodeAndAccessibility.args={id:"test-overlay",visible:!1,overlayContentAlign:_stripezilla_react_overlay__WEBPACK_IMPORTED_MODULE_1__.Lf.MiddleCenter,idToFocusOnClose:"activate-overlay"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const [isVisible, setIsVisible] = useState(false);\n  const toggleOverlayVisibility = () => {\n    setIsVisible(!isVisible);\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Overlay } from '@stripezilla/react/overlay';`} />\n      <GridColumn style={{\n      gap: '10px'\n    }}>\n        <Button id=\"activate-overlay\" onClick={toggleOverlayVisibility} variant={ButtonVariant.Secondary}>\n          Show Overlay\n        </Button>\n\n        <Overlay id=\"test-overlay\" visible={isVisible} overlayContentAlign={args.overlayContentAlign} idToFocusOnClose=\"activate-overlay\">\n          <div id=\"children-content-wrapper\" style={{\n          background: 'white',\n          padding: '16px',\n          borderRadius: '8px',\n          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)'\n        }}>\n            <h2>Overlay Content</h2>\n            <p>\n              This is some content inside the overlay. Click the close button below to dismiss it.\n            </p>\n            <Button id=\"overlay-close\" onClick={toggleOverlayVisibility} variant={ButtonVariant.Secondary}>\n              Close Overlay\n            </Button>\n            <Button id=\"overlay-dummy-button-1\" onClick={() => window.alert('Dummy button 1')}>\n              Dummy button 1\n            </Button>\n            <Button id=\"overlay-dummy-button-2\" onClick={() => window.alert('Dummy button 2')} variant={ButtonVariant.Destruct}>\n              Dummy button 2\n            </Button>\n          </div>\n        </Overlay>\n      </GridColumn>\n\n      <GridColumn>\n        <div className=\"story-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </GridColumn>\n\n      <GridColumn>\n        <DescriptionBlock description={description} />\n      </GridColumn>\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`}}]);
//# sourceMappingURL=overlay-Overlay-stories.eb81d514.iframe.bundle.js.map