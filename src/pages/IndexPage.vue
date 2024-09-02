<template>


  <q-page class="index-page q-pa-md1">
    <TopHeader />
    <BottomHeader />
    <MainSection :mainItems="mainItems" />
    <DayStudying />
    <TimesOfShabat :shabbatTimes="shabbatTimes" />

    <footer class="page-footer q-pa-md">
      <section>

        <h4 class="text-size-sm q-my-sm">הלכות היום</h4>
        <div class="dotted-border txt-container grid grid-dir-cols q-py-sm">

          <p>לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין שדורשין בהלכות הרגל. רש"י כת"י
            מועד קטן ח' א' ד"ה באותה שעה.לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין
            שדורשין בהלכות הרגל. רש"י כת"י מועד קטן ח' א' ד"ה באותה שעה. לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות
            משלושים יום קודם הרגל, לפי ששומעין שדורשין בהלכות הרגל. רש"י כת"י מועד קטן ח' א' ד"ה באותה שעה.לחסוך לפסח:
            דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין שדורשין בהלכות הרגל. רש"י כת"י מועד קטן ח'
            א' ד"ה באותה שעה.לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומ</p>
          <p>לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין שדורשין בהלכות הרגל. רש"י כת"י
            מועד קטן ח' א' ד"ה באותה שעה.לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין
            שדורשין בהלכות הרגל. רש"י כת"י מועד קטן ח' א' ד"ה באותה שעה. לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות
            משלושים יום קודם הרגל, לפי ששומעין שדורשין בהלכות הרגל. רש"י כת"י מועד קטן ח' א' ד"ה באותה שעה.לחסוך לפסח:
            דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין שדורשין בהלכות הרגל. רש"י כת"י מועד קטן ח'
            א' ד"ה באותה שעה.לחסוך לפסח: דרך בני אדם לכנס ולאסוף מעות משלושים יום קודם הרגל, לפי ששומעין ש</p>
        </div>
      </section>

      <section v-for="i in 4" class="sections-list grid grid-dir-cols q-py-md dotted-border-bottom">
       <q-card flat class="q-pa-sm first-col ">
       

          <p class="text-weight-bold text-h6">סוף אשמורה ראשונה</p>
          <p class="">וזמנו בסוף ד' שעות מתחילת הלילה</p>
     
       </q-card>
       <q-card v-for="i in 4" flat class="footer-card bg-brand2 q-px-md">
        <div class="grid grid-dir-cols ">
          <p class="text-weight-bold text-subtitle1 text-brand5">רש"י ותוספות</p>
          <p class="text-brand6 text-weight-bold">00:00</p>
          <span v-html="$svg('info')"></span>
        </div>
        <p class="text-brand5">ד' שעות שוות, מה' שעות קודם חצות הלילה</p>
       </q-card>
       
     
      </section>

    </footer>
  </q-page>


</template>

<script setup>
import TimesOfShabat from 'src/components/TimesOfShabat.vue';
import DayStudying from 'src/components/DayStudying.vue';
import MainSection from 'src/components/MainSection.vue';
import TopHeader from 'src/components/TopHeader.vue';
import BottomHeader from 'src/components/BottomHeader.vue';

const shabbatTimes = [
  {
    title: 'זמני השבת הקרובה',
    description: 'פרשת אף בית גימל דלת',
    times: [
      {
        label: 'כניסת שבת',
        time: '00:00',
        icon: 'location_city',
        additionalInfo: 'הדלקת נרות 4000 בניין מגורים'
      },
      {
        label: 'יציאת שבת',
        time: '00:00',
        icon: 'wb_sunny',
        additionalInfo: 'מג"א 90 דקות'
      }
    ],
    borderColor: 'brown',
    backgroundColor: 'white',
  },
  {
    title: 'זמני השבת',
    description: 'פרשת אף בית גימל דלת',
    times: [
      {
        label: 'כניסת שבת',
        time: '00:00',
        icon: 'location_city',
        additionalInfo: 'הדלקת נרות 4000 בניין מגורים'
      },
      {
        label: 'יציאת שבת',
        time: '00:00',
        icon: 'wb_sunny',
        additionalInfo: 'מג"א 90 דקות'
      }
    ],
    borderColor: 'darkred',
    backgroundColor: 'darkred',
  }
];

const cards = [
  {
    title: "רש\"י ותוספות",
    time: "0:00:00",
    description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
    icon: "info",
  },
  {
    title: "רש\"י ותוספות",
    time: "0:00:00",
    description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
    icon: "info",
  },
  {
    title: "רש\"י ותוספות",
    time: "0:00:00",
    description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
    icon: "info",
  },
  {
    title: "רש\"י ותוספות",
    time: "0:00:00",
    description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
    icon: "info",
  },
]

