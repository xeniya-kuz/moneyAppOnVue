<template>
  <div class="modal-window">
    <div class="modal-window__item modal-window__item_edit" @click.prevent="editHandler">Edit</div>
    <div class="modal-window__item modal-window__item_remove" @click.prevent="removeHandler">Remove</div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'ModalWindow',
  props: ['item'],
  data () {
    return {
      data: ''
    }
  },
  computed: {
    ...mapState(['currentItem']),
    ...mapState('general', ['formVisible'])
  },
  methods: {
    ...mapActions(['removeItem']),
    ...mapMutations(['setCurrentItem']),
    ...mapMutations('general', ['setFormVisible']),
    editHandler () {
      this.setFormVisible(true)
      if (this.$route.name !== 'edit') {
        this.$router.push({ name: 'edit', params: this.item })
      }
      // проверка на дублирование перехода
      if (this.$route.name === 'edit') {
        this.setCurrentItem(this.item)
      }
      this.$modal.hide()
    },
    removeHandler () {
      this.removeItem(this.item)
      this.$modal.hide()
    }
  }
}
</script>

<style lang="scss">
  .modal-window{
    position: absolute;
    right: -40px;
    top: 3px;
    box-shadow: 2px 3px 6px 1px;
    &__item {
      padding: 10px;
      cursor: pointer;
      &:hover{
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>
