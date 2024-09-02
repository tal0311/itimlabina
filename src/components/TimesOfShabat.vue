<template>
  <section class="right ">
    <q-card flat class="brand-br text-brand4">
      <q-card-section class="q-pa-md">
        <div class="card-title grid grid-dir-cols">
          <p class="text-h6 text-brand8 text-weight-bold">זמני שבת הקרובה</p>
          <p class="text-subtitle2">שבת פרשת וירא</p>
        </div>
        <q-separator spaced />
      </q-card-section>
      <q-card-section class="q-py-xs">
        <div class="grid grid-dir-cols info-section">
          <span v-html="$svg('candle')"></span>
          <div>
            <p class="text-subtitle1 text-weight-bold">כניסת שבת</p>
            <p class="text-caption">הנראה בניקוי 4000</p>
          </div>
          <span class="text-h5 text-weight-bold">00:00</span>
        </div>
        <q-separator spaced />
      </q-card-section>
      <q-card-section class="q-py-xs">
        <div class="grid grid-dir-cols info-section">
          <span v-html="$svg('sunset')"></span>
          <div>
            <p class="text-subtitle1 text-weight-bold">יציאת שבת</p>
            <p class="text-caption">מג”א 90 במע’</p>
          </div>
          <span class="text-h5 text-weight-bold">00:00</span>
        </div>
      </q-card-section>
    </q-card>


    <q-card flat class="bottom-card brand-br text-brand1 bg-brand4">
      <q-card-section class="q-pa-md">
        <div class="card-title grid grid-dir-cols">
          <p class="text-h6 text-weight-bold text-brand1">זמני שבת הקרובה</p>
          <p class="text-subtitle2">שבת פרשת וירא</p>
        </div>
        <p class="text-h6 text-brand1">פרשת אלף בית גימל דלת</p>
        <q-separator spaced />
      </q-card-section>
      <q-card-section class="q-py-xs">
        <div class="grid grid-dir-cols info-section">
          <span class="text-brand1" v-html="$svg('candle')"></span>
          <div>
            <p class="text-subtitle1 text-weight-bold">כניסת שבת</p>
            <p class="text-caption">הנראה בניקוי 4000</p>
          </div>
          <span class="text-h5 text-weight-bold">00:00</span>
        </div>
        <q-separator spaced />
      </q-card-section>
      <q-card-section class="q-py-xs">
        <div class="grid grid-dir-cols info-section">
          <span v-html="$svg('sunset')"></span>
          <div>
            <p class="text-subtitle1 text-weight-bold">יציאת שבת</p>
            <p class="text-caption">מג”א 90 במע’</p>
          </div>
          <span class="text-h5 text-weight-bold">00:00</span>
        </div>
      </q-card-section>
    </q-card>

  </section>


</template>

<script setup>
const props = defineProps({
  shabbatTimes: Array
})
</script>
<style scoped lang="scss">
p {
  margin: 0;
}

.q-separator {

  border-bottom: 2px dotted #a0a335;

}

.info-section {
  align-items: center;
  padding: 0 0 1.2rem 0;
  grid-template-columns: min-content 1fr min-content;
  gap: 0.5rem;

}
.q-card {
  border: 1px solid #851220;
  border-radius: 1rem;
}
.bottom-card {
  margin-top: 1rem;
}
.card-title {
  align-items: center;
  justify-content: space-between;
}
</style>