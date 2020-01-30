<template>
    <div :style="rootStyle">
        <div :style="topStyle">
            <slot name="top"></slot>
        </div>
        <div :style="centerStyle">
            <slot name="center"></slot>
        </div>
        <div :style="bottomStyle">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerticalTCB",
        props: {
            fluid: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                default: "transparent"
            },
            height: {
                type: Number,
                default: 100
            },
            width: {
                type: Number,
                default: 100
            }
        },
        computed: {
            rootStyle: function () {
                return {
                    width: this.fluid ? "100%" : `${this.width}px`,
                    height: this.fluid ? "100%" : `${this.height}px`,
                    display: "inline-block",
                    position: "relative",
                    backgroundColor: this.color,
                    verticalAlign: "top"
                }
            },

            topStyle: function () {
                return {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "absolute",
                    top: "0",
                    left: "0"
                };
            },

            centerStyle: function () {
                return {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)"
                };
            },

            bottomStyle: function () {
                return {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "0",
                    left: "0"
                };
            }
        }
    }
</script>

<style scoped>

</style>