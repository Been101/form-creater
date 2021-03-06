/*
 * @Author: laibin.zheng
 * @Date: 2021-10-19 09:41:33
 * @LastEditTime: 2021-10-19 12:35:00
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \form-creater\src\formCreater\components\custom_form\control\Radio.js
 * 
 */
export default (_self, h) => {
  return [
    h('el-radio-group', {
      props: {
        'value': _self.obj.value
      },
      on: {
        'change': function(value) {
          console.log(value);
        }
      }
    }, _self.obj.items.map(v => {
      return h('el-radio', {
        props: {
          label: v.label_value || '-1',
          value: v.label_value
        },
        on: {
          change: function(value) {
            console.log(value);
            if (!_self.obj.name) {
              return false
            }
            _self.obj = Object.assign(_self.obj, {
              value: v.label_value
            })
            _self.$emit('handleChangeVal', v.label_value)
          }
        }
      },
      v.label_name)
    }))
  ]
}

export const radioConf = {
  // 对应数据库内类型
  type: 'radio',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '单选框',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 绑定的值
  value: '',
  // 选项内数据
  items: [{ 'label_value': '1', 'label_name': '单选框1' }, { 'label_value': '2', 'label_name': '单选框2' }],
  // 表单name
  name: '',
  // 验证错误提示信息
  ruleError: '请选择',
  // 是否关联字段
  relation: false,
  // 关联字段name
  relation_name: '',
  // 关联字段value
  relation_value: '',
  // 是否被渲染
  visibility: true
}
