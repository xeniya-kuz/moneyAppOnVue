<template>
<div class="container">
  <br>
  <br>
  <ShowForm @showForm="showForm"
  :isOn="show_Form"/>
  <PaymentForm v-show="formVisible"/>
  <PaymentList/>
</div>
</template>

<script>
import PaymentList from '@/components/PaymentList.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import ShowForm from '@/components/ShowForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'List',
  components: {
    PaymentList,
    PaymentForm,
    ShowForm
  },
  data () {
    return {
      show_Form: false
    }
  },
  computed: {
    ...mapState('general', ['formVisible'])
  },
  methods: {
    showForm (isOn) {
      this.show_Form = isOn
    }
  }
}
</script>

<style  lang="scss">
.container{
width: 500px;
margin: 0 auto;
}
</style>
