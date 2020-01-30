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