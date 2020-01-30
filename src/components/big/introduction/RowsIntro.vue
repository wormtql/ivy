<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>Rows 行</h1>
            <spacer>v32</spacer>

            <p>将一个区域分成n行，并且将自动填充父元素的所有空间</p>
            <spacer>v8</spacer>
            <expandable caption="代码" color="#123456"
                        no-indent :gap="0">
                <template #content>
                    <pre v-highlightjs="codes.rowsCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 200px">
                <rows divide="1 1 1">
                    <template #d1>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                    <template #d2>
                        <div class="fluid" style="background-color: #123456cc"></div>
                    </template>
                    <template #d3>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                </rows>
            </div>
            <spacer>v32</spacer>

            <p>通过更改divide属性获得不同的比例</p>
            <spacer>v8</spacer>
            <expandable caption="代码" color="#123456"
                        no-indent :gap="0">
                <template #content>
                    <pre v-highlightjs="codes.rowsCodes[1]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 300px">
                <rows divide="3 2 1 2">
                    <template #d1>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                    <template #d2>
                        <div class="fluid" style="background-color: #123456cc"></div>
                    </template>
                    <template #d3>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                    <template #d4>
                        <div class="fluid" style="background-color: #123456cc"></div>
                    </template>
                </rows>
            </div>

            <spacer>v32</spacer>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import codes from "@/data/codes";
    import Expandable from "@/components/ui/Expandable";
    import Rows from "@/components/layout/Rows";

    export default {
        name: "RowsIntro",
        components: {Rows, Expandable, Spacer, Align},
        data: function () {
            return {
                codes
            }
        }
    }
</script>

<style scoped>

</style>