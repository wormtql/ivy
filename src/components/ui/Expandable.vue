<template>
    <div :style="rootStyle">
        <div :style="captionStyle" @click="onClick"
            @mouseenter="hover = true" @mouseleave="hover = false"
            @mousedown="down = true" @mouseup="down = false">
            <div :style="leftStyle">
                <slot name="caption">
                    <spacer :h="16"></spacer>
                    <a-icon v-if="prependIcon" :icon="prependIcon"></a-icon>
                    <spacer :h="24"></spacer>
                    {{ caption }}
                </slot>
            </div>
            <div :style="rightStyle">
                <slot name="icon">
                    <a-icon icon="fa:angle-left"
                            :style="{transform: active ? 'rotateZ(-90deg)' : undefined, transition: '300ms'}"></a-icon>
                    <spacer :h="16"></spacer>
                </slot>
            </div>
        </div>
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                @before-leave="beforeLeave"
                @after-enter="afterEnter"
                @after-leave="afterLeave"
                :css="false"
        >
            <div v-show="active" :style="contentStyle">
                <spacer v-if="gap > 0 && !noGap">{{ "v" + gap }}</spacer>
                    <slot name="content">
                        啥也没有
                    </slot>
                <spacer v-if="gap > 0 && !noGap">{{ "v" + gap }}</spacer>
            </div>
        </transition>

    </div>
</template>

<script>
    import AIcon from "@/components/base/display/AIcon";
    import Spacer from "@/components/base/misc/Spacer";
    import Color from "color";
    import Velocity from "velocity-animate";

    export default {
        name: "Expandable",
        components: {Spacer, AIcon},
        data: function () {
            return {
                active: false,
                hover: false,
                down: false
            }
        },
        props: {
            height: { type: Number, default: 48 },
            caption: { type: String, default: "Caption" },
            color: { type: String, default: "deeppink" },
            indent: { type: Number, default: 16 },
            gap: { type: Number, default: 16 },
            noGap: { type: Boolean, default: false },
            noIndent: { type: Boolean, default: false },
            prependIcon: { type: String },
            outlined: { type: Boolean, default: false }
        },
        methods: {
            beforeLeave: function (el) {
                el.style.maxHeight = el.offsetHeight + "px";
            },
            beforeEnter: function (el) {
                // el.wormHeight = el.style.
                // el.style.maxHeight = el.style.height + "px";
                el.style.overflow = "hidden";
            },
            afterEnter: function (el) {
                el.style.maxHeight = "";
            },
            afterLeave: function (el) {
                el.style.maxHeight = "";
            },
            enter: function (el, done) {
                Velocity(el, { maxHeight: el.offsetHeight }, { duration: 200, complete: done });
            },
            leave: function (el, done) {
                Velocity(el, { maxHeight: 0 }, { duration: 200, complete: done });
            },
            onClick: function () {
                this.active = !this.active;
            }
        },
        computed: {
            color1: function () {
                return Color(this.color).alpha(0.1).toString()
            },

            color2: function () {
                return Color(this.color).alpha(0.2).toString();
            },

            captionBackgroundColor: function () {
                if (this.hover) {
                    return this.color1;
                }
                if (this.down || this.active) {
                    return this.color2;
                }

                return "transparent";
            },

            rootStyle: function () {
                return {
                    boxSizing: "border-box",
                    border: this.outlined ? `1px solid ${this.color2}` : undefined,
                    borderRadius: "3px",
                    verticalAlign: "top"
                }
            },
            captionStyle: function () {
                return {
                    width: "100%",
                    height: `${this.height}px`,
                    position: "relative",
                    backgroundColor: this.captionBackgroundColor,
                    cursor: "pointer",
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                    borderBottomLeftRadius: this.active ? undefined : "3px",
                    borderBottomRightRadius: this.active ? undefined : "3px",
                    transition: "300ms",
                    fontSize: "0.8em"
                }
            },
            leftStyle: function () {
                return {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: `${this.height}px`
                }
            },
            rightStyle: function () {
                return {
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    // transform: this.active ? "rotateZ(90deg)" : undefined
                }
            },
            contentStyle: function () {
                return {
                    // width: "100%",
                    // paddingTop: `${this.gap}px`,
                    // paddingLeft: this.noIndent ? undefined : `${this.indent}px`,
                    padding: `0 ${this.noIndent ? 0 : this.indent}px`,
                    boxSizing: "border-box"
                }
            }
        }
    }
</script>

<style scoped>

</style>