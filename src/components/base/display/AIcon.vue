<template>
    <div :style="iconStyle">
        <div v-if="iconType === 'fa'" :style="iconStyle">
            <icon :name="iconData" :scale="size" :style="{color}"></icon>
        </div>
        <div v-else-if="iconType === 'char'">
            <span :style="{fontSize: `${size}em`, color}">{{ iconData[0] }}</span>
        </div>
        <div v-else-if="iconType === 'none'">

        </div>
    </div>
</template>

<script>
    import "vue-awesome/icons"
    import Icon from "vue-awesome/components/Icon"

    export default {
        name: "AIcon",
        components: {
            Icon
        },
        props: {
            icon: {
                type: String,
                default: "char:I"
            },
            size: {
                type: Number,
                default: 1.0
            },
            color: {
                type: String,
                default: "black"
            }
        },
        computed: {
            iconType: function () {
                let temp = this.icon.split(":");
                return temp[0];
            },
            iconData: function () {
                let temp = this.icon.split(":");
                return temp[1];
            },
            iconStyle: function () {
                return {
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    verticalAlign: "top"
                }
            }
        }
    }
</script>

<style scoped>

</style>