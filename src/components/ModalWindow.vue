<template>
	<div class="modal-window" v-if="visible" @click="hideDialog">
		<div class="modal-window__content">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	name: "ModalWindow",
	props: {
		data: [Object]
	},
	data(){
		return {
			visible: false
		}
	},
	mounted() {
		this.visible = true
	},
	methods: {
		hideDialog() {
			console.log(this.data)
			this.$emit('destroy');
			this.visible = false
		},
	},
}
</script>

<style lang="scss">
.modal-window {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 1, 0.5);
	position: fixed;
	display: flex;
	
	&__content {
		margin: auto;
		background: white;
		border-radius: 12px;
		min-width: 200px;
		min-height: 50px;
		
	}
}
</style>