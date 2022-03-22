<template>
  <div>
      <v-select
          v-model="selectedOption"
          :items="options"
          item-text="text"
          item-value="value"
          @change="optionChange"
      >

      </v-select>
      <div v-for="item in data" :key="item.id">
        {{item.name}}
      </div>

  </div>
</template>

<script>
export default {
  name: "SelectedSort.vue",
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
  data: () => ({
    selectedOption: this.select
  }),
  methods: {
    optionChange(){
      console.log(this.selectedOption)
      this.$emit('update:select',this.selectedOption)
    }

  }
}
</script>

<style scoped>

</style>