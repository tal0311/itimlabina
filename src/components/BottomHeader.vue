<template>

<section class="bottom-header grid bg-brand2 brand-br q-pa-md">
      <q-btn flat class="bg-brand7 ">
        <div class="btn-container grid grid-dir-cols q-mt-sm">

          <span v-html="$svg('cal_date')"></span>
          <span>במוצ”ש סופרים ה’ בעומר</span>
        </div>
        </q-btn>
      <div class="section-header grid grid-dir-cols">
        <p class="text-h5">ערב פסח</p> | <span class="text-subtitle1">פרשת אלף בית גימל דלת</span> 
      
      </div>

      <div class="sub-p">
        <h6 class="haftara-title">הפטרה</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis ullam distinctio voluptatum nemo repellat
          iste aperiam, soluta sit, ad officia minima asperiores error quas sed itaque aut nihil labore!</p>
      </div>
      <div class="bottom-tabs grid grid-dir-cols">
        <q-item class="grid grid-dir-cols">
          <q-item-section>
            <span v-html="$svg('bookmark')"></span>
          </q-item-section>
          <q-item-section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem odio eligendi
            voluptates facere ipsum.</q-item-section>
        </q-item>
        <q-item class="grid grid-dir-cols">
          <q-item-section>
            <span v-html="$svg('bookmark_study')"></span>
          </q-item-section>
          <q-item-section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem odio eligendi
            voluptates facere ipsum.</q-item-section>
        </q-item>
        <q-item class="grid grid-dir-cols">
          <q-item-section>
            <span v-html="$svg('bookmark_time')"></span>
          </q-item-section>
          <q-item-section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem odio eligendi
            voluptates facere ipsum.</q-item-section>
        </q-item>
      </div>




    </section>

</template>

<style scoped lang="scss">

h2,
h3,
h4,
h5,
h6 {
  margin: 0.5rem 0;

}

h6 {
  margin: 0.5rem 0;
  font-size: smaller;
  font-weight: 700;
}
.bottom-header{
  position: relative;

.section-header {
  width: max-content;
  gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(3, content);

  p{
    margin: 0;
  }
}

  .q-btn{
 
    gap: 0.5rem;
    position: absolute;
    left: 0;
    top: 0;

    border-start-end-radius: 1rem;
    border-end-start-radius: 1rem;

    .btn-container{
      gap: 0.5rem;
  
    }
  }
}

.bottom-tabs {
  .q-item {
    gap: 01rem;

    &:nth-child(2) {
      border-left: 2px solid lightgray;
      border-right: 2px solid lightgray;
    }
  }
}

</style>