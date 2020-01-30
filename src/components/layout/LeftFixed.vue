<template>
    <div :style="rootStyle">
        <div :style="leftStyle">
            <slot name="left">left</slot>
        </div>
        <div :style="rightStyle">
            <slot name="right">right</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftFixed",
        props: {
            fixedSize: {
                type: Number,
                default: 64
            },
        },
        computed: {
            leftStyle: function () {
                return {
                    width: `${this.fixedSize}px`,
                    height: "100%",
                    display: "inline-block",
                    verticalAlign: "top",
                    overflow: "auto"
                }
            },
            rightStyle: function () {
                return {
                    width: `calc(100% - ${this.fixedSize}px)`,
                    height: "100%",
                    display: "inline-block",
                    verticalAlign: "top",
                    overflow: "auto"
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