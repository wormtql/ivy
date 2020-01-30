<template>
<!--    <div style="display: flex; align-items: center; justify-content: center">-->
        <img :src="`${publicPath}${src}`" :style="imgStyle"/>
<!--    </div>-->
</template>

<script>
    export default {
        name: "AImage",
        data: function () {
            return {
                publicPath: process.env.BASE_URL
            }
        },
        props: {
            src: {
                type: String,
                default: "logo.png"
            },
            width: {
                type: Number,
                default: 48
            },
            height: {
                type: Number,
                default: 64
            },
            original: {
                type: Boolean,
                default: false
            },
            keep: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            rootStyle: function () {
                return {};
            },

            imgStyle: function () {
                if (this.original) {
                    return {
                        display: "inline-block"
                    };
                }

                if (this.keep) {
                    return {
                        width: `${this.width}px`,
                        display: "inline-block"
                    };
                }

                return {
                    width: `${this.width}px`,
                    height: `${this.height}px`,
                    display: "inline-block"
                };
            }
        }
    }
</script>

<style scoped>

</style>