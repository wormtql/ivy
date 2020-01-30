<template>
    <align a="top">
        <div style="width: 750px;">
            <spacer>v32</spacer>
            <h1>Align 对齐</h1>
            <spacer>v32</spacer>

            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.alignCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 500px">
                <rows divide="1 1 1">
                    <template #d1>
                        <columns divide="1 1 1">
                            <template #d1>
                                <div class="fluid" style="background-color: #12345622">
                                    <align a="top left"><cube></cube></align>
                                </div>
                            </template>
                            <template #d2>
                                <div class="fluid" style="background-color: #12345644">
                                    <align a="top"><cube></cube></align>
                                </div>
                            </template>
                            <template #d3>
                                <div class="fluid" style="background-color: #12345622">
                                    <align a="top right"><cube></cube></align>
                                </div>
                            </template>
                        </columns>
                    </template>
                    <template #d2>
                        <columns divide="1 1 1">
                            <template #d1>
                                <div class="fluid" style="background-color: #12345644">
                                    <align a="left"><cube></cube></align>
                                </div>
                            </template>
                            <template #d2>
                                <div class="fluid" style="background-color: #12345622">
                                    <align a="center"><cube></cube></align>
                                </div>
                            </template>
                            <template #d3>
                                <div class="fluid" style="background-color: #12345644">
                                    <align a="right"><cube></cube></align>
                                </div>
                            </template>
                        </columns>
                    </template>
                    <template #d3>
                        <columns divide="1 1 1">
                            <template #d1>
                                <div class="fluid" style="background-color: #12345622">
                                    <align a="bottom left"><cube></cube></align>
                                </div>
                            </template>
                            <template #d2>
                                <div class="fluid" style="background-color: #12345644">
                                    <align a="bottom"><cube></cube></align>
                                </div>
                            </template>
                            <template #d3>
                                <div class="fluid" style="background-color: #12345622">
                                    <align a="bottom right"><cube></cube></align>
                                </div>
                            </template>
                        </columns>
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
    import Columns from "@/components/layout/Columns";
    import Cube from "@/components/base/misc/Cube";

    export default {
        name: "AlignIntro",
        components: {Cube, Columns, Rows, Expandable, Spacer, Align},
        data: () => {
            return {codes};
        }
    }
</script>

<style scoped>

</style>