<template>
    <align a="top" :width="750">
        <spacer>v32</spacer>
        <h1>Columns 列</h1>
        <spacer>v32</spacer>

        <p>columns将一个区域分成n列，并且将自动填充父元素的所有空间</p>
        <spacer>v8</spacer>
        <expandable caption="代码" color="#123456"
            no-indent :gap="0">
            <template #content>
                <pre v-highlightjs="codes.columnsCodes[0]"><code class="html"></code></pre>
            </template>
        </expandable>
        <div style="height: 100px">
            <columns divide="1 1 1">
                <template #d1>
                    <div class="fluid" style="background-color: #123456aa"></div>
                </template>
                <template #d2>
                    <div class="fluid" style="background-color: #123456cc"></div>
                </template>
                <template #d3>
                    <div class="fluid" style="background-color: #123456aa"></div>
                </template>
            </columns>
        </div>
        <spacer>v32</spacer>

        <p>修改divide属性来获得不同的比例</p>
        <spacer>v8</spacer>
        <expandable caption="代码" color="#123456"
                    no-indent :gap="0">
            <template #content>
                <pre v-highlightjs="codes.columnsCodes[1]"><code class="html"></code></pre>
            </template>
        </expandable>
        <div style="height: 100px">
            <columns divide="4 3 2 1">
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
            </columns>
        </div>

        <spacer>v32</spacer>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import Columns from "@/components/layout/Columns";
    import Expandable from "@/components/ui/Expandable";
    import codes from "@/data/codes";

    export default {
        name: "ColumnsIntro",
        components: {Expandable, Columns, Spacer, Align},
        data: function () {
            return {
                codes,
            }
        }
    }
</script>

<style scoped>

</style>