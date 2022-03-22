<template>
 <div class="tests-places">
   <p>Place for KALLLLLLLLLLLLL</p>
    <div>
      <custom-text-area-with-draggable-chip/>
      <selected-sort :data="data" :options="options" :select.sync="selectOption"/>
      {{selectOption}}
    </div>
 </div>
</template>

<script>
import CustomTextAreaWithDraggableChip from "@/components/CustomTextAreaWithDraggableChip";
import SelectedSort from "@/components/SelectedSort";
import axios from 'axios'
export default {
  name: "TestsPlaces",
  components: {CustomTextAreaWithDraggableChip, SelectedSort},
  data: () => ({
    data: [],
    options: [
      { value: "title", text: "Name" },
      { value: "body", text: "Content" },
    ],
    selectOption: '',
  }),
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.data = [...this.data,...response.data]
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.fetchData()
  }

}
</script>

<style scoped>
.tests-places {
  display: grid;
  justify-items: center;
}
</style>