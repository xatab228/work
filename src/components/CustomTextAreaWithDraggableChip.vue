<template>
	<div class="custom-textarea-with-checkbox">
		<div class="custom-textarea-with-chips">
			<draggable
				v-model="selectCheckbox"
			>
				<v-chip
					v-for="(user,index) in selectCheckbox"
					:key="index"
					class="ml-2 mt-2"
					close
					@click:close="deleteUser(index)"
				>
					{{ user.name }}
				</v-chip>
			</draggable>
			<v-text-field
				v-model="searchUser"
				dense
				outlined
				append-icon="mdi-menu-down"
				@click:append="openCheckbox"
			>
			</v-text-field>
		</div>
		<div class="custom-checkbox" v-show="visibleCheckbox">
			<v-checkbox
				v-model="selectCheckbox"
				v-for="(user,index) in users"
				:key="index"
				:label="user.name"
				:value="user"
				dense
				multiple
				class="solo-checkbox"
			>
			</v-checkbox>
		</div>
		<v-combobox
			:items="users"
			item-text="name"
			outlined
			multiple
			dense
		>
		
		</v-combobox>
	</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
	name: "CustomTextAreaWithDraggableChip",
	components: {
		draggable
	},
	props: {
		data: {
			type: Array,
		}
	},
	computed: {
		users() {
			return [...this.usersArr].sort((a,b)=> a['name']?.localeCompare(b['name'])).filter((user) => user.name.toLowerCase().includes(this.searchUser.toLowerCase()));
		},
	},
	methods: {
		deleteUser(index) {
			this.selectCheckbox.splice(index, 1)
		},
		openCheckbox(){
			this.visibleCheckbox = !this.visibleCheckbox
		}
	},
	watch: {
		data: {
			handler(values) {
				this.usersArr = values
			}
		},
		selectCheckbox: {
			handler(values) {
				console.log(values)
				
			}
		},
		deep: true
	},
	data: () => ({
		usersArr: [],
		visibleCheckbox: false,
		selectCheckbox:[],
		searchUser: ''
	}),
}
</script>

<style lang="scss">

.custom-textarea-with-checkbox {
	max-width: 50%;
	min-height: 40px;
	
	.custom-textarea-with-chips {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		height: auto;
		border-color: rgba(0, 0, 0, 0.42);
		border-style: solid;
		border-width: thin;
		border-radius: 4px;
		
		.v-text-field .v-input__control {
			color: currentColor;
			min-height: 40px;
		}
		
		.v-text-field--outlined fieldset {
			//border: 1px solid cyan;
			border: 0;
		}
		.v-text-field--outlined.v-input--is-focused fieldset {
			//border: 1px solid cyan;
			border: 0;
		}
		.v-input__slot {
			margin-bottom: 0;
			input {
				padding: 0;
			}
		}
		.v-text-field__details {
			display: none;
		}
		
	}
	
	.custom-checkbox {
		z-index: 3;
		box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
		background: white;
		margin-top: 0;
		padding: 8px 0 8px 0;
		transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
		max-height: 295px;
		overflow-x: hidden;
		overflow-y: auto;
		
		.solo-checkbox {
			//border: 0.5px solid black;
			margin: 6px 0 6px 0;
			padding: 0 16px;
			min-height: 40px;
			
			.v-input--selection-controls__input {
				margin-right: 30px;
			}
			.v-icon.v-icon--dense {
				font-size: 24px;
				color: rgba(0, 0, 0, 0.80);
			}
			
			.theme--light.v-label {
				font-family: "Roboto", sans-serif;
				font-weight: 500;
				line-height: 1rem;
				font-size: 0.8125rem;
				color: rgba(0, 0, 0, 0.87);
			}
			
			.v-messages {
				display:none
			}
			.v-input__control {
				padding-top: 6px;
			}
		}
	}
	
}


</style>