const Vue = require('vue');
const vm = new Vue({
    el: '#app',
    data: {
        msg: '1111'
    },
    template: `
        <div @click="kkk">{{msg}}</div>
    `,
    methods: {
        kkk() {
            this.msg = '33'
        }
    }
})

console.log(Vue)