<template>
  <q-layout view="hHh LpR fFf">
    <AppHeader/>
    <q-drawer show-if-above side="left" class="bg-brand2"></q-drawer>
    <q-drawer show-if-above side="right" class="bg-brand2 q-pl-md">
      <RightDrawer :expansionItems="expansionItems" />
    </q-drawer>
    <div>
      <q-page-container>
        <RoutesHeader />
        <router-view />
      </q-page-container>
   </div>

  </q-layout>
</template>

<script setup>
import RightDrawer from 'src/components/RightDrawer.vue'
import RoutesHeader from 'src/components/RoutesHeader.vue'
import AppHeader from 'src/components/AppHeader.vue'
import { ref } from 'vue'

const searchTerm = ref('');
const pervNextBtns = [
  { label: 'הקודם', icon: 'arrow_back_ios' },
  { label: 'הבא', icon: 'arrow_forward_ios' }
]


document.body.dir = 'rtl';
const expansionItems = [
  {
    label: 'עיתים לבינה',
    icon: 'newspaper',
    items: [
      { label: 'הלוח הראשי' },
      { label: 'מידע חודשי ושנתי' },
      { label: 'הסבר על הזמנים' },
    ],
  },
  {
    label: 'לוחות נוספים',
    icon: 'calendar_today',
    items: [
      { label: 'לנשים' },
      { label: 'לוח נוסף' },
    ],
  },
  {
    label: 'לוחות מפורסמים',
    icon: 'public',
    items: [],
  },
  {
    label: 'מאמרים',
    icon: 'article',
    items: [],
  },
  {
    label: 'הלוחות שלי',
    icon: 'person',
    items: [],
  },
];


</script>

<style scoped lang="scss">

</style>