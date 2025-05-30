"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[635],{"./src/button/BaseButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/button/index.js"),_stripezilla_react_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/icons/index.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Button",component:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.$n,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},variant:{options:[_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary,_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Secondary,_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Destruct],description:"different styles of the button",table:{defaultValue:{summary:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary}},control:{type:"select"}},fill:{options:[_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.rl.Filled,_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.rl.Outline,_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.rl.None],description:"different background styles of the button",table:{defaultValue:{summary:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.rl.Filled}},control:{type:"select"}},size:{options:[_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default,_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Small],description:"size of the button",table:{defaultValue:{summary:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default}},control:{type:"select"}},iconOnly:{description:"determines if the button contains only icon. ariaLabel is mandatory if iconOnly is true.",table:{defaultValue:{summary:"false"}},control:"boolean"}}},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"The Button component is a versatile and customizable button designed to fit various UI needs within your design system. It currently supports multiple variants and sizes, offering flexibility in adapting to different contexts and user interactions. Future updates will include additional features, such as icon support and new button types, allowing for even greater customization and functionality.",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Note: This component inherits all the properties of a standard HTML button element. You can use attributes like onClick, disabled, type, etc., just as you would with a regular <button> tag in addition to below\n    props.")),CodeAndAccessibility=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.Tx,{importStatement:"import { Button } from '@stripezilla/react/button';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.$n,{...args,onClick:()=>window.alert("hi there!")},args.iconOnly?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_icons__WEBPACK_IMPORTED_MODULE_2__.SettingsIcon,null):"Settings"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.ur,{description}))).bind({});CodeAndAccessibility.args={id:"test-button",variant:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary,fill:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.rl.Filled,size:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default,iconOnly:!1,disabled:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"(args: ButtonProps) => {\n  return <>\n      <ImportBlock importStatement={`import { Button } from '@stripezilla/react/button';`} />\n      <Button {...args} onClick={() => window.alert('hi there!')}>\n        {args.iconOnly ? <SettingsIcon /> : 'Settings'}\n      </Button>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  width: ${({iconOnly:r=!1,size:o=ButtonSize.Default})=>r?o===ButtonSize.Default?"44px":"30px":"100%"};
  align-items: center;
  justify-content: center;
  height: ${({size:r=ButtonSize.Default})=>r===ButtonSize.Small?"30px":"44px"};
  font-size: 20px;
  font-family: ${({theme:r})=>r.global.specificFontFamily};
  padding: ${({iconOnly:r=!1})=>r?0:" 0 1.5rem"};
  border: none;
  border-radius: ${({theme:r})=>r.global.componentRadius};
  transition: all 0.5s;
  cursor: pointer;
  flex-shrink: 0;

  background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.base:o===ButtonVariant.Secondary?(0,utils.WI)("secondary"):r.colors.error.base};

  color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.textSecondary.base:o===ButtonVariant.Secondary?r.colors.textPrimary.base:r.colors.textSecondary.base};

  svg {
    fill: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.textSecondary.base:o===ButtonVariant.Secondary?r.colors.textPrimary.base:r.colors.textSecondary.base};
    transition: all 0.5s;
  }

  ${({theme:r,iconOnly:o=!1,size:a=ButtonSize.Default})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${r.breakpoints.medium}`}) {
      width: ${o?a===ButtonSize.Default?"44px":"30px":"max-content"};
      min-width: ${o?a===ButtonSize.Default?"44px":"30px":"120px"};
    }
  `}

  &:hover:not([disabled]) {
    background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.hover:o===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.active:o===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
  }

  ${({theme:r,fill:o=ButtonFillStyle.Filled,variant:a=ButtonVariant.Primary})=>o===ButtonFillStyle.None?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};

        svg {
          fill: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          }
        }

        &:active:not([disabled]),
        &:focus:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          }
        }
      `:o===ButtonFillStyle.Outline?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        border: 2px solid
          ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};

        svg {
          fill: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          border: 2px solid
            ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};

          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          }
        }

        &:focus:not([disabled]),
        &:active:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          border: 2px solid
            ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          }
        }
      `:void 0}

  &[disabled] {
    opacity: 0.7;
    cursor: inherit;
  }
`},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=button-BaseButton-stories.91fc2a14.iframe.bundle.js.map