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

