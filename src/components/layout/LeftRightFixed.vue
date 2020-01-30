<template>
    <div :style="rootStyle">
        <div :style="fixedStyle1">
            <slot name="left">left-fixed</slot>
        </div>
        <div :style="contentStyle">
            <slot name="center">content</slot>
        </div>
        <div :style="fixedStyle2">
            <slot name="right">right-fixed</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftRightFixed",
        props: {
            fixedSize1: {
                type: Number,
                default: 96
            },
            fixedSize2: {
                type: Number,
                default: 96
            },
        },
        computed: {
            fixedStyle1: function () {
                return {
                    height: "100%",
                    display: "inline-block",
                    width: `${this.fixedSize1}px`,
                    verticalAlign: "top",
                }
            },
            fixedStyle2: function () {
                return {
                    height: "100%",
                    display: "inline-block",
                    width: `${this.fixedSize2}px`,
                    verticalAlign: "top",
                }
            },
            contentStyle: function () {
                return {
                    height: "100%",
                    width: `calc(100% - ${this.fixedSize1 + this.fixedSize2}px`,
                    display: "inline-block",
                    verticalAlign: "top",
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