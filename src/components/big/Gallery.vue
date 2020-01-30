<template>
    <left-fixed :fixed-size="320">
        <template #left>
            <v-flow class="pa-16">
                <a-tree-view :items="worm" @select="onTreeClick"></a-tree-view>

            </v-flow>
        </template>
        <template #right>
            <router-view></router-view>
        </template>
    </left-fixed>
</template>

<script>
    import LeftFixed from "@/components/layout/LeftFixed";
    import VFlow from "@/components/layout/VFlow";
    import ATreeView from "@/components/ui/ATreeView";
    import worm from "@/data/worm";

    export default {
        name: "Gallery",
        components: {ATreeView, VFlow, LeftFixed},
        data: function () {
            return {
                worm,
            }
        },
        methods: {
            onTreeClick: function (id) {
                let kebab = id.replace(/([a-z0-9]?)([A-Z])/g, '$1-$2').toLowerCase().substr(1);
                this.$router.push("/gallery/" + kebab);
            }
        }
    }
</script>

<style scoped>

</style>