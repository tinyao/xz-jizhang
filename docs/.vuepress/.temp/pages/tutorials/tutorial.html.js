import comp from "/Users/zaozao/Workspace/codebase/xiaoz/xz-budget/docs/.vuepress/.temp/pages/tutorials/tutorial.html.vue"
const data = JSON.parse("{\"path\":\"/tutorials/tutorial.html\",\"title\":\"配置教程\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"tutorials/tutorial.md\"}")
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