const sections = [
  {
    heading: "סוף אשמורה ראשונה",
    subheading: "וזמנו בסוף ד' שעות מתחילת הלילה",
    cards: [
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
    ],
  },
  {
    heading: "סוף אשמורה ראשונה",
    subheading: "וזמנו בסוף ד' שעות מתחילת הלילה",
    cards: [
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
    ],
  },
  {
    heading: "סוף אשמורה ראשונה",
    subheading: "וזמנו בסוף ד' שעות מתחילת הלילה",
    cards: [
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
      {
        icon: "info",
        time: "0:00:00",
        title: "רש\"י ותוספות",
        description: "ד' שעות שוות, מה' שעות קודם חצות הלילה",
      },
    ],
  },
]

const headerSections = [
  {
    text: "תפילת טל ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...",
    icon: "mdi-cloud",
    iconAlt: "cloud",
  },
  {
    text: "תפילת טל ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...",
    icon: "mdi-water",
    iconAlt: "water",
  },
  {
    text: "תפילת טל ומוריד הטל. בערב...תפילת טל, ומוריד הטל. בערב...",
    icon: "mdi-leaf",
    iconAlt: "leaf",
  }
];

const mainItems = [
  {
    title: "הנץ החמה הנראה",
    subtitle: "הנראה בניכוי 4000",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן ק\"ש",
    subtitle: "מג”א 90 במע’",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "הנץ החמה הנראה",
    subtitle: "הנראה בניכוי 4000",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    separator: true
  },
  {
    title: "סוף זמן תפילה",
    subtitle: "גר\"א",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "הנץ החמה הנראה",
    subtitle: "הנראה בניכוי 2000",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן קר\"ש",
    subtitle: "מג\"א 90 במנח",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן קר\"ש",
    subtitle: "גר\"א",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן תפילה",
    subtitle: "גר\"א",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "הנץ החמה הנראה",
    subtitle: "הנראה בניכוי 2000",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן קר\"ש",
    subtitle: "מג\"א 90 במנח",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    separator: true
  },
  {
    title: "סוף זמן תפילה",
    subtitle: "גר\"א",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "הנץ החמה הנראה",
    subtitle: "הנראה בניכוי 2000 גר\"א",
    time: "0:00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן קר\"ש",
    subtitle: "מג\"א 90 במנח",
    time: "00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן קר\"ש",
    subtitle: "מג\"א 90 במנח",
    time: "00:00",
    icon: "notifications"
  },
  {
    title: "סוף זמן תפילה",
    subtitle: "מג\"א 90 במנח",
    time: "0:00:00",
    icon: "notifications"
  }
]

</script>

<style scoped lang="scss">
.index-page {

  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.9fr 0.6fr;
  grid-template-rows: 0.3fr 0.3fr max-content 0.9fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas: "top-header top-header top-header"
    "bottom-header bottom-header bottom-header"
    "left main right"
    "footer footer footer";
}

.top-header {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  grid-area: top-header;
}

.bottom-header {
  grid-area: bottom-header;

}

.left {
  grid-area: left;

}

.right {
  grid-area: right;

}

.main {
  grid-area: main;
}

footer {
  grid-area: footer;

}

.sections-list,
.section-item {
  gap: 1rem;
}

.txt-container {
  gap: 1rem;
}


.bottom-header {
  .top {
    justify-content: space-between;
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
  justify-content: space-between;
  align-items: center;
}

.note-container {

  gap: 0.5rem;
  align-items: center;

}

.bottom-header {
  position: relative;

  .section-header {
    width: max-content;
    gap: 1rem;
    align-items: center;
    grid-template-columns: repeat(3, content);

    p {
      margin: 0;
    }
  }

  .q-btn {

    gap: 0.5rem;
    position: absolute;
    left: 0;
    top: 0;

    border-start-end-radius: 1rem;
    border-end-start-radius: 1rem;

    .btn-container {
      gap: 0.5rem;
   
    }
  }
}

.sections-list{
  
  grid-template-columns: repeat(5, 1fr);
}
.first-col{
  gap: 0.2rem;
  p{
    margin: 0;
  }
}

.footer-card{
  display: grid;
  align-items: center;

  &>div{
    
    align-items: center;
    grid-template-columns: 1fr 0.2fr min-content;
    span{
      margin-bottom: -5px;
    }
  }

  p{
    margin: 0;
  }
}
</style>
