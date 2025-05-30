"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[859],{"./src/link/BaseLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BaseLink_stories});var LinkVariant,n,LinkSize,LinkStyle,react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");(n=LinkVariant||(LinkVariant={})).Primary="primary",n.Secondary="secondary",n.Destruct="destruct",function(n){n.Small="small",n.Default="default"}(LinkSize||(LinkSize={})),function(n){n.Icon="icon",n.Default="default"}(LinkStyle||(LinkStyle={}));const StyledLink=styled_components_browser_esm.Ay.a`
  display: inline-flex;
  text-decoration: none;
  min-width: ${r=>r.width??"max-content"};
  height: ${r=>r.height??"initial"};
  align-items: center;
  justify-content: center;
  font-size: ${({size:r})=>r===LinkSize.Default?"20px":"16px"};
  font-family: ${({theme:r})=>r.global.specificFontFamily};
  padding: ${({size:r})=>r===LinkSize.Default?"0.3rem 0.5rem":"0.2rem 0.5rem"};
  border: none;
  color: ${({theme:r,variant:e})=>e===LinkVariant.Primary?r.colors.primary.base:e===LinkVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
  transition: all 0.5s;
  cursor: pointer;
  align-items: center;
  gap: 6px;
  background: transparent;

  .design-system-link-inbuilt-right-arrow-icon {
    fill: ${({theme:r,variant:e})=>e===LinkVariant.Primary?r.colors.primary.base:e===LinkVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
    transition: all 0.5s;
    transform: translateX(0px);
  }

  &:hover:not([disabled]) {
    color: ${({theme:r,variant:e})=>e===LinkVariant.Primary?r.colors.primary.hover:e===LinkVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
    text-decoration: ${({linkStyle:r})=>r===LinkStyle.Default?"underline":"none"};

    .design-system-link-inbuilt-right-arrow-icon {
      transform: translateX(4px);
      fill: ${({theme:r,variant:e})=>e===LinkVariant.Primary?r.colors.primary.hover:e===LinkVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
    }
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    color: ${({theme:r,variant:e})=>e===LinkVariant.Primary?r.colors.primary.active:e===LinkVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
    text-decoration: ${({linkStyle:r})=>r===LinkStyle.Default?"underline":"none"};

    .design-system-link-inbuilt-right-arrow-icon {
      transform: translateX(4px);
      fill: ${({theme:r,variant:e})=>e===LinkVariant.Primary?r.colors.primary.active:e===LinkVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
    }
  }

  &[disabled] {
    opacity: 0.7;
    cursor: inherit;
    pointer-events: none;
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Link=i=>{const{children:t,size:e=LinkSize.Default,linkStyle:n=LinkStyle.Default,...s}=i;return(0,jsx_runtime.jsxs)(StyledLink,{size:e,linkStyle:n,...s,children:[t,n===LinkStyle.Icon&&(0,jsx_runtime.jsx)(icons.RightArrowIcon,{className:"design-system-link-inbuilt-right-arrow-icon",width:e===LinkSize.Default?"18":"14",height:e===LinkSize.Default?"18":"14"})]})};var utils=__webpack_require__("./src/utils/index.ts");const BaseLink_stories={title:"Link",component:Link,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},as:{description:"styled-component as props. This can be used to make it as button",table:{defaultValue:{summary:""}},control:!1},linkStyle:{options:[LinkStyle.Default,LinkStyle.Icon],description:"Different style for the link",table:{defaultValue:{summary:LinkStyle.Default}},control:{type:"select"}},variant:{options:[LinkVariant.Primary,LinkVariant.Secondary,LinkVariant.Destruct],description:"Different styles of the link",table:{defaultValue:{summary:LinkVariant.Primary}},control:{type:"select"}},size:{options:[LinkSize.Default,LinkSize.Small],description:"Size of the link",table:{defaultValue:{summary:LinkSize.Default}},control:{type:"select"}},disabled:{description:"Enable or disable the link",table:{defaultValue:{summary:"false"}},control:"boolean"},width:{description:"Custom width of the link",table:{defaultValue:{summary:"max-content"}},control:"text"},height:{description:"Custom height of the link",table:{defaultValue:{summary:"initial"}},control:"text"}}},description=react.createElement("div",null,react.createElement("b",null,"Note:")," Link is a customizable anchor tag component and"," ",react.createElement("b",null,"it inherits all the properties of a standard HTML a element"),". You can use attributes like disabled, href, style, etc., ","just as you would with a regular <a> tag"," in addition to below props."),CodeAndAccessibility=(args=>react.createElement(react.Fragment,null,react.createElement(utils.Tx,{importStatement:"import { Link } from '@stripezilla/react/link';"}),react.createElement(Link,args,"Link"),react.createElement(utils.ur,{description}))).bind({});CodeAndAccessibility.args={id:"test-link",variant:LinkVariant.Primary,size:LinkSize.Default,linkStyle:LinkStyle.Default,disabled:!1,href:"https://google.com",width:"max-content",height:"initial"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"(args: LinkProps) => {\n  return <>\n      <ImportBlock importStatement={`import { Link } from '@stripezilla/react/link';`} />\n      <Link {...args}>Link</Link>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=link-BaseLink-stories.70813578.iframe.bundle.js.map