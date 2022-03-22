<template>
  <div>
      <v-select
          v-model="selectedOption"
          :items="options"
          item-text="text"
          item-value="value"
      >
      </v-select>
      <div v-for="item in data" :key="item.id">
        {{item.name + ' ' + item.username}}
      </div>

  </div>
</template>

<script>
export default {
  name: "SelectedSort",
  props: {
    data: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    select: [String]
  },
  computed: {
    selectedOption: {
      get() {
        return this.select
      },
      set(value) {
        this.$emit('update:select',value)
      }
    }
  },

}
</script>

<style scoped>

</style>