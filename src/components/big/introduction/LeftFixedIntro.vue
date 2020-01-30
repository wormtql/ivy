<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>LeftFixed 左右布局（左固定宽度）</h1>
            <spacer>v32</spacer>

            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.leftFixedCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 100px">
                <left-fixed :fixed-size="100">
                    <template #left>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                    <template #right>
                        <div class="fluid" style="background-color: #123456cc"></div>
                    </template>
                </left-fixed>
            </div>

            <spacer>v32</spacer>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import Expandable from "@/components/ui/Expandable";
    import codes from "@/data/codes";
    import LeftFixed from "@/components/layout/LeftFixed";

    export default {
        name: "LeftFixedIntro",
        components: {LeftFixed, Expandable, Spacer, Align},
        data: function () {
            return {
                codes
            }
        }
    }
</script>

<style scoped>

</style>