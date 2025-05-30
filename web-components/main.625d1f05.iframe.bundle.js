(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[792],{"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./101-GetStarted/GetStarted.mdx":["./src/101-GetStarted/GetStarted.mdx",681,935]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./button/BaseButton.stories":["./src/button/BaseButton.stories.ts",635],"./button/BaseButton.stories.ts":["./src/button/BaseButton.stories.ts",635],"./button/example.stories":["./src/button/example.stories.ts",494],"./button/example.stories.ts":["./src/button/example.stories.ts",494],"./formFields/checkbox.stories":["./src/formFields/checkbox.stories.ts",68],"./formFields/checkbox.stories.ts":["./src/formFields/checkbox.stories.ts",68],"./formFields/textArea.stories":["./src/formFields/textArea.stories.ts",177],"./formFields/textArea.stories.ts":["./src/formFields/textArea.stories.ts",177],"./formFields/textInput.stories":["./src/formFields/textInput.stories.ts",714],"./formFields/textInput.stories.ts":["./src/formFields/textInput.stories.ts",714],"./formFields/toggle.stories":["./src/formFields/toggle.stories.ts",823],"./formFields/toggle.stories.ts":["./src/formFields/toggle.stories.ts",823],"./grid/GridColumn.stories":["./src/grid/GridColumn.stories.ts",386],"./grid/GridColumn.stories.ts":["./src/grid/GridColumn.stories.ts",386],"./grid/GridContainer.stories":["./src/grid/GridContainer.stories.tsx",141],"./grid/GridContainer.stories.tsx":["./src/grid/GridContainer.stories.tsx",141],"./icons/icon.stories":["./src/icons/icon.stories.ts",867],"./icons/icon.stories.ts":["./src/icons/icon.stories.ts",867],"./link/Baselink.stories":["./src/link/Baselink.stories.ts",803],"./link/Baselink.stories.ts":["./src/link/Baselink.stories.ts",803],"./notification/alert.stories":["./src/notification/alert.stories.ts",923],"./notification/alert.stories.ts":["./src/notification/alert.stories.ts",923],"./notification/snackbar.stories":["./src/notification/snackbar.stories.ts",458],"./notification/snackbar.stories.ts":["./src/notification/snackbar.stories.ts",458],"./overlay/drawer.stories":["./src/overlay/drawer.stories.ts",413],"./overlay/drawer.stories.ts":["./src/overlay/drawer.stories.ts",413],"./overlay/drawerSlide.stories":["./src/overlay/drawerSlide.stories.ts",476],"./overlay/drawerSlide.stories.ts":["./src/overlay/drawerSlide.stories.ts",476],"./overlay/modal.stories":["./src/overlay/modal.stories.ts",893],"./overlay/modal.stories.ts":["./src/overlay/modal.stories.ts",893],"./overlay/overlay.stories":["./src/overlay/overlay.stories.ts",126],"./overlay/overlay.stories.ts":["./src/overlay/overlay.stories.ts",126],"./theme/DefaultThemeConfig.stories":["./src/theme/DefaultThemeConfig.stories.ts",283],"./theme/DefaultThemeConfig.stories.ts":["./src/theme/DefaultThemeConfig.stories.ts",283],"./theme/getCssColorVar.stories":["./src/theme/getCssColorVar.stories.ts",10],"./theme/getCssColorVar.stories.ts":["./src/theme/getCssColorVar.stories.ts",10],"./theme/theme.stories":["./src/theme/theme.stories.ts",518],"./theme/theme.stories.ts":["./src/theme/theme.stories.ts",518],"./zz-examples/Simpleform.stories":["./src/zz-examples/Simpleform.stories.ts",958],"./zz-examples/Simpleform.stories.ts":["./src/zz-examples/Simpleform.stories.ts",958]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../node_modules/@storybook/web-components/dist/entry-preview.mjs"),__webpack_require__("../../node_modules/@storybook/web-components/dist/entry-preview-docs.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-a11y/preview.js"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./.storybook/storyStyles.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".story-description {\n  font-size: 14px;\n}\n\n.story-title {\n  display: block;\n  border-bottom: 1px solid var(--colors-primary-base);\n  font-weight: bold;\n}\n","",{version:3,sources:["webpack://./.storybook/storyStyles.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,mDAAmD;EACnD,iBAAiB;AACnB",sourcesContent:[".story-description {\n  font-size: 14px;\n}\n\n.story-title {\n  display: block;\n  border-bottom: 1px solid var(--colors-primary-base);\n  font-weight: bold;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/ui/dist/theme/global-style.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--global-genericFontFamily);\n  font-size: var(--global-fontSize-smallScreen);\n  color: var(--colors-textPrimary-base);\n  background: var(--colors-background-base);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: var(--global-fontSize-mediumScreen);\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: var(--global-fontSize-largeScreen);\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--colors-secondary-base);\n  font-family: var(--global-specificFontFamily);\n}\n","",{version:3,sources:["webpack://./../../packages/ui/dist/theme/global-style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,4CAA4C;EAC5C,6CAA6C;EAC7C,qCAAqC;EACrC,yCAAyC;EACzC,mCAAmC;EACnC,kCAAkC;EAClC,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE;IACE,8CAA8C;EAChD;AACF;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;;AAEA;;;;;;EAME,mCAAmC;EACnC,6CAA6C;AAC/C",sourcesContent:["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--global-genericFontFamily);\n  font-size: var(--global-fontSize-smallScreen);\n  color: var(--colors-textPrimary-base);\n  background: var(--colors-background-base);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: var(--global-fontSize-mediumScreen);\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: var(--global-fontSize-largeScreen);\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--colors-secondary-base);\n  font-family: var(--global-specificFontFamily);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var lit=__webpack_require__("../../node_modules/lit/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global_style=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/ui/dist/theme/global-style.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(global_style.A,options);global_style.A&&global_style.A.locals&&global_style.A.locals;var theme=__webpack_require__("../../packages/ui/dist/theme/index.js"),storyStyles=(__webpack_require__("../../packages/ui/dist/index.js"),__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./.storybook/storyStyles.css")),storyStyles_options={};storyStyles_options.styleTagTransform=styleTagTransform_default(),storyStyles_options.setAttributes=setAttributesWithoutAttributes_default(),storyStyles_options.insert=insertBySelector_default().bind(null,"head"),storyStyles_options.domAPI=styleDomAPI_default(),storyStyles_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(storyStyles.A,storyStyles_options);storyStyles.A&&storyStyles.A.locals&&storyStyles.A.locals;(0,theme.an)();const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[story=>lit.qy`${story()}`]}},"../../packages/ui/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),theme=__webpack_require__("../../packages/ui/dist/theme/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 20px;
    font-family: var(--global-specificFontFamily);
    flex-shrink: 0;

    @media screen and (min-width: 601px) {
      width: inherit;
      min-width: 120px;
    }
  }

  .default {
    height: 44px;
  }
  .small {
    height: 30px;
  }

  .primary {
    background-color: ${(0,lit.iz)((0,theme.at)("primary"))};
    color: var(--colors-textSecondary-base);
  }

  .secondary {
    background-color: var(--colors-secondary-base);
    color: var(--colors-textPrimary-base);
  }

  .destruct {
    background-color: var(--colors-error-base);
    color: var(--colors-textSecondary-base);
  }

  .primary:not([disabled]):hover {
    background-color: var(--colors-primary-hover);
  }

  .secondary:not([disabled]):hover {
    background-color: var(--colors-secondary-hover);
  }

  .destruct:not([disabled]):hover {
    background-color: var(--colors-error-hover);
  }

  .primary:not([disabled]):active,
  .primary:not([disabled]):focus {
    background-color: var(--colors-primary-active);
  }

  .secondary:not([disabled]):active,
  .secondary:not([disabled]):focus {
    background-color: var(--colors-secondary-active);
  }

  .destruct:not([disabled]):active,
  .destruct:not([disabled]):focus {
    background-color: var(--colors-error-active);
  }

  .none,
  .outline {
    background: transparent;
    color: var(--ta-button-none-outline-base);
  }

  .none:not([disabled]):hover {
    background: rgba(255, 255, 255, 0.2);
    color: var(--ta-button-none-outline-hover);
  }

  .none:not([disabled]):active,
  .none:not([disabled]):focus {
    background: rgba(255, 255, 255, 0.3);
    color: var(--ta-button-none-outline-active);
  }

  .outline {
    border: 2px solid var(--ta-button-none-outline-base);
  }

  .outline:not([disabled]):hover {
    background-color: var(--colors-background-hover);
    color: var(--ta-button-none-outline-hover);
    border: 2px solid var(--ta-button-none-outline-hover);
  }

  .outline:not([disabled]):active,
  .outline:not([disabled]):focus {
    background-color: var(--colors-background-active);
    color: var(--ta-button-none-outline-active);
    border: 2px solid var(--ta-button-none-outline-active);
  }

  .icon-only {
    padding: 0;
    min-width: 44px;
    width: 44px;
    justify-content: center;
  }

  .icon-only.small {
    min-width: 30px;
    width: 30px;
  }

  .icon-only ::slotted(svg) {
    fill: var(--colors-textPrimary-base);
  }

  button:disabled {
    opacity: 0.7;
    cursor: inherit;
  }
`;var validateRequiredProperties=__webpack_require__("../../packages/ui/dist/utils/validateRequiredProperties.js"),throwUserError=__webpack_require__("../../packages/ui/dist/utils/throwUserError.js"),__decorate=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ButtonComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.type="button",this.fill=ButtonFillStyle.Filled,this.variant=ButtonVariant.Primary,this.size=ButtonSize.Default,this.disabled=!1,this.iconOnly=!1,this.ariaLabel="",this._buttonType="button"===this.type||"submit"===this.type||"reset"===this.type||"menu"===this.type?this.type:"button"}static#_=this.styles=style_css;_handleClick(t){if(this.disabled&&(t.preventDefault(),t.stopPropagation()),"submit"===this.type){const t=this.closest("form");t&&t.requestSubmit()}}updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id"]),this.fill===ButtonFillStyle.None||this.fill===ButtonFillStyle.Outline?this.variant===ButtonVariant.Primary?(this.style.setProperty("--ta-icon-inherit-fill",(0,theme.at)("primary")),this.style.setProperty("--ta-button-none-outline-base",(0,theme.at)("primary")),this.style.setProperty("--ta-button-none-outline-hover",(0,theme.at)("primary","hover")),this.style.setProperty("--ta-button-none-outline-active",(0,theme.at)("primary","active"))):this.variant===ButtonVariant.Secondary?(this.style.setProperty("--ta-icon-inherit-fill",(0,theme.at)("secondary")),this.style.setProperty("--ta-button-none-outline-base",(0,theme.at)("secondary")),this.style.setProperty("--ta-button-none-outline-hover",(0,theme.at)("secondary","hover")),this.style.setProperty("--ta-button-none-outline-active",(0,theme.at)("secondary","active"))):this.variant===ButtonVariant.Destruct&&(this.style.setProperty("--ta-icon-inherit-fill",(0,theme.at)("error")),this.style.setProperty("--ta-button-none-outline-base",(0,theme.at)("error")),this.style.setProperty("--ta-button-none-outline-hover",(0,theme.at)("error","hover")),this.style.setProperty("--ta-button-none-outline-active",(0,theme.at)("error","active"))):this.variant!==ButtonVariant.Primary&&this.variant!==ButtonVariant.Destruct||this.style.setProperty("--ta-icon-inherit-fill",(0,theme.at)("background")),this.iconOnly&&!this.ariaLabel&&(0,throwUserError.A)("ariaLabel is required when iconOnly is true")}focus(){const t=this.shadowRoot?.querySelector("button");t?.focus()}render(){return lit.qy`
      <button
        class="${this.variant} ${this.size} ${this.fill} ${this.iconOnly?"icon-only":""}"
        type="${this._buttonType}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
        aria-label="${this.ariaLabel}">
        <slot></slot>
      </button>
    `}};__decorate([(0,decorators.MZ)({type:String,reflect:!0}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"id",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"type",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"fill",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"variant",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],ButtonComponentWC.prototype,"iconOnly",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",String)],ButtonComponentWC.prototype,"ariaLabel",void 0),ButtonComponentWC=__decorate([(0,decorators.EM)("ta-button")],ButtonComponentWC)},"../../packages/ui/dist/icons/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnnouncementIconWC:()=>AnnouncementIconWC,ArrowLeftIconWC:()=>ArrowLeftIconWC,ArrowRightIconWC:()=>ArrowRightIconWC,BellIconWC:()=>BellIconWC,CloseIconWC:()=>CloseIconWC,DiscountIconWC:()=>DiscountIconWC,EditIconWC:()=>EditIconWC,EyeIconWC:()=>EyeIconWC,FaqIconWC:()=>FaqIconWC,FilterIconWC:()=>FilterIconWC,MessageIconWC:()=>MessageIconWC,PlusIconWC:()=>PlusIconWC,PricesIconWC:()=>PricesIconWC,ReloadIconWC:()=>ReloadIconWC,SearchIconWC:()=>SearchIconWC,SettingsIconWC:()=>SettingsIconWC});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),__decorate=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class BaseIcon extends lit.WF{constructor(){super(...arguments),this.fill="",this.width="24px",this.height="24px",this.isVisibleToScreenReader=!1}static#_=this.styles=lit.AH`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    :host {
      display: inline-block;
      width: var(--ta-icon-width);
      height: var(--ta-icon-height);
    }

    svg {
      width: 100%;
      height: 100%;
      fill: var(--ta-icon-user-fill, var(--ta-icon-inherit-fill, var(--colors-primary-base)));
    }
  `;updated(t){super.updated(t),this.style.setProperty("--ta-icon-width",this.width),this.style.setProperty("--ta-icon-height",this.height),this.fill&&this.style.setProperty("--ta-icon-user-fill",this.fill),this.isVisibleToScreenReader?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}render(){return lit.qy``}}__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],BaseIcon.prototype,"fill",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],BaseIcon.prototype,"width",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],BaseIcon.prototype,"height",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],BaseIcon.prototype,"isVisibleToScreenReader",void 0),customElements.define("ta-base-icon",BaseIcon);var ta_announcement_decorate=function(e,t,n,a){var o,r=arguments.length,c=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};let AnnouncementIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <g data-name="Group 6" transform="translate(-.065)">
          <circle cx="17.5" cy="17.5" r="17.5" data-name="Ellipse 15" transform="translate(.065)" />
          <path
            fill="#fff"
            d="M26.807 17.245a.51.51 0 0 1-.51.51H24.18a.51.51 0 0 1-.51-.51v-.015a.51.51 0 0 1 .51-.51h2.117a.513.513 0 0 1 .51.529Zm-1.1-3.061-2 .794a.53.53 0 0 0-.3.643.51.51 0 0 0 .68.321l2-.794a.53.53 0 0 0 .3-.643.51.51 0 0 0-.676-.321Zm-2 5.31 2 .794a.51.51 0 0 0 .68-.321.54.54 0 0 0-.3-.643l-2-.794a.51.51 0 0 0-.68.321.5.5 0 0 0 .301.643Zm-1.228-2.173a1.96 1.96 0 0 1-1.247 1.809v3.35a.6.6 0 0 1-.51.6.57.57 0 0 1-.643-.529 11.73 11.73 0 0 0-6.028-2.665v.548H12.86l.6 4.668-.227.057-.756.17-.227.057-1.487-4.947h-.321a1.307 1.307 0 0 1-1.3-1.3v-.491H8.76a.43.43 0 0 1-.435-.435v-1.629a.43.43 0 0 1 .435-.435h.4v-.586a1.307 1.307 0 0 1 1.3-1.3h3.61v.548a11.73 11.73 0 0 0 6.028-2.665.57.57 0 0 1 .643-.529.6.6 0 0 1 .51.6v3.326a1.855 1.855 0 0 1 1.228 1.778m-9.789-1.7h-2.173v3.439h2.173Z"
            data-name="Path 10278" />
        </g>
      </svg>
    `}};AnnouncementIconWC=ta_announcement_decorate([(0,decorators.EM)("ta-announcement-icon")],AnnouncementIconWC);var ta_arrow_left_decorate=function(e,t,o,r){var c,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(a=(n<3?c(a):n>3?c(t,o,a):c(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let ArrowLeftIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Icon ionic-ios-arrow-back"
        viewBox="0 0 25 25">
        <path
          d="m2.411 7.498 5.295-5.671a1.12 1.12 0 0 0 0-1.514.957.957 0 0 0-1.416 0l-6 6.426a1.126 1.126 0 0 0-.029 1.478l6.024 6.47a.96.96 0 0 0 1.416 0 1.12 1.12 0 0 0 0-1.514Z"
          data-name="Icon ionic-ios-arrow-back" />
      </svg>
    `}};ArrowLeftIconWC=ta_arrow_left_decorate([(0,decorators.EM)("ta-arrow-left-icon")],ArrowLeftIconWC);var ta_arrow_right_decorate=function(t,e,r,o){var c,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(a=(n<3?c(a):n>3?c(e,r,a):c(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let ArrowRightIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15">
        <path
          d="M5.021 6.284.265 1.531A.9.9 0 0 1 1.537.262l5.388 5.386a.9.9 0 0 1 .027 1.239L1.54 12.31a.9.9 0 0 1-1.272-1.269Z"
          data-name="arrow 2" />
      </svg>
    `}};ArrowRightIconWC=ta_arrow_right_decorate([(0,decorators.EM)("ta-arrow-right-icon")],ArrowRightIconWC);var ta_bell_decorate=function(e,t,o,c){var l,r=arguments.length,n=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,o):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,c);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let BellIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g clip-path="url(#a)">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    `}};BellIconWC=ta_bell_decorate([(0,decorators.EM)("ta-bell-icon")],BellIconWC);var ta_close_decorate=function(e,t,o,r){var c,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(n<3?c(s):n>3?c(t,o,s):c(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};let CloseIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M36.18 14.1705L34.0695 12.06L24.12 22.0095L14.1705 12.06L12.06 14.1705L22.0095 24.12L12.06 34.0695L14.1705 36.18L24.12 26.2305L34.0695 36.18L36.18 34.0695L26.2305 24.12L36.18 14.1705Z" />
      </svg>
    `}};CloseIconWC=ta_close_decorate([(0,decorators.EM)("ta-close-icon")],CloseIconWC);var ta_discount_decorate=function(t,e,a,o){var n,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,a,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(c=(r<3?n(c):r>3?n(e,a,c):n(e,a))||c);return r>3&&c&&Object.defineProperty(e,a,c),c};let DiscountIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <defs>
          <clipPath id="a">
            <path d="M.095 0h26v26h-26z" data-name="Rectangle 3679" />
          </clipPath>
        </defs>
        <g data-name="Group 5164">
          <g clip-path="url(#a)" data-name="Mask Group 487" transform="translate(-.095)">
            <g data-name="Discount Logo">
              <path
                d="m22.361 10.961-1.293-1.293V7.836a2.89 2.89 0 0 0-2.886-2.886H16.35l-1.293-1.293a2.88 2.88 0 0 0-4.079 0L9.685 4.95H7.853a2.89 2.89 0 0 0-2.886 2.886v1.832l-1.293 1.293a2.88 2.88 0 0 0 0 4.079l1.293 1.293v1.832a2.89 2.89 0 0 0 2.886 2.886h1.832l1.293 1.293a2.88 2.88 0 0 0 4.079 0l1.293-1.293h1.832a2.89 2.89 0 0 0 2.886-2.886v-1.832l1.293-1.293a2.88 2.88 0 0 0 0-4.079M10.707 9.167a1.524 1.524 0 1 1-1.523 1.523 1.524 1.524 0 0 1 1.523-1.523m-.381 7.339a.57.57 0 0 1-.408.169.56.56 0 0 1-.408-.169.574.574 0 0 1 0-.816l6.2-6.2a.577.577 0 0 1 .816.816Zm5 .327a1.524 1.524 0 1 1 1.524-1.524 1.524 1.524 0 0 1-1.524 1.524m-4.987-6.143a.369.369 0 1 1 .369.369.37.37 0 0 1-.369-.369m5.357 4.618a.369.369 0 1 1-.369-.369.37.37 0 0 1 .369.37Z"
                data-name="Path 11396" />
            </g>
          </g>
        </g>
      </svg>
    `}};DiscountIconWC=ta_discount_decorate([(0,decorators.EM)("ta-discount-icon")],DiscountIconWC);var ta_edit_decorate=function(t,e,o,r){var a,c=arguments.length,n=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(c<3?a(n):c>3?a(e,o,n):a(e,o))||n);return c>3&&n&&Object.defineProperty(e,o,n),n};let EditIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Group 3296" viewBox="0 0 16 16">
        <g>
          <path
            d="m10.812 1.003-.734-.734a.93.93 0 0 0-1.311 0l-.847.847L9.965 3.16l.847-.848a.93.93 0 0 0 0-1.31Z"
            data-name="Path 163" />
          <path
            d="M1.265 7.775a4.3 4.3 0 0 0-.913 1.546l-.316 1.093c-.141.49.144.775.634.634l1.093-.316a4.3 4.3 0 0 0 1.546-.912l6.029-6.029-2.045-2.044Z"
            data-name="Path 164" />
        </g>
      </svg>
    `}};EditIconWC=ta_edit_decorate([(0,decorators.EM)("ta-edit-icon")],EditIconWC);var ta_eye_decorate=function(e,t,o,a){var r,c=arguments.length,n=c<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(c<3?r(n):c>3?r(t,o,n):r(t,o))||n);return c>3&&n&&Object.defineProperty(t,o,n),n};let EyeIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13">
        <g data-name="Icon ionic-ios-eye">
          <path
            d="M9.093 0C5.826 0 3.25 2.056.169 5.417a.64.64 0 0 0 0 .866c2.637 2.914 4.962 5.421 8.928 5.421 3.917 0 6.855-3.157 8.944-5.445a.64.64 0 0 0 .02-.841C15.928 2.836 12.982 0 9.093 0m.179 9.5a3.657 3.657 0 1 1 3.482-3.475 3.66 3.66 0 0 1-3.482 3.48Z"
            data-name="Path 9331" />
          <path
            d="M9.1 3.942a1.9 1.9 0 0 1 .126-.687H9.1a2.6 2.6 0 1 0 2.6 2.6v-.158a1.8 1.8 0 0 1-.74.158A1.887 1.887 0 0 1 9.1 3.942"
            data-name="Path 9332" />
        </g>
      </svg>
    `}};EyeIconWC=ta_eye_decorate([(0,decorators.EM)("ta-eye-icon")],EyeIconWC);var ta_faq_decorate=function(e,t,a,o){var r,c=arguments.length,n=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(c<3?r(n):c>3?r(t,a,n):r(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n};let FaqIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <defs>
          <clipPath id="a">
            <path d="M-20257-12968h24v24h-24z" data-name="Rectangle 2535" />
          </clipPath>
        </defs>
        <g clip-path="url(#a)" data-name="FAQ Icon" transform="translate(20257 12968)">
          <path
            d="M-20245.185-12966.901a10.717 10.717 0 1 0 10.717 10.717 10.73 10.73 0 0 0-10.717-10.717m0 20.175a9.457 9.457 0 1 1 9.457-9.457 9.47 9.47 0 0 1-9.457 9.457m1.461-4.768a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3m1.264-10.092a3.04 3.04 0 0 1 .693 2.338 4.77 4.77 0 0 1-1.728 2.577 2.54 2.54 0 0 0-1.177 2.076h-1.26a3.75 3.75 0 0 1 1.594-3.014 3.6 3.6 0 0 0 1.345-1.927 1.87 1.87 0 0 0-.455-1.266 1.91 1.91 0 0 0-1.573-.739 2.1 2.1 0 0 0-2.362 2.03l-1.26-.035a3.364 3.364 0 0 1 3.624-3.255 3.2 3.2 0 0 1 2.559 1.215"
            data-name="Path 9651" />
        </g>
      </svg>
    `}};FaqIconWC=ta_faq_decorate([(0,decorators.EM)("ta-faq-icon")],FaqIconWC);var ta_filter_decorate=function(e,t,r,o){var c,l=arguments.length,i=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(i=(l<3?c(i):l>3?c(t,r,i):c(t,r))||i);return l>3&&i&&Object.defineProperty(t,r,i),i};let FilterIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g clip-path="url(#a)">
          <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    `}};FilterIconWC=ta_filter_decorate([(0,decorators.EM)("ta-filter-icon")],FilterIconWC);var ta_message_decorate=function(e,a,t,o){var r,c=arguments.length,n=c<3?a:null===o?o=Object.getOwnPropertyDescriptor(a,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,a,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(c<3?r(n):c>3?r(a,t,n):r(a,t))||n);return c>3&&n&&Object.defineProperty(a,t,n),n};let MessageIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <defs>
          <clipPath id="a">
            <path d="M0 0h30v30H0z" data-name="Rectangle 2927" />
          </clipPath>
          <clipPath id="b">
            <path d="M0 0h26.614v26.614H0z" data-name="Rectangle 2926" />
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <g clip-path="url(#b)" data-name="Mask Group 397" transform="translate(1.693 1.693)">
            <g data-name="Icon feather-mail">
              <path
                d="M4.187 4.3h18.24a2.944 2.944 0 0 1 3.07 2.79v12.434a2.944 2.944 0 0 1-3.07 2.79H4.187a2.944 2.944 0 0 1-3.07-2.79V7.09a2.944 2.944 0 0 1 3.07-2.79m18.24 16.578a1.43 1.43 0 0 0 1.49-1.354V7.09a1.43 1.43 0 0 0-1.49-1.354H4.187a1.43 1.43 0 0 0-1.49 1.354v12.434a1.43 1.43 0 0 0 1.49 1.354Z"
                data-name="Path 247" />
              <path
                d="M13.307 16.39a.8.8 0 0 1-.453-.146l-11.4-8.148a.82.82 0 0 1-.194-1.124.78.78 0 0 1 1.1-.2l10.947 7.827 10.947-7.825a.78.78 0 0 1 1.1.2.82.82 0 0 1-.194 1.124l-11.4 8.149a.8.8 0 0 1-.453.143"
                data-name="Path 248" />
            </g>
          </g>
        </g>
      </svg>
    `}};MessageIconWC=ta_message_decorate([(0,decorators.EM)("ta-message-icon")],MessageIconWC);var ta_prices_decorate=function(e,t,r,a){var o,c=arguments.length,n=c<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(c<3?o(n):c>3?o(t,r,n):o(t,r))||n);return c>3&&n&&Object.defineProperty(t,r,n),n};let PricesIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <defs>
          <clipPath id="a">
            <path stroke="#5b5b5b" d="M-.254-.355h26v26h-26z" data-name="Rectangle 3677" />
          </clipPath>
        </defs>
        <g clip-path="url(#a)" data-name="Prices logo" transform="translate(.254 .355)">
          <path
            d="m21.084 13.094-8.807-8.806a1.9 1.9 0 0 0-1.347-.629H5.541a1.8 1.8 0 0 0-1.8 1.8v5.389a1.7 1.7 0 0 0 .449 1.168l8.9 8.986a1.9 1.9 0 0 0 1.348.629 1.76 1.76 0 0 0 1.348-.629l5.122-5.122a1.62 1.62 0 0 0 .629-1.348 1.38 1.38 0 0 0-.453-1.438M8.234 9.949a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.8 1.8"
            data-name="Path 11394" />
        </g>
      </svg>
    `}};PricesIconWC=ta_prices_decorate([(0,decorators.EM)("ta-prices-icon")],PricesIconWC);var ta_reload_decorate=function(e,t,o,c){var r,l=arguments.length,a=l<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,o):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,c);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(l<3?r(a):l>3?r(t,o,a):r(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a};let ReloadIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g clip-path="url(#a)">
          <path
            d="m19 8-4 4h3c0 3.31-2.69 6-6 6a5.9 5.9 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    `}};ReloadIconWC=ta_reload_decorate([(0,decorators.EM)("ta-reload-icon")],ReloadIconWC);var ta_plus_decorate=function(e,t,o,r){var c,l=arguments.length,s=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(s=(l<3?c(s):l>3?c(t,o,s):c(t,o))||s);return l>3&&s&&Object.defineProperty(t,o,s),s};let PlusIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g clip-path="url(#a)">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    `}};PlusIconWC=ta_plus_decorate([(0,decorators.EM)("ta-plus-icon")],PlusIconWC);var ta_search_decorate=function(e,t,r,o){var c,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(n=(a<3?c(n):a>3?c(t,r,n):c(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let SearchIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.426 15.429">
        <path
          d="M12.281 11.53 8.825 8.042a4.925 4.925 0 1 0-.748.757l3.433 3.466a.53.53 0 0 0 .751.019.535.535 0 0 0 .02-.754M4.954 8.841A3.889 3.889 0 1 1 7.7 7.702a3.87 3.87 0 0 1-2.746 1.139"
          data-name="Search icon" />
      </svg>
    `}};SearchIconWC=ta_search_decorate([(0,decorators.EM)("ta-search-icon")],SearchIconWC);var ta_settings_decorate=function(t,e,l,a){var o,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,l,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(n=(r<3?o(n):r>3?o(e,l,n):o(e,l))||n);return r>3&&n&&Object.defineProperty(e,l,n),n};let SettingsIconWC=class extends BaseIcon{render(){return lit.qy`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path
          d="M53.359 33.122v-3.024l3.794-3.32a3.95 3.95 0 0 0 .751-5.04l-4.664-7.904a3.95 3.95 0 0 0-3.419-1.976 4 4 0 0 0-1.264.197l-4.803 1.62a22 22 0 0 0-2.589-1.482l-1.008-4.98a3.95 3.95 0 0 0-3.952-3.181h-9.249a3.95 3.95 0 0 0-3.952 3.181l-1.008 4.98q-1.354.655-2.609 1.483l-4.703-1.7a4 4 0 0 0-1.265-.119 3.95 3.95 0 0 0-3.42 1.977l-4.663 7.905a3.95 3.95 0 0 0 .81 4.96l3.735 3.42v3.023l-3.735 3.32a3.95 3.95 0 0 0-.81 5.04L10 49.405a3.95 3.95 0 0 0 3.419 1.977c.43.003.856-.064 1.265-.198l4.802-1.62q1.245.826 2.589 1.482l1.008 4.98a3.95 3.95 0 0 0 3.952 3.182h9.328a3.95 3.95 0 0 0 3.953-3.182l1.008-4.98a23 23 0 0 0 2.608-1.483l4.783 1.62c.408.135.835.202 1.264.199a3.95 3.95 0 0 0 3.42-1.977l4.505-7.905a3.95 3.95 0 0 0-.81-4.96zM49.82 47.43l-6.778-2.292a17.5 17.5 0 0 1-5.356 3.102l-1.403 7.095h-9.328l-1.403-7.016a18.5 18.5 0 0 1-5.336-3.102L13.42 47.43l-4.664-7.905 5.375-4.743a17.6 17.6 0 0 1 0-6.186l-5.375-4.881 4.664-7.905 6.778 2.292A17.5 17.5 0 0 1 25.553 15l1.403-7.095h9.328l1.403 7.016a18.5 18.5 0 0 1 5.336 3.102l6.798-2.213 4.664 7.905-5.375 4.743a17.6 17.6 0 0 1 0 6.186l5.375 4.881z" />
        <path
          d="M31.62 43.478A11.858 11.858 0 1 1 43.477 31.62 11.74 11.74 0 0 1 31.62 43.477m0-19.763a7.73 7.73 0 0 0-7.905 7.905 7.727 7.727 0 0 0 7.905 7.905 7.73 7.73 0 0 0 7.905-7.905 7.727 7.727 0 0 0-7.905-7.905" />
      </svg>
    `}};SettingsIconWC=ta_settings_decorate([(0,decorators.EM)("ta-settings-icon")],SettingsIconWC)},"../../packages/ui/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ak:()=>dist_button.Ak,S9:()=>FieldSize,t7:()=>NotificationVariant,Lf:()=>OverlayContentAlign});var dist_button=__webpack_require__("../../packages/ui/dist/button/index.js"),theme=__webpack_require__("../../packages/ui/dist/theme/index.js"),lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),__decorate=function(t,e,i,r){var s,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(l=(o<3?s(l):o>3?s(e,i,l):s(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let GridColumnWC=class extends lit.WF{constructor(){super(...arguments),this.sm=6,this.md=12,this.lg=12}static#_=this.styles=lit.AH`
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-column: span var(--grid-column-sm, 6);
      visibility: var(--visibility-sm, visible);
    }

    :host([sm='0']) {
      visibility: hidden;
    }

    :host([md]) {
      @media screen and (min-width: 768px) {
        grid-column: span var(--grid-column-md, var(--grid-medium-columns));
        visibility: var(--visibility-md, visible);
      }
    }

    :host([md='0']) {
      visibility: hidden;
    }

    :host([lg]) {
      @media screen and (min-width: 1200px) {
        grid-column: span var(--grid-column-lg, var(--grid-large-columns));
        visibility: var(--visibility-lg, visible);
      }
    }

    :host([lg='0']) {
      visibility: hidden;
    }
  `;updated(t){super.updated(t),this.sm?this.style.setProperty("--grid-column-sm",this.sm.toString()):this.style.setProperty("--grid-column-sm","6"),this.md?this.style.setProperty("--grid-column-md",this.md.toString()):this.style.setProperty("--grid-column-md","var(--grid-medium-columns, 12)"),this.lg?this.style.setProperty("--grid-column-lg",this.lg.toString()):this.style.setProperty("--grid-column-lg","var(--grid-large-columns, 12)")}render(){return lit.qy`<slot></slot>`}};__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumnWC.prototype,"sm",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumnWC.prototype,"md",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0}),__metadata("design:type",Object)],GridColumnWC.prototype,"lg",void 0),GridColumnWC=__decorate([(0,decorators.EM)("ta-grid-column")],GridColumnWC);var GridContainer_decorate=function(t,r,e,a){var i,n=arguments.length,o=n<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,r,e,a);else for(var m=t.length-1;m>=0;m--)(i=t[m])&&(o=(n<3?i(o):n>3?i(r,e,o):i(r,e))||o);return n>3&&o&&Object.defineProperty(r,e,o),o},GridContainer_metadata=function(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)};let GridContainerWC=class extends lit.WF{constructor(){super(...arguments),this.showSideMargin=!1,this.restrictHeightToMaxContent=!1}static#_=this.styles=lit.AH`
    :host {
      display: grid;
      width: 100%;
      grid-gap: var(--grid-small-gutter);
      grid-template-columns: repeat(var(--grid-small-columns), 1fr);
      grid-template-rows: var(--grid-template-rows);
      grid-auto-rows: var(--grid-auto-rows);
      margin: 0;
      max-width: 100%;
      grid-column: span var(--grid-small-columns);
    }

    :host([showSideMargin]) {
      max-width: calc(100% - var(--grid-small-margin) * 2);
      margin-left: var(--grid-small-margin) !important;
      margin-right: var(--grid-small-margin) !important;
    }

    :host([restrictHeightToMaxContent]) {
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    }

    @media screen and (min-width: 768px) {
      :host {
        grid-template-columns: repeat(var(--grid-medium-columns), 1fr);
        margin: 0;
        grid-gap: var(--grid-medium-gutter);
        max-width: 100%;
        grid-column: span var(--grid-medium-columns);
      }

      :host([showSideMargin]) {
        max-width: calc(100% - var(--grid-medium-margin) * 2);
        margin-left: var(--grid-medium-margin) !important;
        margin-right: var(--grid-medium-margin) !important;
      }
    }

    @media screen and (min-width: 1200px) {
      :host {
        grid-template-columns: repeat(var(--grid-large-columns), 1fr);
        margin: 0;
        grid-gap: var(--grid-large-gutter);
        grid-column: span var(--grid-large-columns);
      }

      :host([showSideMargin]) {
        max-width: calc(100% - var(--grid-large-margin) * 2);
        margin-left: var(--grid-large-margin) !important;
        margin-right: var(--grid-large-margin) !important;
      }
    }
  `;render(){return lit.qy`<slot></slot>`}};GridContainer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),GridContainer_metadata("design:type",Object)],GridContainerWC.prototype,"showSideMargin",void 0),GridContainer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),GridContainer_metadata("design:type",Object)],GridContainerWC.prototype,"restrictHeightToMaxContent",void 0),GridContainerWC=GridContainer_decorate([(0,decorators.EM)("ta-grid-container")],GridContainerWC);const style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  input {
    width: 100%;
    font-size: 20px;
    padding-left: 4px;
    padding-right: 4px;
    height: 40px;
    border-radius: var(--global-componentRadius);
    border: 1px solid var(--colors-primary-base);
  }

  .small {
    height: 30px;
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.6;
  }
`;var FieldSize,e;(e=FieldSize||(FieldSize={})).Small="small",e.Default="default";var validateRequiredProperties=__webpack_require__("../../packages/ui/dist/utils/validateRequiredProperties.js"),TextInput_decorate=function(t,e,i,o){var p,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(p=t[a])&&(n=(r<3?p(n):r>3?p(e,i,n):p(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},TextInput_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let TextInputComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.type="text",this.value="",this.size=FieldSize.Default,this.disabled=!1,this.placeholder="",this.required=!1,this._inputChangeHandler=t=>{if(this.disabled)t.preventDefault(),t.stopPropagation();else{const e=t.target;this.value=e.value}}}static#_=this.styles=style_css;updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id"])}focus(){const t=this.shadowRoot?.querySelector("input");t?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <label class="${this.label?"":"hide"}" for="${`${this.id}-input`}"
          >${this.label}</label
        >
        <input
          id="${`${this.id}-input`}"
          class="${this.size}"
          type="${this.type}"
          ?disabled="${this.disabled}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          .minlength="${void 0!==this.minlength?this.minlength:0}"
          .maxlength="${void 0!==this.maxlength?this.maxlength:524288}"
          .pattern="${this.pattern||""}"
          aria-describedby="${this.description?`${this.id}-description`:""}"
          @input="${this._inputChangeHandler}" />
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"label",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"description",void 0),TextInput_decorate([(0,decorators.MZ)({type:String,reflect:!0}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"id",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponentWC.prototype,"type",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"value",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponentWC.prototype,"size",void 0),TextInput_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"disabled",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"placeholder",void 0),TextInput_decorate([(0,decorators.MZ)({type:Boolean}),TextInput_metadata("design:type",Object)],TextInputComponentWC.prototype,"required",void 0),TextInput_decorate([(0,decorators.MZ)({type:Number}),TextInput_metadata("design:type",Number)],TextInputComponentWC.prototype,"minlength",void 0),TextInput_decorate([(0,decorators.MZ)({type:Number}),TextInput_metadata("design:type",Number)],TextInputComponentWC.prototype,"maxlength",void 0),TextInput_decorate([(0,decorators.MZ)({type:String}),TextInput_metadata("design:type",String)],TextInputComponentWC.prototype,"pattern",void 0),TextInputComponentWC=TextInput_decorate([(0,decorators.EM)("ta-input")],TextInputComponentWC);const FieldWrapper_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  .field-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
  }
`;var FieldWrapper_decorate=function(e,t,r,o){var l,n=arguments.length,p=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(p=(n<3?l(p):n>3?l(t,r,p):l(t,r))||p);return n>3&&p&&Object.defineProperty(t,r,p),p};let FieldWrapperComponentWC=class extends lit.WF{static#_=this.styles=FieldWrapper_style_css;render(){return lit.qy`
      <div class="field-wrapper">
        <slot></slot>
      </div>
    `}};FieldWrapperComponentWC=FieldWrapper_decorate([(0,decorators.EM)("ta-field-wrapper")],FieldWrapperComponentWC);const TextArea_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  textarea {
    width: 100%;
    font-size: 20px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: var(--global-componentRadius);
    border: 1px solid var(--colors-primary-base);
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.6;
  }
`;var TextArea_decorate=function(e,t,r,o){var a,i=arguments.length,p=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(p=(i<3?a(p):i>3?a(t,r,p):a(t,r))||p);return i>3&&p&&Object.defineProperty(t,r,p),p},TextArea_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let TextAreaComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.value="",this.placeholder="",this.required=!1,this.disabled=!1,this.rows=4,this._inputChangeHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const t=e.target;this.value=t.value}}}static#_=this.styles=TextArea_style_css;updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id"])}focus(){const e=this.shadowRoot?.querySelector("textarea");e?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <label class="${this.label?"":"hide"}" for="${`${this.id}-textarea`}">
          ${this.label}
        </label>
        <textarea
          id="${`${this.id}-textarea`}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          .minlength="${void 0!==this.minlength?this.minlength:0}"
          .maxlength="${void 0!==this.maxlength?this.maxlength:524288}"
          rows="${this.rows}"
          aria-describedby="${this.description?`${this.id}-description`:""}"
          @input="${this._inputChangeHandler}"></textarea>
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"label",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"description",void 0),TextArea_decorate([(0,decorators.MZ)({type:String,reflect:!0}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"id",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"value",void 0),TextArea_decorate([(0,decorators.MZ)({type:String}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"placeholder",void 0),TextArea_decorate([(0,decorators.MZ)({type:Boolean}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"required",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponentWC.prototype,"minlength",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponentWC.prototype,"maxlength",void 0),TextArea_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),TextArea_metadata("design:type",Object)],TextAreaComponentWC.prototype,"disabled",void 0),TextArea_decorate([(0,decorators.MZ)({type:Number}),TextArea_metadata("design:type",Number)],TextAreaComponentWC.prototype,"rows",void 0),TextAreaComponentWC=TextArea_decorate([(0,decorators.EM)("ta-text-area")],TextAreaComponentWC);const Checkbox_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: inline-block;
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .custom-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .checkbox {
    width: 40px;
    height: 40px;
    border-radius: var(--global-componentRadius);
    border: 1px solid var(--colors-primary-base);
    background-color: white;
    transition: all 0.25s;
    display: inline-block;
  }

  input[type='checkbox']:focus + .checkbox {
    border: 2px solid var(--colors-primary-active);
  }

  input[type='checkbox']:checked + .checkbox {
    background-color: var(--colors-primary-base);
    border-color: var(--colors-primary-base);
  }

  .checkbox-container:hover .checkbox {
    border: 2px solid var(--colors-primary-hover);
  }

  .checkbox.small {
    width: 30px;
    height: 30px;
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.6;
  }
`;var Checkbox_decorate=function(e,t,o,i){var c,s=arguments.length,d=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(c=e[r])&&(d=(s<3?c(d):s>3?c(t,o,d):c(t,o))||d);return s>3&&d&&Object.defineProperty(t,o,d),d},Checkbox_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let CheckboxComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.disabled=!1,this.checked=!1,this.required=!1,this.size=FieldSize.Default,this._checkboxChangeHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const t=e.target;this.checked=t.checked;const o=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(o)}},this._checkboxClickHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const e=this.shadowRoot?.querySelector("input");this.checked=!e.checked;const t=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(t)}}}static#_=this.styles=Checkbox_style_css;updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id"])}focus(){const e=this.shadowRoot?.querySelector("input");e?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <div class="checkbox-container">
          <div class="custom-checkbox">
            <input
              id="${`${this.id}-checkbox`}"
              class="checkbox-input"
              type="checkbox"
              ?disabled="${this.disabled}"
              .checked="${this.checked}"
              ?required="${this.required}"
              aria-describedby="${this.description?`${this.id}-description`:""}"
              @change="${this._checkboxChangeHandler}" />
            <div class="checkbox ${this.size}" @click="${this._checkboxClickHandler}"></div>
          </div>
          <label class="${this.label?"":"hide"}" for="${`${this.id}-checkbox`}">
            ${this.label}
          </label>
        </div>
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};Checkbox_decorate([(0,decorators.MZ)({type:String}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"label",void 0),Checkbox_decorate([(0,decorators.MZ)({type:String}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"description",void 0),Checkbox_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"id",void 0),Checkbox_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"disabled",void 0),Checkbox_decorate([(0,decorators.MZ)({type:Boolean}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"checked",void 0),Checkbox_decorate([(0,decorators.MZ)({type:Boolean}),Checkbox_metadata("design:type",Object)],CheckboxComponentWC.prototype,"required",void 0),Checkbox_decorate([(0,decorators.MZ)({type:String}),Checkbox_metadata("design:type",String)],CheckboxComponentWC.prototype,"size",void 0),CheckboxComponentWC=Checkbox_decorate([(0,decorators.EM)("ta-checkbox")],CheckboxComponentWC);const Toggle_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: inline-block;
    width: 100%;
  }

  .toggle-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .custom-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle {
    width: 50px;
    height: 24px;
    border-radius: 25px;
    border: 2px solid var(--colors-primary-base);
    transition: all 0.25s;
    display: inline-flex;
    align-items: center;
    padding-left: 2px;
  }

  .toggle::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: var(--colors-primary-hover);
    border-radius: 50%;
    transition: all 0.25s;
  }

  input[type='checkbox']:focus + .toggle {
    border: 2px solid var(--colors-primary-active);
  }

  input[type='checkbox']:checked + .toggle {
  }

  input[type='checkbox']:checked + .toggle:before {
    transform: translateX(24px);
    background-color: var(--colors-success-base);
  }

  .toggle-container:hover .toggle {
    border: 2px solid var(--colors-primary-hover);
  }

  .toggle.small {
    width: 40px;
    height: 20px;
  }

  .toggle.small::before {
    width: 14px;
    height: 14px;
  }

  input[type='checkbox']:checked + .toggle.small:before {
    transform: translateX(18px);
    background-color: var(--colors-success-base);
  }

  .description {
    font-size: 14px;
  }

  .hide {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.6;
  }
`;var Toggle_decorate=function(e,t,o,i){var s,d=arguments.length,r=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(d<3?s(r):d>3?s(t,o,r):s(t,o))||r);return d>3&&r&&Object.defineProperty(t,o,r),r},Toggle_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ToggleComponentWC=class extends lit.WF{constructor(){super(...arguments),this.label="",this.description="",this.id="",this.disabled=!1,this.checked=!1,this.required=!1,this.size=FieldSize.Default,this._toggleChangeHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const t=e.target;this.checked=t.checked;const o=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(o)}},this._toggleClickHandler=e=>{if(this.disabled)e.preventDefault(),e.stopPropagation();else{const e=this.shadowRoot?.querySelector("input");this.checked=!e.checked;const t=new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0});this.dispatchEvent(t)}}}static#_=this.styles=Toggle_style_css;updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id"])}focus(){const e=this.shadowRoot?.querySelector("input");e?.focus()}render(){return lit.qy`
      <ta-field-wrapper>
        <div class="toggle-container">
          <div class="custom-toggle">
            <input
              id="${`${this.id}-toggle`}"
              class="toggle-input"
              type="checkbox"
              ?disabled="${this.disabled}"
              .checked="${this.checked}"
              ?required="${this.required}"
              aria-describedby="${this.description?`${this.id}-description`:""}"
              @change="${this._toggleChangeHandler}" />
            <div class="toggle ${this.size}" @click="${this._toggleClickHandler}"></div>
          </div>
          <label class="${this.label?"":"hide"}" for="${`${this.id}-toggle`}">
            ${this.label}
          </label>
        </div>
        <div
          id="${`${this.id}-description`}"
          class="${this.description?"":"hide"} description">
          ${this.description}
        </div>
      </ta-field-wrapper>
    `}};Toggle_decorate([(0,decorators.MZ)({type:String}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"label",void 0),Toggle_decorate([(0,decorators.MZ)({type:String}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"description",void 0),Toggle_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"id",void 0),Toggle_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"disabled",void 0),Toggle_decorate([(0,decorators.MZ)({type:Boolean}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"checked",void 0),Toggle_decorate([(0,decorators.MZ)({type:Boolean}),Toggle_metadata("design:type",Object)],ToggleComponentWC.prototype,"required",void 0),Toggle_decorate([(0,decorators.MZ)({type:String}),Toggle_metadata("design:type",String)],ToggleComponentWC.prototype,"size",void 0),ToggleComponentWC=Toggle_decorate([(0,decorators.EM)("ta-toggle")],ToggleComponentWC);__webpack_require__("../../packages/ui/dist/link/index.js"),__webpack_require__("../../packages/ui/dist/icons/index.js");const Alert_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  .notification-container {
    display: flex;
    justify-content: center;
  }

  .notification-content {
    display: none;
  }

  .notification-header {
    display: flex;
    align-items: center;
  }

  .notification-title {
    font-family: var(--global-specificFontFamily);
    flex-grow: 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .notification-additional-content {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 40px;
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  .info {
    background-color: var(--colors-background-active);
    color: var(--colors-textPrimary-base);
    border: none;
    box-shadow: 0px 2px 8px 0px var(--colors-primary-base);
  }

  .error {
    background-color: var(--colors-error-base);
    color: var(--colors-background-base);
    border: 1px solid var(--colors-error-base);
    box-shadow: 0px 2px 8px 0px var(--colors-error-base);
  }

  .success {
    background-color: var(--colors-success-base);
    color: var(--colors-background-base);
    border: 1px solid var(--colors-success-base);
    box-shadow: 0px 2px 8px 0px var(--colors-success-base);
  }

  .warning {
    background-color: var(--colors-warning-base);
    color: var(--colors-textPrimary-base);
    border: 1px solid var(--colors-warning-base);
    box-shadow: 0px 2px 8px 0px var(--colors-warning-base);
  }

  .visible {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: var(--global-componentRadius);
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 60px;
    animation-name: notificationOnLoad;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  @keyframes notificationOnLoad {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;var NotificationVariant,i;(i=NotificationVariant||(NotificationVariant={})).Success="success",i.Error="error",i.Info="info",i.Warning="warning";var Alert_decorate=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n},Alert_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let AlertComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.visible=!1,this.title="",this.variant=NotificationVariant.Error}static#_=this.styles=Alert_style_css;updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id"])}_close(t){t.preventDefault();const e=new CustomEvent("onClose",{detail:{id:this.id},bubbles:!0,composed:!0});this.dispatchEvent(e),this.visible=!1}render(){return lit.qy`
      <div class="notification-container" role="status" aria-live="assertive">
        <div class="notification-content ${this.visible?"visible":""} ${this.variant}">
          <div class="notification-header">
            <div class="notification-title">${this.title}</div>
            <ta-button
              id="${`${this.id}-close-button`}"
              iconOnly
              fill="${this.variant===NotificationVariant.Error?dist_button.rl.Filled:dist_button.rl.None}"
              variant="${this.variant===NotificationVariant.Error?dist_button.Ak.Destruct:dist_button.Ak.Primary}"
              ariaLabel="Close"
              @click="${this._close}"
              ><ta-close-icon
                fill="${this.variant===NotificationVariant.Success?(0,theme.at)("background"):""}"></ta-close-icon
            ></ta-button>
          </div>
          <div class="notification-additional-content"><slot></slot></div>
        </div>
      </div>
    `}};Alert_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Alert_metadata("design:type",Object)],AlertComponentWC.prototype,"id",void 0),Alert_decorate([(0,decorators.MZ)({type:Boolean}),Alert_metadata("design:type",Object)],AlertComponentWC.prototype,"visible",void 0),Alert_decorate([(0,decorators.MZ)({type:String}),Alert_metadata("design:type",Object)],AlertComponentWC.prototype,"title",void 0),Alert_decorate([(0,decorators.MZ)({type:String}),Alert_metadata("design:type",String)],AlertComponentWC.prototype,"variant",void 0),AlertComponentWC=Alert_decorate([(0,decorators.EM)("ta-alert")],AlertComponentWC);const Snackbar_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    z-index: 1000;
  }

  .snackbar {
    display: none;
    width: 300px;
    border-radius: var(--global-componentRadius);
    padding: 8px;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    gap: 10px;
  }

  .snackbar-message {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .error {
    background-color: var(--colors-error-base);
    color: var(--colors-background-base);
  }

  .success {
    background-color: var(--colors-success-base);
    color: var(--colors-background-base);
  }

  .info {
    background-color: var(--colors-background-active);
    color: var(--colors-textPrimary-base);
  }

  .warning {
    background-color: var(--colors-warning-base);
    color: var(--colors-textPrimary-base);
  }

  .snackbar.show {
    display: flex;
    animation-name: notificationOnShow;
  }

  .snackbar.hide {
    display: flex;
    animation-name: notificationOnHide;
  }

  @keyframes notificationOnShow {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes notificationOnHide {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;var Snackbar_decorate=function(t,e,o,i){var a,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(s=(r<3?a(s):r>3?a(e,o,s):a(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},Snackbar_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let SnackbarComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.message="",this.visible=!1,this.duration=5e3,this.variant=NotificationVariant.Success,this._timeout=null}static#_=this.styles=Snackbar_style_css;updated(t){if(super.updated(t),(0,validateRequiredProperties.N)(this,["id"]),this.duration<0&&(this.duration=5e3),this.visible){const t=this.shadowRoot?.host;t&&(t.style.display="block")}this.visible&&this.duration&&this._setHideSnackbar()}_hideSnackbar(){this.visible=!1,setTimeout((()=>{const t=new CustomEvent("onClose",{detail:{id:this.id},bubbles:!0,composed:!0});this.dispatchEvent(t);const e=this.shadowRoot?.host;e&&(e.style.display="none")}),500)}_setHideSnackbar(){this._timeout=window.setTimeout((()=>{this._hideSnackbar()}),this.duration)}_close(){null!==this._timeout&&clearTimeout(this._timeout),this._hideSnackbar()}render(){return lit.qy`
      <div class="snackbar ${this.variant} ${this.visible?"show":"hide"}">
        <div class="snackbar-message">${this.message}</div>
        <ta-button
          id="${`${this.id}-close-button`}"
          fill="${dist_button.rl.None}"
          iconOnly
          size="${dist_button.Mp.Small}"
          ariaLabel="Close"
          @click="${this._close}"
          ><ta-close-icon
            fill="${this.variant===NotificationVariant.Error||this.variant===NotificationVariant.Success?(0,theme.at)("background"):(0,theme.at)("textPrimary")}"></ta-close-icon
        ></ta-button>
      </div>
    `}};Snackbar_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Snackbar_metadata("design:type",Object)],SnackbarComponentWC.prototype,"id",void 0),Snackbar_decorate([(0,decorators.MZ)({type:String}),Snackbar_metadata("design:type",String)],SnackbarComponentWC.prototype,"message",void 0),Snackbar_decorate([(0,decorators.MZ)({type:Boolean}),Snackbar_metadata("design:type",Boolean)],SnackbarComponentWC.prototype,"visible",void 0),Snackbar_decorate([(0,decorators.MZ)({type:Number}),Snackbar_metadata("design:type",Object)],SnackbarComponentWC.prototype,"duration",void 0),Snackbar_decorate([(0,decorators.MZ)({type:String}),Snackbar_metadata("design:type",String)],SnackbarComponentWC.prototype,"variant",void 0),SnackbarComponentWC=Snackbar_decorate([(0,decorators.EM)("ta-snackbar")],SnackbarComponentWC);const Base_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: none;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
  }

  :host([visible]) {
    display: flex;
    background: rgba(0, 0, 0, 0.5);
  }

  .focus-trap-dummy-button {
    position: absolute;
    left: -9999px;
  }
`;var OverlayContentAlign,t;(t=OverlayContentAlign||(OverlayContentAlign={})).TopLeft="top left",t.TopCenter="top center",t.TopRight="top right",t.MiddleLeft="middle left",t.MiddleCenter="middle center",t.MiddleRight="middle right",t.BottomLeft="bottom left",t.BottomCenter="bottom center",t.BottomRight="bottom right";var Base_decorate=function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},Base_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let OverlayComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.visible=!1,this.containerId="",this.overlayContentAlign=OverlayContentAlign.MiddleCenter,this._focusListener=void 0,this._focusTrapListener=void 0,this._isFirstUpdate=!0}static#_=this.styles=Base_style_css;updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id","containerId"]);const e=this.shadowRoot?.host,o=this.overlayContentAlign.split(" ");if(e.style.alignItems="middle"===o[0]?"center":"top"===o[0]?"flex-start":"flex-end",e.style.justifyContent="center"===o[1]?"center":"left"===o[1]?"flex-start":"flex-end",this.visible){this._isFirstUpdate=!1;const t=this._getTabbableElements(e);this._activeOverlay(t)}this.visible||this._isFirstUpdate||this._deactivateOverlay()}_isActionableElement(t){if(!t)return!1;if(t.tagName){const e=t.tagName.toLowerCase(),o="button"===e||"a"===e||"input"===e||"select"===e||"textarea"===e||t.hasAttribute("tabindex")&&"-1"!==t.getAttribute("tabindex"),s=!0===t.disabled;return o&&!s}return!1}_getTabbableElements(t){let e=[];return this._isActionableElement(t)?(e.push(t),e):(t.children.length&&Array.from(t.children).forEach((o=>{if(o.shadowRoot){const t=this._getTabbableElements(o.shadowRoot);e=e.concat(t)}else if(o.tagName&&"slot"===o.tagName.toLocaleLowerCase())t.querySelectorAll("slot").forEach((t=>{t.assignedElements({flatten:!0}).forEach((t=>{if(t.shadowRoot){const o=this._getTabbableElements(t.shadowRoot);e=e.concat(o)}else{const o=this._getTabbableElements(t);e=e.concat(o)}}))}));else if(o.tagName&&o.children&&o.children.length){const t=this._getTabbableElements(o);e=e.concat(t)}else this._isActionableElement(o)&&e.push(o)})),e)}_dispatchOnDeActiveFocus(){const t=new CustomEvent("onClose",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_activeOverlay(t){let e=this.shadowRoot?.host,o=null;const s=this.shadowRoot?.querySelector("#"+this.id+"-focus-trap");this.containerId&&(e=document.getElementById(this.containerId)),this._focusListener=()=>{e.contains(document.activeElement)?o=document.activeElement:o&&t[t.length-1].focus()},this._focusTrapListener=()=>{t[0].focus()},document.addEventListener("focus",this._focusListener,!0),s?.addEventListener("focus",this._focusTrapListener,!0),t[0].focus()}_deactivateOverlay(){const t=this.shadowRoot?.querySelector("#"+this.id+"-focus-trap");this._focusListener&&(document.removeEventListener("focus",this._focusListener,!0),this._focusListener=void 0),this._focusTrapListener&&(t?.removeEventListener("focus",this._focusTrapListener,!0),this._focusTrapListener=void 0),this._dispatchOnDeActiveFocus()}render(){return lit.qy`<slot></slot
      ><button
        id="${this.id}-focus-trap"
        class="focus-trap-dummy-button"
        tabindex="0"
        aria-hidden="true"></button>`}};Base_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Base_metadata("design:type",Object)],OverlayComponentWC.prototype,"id",void 0),Base_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),Base_metadata("design:type",Boolean)],OverlayComponentWC.prototype,"visible",void 0),Base_decorate([(0,decorators.MZ)({type:String}),Base_metadata("design:type",Object)],OverlayComponentWC.prototype,"containerId",void 0),Base_decorate([(0,decorators.MZ)({type:String}),Base_metadata("design:type",String)],OverlayComponentWC.prototype,"overlayContentAlign",void 0),OverlayComponentWC=Base_decorate([(0,decorators.EM)("ta-overlay")],OverlayComponentWC);const Modal_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .modal-container {
    background: var(--colors-background-hover);
    border-radius: var(--global-componentRadius);
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem 1rem;
    width: 90%;
    max-width: 550px;
  }

  .modal-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .modal-header h2 {
    flex-grow: 1;
    color: var(--colors-secondary-base);
  }

  @media (min-width: 768px) {
    .modal-container {
      width: 70%;
      max-width: 600px;
    }
  }

  @media (min-width: 1024px) {
    .modal-container {
      width: 50%;
      max-width: 800px;
    }
  }
`;var Modal_decorate=function(t,e,o,i){var a,l=arguments.length,r=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(l<3?a(r):l>3?a(e,o,r):a(e,o))||r);return l>3&&r&&Object.defineProperty(e,o,r),r},Modal_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ModalComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.title="",this.visible=!1,this._focusListener=void 0,this._isFirstUpdate=!0}static#_=this.styles=Modal_style_css;updated(t){super.updated(t),(0,validateRequiredProperties.N)(this,["id"])}_dispatchOnClose(t){t.stopPropagation();const e=new CustomEvent("onClose",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return lit.qy`<ta-overlay
      id="${`${this.id}-overlay-container`}"
      .visible="${this.visible}"
      .containerId="${this.id}"
      @onClose="${this._dispatchOnClose}">
      <div
        class="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${`${this.id}-modal-title`}">
        <div class="modal-header">
          <h2 id="${`${this.id}-modal-title`}">${this.title}</h2>
          <ta-button
            id="${`${this.id}-close-button`}"
            iconOnly
            fill="${dist_button.rl.None}"
            variant="${dist_button.Ak.Primary}"
            ariaLabel="Close"
            @click="${()=>this.visible=!1}"
            ><ta-close-icon></ta-close-icon
          ></ta-button>
        </div>
        <slot></slot>
      </div>
    </ta-overlay>`}};Modal_decorate([(0,decorators.MZ)({type:String,reflect:!0}),Modal_metadata("design:type",Object)],ModalComponentWC.prototype,"id",void 0),Modal_decorate([(0,decorators.MZ)({type:String}),Modal_metadata("design:type",Object)],ModalComponentWC.prototype,"title",void 0),Modal_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),Modal_metadata("design:type",Boolean)],ModalComponentWC.prototype,"visible",void 0),ModalComponentWC=Modal_decorate([(0,decorators.EM)("ta-modal")],ModalComponentWC);const Drawer_style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .drawer-container {
    position: fixed;
    top: 0;
    right: 0;
    padding: 0.6rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 400px; /* Adjust width as needed */
    height: 100%;
    background-color: white;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    animation: none;
  }

  .drawer-container.visible {
    animation: slideIn 0.4s ease-out forwards;
  }

  h2 {
    border: 1px solid var(--colors-textPrimary-hover);
    border-bottom: 2px solid var(--colors-warning-base);
    border-radius: 5px 5px 0 0;
    padding: 0 8px;
  }

  .drawer-body {
    flex-grow: 1;
    overflow-y: auto;
  }

  .drawer-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    border-top: 1px solid var(--colors-textPrimary-hover);
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    .modal-container {
      width: 70%;
      max-width: 600px;
    }
  }
`;var drawer_decorate=function(t,e,i,s){var o,a=arguments.length,l=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(l=(a<3?o(l):a>3?o(e,i,l):o(e,i))||l);return a>3&&l&&Object.defineProperty(e,i,l),l},drawer_metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let DrawerComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.visible=!1,this._activeSlide=0,this._isFirstUpdate=!0}static#_=this.styles=Drawer_style_css;get _slides(){return this._slotElement?.assignedElements({flatten:!0})||[]}updated(t){if(super.updated(t),(0,validateRequiredProperties.N)(this,["id"]),this._slides&&this._slides.length){const t=this._slides[this._slides.length>1?this._activeSlide:0],e=t?.getAttribute("title")||"",i=this.shadowRoot?.querySelector("h2");i&&(i.innerText=e),this._slides.length>1&&this._slides.forEach(((t,e)=>{e==this._activeSlide?(t.style.display="flex",t.style.flexDirection="column",t.style.gap="8px"):t.style.display="none"}))}this.visible&&this._isFirstUpdate&&(this._activeSlide=0,this._isFirstUpdate=!1),this.visible||(this._isFirstUpdate=!0)}goToStep(t){t>=0&&t<this._slides.length&&(this._activeSlide=t)}async _dispatchOnSubmit(t){t.stopPropagation();const e=new CustomEvent("onSubmit",{bubbles:!0,composed:!0}),i=this._slides[this._activeSlide];i?.validate?await i.validate()&&this.dispatchEvent(e):this.dispatchEvent(e)}_dispatchOnClose(t){t.stopPropagation();const e=new CustomEvent("onClose",{bubbles:!0,composed:!0});this.dispatchEvent(e)}async _nextStep(){if(this._activeSlide<this._slides.length-1){const t=this._slides[this._activeSlide];t?.validate?await t.validate()&&this._activeSlide++:this._activeSlide++}}_prevStep(){this._activeSlide>0&&this._activeSlide--}render(){const t=this._activeSlide==this._slides.length-1;return lit.qy`
      <ta-overlay
        id="${`${this.id}-overlay-container`}"
        .visible="${this.visible}"
        .containerId="${this.id}"
        @onClose="${this._dispatchOnClose}">
        <div
          class="drawer-container ${this.visible?"visible":""}"
          role="dialog"
          aria-labelledby="${`${this.id}-drawer-title`}">
          <ta-button
            style="align-self: end;"
            id="${`${this.id}-close-button`}"
            iconOnly
            fill="${dist_button.rl.None}"
            variant="${dist_button.Ak.Primary}"
            ariaLabel="Close"
            @click="${this._dispatchOnClose}">
            <ta-close-icon></ta-close-icon>
          </ta-button>
          <h2 id="${`${this.id}-drawer-title`}"></h2>
          <div class="drawer-body">
            <slot></slot>
          </div>

          <div class="drawer-footer">
            <ta-button
              id="${`${this.id}-next-or-button`}"
              variant="${dist_button.Ak.Secondary}"
              @click="${this._activeSlide===this.children.length-1?this._dispatchOnSubmit:this._nextStep}">
              ${t?lit.qy`Submit`:lit.qy`Next`}
            </ta-button>
            <ta-button
              id="${`${this.id}-previous-button`}"
              fill="${dist_button.rl.None}"
              @click="${this._prevStep}"
              style="${0===this._activeSlide?"display: none":""}">
              Previous
            </ta-button>
          </div>
        </div>
      </ta-overlay>
    `}};drawer_decorate([(0,decorators.MZ)({type:String,reflect:!0}),drawer_metadata("design:type",Object)],DrawerComponentWC.prototype,"id",void 0),drawer_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0}),drawer_metadata("design:type",Object)],DrawerComponentWC.prototype,"visible",void 0),drawer_decorate([(0,decorators.MZ)({type:Number}),drawer_metadata("design:type",Object)],DrawerComponentWC.prototype,"_activeSlide",void 0),drawer_decorate([(0,decorators.P)("slot"),drawer_metadata("design:type",HTMLSlotElement)],DrawerComponentWC.prototype,"_slotElement",void 0),DrawerComponentWC=drawer_decorate([(0,decorators.EM)("ta-drawer")],DrawerComponentWC);var slides_decorate=function(e,t,r,o){var i,a=arguments.length,d=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(d=(a<3?i(d):a>3?i(t,r,d):i(t,r))||d);return a>3&&d&&Object.defineProperty(t,r,d),d},slides_metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let DrawerSlideComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.title=""}updated(e){super.updated(e),(0,validateRequiredProperties.N)(this,["id","title"])}render(){return lit.qy`<slot></slot>`}};slides_decorate([(0,decorators.MZ)({type:String,reflect:!0}),slides_metadata("design:type",Object)],DrawerSlideComponentWC.prototype,"id",void 0),slides_decorate([(0,decorators.MZ)({type:String,reflect:!0}),slides_metadata("design:type",Object)],DrawerSlideComponentWC.prototype,"title",void 0),slides_decorate([(0,decorators.MZ)({type:Function}),slides_metadata("design:type",Function)],DrawerSlideComponentWC.prototype,"validate",void 0),DrawerSlideComponentWC=slides_decorate([(0,decorators.EM)("ta-drawer-slide")],DrawerSlideComponentWC)},"../../packages/ui/dist/link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sP:()=>LinkSize,W9:()=>LinkVariant});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js");const style_css=lit.AH`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 20px;
    font-family: var(--global-specificFontFamily);
    text-decoration: none;

    @media screen and (min-width: 601px) {
      width: inherit;
    }
  }

  .default {
    height: 44px;
  }

  .small {
    height: 30px;
  }

  .primary {
    color: var(--colors-primary-base);
  }

  .secondary {
    color: var(--colors-secondary-base);
  }

  .destruct {
    color: var(--colors-error-base);
  }

  .primary:not([disabled]):hover {
    color: var(--colors-primary-hover);
    text-decoration-color: var(--colors-primary-hover);
    text-decoration: underline;
  }

  .secondary:not([disabled]):hover {
    color: var(--colors-secondary-hover);
    text-decoration-color: var(--colors-secondary-hover);
    text-decoration: underline;
  }

  .destruct:not([disabled]):hover {
    color: var(--colors-error-hover);
    text-decoration-color: var(--colors-secondary-hover);
    text-decoration: underline;
  }

  .primary:not([disabled]):active,
  .primary:not([disabled]):focus {
    color: var(--colors-primary-active);
    text-decoration: underline;
  }

  .secondary:not([disabled]):active,
  .secondary:not([disabled]):focus {
    color: var(--colors-secondary-active);
    text-decoration: underline;
  }

  .destruct:not([disabled]):active,
  .destruct:not([disabled]):focus {
    color: var(--colors-error-active);
    text-decoration: underline;
  }

  button:disabled {
    opacity: 0.7;
    cursor: inherit;
  }
