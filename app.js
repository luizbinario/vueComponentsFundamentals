Vue.component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: {
            type: String
        },
        header: {
            type: String
        }
    },
    data() {
        return {
            hide: false
        }
    },
    methods: {
        hideMessage() {
            this.hide = true
        }
    }
})

new Vue({
    el: '#app',
})