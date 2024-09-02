<template>
    <section class="top-header grid grid-dir-cols bg-brand3">
      <div class="top grid grid-dir-cols q-px-md">

        <h4 class="he-date">כ”ח באדר ב’, התשפ”ד</h4>
        <div class="note-container grid grid-dir-cols">

          <span v-html="$svg('todo')"></span>
          <div class="note-info grid">
            <span>בליל שישי עוברים לשעון קיץ:</span>
            <small>יש להזיז את השעון בשעה 2:00 בלילה, לשעה 3:00 בלילה</small>
          </div>

        </div>
        <h5>24 לספטמבר, 2024</h5>

      </div>
    </section>

</template>

<style scoped lang="scss">

.top-header {
  
}

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

.he-date {
  font-weight: 700;

}

.top {
  // gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.note-container {

  gap: 0.5rem;
  align-items: center;

  .note-info{
    gap: 0.5rem;
  }

  span{
    margin-block-end: -0.5rem;
  }

}
</style>


