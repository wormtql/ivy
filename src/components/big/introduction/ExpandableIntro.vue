<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer :v="32  "></spacer>
            <h1>Expandable 可折叠</h1>
            <spacer :v="32"></spacer>

            <p class="pb-8">轮廓：</p>
            <expandable prepend-icon="fa:shapes" outlined color="#123456">
                <template #content>
                    <p
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cum dolores enim eveniet impedit ipsam omnis perspiciatis praesentium quibusdam quos ratione, repellendus saepe! Assumenda fugit minima molestiae mollitia ut.</p>
                </template>
            </expandable>
            <spacer :v="32"></spacer>

            <p class="pb-8">无轮廓：</p>
            <expandable prepend-icon="fa:shapes" color="#123456">
                <template #content>
                    <p
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cum dolores enim eveniet impedit ipsam omnis perspiciatis praesentium quibusdam quos ratione, repellendus saepe! Assumenda fugit minima molestiae mollitia ut.</p>
                </template>
            </expandable>
            <spacer :v="32"></spacer>

            <p class="pb-8">无图标：</p>
            <expandable outlined color="#123456">
                <template #content>
                    <p
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cum dolores enim eveniet impedit ipsam omnis perspiciatis praesentium quibusdam quos ratione, repellendus saepe! Assumenda fugit minima molestiae mollitia ut.</p>
                </template>
            </expandable>
            <spacer :v="32"></spacer>

            <p class="pb-8">颜色：</p>
            <expandable outlined color="deepskyblue" prepend-icon="fa:circle" caption="蓝色">
                <template #content>
                    <expandable color="deeppink" outlined caption="红色">
                        <template #content>
                            <expandable color="green" outlined caption="绿色">
                                <template #content>
                                    <p>禁止套娃</p>
                                </template>
                            </expandable>
                        </template>
                    </expandable>
                </template>
            </expandable>
            <spacer :v="32"></spacer>

            <p class="pb-8">定制caption：</p>
            <expandable outlined color="#123456" prepend-icon="fa:circle">
                <template #content>
                    <p
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cum dolores enim eveniet impedit ipsam omnis perspiciatis praesentium quibusdam quos ratione, repellendus saepe! Assumenda fugit minima molestiae mollitia ut.</p>
                </template>
                <template #caption>
                    <spacer :h="16"></spacer>
                    <a-icon icon="fa:brands/algolia"></a-icon>
                    <spacer :h="16"></spacer>
                    <a-icon icon="fa:brands/google"></a-icon>
                    <spacer :h="16"></spacer>
                    <a-icon icon="fa:brands/youtube"></a-icon>
                    <spacer :h="16"></spacer>
                    <span>合作伙伴</span>
                </template>
            </expandable>
            <spacer :v="32"></spacer>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import Expandable from "@/components/ui/Expandable";
    import AIcon from "@/components/base/display/AIcon";
    export default {
        name: "ExpandableIntro",
        components: {AIcon, Expandable, Spacer, Align}
    }
</script>

<style scoped>

</style>