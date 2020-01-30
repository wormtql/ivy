<template>
    <div :style="rootStyle">

    </div>
</template>

<script>
    export default {
        name: "Cube",
        props: {
            size: { type: Number, default: 32 },
            color: { type: String, default: "#123456" }
        },
        computed: {
            rootStyle: function () {
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    display: "inline-block",
                    backgroundColor: this.color,
                    verticalAlign: "top"
                }
            }
        }
    }
</script>

<style scoped>

</style>