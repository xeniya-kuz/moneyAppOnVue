<template>
    <button class="show_btn form__btn"
    @click="changeHandler">
    ADD NEW COST</button>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'ShowForm',
  props: ['isOn'],
  data () {
    return {
    }
  },
  computed: {
    ...mapState('general', ['formVisible'])
  },
  methods: {
    show (isOn) {
      this.$emit('showForm', !isOn)
    },
    ...mapMutations('general', ['setFormVisible']),
    changeHandler () {
      this.setFormVisible()
    }
  }
}
</script>
