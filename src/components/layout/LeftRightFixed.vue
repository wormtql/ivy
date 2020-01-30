<template>
    <div :style="rootStyle">
        <div :style="fixedStyle1">
            <slot name="fixed-1">left-fixed</slot>
        </div>
        <div :style="contentStyle">
            <slot>content</slot>
        </div>
        <div :style="fixedStyle2">
            <slot name="fixed-2">right-fixed</slot>
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
            fluid: {
                type: Boolean,
                default: true
            }
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
                let width = undefined;
                let height = undefined;
                if (this.fluid || this.width === -1) {
                    width = "100%";
                }
                if (this.fluid || this.height === -1) {
                    height = "100%";
                }
                return {
                    width,
                    height,
                }
            }
        }
    }
</script>

<style scoped>

</style>