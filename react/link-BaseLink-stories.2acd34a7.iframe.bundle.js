"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[859],{"./src/link/BaseLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BaseLink_stories});var LinkVariant,LinkSize,LinkStyle,react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");!function(LinkVariant){LinkVariant.Primary="primary",LinkVariant.Secondary="secondary",LinkVariant.Destruct="destruct"}(LinkVariant||(LinkVariant={})),function(LinkSize){LinkSize.Small="small",LinkSize.Default="default"}(LinkSize||(LinkSize={})),function(LinkStyle){LinkStyle.Icon="icon",LinkStyle.Default="default"}(LinkStyle||(LinkStyle={}));const StyledLink=styled_components_browser_esm.Ay.a`
  display: inline-flex;
  text-decoration: none;
  min-width: ${props=>props.width??"max-content"};
  height: ${props=>props.height??"initial"};
  align-items: center;
  justify-content: center;
  font-size: ${({size})=>size===LinkSize.Default?"20px":"16px"};
  font-family: ${({theme})=>theme.global.specificFontFamily};
  padding: ${({size})=>size===LinkSize.Default?"0.3rem 0.5rem":"0.2rem 0.5rem"};
  border: none;
  color: ${({theme,variant})=>variant===LinkVariant.Primary?theme.colors.primary.base:variant===LinkVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};
  transition: all 0.5s;
  cursor: pointer;
  align-items: center;
  gap: 6px;
  background: transparent;

  .design-system-link-inbuilt-right-arrow-icon {
    fill: ${({theme,variant})=>variant===LinkVariant.Primary?theme.colors.primary.base:variant===LinkVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};
    transition: all 0.5s;
    transform: translateX(0px);
  }

  &:hover:not([disabled]) {
    color: ${({theme,variant})=>variant===LinkVariant.Primary?theme.colors.primary.hover:variant===LinkVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
    text-decoration: ${({linkStyle})=>linkStyle===LinkStyle.Default?"underline":"none"};

    .design-system-link-inbuilt-right-arrow-icon {
      transform: translateX(4px);
      fill: ${({theme,variant})=>variant===LinkVariant.Primary?theme.colors.primary.hover:variant===LinkVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
    }
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    color: ${({theme,variant})=>variant===LinkVariant.Primary?theme.colors.primary.active:variant===LinkVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
    text-decoration: ${({linkStyle})=>linkStyle===LinkStyle.Default?"underline":"none"};

    .design-system-link-inbuilt-right-arrow-icon {
      transform: translateX(4px);
      fill: ${({theme,variant})=>variant===LinkVariant.Primary?theme.colors.primary.active:variant===LinkVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
    }
  }

  &[disabled] {
    opacity: 0.7;
    cursor: inherit;
    pointer-events: none;
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Link=props=>{const{children,size=LinkSize.Default,linkStyle=LinkStyle.Default,...rest}=props;return(0,jsx_runtime.jsxs)(StyledLink,{size,linkStyle,...rest,children:[children,linkStyle===LinkStyle.Icon&&(0,jsx_runtime.jsx)(icons.RightArrowIcon,{className:"design-system-link-inbuilt-right-arrow-icon",width:size===LinkSize.Default?"18":"14",height:size===LinkSize.Default?"18":"14"})]})};var utils=__webpack_require__("./src/utils/index.ts");const BaseLink_stories={title:"Link",component:Link,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},as:{description:"styled-component as props. This can be used to make it as button",table:{defaultValue:{summary:""}},control:!1},linkStyle:{options:[LinkStyle.Default,LinkStyle.Icon],description:"Different style for the link",table:{defaultValue:{summary:LinkStyle.Default}},control:{type:"select"}},variant:{options:[LinkVariant.Primary,LinkVariant.Secondary,LinkVariant.Destruct],description:"Different styles of the link",table:{defaultValue:{summary:LinkVariant.Primary}},control:{type:"select"}},size:{options:[LinkSize.Default,LinkSize.Small],description:"Size of the link",table:{defaultValue:{summary:LinkSize.Default}},control:{type:"select"}},disabled:{description:"Enable or disable the link",table:{defaultValue:{summary:"false"}},control:"boolean"},width:{description:"Custom width of the link",table:{defaultValue:{summary:"max-content"}},control:"text"},height:{description:"Custom height of the link",table:{defaultValue:{summary:"initial"}},control:"text"}}},description=react.createElement("div",null,react.createElement("b",null,"Note:")," Link is a customizable anchor tag component and"," ",react.createElement("b",null,"it inherits all the properties of a standard HTML a element"),". You can use attributes like disabled, href, style, etc., ","just as you would with a regular <a> tag"," in addition to below props."),CodeAndAccessibility=(args=>react.createElement(react.Fragment,null,react.createElement(utils.Tx,{importStatement:"import { Link } from '@stripezilla/react/link';"}),react.createElement(Link,args,"Link"),react.createElement(utils.ur,{description}))).bind({});CodeAndAccessibility.args={id:"test-link",variant:LinkVariant.Primary,size:LinkSize.Default,linkStyle:LinkStyle.Default,disabled:!1,href:"https://google.com",width:"max-content",height:"initial"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"(args: LinkProps) => {\n  return <>\n      <ImportBlock importStatement={`import { Link } from '@stripezilla/react/link';`} />\n      <Link {...args}>Link</Link>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=link-BaseLink-stories.2acd34a7.iframe.bundle.js.map