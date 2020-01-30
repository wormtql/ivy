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
import RowsIntro from "@/components/big/introduction/RowsIntro";
import HorizontalLCRIntro from "@/components/big/introduction/HorizontalLCRIntro";
import LeftFixedIntro from "@/components/big/introduction/LeftFixedIntro";
import LeftRightFixedIntro from "@/components/big/introduction/LeftRightFixedIntro";
import RightFixedIntro from "@/components/big/introduction/RightFixedIntro";
import TopFixedIntro from "@/components/big/introduction/TopFixedIntro";
import BottomFixedIntro from "@/components/big/introduction/BottomFixedIntro";
import VerticalTCBIntro from "@/components/big/introduction/VerticalTCBIntro";
import VFlowIntro from "@/components/big/introduction/VFlowIntro";
import AlignIntro from "@/components/big/introduction/AlignIntro";

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
            { path: "columns", component: ColumnsIntro },
            { path: "rows", component: RowsIntro },
            { path: "horizontal-l-c-r", component: HorizontalLCRIntro },
            { path: "left-fixed", component: LeftFixedIntro },
            { path: "left-right-fixed", component: LeftRightFixedIntro },
            { path: "right-fixed", component: RightFixedIntro },
            { path: "top-fixed", component: TopFixedIntro },
            { path: "bottom-fixed", component: BottomFixedIntro },
            { path: "vertical-t-c-b", component: VerticalTCBIntro },
            { path: "v-flow", component: VFlowIntro },
            { path: "align", component: AlignIntro }
        ]
    }
];

export default new VueRouter({
    routes
})