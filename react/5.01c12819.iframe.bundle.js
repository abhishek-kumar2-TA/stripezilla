"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[5],{"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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

  ${({disabled=!1})=>disabled&&styled_components_browser_esm.AH`
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
`,TextArea=props=>{const{id,label,description,disabled=!1,rows=4,onChangeHandler,onChange,...rest}=props;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled,children:[label&&(0,jsx_runtime.jsx)("label",{htmlFor:`${id}-input`,children:label}),(0,jsx_runtime.jsx)(StyledTextArea,{id:`${id}-input`,disabled,rows,"aria-describedby":description?`${id}-description`:"",onChange:event=>{onChange?onChange(event):onChangeHandler?.(event.target.value)},...rest}),description&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${id}-description`,children:description})]})};var FieldSize;!function(FieldSize){FieldSize.Small="small",FieldSize.Default="default"}(FieldSize||(FieldSize={}));const StyledInput=styled_components_browser_esm.Ay.input`
  width: 100%;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  height: ${({size})=>size===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
`,TextInput=props=>{const{id,size=FieldSize.Default,type="text",label,description,disabled=!1,onChangeHandler,onChange,...rest}=props;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled,children:[label&&(0,jsx_runtime.jsx)("label",{htmlFor:`${id}-input`,children:label}),(0,jsx_runtime.jsx)(StyledInput,{id:`${id}-input`,disabled,size,type,"aria-describedby":description?`${id}-description`:"",onChange:event=>{onChange?onChange(event):onChangeHandler?.(event.target.value)},...rest}),description&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${id}-description`,children:description})]})};var react=__webpack_require__("../../node_modules/react/index.js");const StyledCheckboxContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,StyledCheckboxInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
`,StyledCheckbox=styled_components_browser_esm.Ay.div`
  width: ${({size})=>size===FieldSize.Default?"40px":"30px"};
  height: ${({size})=>size===FieldSize.Default?"40px":"30px"};
  border-radius: var(--global-componentRadius);
  border: 1px solid var(--colors-primary-base);
  background-color: var(--colors-background-base);
  transition: all 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({checked,size})=>checked&&styled_components_browser_esm.AH`
      background-color: var(--colors-primary-base);
      border-color: var(--colors-primary-base);

      svg {
        fill: var(--colors-background-base);
        width: ${size===FieldSize.Default?"30px":"24px"};
        height: ${size===FieldSize.Default?"30px":"24px"};
      }
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-active);
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Checkbox=props=>{const{id,size=FieldSize.Default,label,description,disabled=!1,checked=!1,onChange,onChangeHandler,...rest}=props,inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled,children:[(0,jsx_runtime.jsxs)(StyledCheckboxContainer,{children:[(0,jsx_runtime.jsxs)(StyledCheckbox,{id,size,checked,onClick:()=>{inputRef&&inputRef.current&&!disabled&&inputRef.current.click()},children:[(0,jsx_runtime.jsx)(StyledCheckboxInput,{id:`${id}-checkbox`,ref:inputRef,type:"checkbox",disabled,checked,"aria-describedby":description?`${id}-description`:"",onChange:event=>{onChange?onChange(event):onChangeHandler?.(event.target.checked)},...rest}),checked?(0,jsx_runtime.jsx)(icons.DoneIcon,{}):null]}),label&&(0,jsx_runtime.jsx)("label",{htmlFor:`${id}-checkbox`,children:label})]}),description&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${id}-description`,children:description})]})},StyledToggleContainer=styled_components_browser_esm.Ay.div`
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
  width: ${({size})=>size===FieldSize.Default?"50px":"40px"};
  height: ${({size})=>size===FieldSize.Default?"24px":"20px"};
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
    width: ${({size})=>size===FieldSize.Default?"18px":"14px"};
    height: ${({size})=>size===FieldSize.Default?"18px":"14px"};
    background-color: ${({theme,checked})=>checked?theme.colors.success.base:theme.colors.primary.hover};
    margin-left: 2px;
    border-radius: 50%;
    transition: all 0.25s;
  }

  ${({checked,size})=>checked&&styled_components_browser_esm.AH`
      border-color: var(--colors-primary-base);

      &::before {
        transform: ${size===FieldSize.Default?"translateX(24px)":"translateX(18px)"};
      }
    `}

  &:focus-within {
    outline: none;
    border: 2px solid var(--colors-primary-hover);
  }
`,Toggle=props=>{const{id,size=FieldSize.Default,label,description,disabled=!1,checked=!1,onChange,onChangeHandler,...rest}=props,inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled,children:[(0,jsx_runtime.jsxs)(StyledToggleContainer,{children:[(0,jsx_runtime.jsx)(StyledToggle,{id,size,checked,onClick:()=>{inputRef&&inputRef.current&&!disabled&&inputRef.current.click()},children:(0,jsx_runtime.jsx)(StyledToggleInput,{id:`${id}-checkbox`,ref:inputRef,type:"checkbox",disabled,checked,"aria-describedby":description?`${id}-description`:"",onChange:event=>{onChange?onChange(event):onChangeHandler?.(event.target.checked)},...rest})}),label&&(0,jsx_runtime.jsx)("label",{htmlFor:`${id}-checkbox`,children:label})]}),description&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${id}-description`,children:description})]})};var dist=__webpack_require__("../../node_modules/@radix-ui/react-select/dist/index.mjs");const SelectTrigger=(0,styled_components_browser_esm.Ay)(dist.l9)`
  width: 100%;
  font-size: 20px;
  padding: 0 4px;
  height: ${({size})=>size===FieldSize.Default?"40px":"30px"};
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
`,Select=props=>{const{id,label,description,size=FieldSize.Default,options,disabled=!1,onChangeHandler,onChange,placeholder="select",dir,...rest}=props;return(0,jsx_runtime.jsxs)(FieldWrapper,{disabled,children:[label&&(0,jsx_runtime.jsx)("label",{htmlFor:id,children:label}),(0,jsx_runtime.jsxs)(dist.bL,{onValueChange:value=>{onChange?onChange({target:{value}}):onChangeHandler?.(value)},disabled,...rest,children:[(0,jsx_runtime.jsxs)(SelectTrigger,{id,"aria-describedby":description?`${id}-description`:"",size,children:[(0,jsx_runtime.jsx)(dist.WT,{placeholder}),(0,jsx_runtime.jsx)(dist.In,{children:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})})]}),(0,jsx_runtime.jsx)(dist.ZL,{children:(0,jsx_runtime.jsxs)(SelectContent,{children:[(0,jsx_runtime.jsx)(dist.PP,{children:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.UpArrowIcon,{})})}),(0,jsx_runtime.jsx)(dist.LM,{children:options.map((option=>(0,jsx_runtime.jsxs)(SelectItem,{value:option.value,disabled:option.disabled,children:[(0,jsx_runtime.jsx)(dist.p4,{children:option.label}),(0,jsx_runtime.jsx)(dist.VF,{children:(0,jsx_runtime.jsx)(icons.DoneIcon,{width:"16px",height:"16px"})})]},option.value)))}),(0,jsx_runtime.jsx)(dist.wn,{children:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})})]})})]}),description&&(0,jsx_runtime.jsx)(FieldDescription,{id:`${id}-description`,children:description})]})}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=5.01c12819.iframe.bundle.js.map