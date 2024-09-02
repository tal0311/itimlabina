<template>

<section class="main bg-brand2 brand-br q-pa-md">

<div v-for="(item, index) in mainItems" :key="index">

  <q-item v-if="!item.separator" class="grid grid-dir-cols main-table-layout">
    <q-item-section>
      <p class="text-h5 text-brand6">{{ item.title }}</p>
    </q-item-section>
    <q-item-section>
      <p class="text-subtitle1 text-brand6">{{ item.subtitle }}</p>
    </q-item-section>
    <q-item-section class="dotted-border-bottom"></q-item-section>
    <q-item-section>
      <p class="text-h5">{{ item.time }}</p>
    </q-item-section>
    <q-item-section>
      <q-icon :name="item.icon" />
    </q-item-section>
  </q-item>


  <q-separator v-else spaced inset class="dotted-border-bottom" />
</div>
</section>
</template>

<script setup>

const props = defineProps({
  mainItems: Array
})
</script>

<style scoped lang="scss">  
.main-table-layout {
    
    
    align-items: baseline;
    grid-auto-columns: max-content max-content 1fr 100px 50px;
    gap: 0.8rem;
    p {
      margin: 0;
    }
}
</style>