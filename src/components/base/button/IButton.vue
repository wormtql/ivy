<template>
    <button :style="buttonStyle" v-on="listeners">
        <div v-if="loading">
            <slot name="loading">
                <a-loading :color="color"></a-loading>
            </slot>
        </div>
        <a-icon v-else :icon="icon" :color="buttonTextColor" :size="scale ? scale : 1"></a-icon>
    </button>
</template>

<script>
    import AIcon from "@/components/base/display/AIcon";
    import Color from "color";
    import ALoading from "@/components/base/loading/ALoading";

    export default {
        name: "IButton",
        components: {ALoading, AIcon},
        data: function () {
            return {
                hover: false,
                down: false
            }
        },
        props: {
            icon: {
                type: String,
                default: "char:I"
            },
            size: {
                type: Number,
                default: 36
            },
            outlined: {
                type: Boolean,
                default: false
            },
            text: {
                type: Boolean,
                default: false
            },
            tile: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: "#123456"
            },
            loading: { type: Boolean, default: false },
            scale: { type: Number }
        },
        computed: {
            listeners: function () {
                let vm = this;
                return Object.assign({}, this.$listeners, {
                    mouseenter: () => vm.hover = true,
                    mouseleave: () => vm.hover = false,
                    mousedown: () => vm.down = true,
                    mouseup: () => vm.down = false
                });
            },

            buttonType: function () {
                let arr = ["text", "outlined"];
                for (let type of arr) {
                    if (this[type]) {
                        return type;
                    }
                }
                return "normal";
            },

            // 减淡好多
            calculatedColor1: function () {
                return Color(this.color).alpha(0.1).toString();
            },

            // 减淡一点
            calculatedColor2: function () {
                return Color(this.color).alpha(0.2).toString();
            },

            calculatedColor3: function () {
                return Color(this.color).lighten(0.2);
            },

            calculatedColor4: function () {
                return Color(this.color).lighten(0.4);
            },

            buttonTextColor: function () {
                switch (this.buttonType) {
                    case "normal": {
                        return "white"
                    }
                    default: {
                        return this.color
                    }
                }
            },

            buttonBackgroundColor: function () {
                switch (this.buttonType) {
                    case "normal": {
                        if (this.down) {
                            return this.calculatedColor4;
                        }
                        if (this.hover) {
                            return this.calculatedColor3;
                        } else {
                            return this.color;
                        }
                    }
                    case "text":
                    case "outlined": {
                        if (this.down) {
                            return this.calculatedColor2;
                        }
                        if (this.hover) {
                            return this.calculatedColor1;
                        } else {
                            return "transparent";
                        }
                    }

                }
                return this.color;
            },

            buttonStyle: function () {
                let style = {
                    borderRadius: "50%",
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    outline: "none",
                    color: this.buttonTextColor,
                    backgroundColor: this.buttonBackgroundColor,
                    border: "none",
                    cursor: "pointer",
                    padding: "0",
                    margin: "0",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "300ms",
                    verticalAlign: "top"
                };

                if (this.buttonType === "outlined") {
                    style.border = `1px solid ${this.color}`;
                }
                if (this.tile) {
                    style.borderRadius = "0";
                }

                return style;
            }
        }
    }
</script>

<style scoped>

</style>