<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>VerticalTCB 垂直上中下布局</h1>
            <spacer>v32</spacer>

            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.verticalTCBCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 500px">
                <left-fixed :fixed-size="96">
                    <template #left>
                        <vertical-t-c-b color="#12345622">
                            <template #top>
                                <spacer>v16</spacer>
                                <a-image src="logo.png"></a-image>
                            </template>
                            <template #center>
                                <i-button icon="fa:square" text></i-button>
                                <spacer>v16</spacer>
                                <i-button icon="fa:circle" text></i-button>
                                <spacer>v16</spacer>
                                <i-button icon="fa:play" text></i-button>
                            </template>
                            <template #bottom>
                                <p class="f-08">下午</p>
                                <p class="f-08">08:31</p>
                                <spacer>v16</spacer>
                            </template>
                        </vertical-t-c-b>
                    </template>
                    <template #right>
                        <div class="fluid" style="background-color: #123456aa"></div>
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
    import VerticalTCB from "@/components/layout/VerticalTCB";
    import AImage from "@/components/base/display/AImage";
    import IButton from "@/components/base/button/IButton";
    import LeftFixed from "@/components/layout/LeftFixed";

    export default {
        name: "VerticalTCBIntro",
        components: {LeftFixed, IButton, AImage, VerticalTCB, Expandable, Spacer, Align},
        data: () => {
            return {codes};
        }
    }
</script>

<style scoped>

</style>