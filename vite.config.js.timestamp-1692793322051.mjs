// vite.config.js
import { defineConfig } from "file:///C:/Users/anton/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/GO%20IT%20%D0%9A%D1%83%D1%80%D1%81%D1%8B/team-project-sunflowers/node_modules/vite/dist/node/index.js";
import glob from "file:///C:/Users/anton/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/GO%20IT%20%D0%9A%D1%83%D1%80%D1%81%D1%8B/team-project-sunflowers/node_modules/glob/glob.js";
import injectHTML from "file:///C:/Users/anton/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/GO%20IT%20%D0%9A%D1%83%D1%80%D1%81%D1%8B/team-project-sunflowers/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/Users/anton/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/GO%20IT%20%D0%9A%D1%83%D1%80%D1%81%D1%8B/team-project-sunflowers/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html")
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbnRvblxcXFxPbmVEcml2ZVxcXFxcdTA0MjBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDdcdTA0MzhcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDNFXHUwNDNCXFxcXEdPIElUIFx1MDQxQVx1MDQ0M1x1MDQ0MFx1MDQ0MVx1MDQ0QlxcXFx0ZWFtLXByb2plY3Qtc3VuZmxvd2Vyc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW50b25cXFxcT25lRHJpdmVcXFxcXHUwNDIwXHUwNDMwXHUwNDMxXHUwNDNFXHUwNDQ3XHUwNDM4XHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzRVx1MDQzQlxcXFxHTyBJVCBcdTA0MUFcdTA0NDNcdTA0NDBcdTA0NDFcdTA0NEJcXFxcdGVhbS1wcm9qZWN0LXN1bmZsb3dlcnNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FudG9uL09uZURyaXZlLyVEMCVBMCVEMCVCMCVEMCVCMSVEMCVCRSVEMSU4NyVEMCVCOCVEMCVCOSUyMCVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCQi9HTyUyMElUJTIwJUQwJTlBJUQxJTgzJUQxJTgwJUQxJTgxJUQxJThCL3RlYW0tcHJvamVjdC1zdW5mbG93ZXJzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcm9vdDogJ3NyYycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbaW5qZWN0SFRNTCgpLCBGdWxsUmVsb2FkKFsnLi9zcmMvKiovKiouaHRtbCddKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThlLFNBQVMsb0JBQW9CO0FBQzNnQixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFFdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxLQUFLLEtBQUssY0FBYztBQUFBLElBQ2pDO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMxRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
