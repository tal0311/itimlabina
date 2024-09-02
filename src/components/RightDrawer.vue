<template>

  <section class="right-drawer text-brand8 brand-br bg-brand3 q-px-md q-py-md">

  
      <h6 class="reset-header">לוחות זמנים</h6>

      <section class="grid">
        <q-expansion-item
        v-for="(expansion, index) in props.expansionItems"
        :key="index"
        :label="expansion.label"
        :icon="expansion.icon"
        expand-separator
        
        >
        <q-list v-if="expansion.items.length">
          <q-item v-for="(item, idx) in expansion.items" :key="idx">
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </section>
   
  
    
    <div class="action-container grid">
        <q-btn outline color="primary" rounded label="יצירת לוח ראשי"></q-btn>
      </div>
  </section>


</template>

<script setup>

const props = defineProps({
  expansionItems: Array
})

</script>

<style scoped>



.right-drawer{


}

.q-expansion-item{
  margin-bottom: 1rem;
  border-bottom: 2px dotted #696b32; 
}
.action-container{
  
  .q-btn{
   justify-self: end;
  }
}



</style>