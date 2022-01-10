let PlanPickerItemComponent = {
    template: '#plan-template',
    props: {
        title: {
            type: String
        },
        selectedPlan: {
            type: String
        }
    },
    data() {
        return {
            // selected: false
        }
    },
    computed: {
        isSelected() {
            return this.title === this.selectedPlan
        }
    },
    methods: {
        select() {
            this.$emit('select', this.title)
            // this.selected = !this.selected
        }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-picker-item': PlanPickerItemComponent
    },
    data () {
        return {
            plans: ["Bloodborne No Hit", "Dark Souls No Hit", "Dark Souls II No Hit", "Dark Souls III No Hit"],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})