<template>
    <div :style="rootStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VFlow",
        props: {
            XFluid: {
                type: Boolean,
                default: true
            },
            YFluid: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 256
            },
            height: {
                type: Number,
            }
        },
        computed: {
            rootStyle: function () {
                return {
                    width: this.XFluid ? "100%" : `${this.width}px`,
                    height: this.YFluid ? "100%" : (this.height ? `${this.height}px` : undefined),
                    display: "inline-block",
                    verticalAlign: "top",
                    boxSizing: "border-box"
                }
            }
        }
    }
</script>

<style scoped>

</style>