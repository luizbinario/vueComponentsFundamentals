let PlanComponent = {
    template: '#plans-template',
    props: {
        title: String,
    }
}

let PlaPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan': PlanComponent
    },
    data () {
        return {
            plans: ["Bloodborne No Hit", "Dark Souls No Hit", "Dark Souls II No Hit", "Dark Souls III No Hit"]
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlaPickerComponent
    }
})