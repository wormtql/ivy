<template>
    <div :style="rootStyle" @click="$emit('click')">
        <div v-if="icon" :style="iconStyle">
            <a-icon :icon="icon" :color="selected ? color : '#000000aa'"
                :scale="0.9"></a-icon>
        </div>
        <div :style="textStyle">
            {{ text }}
        </div>
    </div>
</template>

<script>
    import AIcon from "@/components/base/display/AIcon";
    import Color from "color";

    export default {
        name: "ListDefaultView",
        components: {AIcon},
        props: {
            icon: { type: String },
            text: { type: String, default: "list-item" },
            height: { type: Number, default: 48 },

            // injected by parent component, typically list
            hover: { type: Boolean, default: false },
            selected: { type: Boolean, default: false },
            down: { type: Boolean, default: false },
            color: { type: String, default: "deeppink" },
        },
        computed: {
            rootBackgroundColor: function () {
                if (this.selected) {
                    return Color(this.color).alpha(0.1).toString();
                }
                if (this.down) {
                    return "#00000015";
                }
                if (this.hover) {
                    return "#00000009";
                }

                return "transparent";
            },

            contentColor: function () {
                if (this.selected) {
                    return this.color;
                }
                return "#000000aa";
            },

            rootStyle: function () {
                return {
                    width: "200px",
                    height: `${this.height}px`,
                    borderRadius: "3px",
                    backgroundColor: this.rootBackgroundColor,
                    transition: "300ms",
                    cursor: "pointer"
                }
            },
            iconStyle: function () {
                return {
                    display: "inline-flex",
                    verticalAlign: "top",
                    height: `${this.height}px`,
                    justifyContent: "center",
                    alignItems: "center",
                    width: `${this.height}px`,
                }
            },
            textStyle: function () {
                return {
                    display: "inline-block",
                    verticalAlign: "top",
                    height: `${this.height}px`,
                    lineHeight: `${this.height}px`,
                    transition: "300ms",
                    color: this.contentColor,
                    paddingLeft: this.icon ? "8px" : "16px",
                    fontSize: "0.8em"
                }
            }
        }
    }
</script>

<style scoped>

</style>