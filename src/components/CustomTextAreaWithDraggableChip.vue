<template>
	<div class="custom-textarea-with-checkbox">
		<div class="custom-textarea-with-checkbox__autocomplete">
			<div class="custom-textarea-with-checkbox__chips-and-input">
				<draggable
					v-model="selectCheckbox"
				>
					<v-chip
						v-for="(user,index) in selectCheckbox"
						:key="index"
						class="ml-2 mt-2"
						small
						close
						@click:close="deleteUser(index)"
					>
						{{ user.name }}
					</v-chip>
				</draggable>
				<input type="text" v-model="searchUser">
			</div>
			<v-btn @click="openCheckbox" icon>
				<v-icon>
					mdi-menu-down
				</v-icon>
			</v-btn>
		</div>
		<div class="custom-checkbox" v-show="visibleCheckbox">
			<div
				class="custom-checkbox__solo-checkbox"
				:class="{'custom-checkbox__solo-checkbox--active': selectCheckbox.includes(user)}"
				v-for="(user,index) in users"
				:key="index"
			>
				<input
					type="checkbox"
					v-model="selectCheckbox"
					:value="user"
				/>
				<span>{{user.name}}</span>
			</div>
			
			
<!--			<v-checkbox-->
<!--				v-model="selectCheckbox"-->
<!--				v-for="(user,index) in users"-->
<!--				:key="index"-->
<!--				:label="user.name"-->
<!--				:value="user"-->
<!--				dense-->
<!--				multiple-->
<!--				class="solo-checkbox"-->
<!--				:class="{'solo-checkbox&#45;&#45;active': selectCheckbox.includes(user)}"-->
<!--			>-->
<!--			</v-checkbox>-->
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
			return [...this.data]
				.sort((a,b)=> a['name']?.localeCompare(b['name']))
				.filter((user) => user.name.toLowerCase().includes(this.searchUser.toLowerCase()))
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
	data: () => ({
		visibleCheckbox: false,
		selectCheckbox:[],
		searchUser: '',
	}),
}
</script>

<style lang="scss">

.custom-textarea-with-checkbox {
	max-width: 100%;
	min-height: 40px;
	width: 80%;
	
	&__autocomplete {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		max-width: 100%;
		min-height: 40px;
		padding: 0 12px;
		height: auto;
		border-color: rgba(0, 0, 0, 0.42);
		border-style: solid;
		border-width: thin;
		border-radius: 4px;
		
		.v-btn {
			margin-left: auto;
		}
	}
	
	&__chips-and-input{
		display: flex;
		flex-wrap: wrap;
		
		input {
			outline: none;
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
		
		&__solo-checkbox {
			margin: 0;
			padding: 0 16px;
			position: relative;
			min-height: 40px;
			
			.v-input--selection-controls__input {
				margin: 12px 32px 12px 0;
			}
			
			.v-icon.v-icon--dense {
				font-size: 24px;
				color: currentColor;
			}
			
			.theme--light.v-label {
				font-family: "Roboto", sans-serif;
				font-weight: 500;
				line-height: 1rem;
				font-size: 0.8125rem;
				color: currentColor;
			}
			
			.v-messages {
				display: none
			}
			
			.v-input__control {
				padding-top: 6px;
			}
			
			&::before {
				background-color: currentColor;
				bottom: 0;
				content: "";
				left: 0;
				opacity: 0;
				pointer-events: none;
				position: absolute;
				right: 0;
				top: 0;
				transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
			}
			
			&::after {
				content: "";
				min-height: inherit;
				font-size: 0;
			}
			
			&:active::before {
				opacity: 0.12;
			}
			
			&--active {
				background-color: rgba(25, 118, 210, 0.16);
			}
		}
	}
}


</style>