<template>
    <div :style="rootStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VFlow",
        props: {

        },
        computed: {
            rootStyle: function () {
                return {
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    verticalAlign: "top",
                    boxSizing: "border-box"
                }
            }
        }
    }
</script>

<style scoped>

</style>