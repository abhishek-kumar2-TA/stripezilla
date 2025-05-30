"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[518],{"./src/theme/theme.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../packages/ui/dist/index.js");var lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Set Theme",component:"theme",tags:["autodocs","!dev"]},CodeAndAccessibility=(()=>lit__WEBPACK_IMPORTED_MODULE_1__.qy`
  <ta-grid-container>
    <ta-grid-column style="font-size: 16px">
      <p>In your entry index.ts/js file, include the following code</p>
      <pre>
// Import the Lit components globally
import '@stripezilla/web-components';
  <br />
// Global CSS styles for all components
import '@stripezilla/web-components/theme/global-style.css';<br />
<br />
import {createTheme} from '@stripezilla/web-components/theme';
// Create the default theme
createTheme();
</pre>
      <br />
      <ul>
        <li>
          You can optionally pass the object of type <b>Default theme config</b> to createTheme() to
          override the default theme.
        </li>
        <li>
          You don't need to pass the whole theme obj. You can only pass the value you would like to
          modify for ex: <br />
          <pre>
    createTheme({
        colors: {
            textSecondary: {
                base: "orange"
            }
        }
    })
</pre
          >
        </li>
        <li>
          If you need to override global-style.css, you can create your own css file and include it
          below the import of global-style.css
        </li>
      </ul>
    </ta-grid-column>
  </ta-grid-container>
`).bind({});CodeAndAccessibility.args={};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"() => html`\n  <ta-grid-container>\n    <ta-grid-column style=\"font-size: 16px\">\n      <p>In your entry index.ts/js file, include the following code</p>\n      <pre>\n// Import the Lit components globally\nimport '@stripezilla/web-components';\n  <br />\n// Global CSS styles for all components\nimport '@stripezilla/web-components/theme/global-style.css';<br />\n<br />\nimport {createTheme} from '@stripezilla/web-components/theme';\n// Create the default theme\ncreateTheme();\n</pre>\n      <br />\n      <ul>\n        <li>\n          You can optionally pass the object of type <b>Default theme config</b> to createTheme() to\n          override the default theme.\n        </li>\n        <li>\n          You don't need to pass the whole theme obj. You can only pass the value you would like to\n          modify for ex: <br />\n          <pre>\n    createTheme({\n        colors: {\n            textSecondary: {\n                base: \"orange\"\n            }\n        }\n    })\n</pre\n          >\n        </li>\n        <li>\n          If you need to override global-style.css, you can create your own css file and include it\n          below the import of global-style.css\n        </li>\n      </ul>\n    </ta-grid-column>\n  </ta-grid-container>\n`",...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=theme-theme-stories.5b0e4d80.iframe.bundle.js.map