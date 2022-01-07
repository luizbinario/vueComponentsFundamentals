Vue.component('plan', {
    template: '#plans-template',
    props: {
        title: String,
    }
})

new Vue({
    el: '#app',
    data: {
        plans: ["Bloodborne No Hit", "Dark Souls No Hit", "Dark Souls II No Hit", "Dark Souls III No Hit"]
    }
})