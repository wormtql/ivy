<template>
    <div style="height: 100%; width: 100%">
        <div :style="topStyle">
            <slot name="top"></slot>
        </div>
        <div :style="bottomStyle">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomFixed",
        props: {
            fixedSize: { type: Number, default: 96 }
        },
        computed: {
            topStyle: function () {
                return {
                    width: "100%",
                    height: `calc(100% - ${this.fixedSize}px`
                }
            },
            bottomStyle: function () {
                return {
                    width: "100%",
                    height: `${this.fixedSize}px`
                }
            }
        }
    }
</script>

<style scoped>

</style>