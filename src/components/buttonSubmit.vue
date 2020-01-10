<template>
    <section>
        <b-button @click="clickMe" class="is-info">Submit</b-button>
    </section>
</template>

<script>
    export default {
        name:'buttonSubmit',
        methods: {
            clickMe() {
                this.$buefy.notification.open('Form has been submited!!')
            }
        }
    }
</script>