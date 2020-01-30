import Vue from "vue"
import VueRouter from "vue-router"

import Gallery from "@/components/big/Gallery"
import ExpandableIntro from "@/components/big/introduction/ExpandableIntro";
import ATreeViewIntro from "@/components/big/introduction/ATreeViewIntro";
import AButtonIntro from "@/components/big/introduction/AButtonIntro";
import IButtonIntro from "@/components/big/introduction/IButtonIntro";
import AIconIntro from "@/components/big/introduction/AIconIntro";
import AImageIntro from "@/components/big/introduction/AImageIntro";
import ColumnsIntro from "@/components/big/introduction/ColumnsIntro";

Vue.use(VueRouter);

const routes = [
    {
        path: "/gallery", component: Gallery, children: [
            { path: "expandable", component: ExpandableIntro },
            { path: "a-tree-view", component: ATreeViewIntro },
            { path: "a-button", component: AButtonIntro },
            { path: "i-button", component: IButtonIntro },
            { path: "a-icon", component: AIconIntro },
            { path: "a-image", component: AImageIntro },

            // layouts
            { path: "columns", component: ColumnsIntro }
        ]
    }
];

export default new VueRouter({
    routes
})