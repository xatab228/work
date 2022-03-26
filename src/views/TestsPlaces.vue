<template>
	<div class="tests-places">
		<p>Place for KALLLLLLLLLLLLL</p>
		
		<custom-text-area-with-draggable-chip
			:data="data"
			@change="changeData"
		/>
		<selected-sort
			v-if="false"
			:data.sync="data"
			:options="options"
			:select.sync="selectOption"
			class="selected-sort"
		/>
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
			{value: "name", text: "Name"},
			{value: "username", text: "username"},
		],
		selectOption: '',
		selectCheckbox:['lol']
	}),
	methods: {
		async fetchData() {
			try {
				const response = await axios.get('https://jsonplaceholder.typicode.com/users')
				this.data = [...this.data, ...response.data]
			} catch (e) {
				console.log(e)
			}
		},
		changeData(values){
			this.data = values
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
	}
	
}
</script>

<style lang="scss" scoped>
.tests-places {
	display: grid;
	justify-items: center;
}

.selected-sort {
	max-width: 30%;
}
</style>