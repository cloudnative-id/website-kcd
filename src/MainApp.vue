<template>
  <div id="main">
    <div class="container-fluid">
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
              <div class="columns is-desktop is-mobile">
                <div class="column is-three-fifths is-offset-one-fifth">
                  <figure class="image">
                    <img
                    style="width:100%"
                    alt="KubernetesCommunityDays2020 Logo" 
                    src="./assets/img/kcd-logo.svg">
                  </figure>   
                  <h1 class="title is-1-desktop is-1-fullhd is-2-mobile has-text-centered">
                  The first Kubernetes Community days in southeast asia.
                  </h1>
                  <h1 class="title is-2-desktop is-2-fullhd is-3-mobile has-text-centered">
                    October 10th, 2020
                  </h1>
                  <h2 class="subtitle is-3-desktop is-2-fullhd is-5-mobile has-text-centered">
                    Jakarta, Indonesia
                  </h2>
                </div>
              </div>
              <hr>
              <div class="columns">
                <div class="column is-mobile is-dekstop">
                <p class="title is-1-desktop is-spaced is-4-mobile">What is Kubernetes Community Day?</p>
                <p class="subtitle is-5-dekstop is-6-mobile">
                  Kubernetes Community Days are community-organized events that gather adopters and technologists 
                  from open source and cloud native communities to learn, collaborate, and network to further the adoption and improvement of Kubernetes. 
                </p>
                </div>
                <div class="column">
                  <formSubmission/>
                </div>
              </div>              
          </div>
        </div>
      </section>
  <footerApp/>
    </div>
  </div>
</template>

<script>
import footerApp from './components/footerApp.vue';
import formSubmission from './components/formSubmission.vue';
export default {
    name:'mainapp',
    data:function() {
      return {
        kcdDate:new Date('October 10, 2020 12:00:00')-Date.now()
      }
    },
    components:{
        footerApp,
        formSubmission
    }
}
</script>
