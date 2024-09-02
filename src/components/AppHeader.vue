<template>

    <q-header class="app-header  bg-brand2" height-hint="100">

        <q-toolbar class="text-brand4 header-toolbar grid grid-dir-cols">
            <span v-html="$svg('logo')"></span>
            <div class="tab-container text-brand6">
                <q-tabs align="right">
                    <q-route-tab v-for="(tab, idx) in tabs" :key="idx" :to="tab.to" :label="tab.label" :class="`${tab.isActive&& 'text-weight-bold'}`"/>
                </q-tabs>
            </div>
            <div class="search-container">
                <q-input flat v-model="searchTerm" placeholder="חיפוש זמן או לוח" :clearable="true" clear-icon="close" dense
                    @input="onSearch">
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
            <div class="settings-container grid grid-dir-cols">

                <q-btn flat rounded class="text-brand4 lang-btn" >
                    עברית
                </q-btn>
                <q-btn flat>
                    <div class="wrapper grid grid-dir-cols">

                        <span class="svg-icon" v-html="$svg('help')"></span>
                        <span>עזרה</span>
                    </div>
                </q-btn>
                <q-btn flat >
                    <span class="svg-icon" v-html="$svg('settings')"></span>

                </q-btn>
        
                <q-btn flat>

                    <div class="wrapper grid grid-dir-cols">

                        <div class="grid grid-dir-cols">
                            <span >שלום,</span>
                            <span class="text-weight-bold"> רבינוביצקינוביץ’</span>
                        </div>
                        <span class="svg-icon" v-html="$svg('person')"></span>
                    </div>
                </q-btn>
        
            </div>


        </q-toolbar>

        <div class="bc-container">
            <q-breadcrumbs class="text-brand5" >
                <q-breadcrumbs-el class="text-brand5" label="בית" to="/" />
                <q-breadcrumbs-el class="text-brand5" label="מוצרים למוסדות" />
                <q-breadcrumbs-el class="text-brand5" label="מוצרים דיגיטליים" />
            </q-breadcrumbs>
        </div>

    </q-header>
</template>
<script setup>


const tabs = [
    { to: '/page1', label: 'לוחות זמנים' ,isActive: true},
    { to: '/page2', label: 'הלוחות שלי' ,isActive: false},
    { to: '/page3', label: 'לוחות להורדה',isActive: false },
    { to: '/page4', label: 'מוסדות וארגונים', isActive:false }

]
</script>

<style>
.app-header {
    display: grid;
    justify-content: space-between;
    grid-auto-flow: column;

    grid-template-columns: 20px 1fr 20px;
    padding: 0;

    &>* {
        grid-column: 2;
    }

    .header-toolbar {
        grid-column: 2;
        grid-auto-flow: column;
        grid-template-columns: min-content 0.5fr 1fr 0.5fr min-content;
        justify-content: space-between;
    }
}

 .wrapper{
    gap: 0.5rem;
    align-items: center;

}

.lang-btn{
    border: 1px solid #851220;

}

.q-field--dense .q-field__control, .q-field--dense .q-field__marginal{
    border-radius: 100vh;
}
.search-container{
    grid-column: 3;
    margin-inline: 1rem;
    justify-content: space-between;
    
}

.q-field__control{
    color: #851220;
    padding-inline-start: 1rem;
}

.q-field__control-container{
    padding-inline-start: 1rem;
}

.q-input{
    position: relative;
  border: 1px solid #282828;
    border-radius: 100vh;
    /* padding-inline-start:1rem ; */
     .q-field__prepend.q-field__marginal.row.no-wrap.items-center{
    position: absolute;
    left: 1rem;

   
 }
}

.q-toolbar{
    padding: 0;
}

</style>