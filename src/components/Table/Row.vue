<template>
  <div class="flex h-20 w-full border-b border-tertiary items-center">
    <div class="p-2 w-1/4 h-full cursor-pointer">
      <div
        class="w-20 h-16 bg-center bg-cover bg-no-repeat bg-[url(@/assets/placeholder.png)]"
      >
        <img
          :src="object.image"
          :alt="object.category"
          class="w-20 h-16"
          @error="hideBrokenImage"
        />
      </div>
    </div>
    <div class="p-2 w-1/4 h-16 flex items-center cursor-pointer">
      {{ object.name }}
    </div>
    <div class="p-2 w-1/4 h-16 flex items-center">
      {{ object.category }}
    </div>
    <div class="p-2 w-1/4 h-16 flex justify-end items-center">
      <button class="bg-accent p-2 rounded text-white" @click="edit">
        Edit
      </button>
      <button class="bg-danger p-2 rounded text-white ml-2" @click="remove">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  object: {
    type: Object,
    required: true,
  },
});

const hideBrokenImage = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.style.display = "none";
};

const emit = defineEmits(["edit", "remove"]);

const edit = () => {
  emit("edit", props.object);
};

const remove = () => {
  emit("remove", props.object);
};
</script>
