<template>
    <button
        :style="buttonStyle"
        v-on="listeners"
    >
        <div v-if="loading">
            <slot name="loading">
                <a-loading :color="color"></a-loading>
            </slot>
        </div>
        <div v-else :style="[contentStyle, {textAlign: left ? 'left' : (right ? 'right' : undefined)}]">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Color from "color"
    import ALoading from "@/components/base/loading/ALoading";

    export default {
        name: "AButton",
        components: {ALoading},
        data: function () {
            return {
                hover: false,
                down: false
            }
        },
        props: {
            outlined: { type: Boolean, efault: false },
            text: { type: Boolean, default: false },
            tile: { type: Boolean, default: false },
            round: { type: Boolean, default: false },
            color: { type: String, default: "deeppink" },
            loading: { type: Boolean, default: false },
            xFluid: { type: Boolean, default: false },
            left: { type: Boolean, default: false },
            right: { type: Boolean, default: false },
            width: { type: Number },
            height: { type: Number }
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

            contentStyle: function () {
                return {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: this.left ? "flex-start" : this.right ? "flex-end" : "center"
                }
            },

            buttonStyle: function () {
                let style = {
                    outline: "none",
                    border: "none",
                    borderRadius: "3px",
                    color: this.buttonTextColor,
                    backgroundColor: this.buttonBackgroundColor,
                    minHeight: "36px",
                    cursor: "pointer",
                    transition: "300ms",
                    padding: `0px 16px`,
                    fontWeight: "bold",
                    width: this.xFluid ? "100%" : (this.width ? `${this.width}px` : undefined),
                    height: this.height ? `${this.height}px` : undefined,
                    verticalAlign: "top"
                };

                switch (this.buttonType) {
                    case "outlined": {
                        Object.assign(style, {
                            border: `1px solid ${this.color}`
                        });
                    }
                }

                if (this.tile) {
                    style.borderRadius = "0";
                }
                if (this.round) {
                    style.borderRadius = "10000px";
                }

                return style;
            }
        }
    }
</script>

<style scoped>

</style>