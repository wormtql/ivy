<template>
    <div :style="rootStyle">
        <div :style="contentStyle">
            <slot>unfixed</slot>
        </div>
        <div :style="fixedStyle">
            <slot name="fixed">fixed</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightFixed",
        props: {
            fixedSize: {
                type: Number,
                default: 64
            },
            fluid: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            fixedStyle: function () {
                return {
                    height: "100%",
                    width: `${this.fixedSize}px`,
                    display: "inline-block",
                    verticalAlign: "top",
                }
            },
            contentStyle: function () {
                return {
                    height: "100%",
                    width: `calc(100% - ${this.fixedSize}px`,
                    display: "inline-block",
                    verticalAlign: "top"
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