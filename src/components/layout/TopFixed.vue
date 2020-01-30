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
            fluid: {
                type: Boolean,
                default: true
            }
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