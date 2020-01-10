<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <p>Get notified about the important conference updates!</p>

                <b-field label="Name" type="is-info">
                    <b-input 
                    placeholder="Name"
                    ></b-input>
                </b-field>
                <b-field label="Email"
                    type="is-info"
                    message="We'll never share your email with anyone else!">
                    <b-input type="email"
                        maxlength="30">
                    </b-input>
                </b-field>

                <b-field label="I'm Interested with">
                    <div class="block">
                        <b-checkbox type="is-info" required v-model="checkboxGroup"
                            native-value="volunteer">
                            Volunteering
                        </b-checkbox>
                        <b-checkbox type="is-info" required v-model="checkboxGroup"
                            native-value="speaker">
                            Speaking
                        </b-checkbox>
                        <b-checkbox type="is-info" required v-model="checkboxGroup"
                            native-value="sponsor">
                            Sponsoring
                        </b-checkbox>
                        <b-checkbox type="is-info" required v-model="checkboxGroup"
                            native-value="attend">
                            Attending
                        </b-checkbox>
                    </div>
                </b-field>
                
                <div class="field is-grouped">
                <div class="control">
                    <buttonSubmit />
                </div>
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
import buttonSubmit from './buttonSubmit.vue';
export default {
    name:'formSubmission',
    data(){
        return {
            checkboxGroup:[],
            email:'',
            name:''
        }
    },
    components:{
        buttonSubmit
    }
}
</script>