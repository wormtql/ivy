<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>LeftRightFixed 左中右布局（左右固定宽度）</h1>
            <spacer>v32</spacer>

            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.leftRightFixedCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 100px">
                <left-right-fixed :fixed-size1="100" :fixed-size2="200">
                    <template #left>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                    <template #center>
                        <div class="fluid" style="background-color: #123456cc"></div>
                    </template>
                    <template #right>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                </left-right-fixed>
            </div>

            <spacer>v32</spacer>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import Expandable from "@/components/ui/Expandable";
    import LeftRightFixed from "@/components/layout/LeftRightFixed";
    import codes from "@/data/codes";

    export default {
        name: "LeftRightFixedIntro",
        components: {LeftRightFixed, Expandable, Spacer, Align},
        data: () => {
            return {codes}
        }
    }
</script>

<style scoped>

</style>