import fmt from './fmt';

export default (Vue) => {
  Vue.filter('fmt', (vavlue, format) => {
    fmt(value).format(format)
  })
}