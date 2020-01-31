let layouts = ["Columns", "HorizontalLCR", "LeftFixed", "LeftRightFixed", "RightFixed", "Rows", "TopFixed",
    "BottomFixed", "VerticalTCB", "VFlow", "Align", "FixedLayer"];
let temp = Array.apply(null, {length: layouts.length}).map((item, index) => {
    return {
        id: layouts[index],
        text: layouts[index],
        icon: "fa:th-large"
    }
});

let data = [
    {
        text: "布局",
        icon: "fa:th-large",
        children: temp,
    },
    {
        text: "基础组件",
        icon: "fa:square",
        children: [
            {
                text: "表单",
                icon: "fa:align-left",
                children: [
                    { id: "AInput", icon: "fa:align-left", text: "AInput" }
                ]
            },
            {
                text: "按钮",
                icon: "fa:square",
                children: [
                    {
                        id: "AButton",
                        icon: "fa:square",
                        text: "AButton"
                    },
                    {
                        id: "IButton",
                        icon: "fa:square",
                        text: "IButton"
                    }
                ]
            },
            {
                text: "显示",
                icon: "fa:image",
                children: [
                    {
                        id: "AIcon",
                        icon: "fa:image",
                        text: "AIcon"
                    },
                    {
                        id: "AImage",
                        icon: "fa:image",
                        text: "AImage"
                    }
                ]
            },
            {
                text: "功能",
                icon: "fa:font",
                children: [
                    {
                        id: "PColor",
                        icon: "fa:font",
                        text: "PColor"
                    },
                    {
                        id: "PSize",
                        icon: "fa:font",
                        text: "PSize"
                    },
                    {
                        id: "PPadding",
                        icon: "fa:font",
                        text: "PPadding"
                    }
                ]
            }
        ]
    },
    {
        text: "UI",
        icon: "fa:shapes",
        children: [
            {
                id: "ATreeView",
                text: "ATreeView",
                icon: "fa:shapes"
            },
            {
                id: "Expandable",
                text: "Expandable",
                icon: "fa:shapes"
            }
        ]
    }
];

export default data