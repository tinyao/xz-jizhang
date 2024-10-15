import comp from "/Users/zaozao/Workspace/codebase/xiaoz/xz-budget/docs/.vuepress/.temp/pages/tutorials/tutorial-v3.html.vue"
const data = JSON.parse("{\"path\":\"/tutorials/tutorial-v3.html\",\"title\":\"配置教程\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"tutorials/tutorial-v3.md\"}")
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
