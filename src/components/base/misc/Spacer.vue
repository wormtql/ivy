<template>
    <div :style="rootStyle">
<!--        <slot></slot>-->
    </div>
</template>

<script>
    export default {
        name: "Spacer",
        props: {
            h: {
                type: Number,
            },
            v: {
                type: Number,
            }
        },
        computed: {
            rootStyle: function () {
                let h = 0;
                let v = 0;
                let display = undefined;

                // window.console.log(this.$slots.default);
                if (this.$slots.default) {
                    let cmd = this.$slots.default[0].text;
                    let cmds = cmd.split(" ");

                    for (let x of cmds) {
                        if (x[0] === "h") {
                            h = parseInt(x.substr(1));
                            display = "inline-block";
                        } else if (x[0] === "v") {
                            v = parseInt(x.substr(1));
                            display = "block";
                        }
                    }
                }

                if (this.h) {
                    h = this.h;
                    display = "inline-block";
                }
                if (this.v) {
                    v = this.v;
                    display = "block";
                }

                return {
                    width: h < 0 || v > 0 ? "100%" : `${h}px`,
                    height: v < 0 || h > 0 ? "100%" : `${v}px`,
                    display,
                    verticalAlign: "top"
                }
            }
        }
    }
</script>

<style scoped>

</style>