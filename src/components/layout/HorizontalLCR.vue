<template>
    <div :style="rootStyle">
        <div :style="leftStyle">
            <slot name="left"></slot>
        </div>
        <div :style="centerStyle">
            <slot name="center"></slot>
        </div>
        <div :style="rightStyle">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HorizontalLCR",
        props: {
            fluid: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                default: "transparent"
            }
        },
        computed: {
            rightStyle: function () {
                return {
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                }
            },
            leftStyle: function () {
                return {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                }
            },
            centerStyle: function () {
                return {
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                };
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
                    position: "relative",
                    backgroundColor: this.color
                }
            }
        }
    }
</script>

<style scoped>

</style>