`;var LinkVariant,n,LinkSize,LinkStyle;(n=LinkVariant||(LinkVariant={})).Primary="primary",n.Secondary="secondary",n.Destruct="destruct",function(n){n.Small="small",n.Default="default"}(LinkSize||(LinkSize={})),function(n){n.Icon="icon",n.Default="default"}(LinkStyle||(LinkStyle={}));var __decorate=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let LinkComponentWC=class extends lit.WF{constructor(){super(...arguments),this.id="",this.variant=LinkVariant.Primary,this.size=LinkSize.Default,this.disabled=!1,this.href="#",this.openInNewTab=!1}static#_=this.styles=style_css;focus(){const t=this.shadowRoot?.querySelector("a");t?.focus()}render(){const t=this.openInNewTab?"_blank":"_self",e=this.openInNewTab?"noopener noreferrer":"";return lit.qy`
      <a
        id="${this.id}"
        href="${this.href}"
        class="${this.variant} ${this.size}"
        ?disabled="${this.disabled}"
        target="${t}"
        rel="${e}">
        <slot></slot>
      </a>
    `}};__decorate([(0,decorators.MZ)({type:String,reflect:!0}),__metadata("design:type",Object)],LinkComponentWC.prototype,"id",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponentWC.prototype,"variant",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponentWC.prototype,"size",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],LinkComponentWC.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:String}),__metadata("design:type",Object)],LinkComponentWC.prototype,"href",void 0),__decorate([(0,decorators.MZ)({type:Boolean}),__metadata("design:type",Object)],LinkComponentWC.prototype,"openInNewTab",void 0),LinkComponentWC=__decorate([(0,decorators.EM)("ta-link")],LinkComponentWC)},"../../packages/ui/dist/theme/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{an:()=>createTheme,at:()=>getCssColorVar});const baseTheme={global:{genericFontFamily:"sans-serif, Arial",specificFontFamily:"'Trebuchet MS', serif",componentRadius:"5px",fontSize:{smallScreen:"16px",mediumScreen:"20px",largeScreen:"20px"}},colors:{primary:{base:"#0A275C",hover:"#1E3C75",active:"#071D46"},secondary:{base:"#FF6B6B",hover:"#E85A5A",active:"#CC4A4A"},tertiary:{base:"#CEE6E1",hover:"#A4D1C0",active:"#8AB8A0"},background:{base:"#fff",hover:"#fafafa",active:"#f1f1f1"},secondaryBackground:{base:"#F4F4F4",hover:"#E5E5E5",active:"#D6D6D6"},textPrimary:{base:"#312E2D",hover:"#4A4746",active:"#1D1B1A"},textSecondary:{base:"#F4F4F4",hover:"#FFFFFF",active:"#E0E0E0"},error:{base:"#d32f2f",hover:"#c62828",active:"#b71c1c"},warning:{base:"#ffa000",hover:"#FFB84D",active:"#FF8C00"},success:{base:"#388e3c",hover:"#4CAF50",active:"#2C6B2A"},info:{base:"#1976d2",hover:"#1E88E5",active:"#1565C0"}},grid:{small:{margin:"16px",gutter:"16px",columns:6},medium:{margin:"24px",gutter:"20px",columns:12},large:{margin:"32px",gutter:"24px",columns:12}},breakpoints:{medium:"768px",large:"1200px"}},mergeTheme=(e,o)=>{const t={...e};for(const n in o)if(Object.prototype.hasOwnProperty.call(o,n)){const r=o[n],c=e[n];"object"==typeof r&&null!==r&&"object"==typeof c&&null!==c?t[n]=mergeTheme(c,r):void 0!==r&&(t[n]=r)}return t},createTheme=(e={})=>{const t=mergeTheme(baseTheme,e);if((o=t)&&"object"==typeof o.global&&"object"==typeof o.colors&&"object"==typeof o.grid&&"object"==typeof o.breakpoints){const e=(t,o="")=>{let m="";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const n=t[r];m+="object"==typeof n&&null!==n?e(n,`${o}-${r}`):`--${o}-${r}: ${n};\n`}return m};let o="";for(const m in t)Object.prototype.hasOwnProperty.call(t,m)&&(o+=e(t[m],m));const m=document.createElement("style");m.textContent=`:root { ${o} }`;const r=document.getElementById("theme-vars");r?r.replaceWith(m):(m.id="theme-vars",document.head.appendChild(m))}var o},getCssColorVar=(o,r="base")=>`var(--colors-${o}-${r})`},"../../packages/ui/dist/utils/throwUserError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>throwUserError});const throwUserError=r=>{if("undefined"==typeof jest)throw new Error(r);console.warn(r)}},"../../packages/ui/dist/utils/validateRequiredProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>validateRequiredProperties});var _throwUserError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui/dist/utils/throwUserError.js");const validateRequiredProperties=(r,o)=>{const t=[];for(const e of o)void 0!==r[e]&&null!==r[e]&&""!==r[e]||t.push(e);t.length>0&&(0,_throwUserError__WEBPACK_IMPORTED_MODULE_0__.A)(`Missing mandatory properties: ${t.join(", ")}`)}},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[49],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.625d1f05.iframe.bundle.js.map