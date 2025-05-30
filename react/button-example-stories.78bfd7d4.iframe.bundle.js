"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[494],{"./src/button/example.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/button/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Button/Example",component:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.$n},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Sets focus on the button after 4 second"),Example=(()=>{const buttonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{buttonRef.current&&setTimeout((()=>{buttonRef.current?.focus()}),4e3)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.$n,{id:"test-button-1",ref:buttonRef,variant:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Secondary,onClick:()=>window.alert("hi there!")},"Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__.ur,{description}))}).bind({});Example.args={};const __namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => {\n  const buttonRef = useRef<HTMLButtonElement>(null);\n  useEffect(() => {\n    if (buttonRef.current) {\n      setTimeout(() => {\n        buttonRef.current?.focus();\n      }, 4000);\n    }\n  }, []);\n  return <>\n      <Button id=\"test-button-1\" ref={buttonRef} variant={ButtonVariant.Secondary} onClick={() => window.alert('hi there!')}>\n        Button\n      </Button>\n      <DescriptionBlock description={description} />\n    </>;\n}",...Example.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=button-example-stories.78bfd7d4.iframe.bundle.js.map