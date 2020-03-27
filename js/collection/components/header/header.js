import { Component, Host, h, Prop } from '@stencil/core';
export class Header {
    constructor() {
        /**
         * The title of the left menu
         */
        this.leftMenuTitle = 'Title';
        /**
         * The title of the user dropdown
         */
        this.userMenuTitle = 'Username';
    }
    renderFallbackLogo() {
        return (h("svg", { width: "218px", height: "24px", viewBox: "0 0 218 24", version: "1.1" },
            h("title", null, "Logo"),
            h("defs", null),
            h("g", { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                h("g", { id: "Smartmatic_logo_ligthBlue", fill: "#00afdb" },
                    h("path", { d: "M74.4043311,9.98925986 C73.9201858,9.8351942 73.222964,9.74811361 72.3486908,9.74230824 C70.3774025,9.73248376 68.976808,9.72444556 68.3916161,9.71506765 C66.8337404,9.7061363 65.7745079,9.61414348 65.2411574,9.43015782 C64.9116574,9.33369933 64.6739781,9.17427487 64.5641448,8.97108683 C64.4797928,8.82907848 64.3848969,8.51737464 64.3848969,7.86002784 C64.3848969,7.2915479 64.5048348,6.88293899 64.7376815,6.64313244 C64.9867834,6.39618083 65.4994853,6.20683637 66.2485485,6.09296175 C67.0208964,5.97730087 68.1956735,5.91344177 69.7583819,5.91344177 C71.0065277,5.91344177 71.9506548,5.98265968 72.5832947,6.11662981 C73.1711226,6.24434801 73.5546606,6.45468112 73.7286365,6.74048407 C73.8055198,6.8690954 73.9021732,7.17678015 73.9021732,7.87923022 L73.9021732,8.21326243 L75.8093188,8.21326243 L75.8093188,8.06678841 C75.7948208,7.24957059 75.7201342,6.65697602 75.5922882,6.26712293 C75.4490656,5.85896058 75.2034783,5.50081376 74.837953,5.20206035 C74.4043311,4.84882576 73.7958545,4.59204967 73.0314147,4.44378939 C72.2674141,4.30044134 71.192805,4.23300971 69.8251606,4.23300971 C68.3503188,4.23300971 67.0595577,4.29686881 65.9840699,4.42994581 C65.33166,4.50362938 64.8079748,4.61035892 64.4323448,4.74254279 C64.0571542,4.87517322 63.7056876,5.07389559 63.4025477,5.32977855 C62.7540918,5.85896058 62.4368932,6.70788468 62.4368932,7.86538664 C62.4368932,8.89293758 62.6301998,9.68336138 63.0418551,10.2107571 C63.388489,10.6470532 63.8814209,10.9690281 64.5048348,11.1668573 C65.1357174,11.3597743 65.9616639,11.4557863 66.9725697,11.4557863 C69.7535492,11.4557863 71.6874942,11.4638245 72.2770795,11.4785612 C72.8003254,11.4950842 73.2159346,11.560283 73.5045766,11.6661194 C73.7769632,11.763471 73.9606045,11.9175367 74.0625298,12.152431 C74.1776351,12.4002757 74.2391418,12.781644 74.2391418,13.2920703 C74.2391418,14.2700522 73.8933865,14.8202229 73.1838633,14.9814337 C72.4203021,15.1596139 71.1515077,15.2466945 69.31817,15.2466945 C66.8543891,15.2466945 65.3944847,15.1462169 64.9564694,14.9586587 C64.7073675,14.8528223 64.5434962,14.6925047 64.4705668,14.5031603 C64.4169682,14.3473084 64.3427209,13.9905012 64.3352522,13.154081 L64.3312982,13.1263939 C64.3273442,13.0902219 64.3273442,12.9473204 64.3273442,12.8839079 L64.3273442,12.7396667 L62.4742365,12.7396667 L62.4707219,12.8839079 C62.4619352,13.2125813 62.4619352,13.4023723 62.4619352,13.4340786 C62.4619352,14.2419185 62.5533165,14.8666659 62.7343218,15.2846527 C62.9135698,15.7120175 63.2470237,16.0688246 63.7237003,16.3439099 C64.1212969,16.5645141 64.6357561,16.7217057 65.2951954,16.8038741 C65.9454086,16.8869356 66.9466491,16.9320388 68.2905695,16.9320388 C70.8400204,16.9320388 72.6245921,16.826649 73.6082592,16.6207816 C74.628391,16.4095553 75.3339602,15.9777249 75.7161802,15.3395805 C76.0320608,14.7983411 76.1941748,14.0632917 76.1941748,13.1455962 C76.1941748,12.1622555 76.0008681,11.42408 75.6103009,10.8993636 C75.2957383,10.472892 74.898581,10.1732455 74.4043311,9.98925986", id: "Fill-1" }),
                    h("polyline", { id: "Fill-2", points: "88.936163 14.6060444 82.7174855 4.23300971 79.368932 4.23300971 79.368932 16.9320388 81.229742 16.9320388 81.229742 6.09999217 81.678326 6.09999217 88.1891259 16.8606167 88.229824 16.9320388 89.6574247 16.9320388 96.1410925 6.09999217 96.5544048 6.09999217 96.5544048 16.9320388 98.4174757 16.9320388 98.4174757 4.23300971 95.0539996 4.23300971 88.936163 14.6060444" }),
                    h("path", { d: "M103.785273,12.5484513 L107.24191,5.99581601 L107.681562,5.99581601 L111.090599,12.5484513 L103.785273,12.5484513 L103.785273,12.5484513 Z M106.117681,4.23300971 L99.4757282,16.9320388 L101.517775,16.9320388 L102.88563,14.3076183 L111.980289,14.3076183 L113.337326,16.9320388 L115.349515,16.9320388 L108.720977,4.23300971 L106.117681,4.23300971 L106.117681,4.23300971 Z", id: "Fill-3" }),
                    h("path", { d: "M128.788259,10.0145595 C128.540523,10.1815143 128.220053,10.2852355 127.810099,10.3316371 C127.416454,10.3734896 126.521166,10.3966904 124.913527,10.3966904 L119.330211,10.3966904 L119.330211,5.99581601 L124.913527,5.99581601 C126.305169,5.99581601 127.277599,6.02493075 127.776156,6.08043071 C128.23989,6.12683232 128.610612,6.24010684 128.826169,6.39887314 C129.153251,6.65089758 129.322522,7.22181936 129.322522,8.10526964 C129.322522,9.11154771 129.133414,9.77572763 128.788259,10.0145595 L128.788259,10.0145595 Z M128.723901,4.38631699 C128.171564,4.31307523 126.928917,4.26212445 124.913527,4.23300971 L117.466019,4.23300971 L117.466019,16.9320388 L119.330211,16.9320388 L119.330211,12.1640458 L124.913527,12.1640458 C126.270785,12.1640458 127.013553,12.174054 127.211477,12.179968 C127.450397,12.1936155 127.697251,12.2218204 127.96306,12.2595786 C128.628245,12.3805867 128.995,12.7913774 129.104762,13.5124221 C129.140908,13.8954628 129.162508,14.596946 129.162508,15.5950356 L129.162508,16.9320388 L131.03243,16.9320388 L131.03243,15.0168351 C131.03243,13.9750734 130.998487,13.269496 130.933247,12.904652 C130.864921,12.5261604 130.710197,12.2031688 130.458493,11.9079272 C130.246904,11.6882019 129.987707,11.5139684 129.68531,11.3988742 C130.113779,11.2446571 130.440861,11.018108 130.679781,10.7437926 C130.884758,10.5049608 131.026699,10.1906126 131.111776,9.78073173 C131.185391,9.40224016 131.223301,8.83996181 131.223301,8.11891717 C131.223301,7.1613153 131.095466,6.39887314 130.834505,5.85024233 C130.450118,5.02820594 129.73953,4.53643985 128.723901,4.38631699 L128.723901,4.38631699 Z", id: "Fill-4" }),
                    h("polyline", { id: "Fill-5", points: "132.281553 5.99581601 138.248492 5.99581601 138.248492 16.9320388 140.141321 16.9320388 140.141321 5.99581601 146.038835 5.99581601 146.038835 4.23300971 132.281553 4.23300971 132.281553 5.99581601" }),
                    h("polyline", { id: "Fill-6", points: "157.724929 14.6060444 151.51061 4.23300971 148.15534 4.23300971 148.15534 16.9320388 150.023759 16.9320388 150.023759 6.09999217 150.469678 6.09999217 157.026141 16.9320388 158.441843 16.9320388 164.926705 6.09999217 165.335011 6.09999217 165.335011 16.9320388 167.203883 16.9320388 167.203883 4.23300971 163.835925 4.23300971 157.724929 14.6060444" }),
                    h("path", { d: "M173.633917,12.5484513 L177.087348,5.99581601 L177.52848,5.99581601 L180.930626,12.5484513 L173.633917,12.5484513 L173.633917,12.5484513 Z M175.961702,4.23300971 L169.320388,16.9320388 L171.373498,16.9320388 L172.7334,14.3076183 L181.820713,14.3076183 L183.18583,16.9320388 L185.194175,16.9320388 L178.569377,4.23300971 L175.961702,4.23300971 L175.961702,4.23300971 Z", id: "Fill-7" }),
                    h("polyline", { id: "Fill-8", points: "183.07767 5.99581601 189.042302 5.99581601 189.042302 16.9320388 190.939233 16.9320388 190.939233 5.99581601 196.834951 5.99581601 196.834951 4.23300971 183.07767 4.23300971 183.07767 5.99581601" }),
                    h("polygon", { id: "Fill-9", points: "198.951456 16.9320388 201.067961 16.9320388 201.067961 4.23300971 198.951456 4.23300971" }),
                    h("path", { d: "M216.088406,12.3927902 L216.081107,12.5422119 C216.050996,13.5066607 216.006742,14.1025361 215.934202,14.301765 C215.856187,14.5114081 215.729355,14.671244 215.539565,14.7726696 C215.332894,14.8931125 215.008972,14.9777848 214.565975,15.0280448 C214.34288,15.0601931 213.814568,15.0923414 212.91945,15.1222257 C212.124701,15.1589019 211.417549,15.1679578 210.820347,15.1679578 C209.096719,15.1679578 207.744004,15.1222257 206.804176,15.0280448 C206.324224,14.9872934 205.977947,14.8641337 205.754396,14.6739607 C205.54225,14.4837877 205.408575,14.1763414 205.345616,13.7258124 C205.2968,13.4133854 205.259389,12.8215851 205.218329,12.0771936 C205.175443,11.3078985 205.149894,10.6477264 205.149894,10.117506 C205.149894,9.04982037 205.21331,8.20762561 205.322805,7.61763649 C205.453286,6.90584608 205.648551,6.62103936 205.788157,6.5105579 C205.948293,6.38287031 206.344298,6.21578973 207.319713,6.11345854 C208.130885,6.02108879 209.364981,5.98305419 210.981851,5.98305419 C213.193186,5.98305419 214.622091,6.09942196 215.219293,6.34166615 C215.526334,6.46799537 215.7143,6.63054801 215.822426,6.84381346 C215.924621,7.07292666 215.980737,7.47817628 215.980737,8.05458162 L215.980737,8.18000525 C215.984387,8.259244 215.984387,8.35750006 215.984387,8.47839576 L215.984387,8.62147831 L217.830283,8.62147831 L217.830283,8.47477341 C217.815684,7.37131716 217.759568,6.65364045 217.671972,6.29050056 C217.575252,5.87030876 217.341207,5.49811302 216.976225,5.18342196 C216.626299,4.8759756 216.200182,4.65682384 215.7143,4.54453121 C214.779946,4.34032162 213.207786,4.23300971 211.068078,4.23300971 C208.836213,4.23300971 207.111217,4.32085153 205.925937,4.4942712 C204.658537,4.67086042 203.854664,5.3274101 203.549448,6.44943086 C203.299892,7.35184707 203.184466,8.80893456 203.184466,10.7731501 C203.184466,12.8768258 203.340952,14.2881812 203.670348,15.0977749 C204.007044,15.9263858 204.677243,16.4380418 205.659501,16.6381763 C206.64404,16.8292549 208.549702,16.9320388 211.320828,16.9320388 C213.445936,16.9320388 214.962893,16.8469138 215.822426,16.6766637 C216.916916,16.4584175 217.581183,15.8512222 217.789679,14.8790759 C217.874994,14.4661288 217.945709,13.7258124 217.992244,12.546287 L218,12.3927902 L216.088406,12.3927902", id: "Fill-10" }),
                    h("path", { d: "M41.6666905,15.9778811 C42.2771931,14.2591116 41.7260016,12.8446618 41.0691204,12.1578567 C41.0691204,12.1578567 41.0593096,12.1543436 41.0548501,12.149074 C39.2121936,10.5154965 33.3221145,7.74631914 22.9551651,7.74631914 C20.5688982,7.74631914 18.0439415,7.89255068 15.4462953,8.18062241 L15.4315791,8.18062241 C15.4119574,8.18633115 15.2906596,8.22190098 15.1171858,8.26669262 C18.0167387,6.51454901 25.5728789,2.43894878 31.0772131,2.35287857 C36.6051825,2.26680836 37.7584036,3.88633358 37.7677685,3.90126413 C37.8132552,3.96845159 37.8930799,4.00006922 37.9733505,3.98733434 C38.0567428,3.96845159 38.1151619,3.9047772 38.1294322,3.82880706 C38.1387972,3.76952401 38.3167303,2.54609741 37.3820237,1.48602857 C37.2540366,1.3327709 37.1001846,1.19576117 36.9445488,1.07104719 C39.8739802,1.58878586 48.7871397,3.66676671 48.5824496,9.56257628 C48.4107597,14.7276673 42.2678282,18.0505923 38.4117172,19.6301564 C40.4514827,18.3290031 41.312162,16.9619798 41.6666905,15.9778811 L41.6666905,15.9778811 Z M12.8941359,7.68879262 C11.3408995,9.21961283 11.1134661,11.5847871 11.8684558,12.8363183 C11.9045776,12.8898926 11.9665643,12.9210711 12.0285511,12.9245842 L12.0374701,12.9245842 C12.1476192,12.9245842 12.2394844,12.8398314 12.2394844,12.7313653 C12.2394844,12.7186305 12.2341331,12.7054564 12.2341331,12.6962346 C12.2341331,12.4239717 12.2573223,10.4465525 13.5982875,9.89587879 C13.6308417,9.88753525 13.6464499,9.86953077 13.6718689,9.85064802 C13.807437,9.81946952 14.0339785,9.77467788 14.1619656,9.7658952 C15.3517544,9.64776823 18.5585653,9.42293175 22.1966078,9.42293175 C28.6280676,9.42293175 36.9164541,10.0855846 39.952467,13.2460301 C39.9377507,13.7558643 39.4958164,17.4450269 29.5975582,19.5137859 C25.4529189,20.3801968 21.0416029,21.2242118 16.7141251,21.2242118 C13.1434207,21.2242118 9.86927166,20.659925 6.70928526,19.4988554 C4.59950603,18.3030942 3.40169013,16.9084055 3.15864855,15.350359 C2.85674187,13.4225618 3.43335242,10.497492 7.91379038,7.5179696 C11.6909686,4.99865934 17.4454795,2.98523115 25.0306063,1.51193746 C19.2172303,3.43578237 13.9893838,6.60984103 12.8941359,7.68879262 L12.8941359,7.68879262 Z M43.9704571,2.08588526 C40.115238,0.894076291 36.2225593,0.560773784 36.1815321,0.54628237 C36.1543293,0.54628237 36.1257886,0.555504179 36.1012615,0.565165121 C35.2717985,0.18443617 34.2122264,0 32.9310183,0 C32.352178,0 31.7175942,0.0360089665 31.0535779,0.113735638 C30.5670488,0.168627355 30.0622358,0.248110562 29.5400309,0.33945038 C28.7034327,0.428155395 21.5160914,1.21991352 14.4313181,3.39538206 C10.3183411,4.65086542 7.02769202,6.14040706 4.6467765,7.80735873 C1.66160165,9.9011484 0.105689638,12.3032099 0,14.9344993 L0,14.9445994 C0.147608735,18.2438112 3.44985249,20.7279907 9.57093255,22.1319013 C14.1485871,23.1875788 18.740512,23.2780403 18.7913501,23.2780403 L18.7935798,23.2780403 C18.8613639,23.2780403 18.9171074,23.2512532 18.9559049,23.2016311 C19.8339761,23.2565228 20.7231961,23.2815534 21.6289162,23.2815534 C23.6945466,23.2815534 25.837326,23.1340045 28.0028487,22.8411023 C31.1102132,22.4239252 33.523683,21.8021118 35.4011234,21.0929108 C35.4011234,21.0929108 35.4194072,21.0885195 35.4354613,21.0885195 C35.4720291,21.0828108 39.5702897,20.1676561 43.6101312,18.2438112 C49.0092217,15.6849789 51.8543689,12.4933549 51.8543689,9.02946792 C51.8543689,6.08200227 49.1256141,3.67906246 43.9704571,2.08588526 L43.9704571,2.08588526 Z", id: "Fill-12" })))));
    }
    renderLogo() {
        if (this.imageUrl) {
            return h("img", { src: this.imageUrl });
        }
        return this.renderFallbackLogo();
    }
    render() {
        return (h(Host, null,
            h("div", { class: "header mx-auto" },
                h("div", { class: "col--md--12 px-0" },
                    h("nav", { class: "navbar fixed-top navbar-default navbar-expand--md" },
                        h("a", { href: "#", class: "navbar-brand px-6 h-100 d-flex align-items-center mr-0" }, this.renderLogo()),
                        h("div", { class: "collapse navbar-collapse h-100 text-sm" },
                            h("smtt-dropdown", { class: "h-100 page-dropdown", name: this.leftMenuTitle, "full-width": true, size: 300 },
                                h("slot", { name: "left-menu-items" })),
                            h("div", { class: "d-flex ml-auto h-100" },
                                h("smtt-button", { variation: "icon", theme: "tertiary", icon: "bell", "full-height": true, size: "sm" }),
                                h("smtt-button", { variation: "icon", theme: "tertiary", icon: "question-circle", "full-height": true, size: "sm" }),
                                h("smtt-button", { variation: "icon", theme: "tertiary", icon: "cog", "full-height": true, size: "sm" }),
                                h("smtt-dropdown", { class: "user-dropdown", name: this.userMenuTitle, "menu-position": "left", "sub-heading": "Role", "full-width": true, "align-right": true },
                                    h("slot", { name: "user-menu-items" })))))),
                this.breadcrumb && (h("div", { class: "col--md--12 p-0" },
                    h("div", { class: "jumbotron mb-0 text-lg radius-0" },
                        h("div", { class: "container--fluid" },
                            h("div", { class: "row" },
                                h("div", { class: "col--md--12" },
                                    h("span", null, this.breadcrumb))))))),
                this.headerMessage && (h("div", { class: "header-message px-3 py-1 text-sm d-flex align-items-center" },
                    h("smtt-icon", { icon: "bell" }),
                    this.headerMessage,
                    h("slot", { name: "message" }))))));
    }
    static get is() { return "smtt-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["header.css"]
    }; }
    static get properties() { return {
        "leftMenuTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The title of the left menu"
            },
            "attribute": "left-menu-title",
            "reflect": false,
            "defaultValue": "'Title'"
        },
        "userMenuTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The title of the user dropdown"
            },
            "attribute": "user-menu-title",
            "reflect": false,
            "defaultValue": "'Username'"
        },
        "headerMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Message to shown beneath header"
            },
            "attribute": "header-message",
            "reflect": false
        },
        "breadcrumb": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Breadcrumb string"
            },
            "attribute": "breadcrumb",
            "reflect": false
        },
        "imageUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "URl of logo to be used in header"
            },
            "attribute": "image-url",
            "reflect": false
        }
    }; }
}
