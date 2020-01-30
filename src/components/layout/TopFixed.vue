<template>
    <div :style="rootStyle">
        <div :style="fixedStyle">
            <slot name="top">top-fixed</slot>
        </div>
        <div :style="contentStyle">
            <slot name="bottom">content</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopFixed",
        props: {
            fixedSize: {
                type: Number,
                default: 96
            },
        },
        computed: {
            fixedStyle: function () {
                return {
                    height: `${this.fixedSize}px`,
                    width: "100%",
                    // display: "inline-block"
                }
            },
            contentStyle: function () {
                return {
                    height: `calc(100% - ${this.fixedSize}px)`,
                    width: "100%",
                }
            },
            rootStyle: function () {
                return {
                    width: "100%",
                    height: "100%",
                }
            }
        }
    }
</script>

<style scoped>

</style>