Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data () {
        return {
            plans: ["Bloodborne No Hit", "Dark Souls No Hit", "Dark Souls II No Hit", "Dark Souls III No Hit"]
        }
    }
})

Vue.component('plan', {
    template: '#plans-template',
    props: {
        title: String,
    }
})

new Vue({
    el: '#app'
})