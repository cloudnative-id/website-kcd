<template>
    <section>
        <b-button @click="sendNotification" class="is-info">Submit</b-button>
    </section>
</template>

<script>
    export default {
        name:'buttonSubmit',
        methods: {
            sendNotification() {
                this.$buefy.notification.open('Form has been submited!!')
            }
        }
    }
</script>