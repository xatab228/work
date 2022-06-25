<template>
	<div class="form-for-filling">
		<div class="form-for-filling__header">
			<span class="title"> POshel Nahuy </span>
		</div>
		<v-divider/>
		<div class="form-for-filling__body">
		</div>
		<v-divider/>
		<div class="form-for-filling__footer">
		</div>
	</div>
</template>

<script>
export default {
	name: "FormForFilling"
}
</script>

<style lang="scss">
.form-for-filling {
	display: grid;
	grid-template-rows: 1fr 16fr 1fr;
	width: 100%;
	padding: 10px 20px;
	min-width: 450px;
	min-height: 600px;
	
	&__header {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__footer {
		margin-left: auto;
	}
	&__body {
	
	}
}
</style>