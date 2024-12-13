import "./background.css";

const Background = ({ className, ...props }) => {
    return (
        <div className={"background " + className}>
            <div className="rectangle-1477"></div>
            <svg
                className="mask-group"
                width="1280"
                height="750"
                viewBox="0 0 1280 706"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_7_79"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1280"
                    height="728"
                >
                    <rect width="1280" height="728" fill="url(#paint0_linear_7_79)" />
                </mask>
                <g mask="url(#mask0_7_79)">
                    <path
                        opacity="0.1"
                        d="M390.482 470.774C215.498 538.67 138.781 476.815 0 393.96V732H1302.76C1333.5 621.334 1372.35 417.493 1281.78 414.961C1168.57 411.797 983.244 561.398 886.701 552.479C790.158 543.561 732.98 386.192 655.975 374.109C578.971 362.026 565.466 402.878 390.482 470.774Z"
                        fill="url(#paint1_linear_7_79)"
                    />
                    <path
                        opacity="0.1"
                        d="M542.788 541.937C294.174 628.504 185.176 549.64 -12 443.999V875H1838.93C1882.61 733.901 1937.8 474.004 1809.12 470.776C1648.28 466.741 1384.97 657.482 1247.81 646.111C1110.64 634.74 1029.4 434.095 919.995 418.689C810.588 403.283 791.401 455.37 542.788 541.937Z"
                        fill="url(#paint2_linear_7_79)"
                    />
                    <path
                        opacity="0.1"
                        d="M455.27 711.027C251.253 807.967 161.807 870.3 0 752V1084H1518.91L1520.09 1078.79C1555.73 921.753 1598.89 731.575 1494.45 728C1362.46 723.482 1146.38 840.418 1033.82 827.684C921.261 814.95 854.595 590.263 764.814 573.011C675.033 555.759 659.288 614.087 455.27 711.027Z"
                        fill="url(#paint3_linear_7_79)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_7_79"
                        x1="608.1"
                        y1="4.37033e-06"
                        x2="1197.82"
                        y2="789.396"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00A3E0" />
                        <stop offset="1" stopColor="#0068C8" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_7_79"
                        x1="704.5"
                        y1="363.5"
                        x2="704.5"
                        y2="732"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.74" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_7_79"
                        x1="988.938"
                        y1="405.162"
                        x2="988.938"
                        y2="875"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.74" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_7_79"
                        x1="821.39"
                        y1="557.864"
                        x2="821.39"
                        y2="1084"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.74" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Background;
