<template>
 <div class="tests-places">
   <p>Place for KALLLLLLLLLLLLL</p>
    <div>
      <custom-text-area-with-draggable-chip/>
    </div>
 </div>
</template>

<script>
import CustomTextAreaWithDraggableChip from "@/components/CustomTextAreaWithDraggableChip";
export default {
  name: "TestsPlaces",
  components: {CustomTextAreaWithDraggableChip}
}
</script>

<style scoped>
.tests-places {
  display: grid;
  justify-items: center;
}
</style>