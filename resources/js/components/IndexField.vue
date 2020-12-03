<template>
    <div>
    <div v-katex="'\\frac{a_i}{1+x}'"></div>
    <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
    <div v-katex="{ expression: '\\frac{a_i}{1+x}', options: { throwOnError: false }}"></div>
    <div v-katex:auto>
        \(\frac{a_i}{1+x}\)
    </div>
    <div v-katex:auto="{ options }">
        \(\frac{a_i}{1+x}\)
    </div>
    <katex-element expression="'\\frac{a_i}{1+x}'"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueKatex from 'vue-katex';
    import 'katex/dist/katex.min.css';

    Vue.use(VueKatex, {
        globalOptions: {
            //... Define globally applied KaTeX options here
        }
    });

export default {
    props: ['resourceName', 'field'],
}
</script>

