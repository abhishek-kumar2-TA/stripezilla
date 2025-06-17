"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[1005],{"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/formFields/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox,S9:()=>FieldSize,l6:()=>Select,fs:()=>TextArea,ks:()=>TextInput,lM:()=>Toggle});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  ${({disabled:e=!1})=>e&&styled_components_browser_esm.AH`
      opacity: 0.6;
    `}
`;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledTextArea=styled_components_browser_esm.Ay.textarea`
  width: 100%;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
`,FieldDescription=styled_components_browser_esm.Ay.div`
  font-size: 14px;
`,TextArea=e=>{const{id:r,label:i,description:s,disabled:d=!1,rows:t=4,onChangeHandler:a,onChange:l,...o}=e;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:d,children:[i&&(0,jsx_runtime.jsx)("label",{htmlFor:`${r}-input`,children:i}),(0,jsx_runtime.jsx)(StyledTextArea,{id:`${r}-input`,disabled:d,rows:t,"aria-describedby":s?`${r}-description`:"",onChange:e=>{l?l(e):a?.(e.target.value)},...o}),s&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${r}-description`,children:s})]})};var FieldSize,e;(e=FieldSize||(FieldSize={})).Small="small",e.Default="default";const StyledInput=styled_components_browser_esm.Ay.input`
  width: 100%;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  height: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
`,TextInput=e=>{const{id:i,size:t=FieldSize.Default,type:r="text",label:s,description:d,disabled:l=!1,onChangeHandler:p,onChange:n,...o}=e;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:l,children:[s&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-input`,children:s}),(0,jsx_runtime.jsx)(StyledInput,{id:`${i}-input`,disabled:l,size:t,type:r,"aria-describedby":d?`${i}-description`:"",onChange:e=>{n?n(e):p?.(e.target.value)},...o}),d&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:d})]})};var react=__webpack_require__("../../node_modules/react/index.js");const StyledCheckboxContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,StyledCheckboxInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
`,StyledCheckbox=styled_components_browser_esm.Ay.div`
  width: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  height: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
  background-color: var(--colors-background-base);
  transition: all 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({checked:e,size:o})=>e&&styled_components_browser_esm.AH`
      background-color: var(--colors-primary-base);
      border-color: var(--colors-primary-base);

      svg {
        fill: var(--colors-background-base);
        width: ${o===FieldSize.Default?"30px":"24px"};
        height: ${o===FieldSize.Default?"30px":"24px"};
      }
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-active);
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Checkbox=e=>{const{id:i,size:r=FieldSize.Default,label:c,description:o,disabled:d=!1,checked:t=!1,onChange:s,onChangeHandler:n,...l}=e,h=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:d,children:[(0,jsx_runtime.jsxs)(StyledCheckboxContainer,{children:[(0,jsx_runtime.jsxs)(StyledCheckbox,{id:i,size:r,checked:t,onClick:()=>{h&&h.current&&!d&&h.current.click()},children:[(0,jsx_runtime.jsx)(StyledCheckboxInput,{id:`${i}-checkbox`,ref:h,type:"checkbox",disabled:d,checked:t,"aria-describedby":o?`${i}-description`:"",onChange:e=>{s?s(e):n?.(e.target.checked)},...l}),t?(0,jsx_runtime.jsx)(icons.DoneIcon,{}):null]}),c&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-checkbox`,children:c})]}),o&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:o})]})},StyledToggleContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,StyledToggleInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
`,StyledToggle=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  width: ${({size:e})=>e===FieldSize.Default?"50px":"40px"};
  height: ${({size:e})=>e===FieldSize.Default?"24px":"20px"};
  border-radius: 25px;
  border: 2px solid var(--colors-primary-base);
  background-color: white;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--colors-primary-hover);
  }

  &::before {
    content: '';
    display: inline-block;
    width: ${({size:e})=>e===FieldSize.Default?"18px":"14px"};
    height: ${({size:e})=>e===FieldSize.Default?"18px":"14px"};
    background-color: ${({theme:e,checked:o})=>o?e.colors.success.base:e.colors.primary.hover};
    margin-left: 2px;
    border-radius: 50%;
    transition: all 0.25s;
  }

  ${({checked:e,size:o})=>e&&styled_components_browser_esm.AH`
      border-color: var(--colors-primary-base);

      &::before {
        transform: ${o===FieldSize.Default?"translateX(24px)":"translateX(18px)"};
      }
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-hover);
  }
`,Toggle=e=>{const{id:i,size:r=FieldSize.Default,label:l,description:d,disabled:t=!1,checked:o=!1,onChange:s,onChangeHandler:c,...n}=e,a=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:t,children:[(0,jsx_runtime.jsxs)(StyledToggleContainer,{children:[(0,jsx_runtime.jsx)(StyledToggle,{id:i,size:r,checked:o,onClick:()=>{a&&a.current&&!t&&a.current.click()},children:(0,jsx_runtime.jsx)(StyledToggleInput,{id:`${i}-checkbox`,ref:a,type:"checkbox",disabled:t,checked:o,"aria-describedby":d?`${i}-description`:"",onChange:e=>{s?s(e):c?.(e.target.checked)},...n})}),l&&(0,jsx_runtime.jsx)("label",{htmlFor:`${i}-checkbox`,children:l})]}),d&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${i}-description`,children:d})]})};var dist=__webpack_require__("../../node_modules/@radix-ui/react-select/dist/index.mjs");const SelectTrigger=(0,styled_components_browser_esm.Ay)(dist.l9)`
  width: 100%;
  font-size: 20px;
  padding: 0 4px;
  height: ${({size:e})=>e===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colors-background-base);
`,SelectContent=(0,styled_components_browser_esm.Ay)(dist.UC)`
  background-color: var(--colors-background-base);
  border-radius: var(--global-componentRadius);
  box-shadow: 0 2px 10px var(--colors-primary-hover);
  overflow: hidden;
`,SelectItem=(0,styled_components_browser_esm.Ay)(dist.q7)`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  padding: 8px 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: var(--colors-background-active);
  }
  &[data-disabled] {
    color: var(--colors-textPrimary-hover);
    pointer-events: none;
  }
`,SortIconContainer=styled_components_browser_esm.Ay.span`
  margin: 4px auto;
  width: 1rem;
  height: 1rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Select=e=>{const{id:r,label:i,description:l,size:o=FieldSize.Default,options:t,disabled:n=!1,onChangeHandler:c,onChange:d,placeholder:s="select",dir:a,...x}=e;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled:n,children:[i&&(0,jsx_runtime.jsx)("label",{htmlFor:r,children:i}),(0,jsx_runtime.jsxs)(dist.bL,{onValueChange:e=>{d?d({target:{value:e}}):c?.(e)},disabled:n,...x,children:[(0,jsx_runtime.jsxs)(SelectTrigger,{id:r,"aria-describedby":l?`${r}-description`:"",size:o,children:[(0,jsx_runtime.jsx)(dist.WT,{placeholder:s}),(0,jsx_runtime.jsx)(dist.In,{children:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})})]}),(0,jsx_runtime.jsx)(dist.ZL,{children:(0,jsx_runtime.jsxs)(SelectContent,{children:[(0,jsx_runtime.jsx)(dist.PP,{children:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.UpArrowIcon,{})})}),(0,jsx_runtime.jsx)(dist.LM,{children:t.map((e=>(0,jsx_runtime.jsxs)(SelectItem,{value:e.value,disabled:e.disabled,children:[(0,jsx_runtime.jsx)(dist.p4,{children:e.label}),(0,jsx_runtime.jsx)(dist.VF,{children:(0,jsx_runtime.jsx)(icons.DoneIcon,{width:"16px",height:"16px"})})]},e.value)))}),(0,jsx_runtime.jsx)(dist.wn,{children:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})})]})})]}),l&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${r}-description`,children:l})]})}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=1005.fc29cd1a.iframe.bundle.js.map