//生成vue ts文件
let fs = require('fs');

let param = process.argv;
if (param.length <= 2) {
    console.log('\x1b[91m', '请输入模板名称');
    return;
}
let paramName = param.pop();
let templateName = paramName.concat('.vue');

createVue();
//创建文件
function createVue() {
    let templateContent = `
<template>
    <div>${templateName}</div>
</template>
<script lang='ts'>
import {
    Component,
    Prop,
    Vue,
    Watch,
    Emit,
    Model
} from 'vue-property-decorator';
@Component
export default class ${paramName} extends Vue {}
</script>

<style lang='scss'>
</style>
    `;
    fs.writeFile(templateName, templateContent, function (error) {
        if (error) {
            console.log('写入文件失败');
        }
        console.log(`${templateName}文件生成成功`);
    })
}