<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>TopFixed 上下布局 （上固定高度）</h1>
            <spacer>v32</spacer>

            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.topFixedCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 300px">
                <top-fixed :fixed-size="100">
                    <template #top>
                        <div class="fluid" style="background-color: #123456aa"></div>
                    </template>
                    <template #bottom>
                        <div class="fluid" style="background-color: #123456cc"></div>
                    </template>
                </top-fixed>
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
    import TopFixed from "@/components/layout/TopFixed";

    export default {
        name: "TopFixedIntro",
        components: {TopFixed, Expandable, Spacer, Align},
        data: () => {
            return {codes};
        }
    }
</script>

<style scoped>

</style>