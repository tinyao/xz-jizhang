import comp from "/Users/zaozao/Workspace/codebase/xiaoz/xz-budget/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Numbers 记账模板\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"最新版 V3.0\",\"slug\":\"最新版-v3-0\",\"link\":\"#最新版-v3-0\",\"children\":[]},{\"level\":2,\"title\":\"历史版本\",\"slug\":\"历史版本\",\"link\":\"#历史版本\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
