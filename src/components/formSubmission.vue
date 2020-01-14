<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <p>Get notified about the important conference updates!</p>
           <form @submit.prevent="validateBeforeSubmit">
                <b-field 
                    label="Name" 
                    :type="{'is-info':true,'is-danger': errors.has('name')}"
                    :message="errors.first('name')"
                >
                    <b-input 
                    v-model="name"
                    name="name"
                    placeholder="Name"
                    v-validate="'required'"></b-input>
                </b-field>
                <b-field label="Email"
                    type="is-info"
                    message="We'll never share your email with anyone else!">
                    <b-input type="email"
                        v-model="email"
                        maxlength="30"
                        name="email"
                        required
                        >
                    </b-input>
                </b-field>

                <b-field label="I'm Interested with">
                    <div class="block">
                        <b-checkbox type="is-info" v-model="interest"
                            native-value="volunteer">
                            Volunteering
                        </b-checkbox>
                        <b-checkbox type="is-info" v-model="interest"
                            native-value="speaker">
                            Speaking
                        </b-checkbox>
                        <b-checkbox type="is-info" v-model="interest"
                            native-value="sponsor">
                            Sponsoring
                        </b-checkbox>
                        <b-checkbox type="is-info" v-model="interest"
                            native-value="attend">
                            Attending
                        </b-checkbox>
                    </div>
                </b-field>
                <b-field>
                     <button type="submit" class="button is-info">Submit</button>
                </b-field>
                </form>            
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { db } from '../lib/firebase'

Vue.use(VeeValidate, {
   events: ''
})

export default {
    name:'formSubmission',
    data(){
        return {
            interest:[],
            email:'',
            name:''
        }
    },
    methods:{
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result && this.interest.length > 0) {
            const doc = {
                email:this.email,
                name:this.name,
                interest:this.interest               
            }
            db
            .collection('submission')
            .add(doc)
            .then(() => {
                this.$buefy.toast.open({
                    message: 'Form has been submited!!',
                    type: 'is-info',
                    position: 'is-bottom'
                })
                this.email = ''
                this.name = ''
                this.interest = []
            }).catch((err) => {
                this.$buefy.notification.open('Error, Try again later'+err)
            })
                        return;
                    }
                    this.$buefy.toast.open({
                        message: 'Form is not valid! Please check the fields.',
                        type: 'is-danger',
                        position: 'is-bottom'
                    })
                });
            }
    }
}
</script>