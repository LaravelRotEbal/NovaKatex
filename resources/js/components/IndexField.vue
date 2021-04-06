<template>
    <div>
        <katex-element :expression="field.value" />
    </div>
</template>

<script>
import KatexElement from './KatexElement'

export default {

    components: {
        KatexElement
    },

    props: ['resourceName', 'field'],
}
</script>


<style lang="sass">
    @import "../../../node_modules/katex/dist/katex.min.css"
</style>
