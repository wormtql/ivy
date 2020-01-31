<template>
    <div :style="rootStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FixedLayer",
        props: {
            z: {
                type: String
            },
            a: { type: String, default: "center" }
        },
        computed: {
            rootStyle: function () {
                let style = {
                    position: "fixed",
                    zIndex: this.z,
                    // height: "100vh",
                    // width: "100vw",
                    // pointerEvents: "none"
                };
                if (this.a.indexOf("top") !== -1) {
                    style.top = "0";
                }
                if (this.a.indexOf("bottom") !== -1) {
                    style.bottom = "0";
                }
                if (this.a.indexOf("left") !== -1) {
                    style.left = "0";
                }
                if (this.a.indexOf("right") !== -1) {
                    style.right = "0";
                }
                if (this.a.indexOf("center") !== -1) {
                    style.left = "50vw";
                    style.top = "50vh";
                    style.transform = "translate(-50%, -50%)";
                }
                return style;
            }
        }
    }
</script>

<style scoped>

</style>