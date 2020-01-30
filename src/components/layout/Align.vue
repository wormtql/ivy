<template>
    <div :style="rootStyle">
        <div :style="wrapperStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Align",
        props: {
            a: { type: String, default: "center" },
            height: { type: Number, default: -1 },
            width: { type: Number, default: -1 }
        },
        computed: {
            wrapperStyle: function () {
                return {
                    maxHeight: "100%",
                    height: this.height < 0 ? undefined : `${this.height}px`,
                    maxWidth: "100%",
                    width: this.width < 0 ? undefined : `${this.width}px`,
                    // backgroundColor: "#00000011"
                }
            },
            rootStyle: function () {
                let style = {
                    display: "flex",
                    width: "100%",
                    height: "100%"
                };
                let temp = this.a.toLowerCase();
                style.justifyContent = "center";
                style.alignItems = "center";
                if (temp.indexOf("left") !== -1) {
                    style.justifyContent = "flex-start";
                }
                if (temp.indexOf("right") !== -1) {
                    style.justifyContent = "flex-end";
                }
                if (temp.indexOf("top") !== -1) {
                    style.alignItems = "flex-start";
                }
                if (temp.indexOf("bottom") !== -1) {
                    style.alignItems = "flex-end";
                }
                return style;
            }
        }
    }
</script>

<style scoped>

</style>