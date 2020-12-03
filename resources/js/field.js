Nova.booting((Vue, router, store) => {
  Vue.component('index-NovaKatex', require('./components/IndexField'))
  Vue.component('detail-NovaKatex', require('./components/DetailField'))
  Vue.component('form-NovaKatex', require('./components/FormField'))
})
