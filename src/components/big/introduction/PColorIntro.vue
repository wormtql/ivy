<template>
    <align a="top">
        <p-size :width="750"></p-size>
        <spacer>v32</spacer>
        <h1>PColor 设置父DOM背景色</h1>
        <spacer>v32</spacer>

        <p>注意，设置的是父DOM的颜色，而不是父Vue实例的颜色</p>
        <p>此外，如果以插槽的方式写入颜色，将不是响应式的，用prop方式将是响应式的</p>
        <spacer>v32</spacer>

        <expandable no-indent no-gap caption="代码" color="#123456">
            <template #content>
                <pre v-highlightjs="codes.pColorCodes[0]"><code class="html"></code></pre>
            </template>
        </expandable>
        <div style="height: 96px">
            <columns divide="1 2 3">
                <template #d1>
                    <p-color :color="color[idx]"></p-color>
                </template>
                <template #d2>
                    <p-color>#12345644</p-color>
                </template>
                <template #d3>
                    <p-color>#12345622</p-color>
                </template>
            </columns>
        </div>
        <spacer>v8</spacer>
        <p>&lt;p-color&gt;并不渲染为一个具体的元素，而是功能性的</p>

        <spacer>v32</spacer>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import PSize from "@/components/base/functional/PSize";
    import Spacer from "@/components/base/misc/Spacer";
    import Expandable from "@/components/ui/Expandable";
    import codes from "@/data/codes";
    import Columns from "@/components/layout/Columns";
    import PColor from "@/components/base/functional/PColor";

    export default {
        name: "PColorIntro",
        components: {PColor, Columns, Expandable, Spacer, PSize, Align},
        data: () => {
            return {
                codes,
                color: ["red", "blue", "green"],
                idx: 0
            };
        },
        mounted: function () {
            setInterval(() => {
                this.idx = (this.idx + 1) % 3;
            }, 1000);
        }
    }
</script>

<style scoped>

</style>