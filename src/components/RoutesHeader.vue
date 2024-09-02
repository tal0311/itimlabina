<template>
    <section class="routes-header ">

        <div class="top-header grid grid-dir-cols q-py-md">

            <section class="title-container grid q-px-md text-brand4">
                <span>לוח עתים לבינה </span>
                <span class="text-h6 text-weight-bold">גבעת וושינגטון</span>
            </section>


            <div class="loc-container">
                <!-- <q-btn rounded >
                
            </q-btn> -->
                <q-chip size="lg" class="loc-icon-chip">
                    <span class="grid" v-html="$svg('location')"></span>

                </q-chip>

                <q-chip size="xl">
                    <div class="grid grid-dir-cols loc-info">
                        <span class="text-h6 text-brand4">
                            לאופק
                        </span>
                        <address class="text-weight-bold grid text-brand10">
                            <span>
                                טשרניחובסקי, 16,
                            </span>
                            <span>
                                כפר סבא, ישראל
                            </span>
                        </address>
                    </div>
                </q-chip>

            </div>


            <div class="router-header text-brand4 overlap-container" >
                <q-btn rounded class="start">
                    <span class="svg-icon bg-brand1" v-html="$svg('calender')"></span>
                </q-btn>
                <q-btn rounded size="md">
                    <q-icon name="arrow_forward_ios" size="xs" />
                    תשפ”ג

                </q-btn>
                <q-btn rounded size="lg" class="start">
                    <q-icon name="arrow_forward_ios" size="xs" />

                    אלול
                </q-btn>
                <q-btn rounded size="xl">
                    <q-icon name="arrow_forward_ios" size="xs" />
                    <div class="btn-wrapper grid">
                        <span class="text-subtitle2">יום רביעי, 7.2.22</span>
                        <span class="text-weight-bold text-subtitle2">כ”ח שבט, ה’תשפ”ד</span>
                    </div>
                    <q-icon name="arrow_back_ios" size="xs" />
                </q-btn>
                <q-btn rounded size="lg">
                    תשרי
                    <q-icon name="arrow_back_ios" size="xs" />
                </q-btn rounded size="md">
                <q-btn rounded>
                    תשפ”ה
                    <q-icon name="arrow_back_ios" size="xs" />
                </q-btn>



            </div>
        </div>
        <div class="next-prev-container grid grid-dir-cols dotted-border-bottom ">
            <span>
                <q-btn flat round dense icon="arrow_forward_ios" />
                הבא
            </span>

            <div class="actions-container bg-brand9 brand-br">
                <q-btn v-for="btn in btns" flat rounded size="sm" :label="btn.label" :class="`${btn.isSelected
                    ? 'selected bg-brand8 text-brand1'
                    : 'bg-brand9'}`"> </q-btn>
            </div>
            <span>
                הקודם
                <q-btn flat round dense icon="arrow_back_ios" />
            </span>

        </div>
    </section>
</template>

<script setup>

const btns = [
    { label: 'שבועי', isSelected: true },
    { label: 'חודשי', isSelected: false },
    { label: 'יומי', isSelected: false },
]

</script>

<style scoped>

.routes-header {
    border-radius: 0.5rem 0.5rem 0 0;
}
.loc-container {
    border-top-left-radius: 1rem;
}

.next-prev-container {
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #696b32;
    align-items: center;
}

.actions-container {
    /* height: fit-content; */

    .q-btn {
        margin-inline-end: -0.8rem;

        &.selected {
            z-index: 10;
        }
    }
}

.top-header {

    align-items: center;
    grid-template-columns: 0.3fr 0.5fr 1fr;

}

address {
    font-size: 0.8rem;
    font-weight: 700;
}

.loc-info {
    gap: 0.5rem;
}

.loc-icon-chip {
    margin-inline-end: -1.5rem;
}

.q-chip {
    border-radius: 100vh;
    border: 1px solid #1976d2;
}

.overlap-container{
   
    :nth-child(1){
        margin-inline-end: -1.5rem;
        padding-inline-end: 1.8rem;
    }
   
    :nth-child(2){
        margin-inline-end: -1.5rem;
        padding-inline-end: 1.8rem;
        background-color: #ffff;
    }
    :nth-child(3){
        margin-inline-end: -1.5rem;
        padding-inline-end: 1.8rem;
        background-color: #ffff;
    }
    :nth-child(4){
        margin-inline-end: -1.5rem;
        padding-inline-end: 1.8rem;
        background-color: #ffff;
    }
    
    :nth-child(5){
        z-index: -1;
        margin-inline-end: -1rem;
        padding-inline-start: 1.8rem;
        background-color: #ffff;
    }
    :nth-child(6){
        z-index: -2;
        margin-inline-start: -1rem;
        padding-inline-start: 2.5rem;
        background-color: #ffff;
    }
}
</style>