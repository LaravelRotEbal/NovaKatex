<template>
    <panel-item :field="field">
        <template slot="value">
            <katex-element :expression="field.value" />
        </template>
    </panel-item>
</template>

<script>
//    import Vue from 'vue';
//    import VueKatex from 'vue-katex';
    import KatexElement from './KatexElement'
    import "katex/contrib/mhchem/mhchem"


//import { KatexElement } from "vue-katex";
//    Vue.use(VueKatex);
/*
    Nova.booting((Vue, router) => {
        Vue.use(KatexElement);
    });
*/
export default {

    components: {
        KatexElement
    },

    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>

<style lang="sass">
    @import "../../../node_modules/katex/dist/katex.min.css"
</style>
