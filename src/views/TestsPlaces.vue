<template>
 <div class="tests-places">
   <p>Place for KALLLLLLLLLLLLL</p>
    <div>
      <custom-text-area-with-draggable-chip/>
      <selected-sort :data="sortedData" :options="options" :select.sync="selectOption"/>
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
      { value: "name", text: "Name" },
      { value: "username", text: "username" },
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
  computed: {
    sortedData() {
      return [...this.data].sort((first_item, second_item) =>
          first_item[this.selectOption]?.localeCompare(second_item[this.selectOption])
      );
    },

  },
  created() {
    this.fetchData()
	  this.$test({lol: "asdasdasdas"})
  }

}
</script>

<style scoped>
.tests-places {
  display: grid;
  justify-items: center;
}
</style>