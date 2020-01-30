<template>
    <div>
        <div v-for="(item, index) in items"
            :key="index"
        >
            <div :style="[itemStyle, { backgroundColor: calcBackgroundColor(index), color: selected === index ? color : '#000000aa' }]"
                 @mouseenter="hover = index" @mouseleave="hover = -1"
                 @mousedown="down = true" @mouseup="down = false"
                 @click="() => { clickHandler(index); }"
            >
                <spacer v-if="depth > 0" :h="indent * depth"></spacer>
                <spacer :h="item.children ? 16 : 40"></spacer>
                <div :style="[icon1Style, {transform: active[index] ? 'rotateZ(90deg)' : undefined}]" v-show="item.children">
                    <a-icon icon="fa:angle-right"></a-icon>
                </div>
                <spacer :h="8"></spacer>
                <div v-if="item.icon" :style="icon2Style">
                    <a-icon :icon="item.icon"
                            :color="selected === index ? color : '#000000aa'"></a-icon>
                </div>
                <spacer :h="8" v-if="item.icon"></spacer>
                <div :style="textStyle">
                    {{ item.text }}
                </div>
            </div>
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                @before-leave="beforeLeave"
                @after-enter="afterEnter"
                @after-leave="afterLeave"
                :css="false">
                <div v-show="active[index]">
                    <a-tree-view
                            :items="item.children"
                            :height="height"
                            :indent="indent"
                            :depth="depth + 1"
                            :color="color"
                            @something-selected="somethingSelectedHandler"
                            ref="sub"
                            v-if="item.children"
                    ></a-tree-view>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import AIcon from "@/components/base/display/AIcon";
    import Spacer from "@/components/base/misc/Spacer";
    import Color from "color";
    import Velocity from "velocity-animate";

    export default {
        name: "ATreeView",
        components: {Spacer, AIcon},
        data: function () {
            return {
                hover: -1,
                down: false,
                selected: -1,
                selectedSubTree: -1,

                active: [],

                calcBackgroundColor: function (index) {
                    if (this.selected === index && !this.items[index].children) {
                        return this.color1;
                    }
                    if (this.hover === index) {
                        return this.down ? "#00000015" : "#00000009";
                    }
                    return "transparent";
                },

            }
        },
        props: {
            items: {
                type: Array,
                default: function () {
                    return [
                        { id: 0, text: "Obj1", children: [
                                { id: 2, text: "Obj3" },
                                { id: 3, text: "Obj4", children: [
                                        { id: 6, text: "aaa" },
                                        { id: 7, text: "bbb" }
                                    ] },
                            ] },
                        { id: 1, text: "Obj2", },
                        { id: 0, text: "Obj1", children: [
                                { id: 4, text: "Obj3" },
                                { id: 5, text: "Obj4" },
                            ] },
                    ];
                }
            },
            height: { type: Number, default: 48 },
            indent: { type: Number, default: 30 },
            color: { type: String, default: "#123456" },
            depth: { type: Number, default: 0 }
        },
        created: function () {
            for (let i = 0; i < this.items.length; i++) {
                this.active.push(false);
            }
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
            clickHandler: function (index) {
                // window.console.log(this.items[index]);
                if (this.items[index].children) {
                    this.$set(this.active, index, !this.active[index]);
                } else {
                    this.selected = index;

                    if (this.selectedSubTree !== -1) {
                        this.$refs.sub[this.selectedSubTree].clearSelected();
                        this.selectedSubTree = -1;
                    }

                    this.$emit("something-selected", this.items[index].id, this);
                }
            },
            somethingSelectedHandler: function (index, vm) {
                this.selected = -1;

                for (let i = 0; i < this.$refs.sub.length; i++) {
                    if (Object.is(this.$refs.sub[i], vm)) {
                        if (this.selectedSubTree !== i && this.selectedSubTree !== -1) {
                            // 选了不同的子树
                            this.$refs.sub[this.selectedSubTree].clearSelected();
                        }
                        this.selectedSubTree = i;
                        break;
                    }
                }

                if (this.depth > 0) {
                    this.$emit("something-selected", index, this);
                } else {
                    this.$emit("select", index);
                }

                // window.console.log(index);
            },
            clearSelected: function () {
                if (this.selected !== -1) {
                    this.selected = -1;
                }
                if (this.selectedSubTree !== -1) {
                    this.$refs.sub[this.selectedSubTree].clearSelected();
                }
            }
        },
        computed: {
            color1: function () {
                return Color(this.color).alpha(0.1).toString();
            },
            itemStyle: function () {
                return {
                    height: `${this.height}px`,
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    transition: "300ms",
                    cursor: "pointer",
                    borderRadius: "3px"
                }
            },
            icon1Style: function () {
                return {
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "300ms"
                }
            },
            icon2Style: function () {
                return {
                    height: `24px`,
                    width: `24px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            },
            textStyle: function () {
                return {
                    display: "inline-block",
                    height: `${this.height}px`,
                    lineHeight: `${this.height}px`,
                    verticalAlign: "top",
                    fontSize: "0.8em"
                }
            }
        }
    }
</script>

<style scoped>

</style>