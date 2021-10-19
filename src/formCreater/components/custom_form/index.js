/*
 * @Author: laibin.zheng
 * @Date: 2021-10-19 09:41:33
 * @LastEditTime: 2021-10-19 12:40:34
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \form-creater\src\formCreater\components\custom_form\index.js
 * 
 */
import render from './render'
import uploadCustom from './components/Uploads/upload'
import preview from './preview'

const customForm = {
  render,
  uploadCustom,
  preview
}

const install = function(Vue) {
  Vue.component(render.name, render)
  Vue.component(uploadCustom.name, uploadCustom)
  Vue.component(preview.name, preview)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(customForm, { install })
