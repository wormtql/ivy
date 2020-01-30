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
            color: {
                type: String,
                default: "transparent"
            }
        },
        computed: {
            rootStyle: function () {
                return {
                    width: "100%",
                    height: "100%",
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