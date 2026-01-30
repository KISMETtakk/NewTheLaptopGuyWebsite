module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/NewTheLaptopGuyWebsite/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const navigation = [
    {
        name: 'Home',
        href: '#hero'
    },
    {
        name: 'Dell',
        href: '#dell'
    },
    {
        name: 'Lenovo',
        href: '#lenovo'
    },
    {
        name: 'HP',
        href: '#hp'
    },
    {
        name: 'Accessories',
        href: '#accessories'
    },
    {
        name: 'Videos',
        href: '#videos'
    },
    {
        name: 'Contact',
        href: '#contact'
    },
    {
        name: 'Referral',
        href: '#referrals'
    }
];
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "ztm-trainair-tshiamo-coded-header fixed top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "ztm-trainair-tshiamo-coded-nav mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-logo-container flex lg:flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "ztm-trainair-tshiamo-coded-logo flex items-center gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-logo-box h-10 w-10 border-2 border-white bg-white/5 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold",
                                        children: "TLG"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ztm-trainair-tshiamo-coded-logo-text text-lg font-light tracking-wider",
                                    children: "The Laptop Guy"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-mobile-menu-button flex lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "inline-flex items-center justify-center p-2 text-white/70 hover:text-white",
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Toggle menu"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                    lineNumber: 51,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                    lineNumber: 51,
                                    columnNumber: 59
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-nav-links hidden lg:flex lg:gap-x-8",
                        children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: (e)=>handleNavClick(e, item.href),
                                className: "ztm-trainair-tshiamo-coded-nav-link text-sm font-light tracking-wide text-white/70 transition-colors hover:text-white",
                                children: item.name
                            }, item.name, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `ztm-trainair-tshiamo-coded-mobile-menu lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-mobile-menu-content space-y-1 border-t border-white/10 bg-black px-6 py-4",
                    children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: (e)=>handleNavClick(e, item.href),
                            className: "ztm-trainair-tshiamo-coded-mobile-nav-link block py-3 text-base font-light tracking-wide text-white/70 transition-colors hover:text-white",
                            children: item.name
                        }, item.name, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/header.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Hero() {
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('ztm-trainair-tshiamo-coded-animate-fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "ztm-trainair-tshiamo-coded-hero relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
        ref: heroRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-hero-bg absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"
                }, void 0, false, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-hero-content relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                        style: {
                            animationDelay: '300ms',
                            animationFillMode: 'forwards'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-hero-logo mb-8 inline-flex h-20 w-20 items-center justify-center border-2 border-white bg-white/5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold",
                                children: "TLG"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "ztm-trainair-tshiamo-coded-hero-title mb-6 text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                        style: {
                            animationDelay: '500ms',
                            animationFillMode: 'forwards'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-pretty",
                                children: "Premium Laptops."
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-pretty",
                                children: "Professional Service."
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ztm-trainair-tshiamo-coded-hero-description mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 sm:text-xl opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                        style: {
                            animationDelay: '700ms',
                            animationFillMode: 'forwards'
                        },
                        children: "Carefully inspected and cleaned laptops from Dell, Lenovo, and HP. Every device comes with a 3-month warranty and guaranteed quality."
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-hero-cta flex flex-col sm:flex-row gap-4 justify-center opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                        style: {
                            animationDelay: '900ms',
                            animationFillMode: 'forwards'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#dell",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    document.querySelector('#dell')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                },
                                className: "ztm-trainair-tshiamo-coded-cta-primary group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white",
                                children: "Browse Laptops"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                },
                                className: "ztm-trainair-tshiamo-coded-cta-secondary group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border-2 border-white/30 bg-transparent text-white transition-all hover:border-white hover:bg-white hover:text-black",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-12 w-6 border-2 border-white/30 rounded-full flex items-start justify-center p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-2 bg-white rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/hero.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LaptopCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
function LaptopCard({ brand, laptop, index }) {
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [animatedScore, setAnimatedScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSwipeHint, setShowSwipeHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const imageContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedRam, setSelectedRam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("8GB");
    const [selectedSsd, setSelectedSsd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("256GB");
    const basePrice = Number.parseInt(laptop.price.replace(/[R,]/g, ""));
    const ramUpgradePrice = selectedRam === "16GB" ? 200 : 0;
    const ssdUpgradePrice = selectedSsd === "512GB" ? 200 : 0;
    const totalPrice = basePrice + ramUpgradePrice + ssdUpgradePrice;
    // Use explicit locale to prevent hydration mismatch between server and client
    const formattedPrice = `R${totalPrice.toLocaleString('en-ZA')}`;
    const whatsappLinks = [
        "https://api.whatsapp.com/send/?phone=27813556089&text=Hi+Tshiamo%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0",
        "https://api.whatsapp.com/send/?phone=27817134203&text=Hi+Gucci%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0"
    ];
    const handleBuyNow = ()=>{
        const contactNames = [
            "Tshiamo",
            "Gucci"
        ];
        const phones = [
            "27813556089",
            "27817134203"
        ];
        const randomIndex = Math.floor(Math.random() * 2);
        const contactName = contactNames[randomIndex];
        const phone = phones[randomIndex];
        const message = `Hi ${contactName}! I am interested in purchasing a laptop.

Brand: ${brand}
Processor: ${laptop.processor}
RAM: ${selectedRam}
Storage: ${selectedSsd}
Price: ${formattedPrice}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
        window.open(whatsappUrl, "_blank");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobile && showSwipeHint) {
            const timer = setTimeout(()=>{
                setShowSwipeHint(false);
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        isMobile,
        showSwipeHint
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMobile && isHovering) {
            // Desktop hover behavior - keep as is
            intervalRef.current = setInterval(()=>{
                setCurrentImage((prev)=>(prev + 1) % laptop.images.length);
            }, 2000);
        } else if (isMobile) {
            // Mobile auto-play behavior
            intervalRef.current = setInterval(()=>{
                setCurrentImage((prev)=>(prev + 1) % laptop.images.length);
            }, 3000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (!isMobile) {
                setCurrentImage(0);
            }
        }
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [
        isHovering,
        isMobile
    ]);
    const handleTouchStart = (e)=>{
        if (!isMobile) return;
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e)=>{
        if (!isMobile) return;
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = ()=>{
        if (!isMobile) return;
        const swipeDistance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe left - next image
                setCurrentImage((prev)=>(prev + 1) % laptop.images.length);
            } else {
                // Swipe right - previous image
                setCurrentImage((prev)=>(prev - 1 + laptop.images.length) % laptop.images.length);
            }
        }
    };
    const handlePrevImage = (e)=>{
        e.stopPropagation();
        setCurrentImage((prev)=>(prev - 1 + laptop.images.length) % laptop.images.length);
    };
    const handleNextImage = (e)=>{
        e.stopPropagation();
        setCurrentImage((prev)=>(prev + 1) % laptop.images.length);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    // Animate performance score
                    const duration = 1500;
                    const steps = 60;
                    const increment = laptop.performance / steps;
                    let current = 0;
                    const timer = setInterval(()=>{
                        current += increment;
                        if (current >= laptop.performance) {
                            setAnimatedScore(laptop.performance);
                            clearInterval(timer);
                        } else {
                            setAnimatedScore(current);
                        }
                    }, duration / steps);
                }
            });
        }, {
            threshold: 0.3
        });
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return ()=>observer.disconnect();
    }, [
        laptop.performance,
        hasAnimated
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "ztm-trainair-tshiamo-coded-card group relative opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.04]",
        style: {
            animationDelay: `${index * 150}ms`,
            animationFillMode: "forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imageContainerRef,
                className: "ztm-trainair-tshiamo-coded-image-container relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] cursor-pointer",
                onMouseEnter: ()=>!isMobile && setIsHovering(true),
                onMouseLeave: ()=>!isMobile && setIsHovering(false),
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: [
                    laptop.images.map((image, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: image || "/placeholder.svg",
                            alt: `${brand} ${laptop.processor} - Image ${i + 1}`,
                            className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${currentImage === i ? "opacity-100" : "opacity-0"}`
                        }, i, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-image-indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-3 py-2 backdrop-blur-sm border border-white/20",
                        children: laptop.images.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `ztm-trainair-tshiamo-coded-indicator h-1.5 w-8 transition-all duration-500 ${currentImage === i ? "bg-white" : "bg-white/30"}`
                            }, i, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    isMobile && showSwipeHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-swipe-hint absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 text-xs text-white/70 backdrop-blur-sm border border-white/20 animate-pulse",
                        children: "← Swipe to browse →"
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrevImage,
                                className: "ztm-trainair-tshiamo-coded-nav-btn ztm-trainair-tshiamo-coded-nav-prev absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white/70 backdrop-blur-sm border border-white/20 hover:bg-black/70 hover:text-white transition-all",
                                "aria-label": "Previous image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNextImage,
                                className: "ztm-trainair-tshiamo-coded-nav-btn ztm-trainair-tshiamo-coded-nav-next absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white/70 backdrop-blur-sm border border-white/20 hover:bg-black/70 hover:text-white transition-all",
                                "aria-label": "Next image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-card-content p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-card-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "ztm-trainair-tshiamo-coded-card-title text-2xl font-light tracking-wide text-white",
                                children: [
                                    brand,
                                    " ",
                                    laptop.processor
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ztm-trainair-tshiamo-coded-card-summary mt-2 text-sm font-light text-white/60 leading-relaxed",
                                children: laptop.summary
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-specs-grid grid grid-cols-2 gap-3 pt-4 border-t border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        className: "h-4 w-4 text-white/40"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-light text-white/70",
                                        children: [
                                            laptop.processor,
                                            " Processor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-4 w-4 text-white/40"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-light text-white/70",
                                        children: [
                                            selectedRam,
                                            " RAM"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                        className: "h-4 w-4 text-white/40"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-light text-white/70",
                                        children: [
                                            selectedSsd,
                                            " SSD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-spec-item flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4 text-white/40"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-light text-white/70",
                                        children: "Fast & Reliable"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-config-section pt-4 border-t border-white/10 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-config-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-white/50 mb-2 tracking-wide uppercase",
                                        children: "RAM Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${selectedRam === "8GB" ? "border-white bg-white/10 text-white" : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedRam === "8GB",
                                                        onChange: ()=>setSelectedRam("8GB"),
                                                        className: "ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-light",
                                                        children: "8GB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${selectedRam === "16GB" ? "border-white bg-white/10 text-white" : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedRam === "16GB",
                                                        onChange: ()=>setSelectedRam("16GB"),
                                                        className: "ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-light",
                                                        children: "16GB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-white/40 ml-auto",
                                                        children: "+R200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-config-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-white/50 mb-2 tracking-wide uppercase",
                                        children: "SSD Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${selectedSsd === "256GB" ? "border-white bg-white/10 text-white" : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedSsd === "256GB",
                                                        onChange: ()=>setSelectedSsd("256GB"),
                                                        className: "ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-light",
                                                        children: "256GB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `ztm-trainair-tshiamo-coded-config-option flex-1 flex items-center gap-2 px-3 py-2 border cursor-pointer transition-all ${selectedSsd === "512GB" ? "border-white bg-white/10 text-white" : "border-white/20 bg-white/[0.02] text-white/50 hover:border-white/40"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedSsd === "512GB",
                                                        onChange: ()=>setSelectedSsd("512GB"),
                                                        className: "ztm-trainair-tshiamo-coded-checkbox h-4 w-4 border-white/30 bg-transparent checked:bg-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-light",
                                                        children: "512GB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-white/40 ml-auto",
                                                        children: "+R200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-performance pt-4 border-t border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-performance-header flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-light text-white/60",
                                        children: "Performance"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ztm-trainair-tshiamo-coded-performance-score text-2xl font-light text-white tabular-nums",
                                        children: [
                                            animatedScore.toFixed(1),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-white/40",
                                                children: "/10"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-performance-bar h-1 bg-white/10 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-performance-fill h-full bg-white transition-all duration-1000 ease-out",
                                    style: {
                                        width: `${animatedScore / 10 * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-card-footer flex items-center justify-between pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-price text-3xl font-light text-white",
                                children: formattedPrice
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            !laptop.outOfStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBuyNow,
                                className: "ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white",
                                children: "Save Configuration"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            laptop.outOfStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: true,
                                className: "ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white/30 bg-white/10 text-white/40 cursor-not-allowed opacity-50",
                                children: "OUT OF STOCK"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LaptopSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$components$2f$laptop$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/components/laptop-card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const laptopData = {
    Dell: [
        {
            processor: "i3",
            ram: "8GB",
            ssd: "256GB",
            price: "R 3,599",
            performance: 8.6,
            summary: "Perfect for everyday tasks, web browsing, and office work",
            images: [
                "/laptops/Dell/i3/1.png",
                "/laptops/Dell/i3/2.png",
                "/laptops/Dell/i3/3.png"
            ],
            outOfStock: true
        },
        {
            processor: "i5",
            ram: "8GB",
            ssd: "256GB",
            price: "R 5,199",
            performance: 9.4,
            summary: "Ideal for multitasking, productivity, and light content creation",
            images: [
                "/laptops/Dell/i5/1.png",
                "/laptops/Dell/i5/2.png",
                "/laptops/Dell/i5/3.png"
            ]
        },
        {
            processor: "i7",
            ram: "8GB",
            ssd: "256GB",
            price: "R 5,799",
            performance: 9.8,
            summary: "Professional-grade performance for demanding applications",
            images: [
                "/laptops/Dell/i7/1.png",
                "/laptops/Dell/i7/2.png",
                "/laptops/Dell/i7/3.png"
            ]
        }
    ],
    Lenovo: [
        {
            processor: "i3",
            ram: "8GB",
            ssd: "256GB",
            price: "R 3,599",
            performance: 8.3,
            summary: "Reliable performance for daily computing needs",
            images: [
                "/laptops/Lenovo/i3/1.png",
                "/laptops/Lenovo/i3/2.png",
                "/laptops/Lenovo/i3/3.png"
            ],
            outOfStock: true
        },
        {
            processor: "i5",
            ram: "8GB",
            ssd: "256GB",
            price: "R 5,099",
            performance: 9.1,
            summary: "Balanced power and efficiency for professionals",
            images: [
                "/laptops/Lenovo/i5/1.png",
                "/laptops/Lenovo/i5/2.png",
                "/laptops/Lenovo/i5/3.png"
            ]
        },
        {
            processor: "i7",
            ram: "8GB",
            ssd: "256GB",
            price: "R 5,699",
            performance: 9.6,
            summary: "High-performance computing for power users",
            images: [
                "/laptops/Lenovo/i7/1.png",
                "/laptops/Lenovo/i7/2.png",
                "/laptops/Lenovo/i7/3.png"
            ]
        }
    ],
    HP: [
        {
            processor: "i3",
            ram: "8GB",
            ssd: "256GB",
            price: "R 3,699",
            performance: 8.1,
            summary: "Dependable laptop for essential computing tasks",
            images: [
                "/laptops/Hp/i3/1.png",
                "/laptops/Hp/i3/2.png",
                "/laptops/Hp/i3/3.png"
            ]
        },
        {
            processor: "i5",
            ram: "8GB",
            ssd: "256GB",
            price: "R 5,099",
            performance: 8.9,
            summary: "Versatile performance for work and entertainment",
            images: [
                "/laptops/Hp/i5/1.png",
                "/laptops/Hp/i5/2.png",
                "/laptops/Hp/i5/3.png"
            ]
        },
        {
            processor: "i7",
            ram: "8GB",
            ssd: "256GB",
            price: "R 5,899",
            performance: 9.4,
            summary: "Premium performance for intensive workloads",
            images: [
                "/laptops/Hp/i7/1.png",
                "/laptops/Hp/i7/2.png",
                "/laptops/Hp/i7/3.png"
            ],
            outOfStock: true
        }
    ]
};
function LaptopSection({ brand, id }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('ztm-trainair-tshiamo-coded-animate-fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    const laptops = laptopData[brand];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "ztm-trainair-tshiamo-coded-laptop-section py-24 px-6 lg:px-8 border-t border-white/5",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ztm-trainair-tshiamo-coded-laptop-container mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-section-header mb-16 text-center opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-4",
                            children: [
                                brand,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/50",
                                    children: "Collection"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
                                    lineNumber: 139,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto",
                            children: [
                                "Premium ",
                                brand,
                                " laptops with guaranteed quality and 3-month warranty"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-laptop-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
                    children: laptops.map((laptop, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$components$2f$laptop$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            brand: brand,
                            laptop: laptop,
                            index: index
                        }, index, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/laptop-section.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccessoriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
'use client';
;
;
;
const chargers = [
    {
        brand: 'Dell',
        types: 'Original / Generic',
        wattage: '45W / 65W / 90W',
        price: 'From R 349'
    },
    {
        brand: 'Lenovo',
        types: 'Original / Generic',
        wattage: '45W / 65W / 90W',
        price: 'From R 349'
    },
    {
        brand: 'HP',
        types: 'Original / Generic',
        wattage: '45W / 65W / 90W',
        price: 'From R 349'
    }
];
const whatsappLinks = [
    'https://api.whatsapp.com/send/?phone=27813556089&text=Hi+Tshiamo%21+I+am+interested+in+purchasing+a+laptop+charger.&type=phone_number&app_absent=0',
    'https://api.whatsapp.com/send/?phone=27817134203&text=Hi+Gucci%21+I+am+interested+in+purchasing+a+laptop+charger.&type=phone_number&app_absent=0'
];
function AccessoriesSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('ztm-trainair-tshiamo-coded-animate-fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    const handleBuyNow = ()=>{
        const randomLink = whatsappLinks[Math.floor(Math.random() * whatsappLinks.length)];
        window.open(randomLink, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "accessories",
        className: "ztm-trainair-tshiamo-coded-accessories-section py-24 px-6 lg:px-8 border-t border-white/5",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ztm-trainair-tshiamo-coded-accessories-container mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-section-header mb-16 text-center opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-4",
                            children: [
                                "Accessories ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/50",
                                    children: "& Chargers"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto",
                            children: "Original and generic chargers for all major laptop brands"
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-accessories-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
                    children: chargers.map((charger, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-accessory-card group relative opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.04]",
                            style: {
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: 'forwards'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-accessory-image relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-16 w-16 text-white/20 mx-auto mb-4 group-hover:text-white/40 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-light text-white/50",
                                                    children: [
                                                        charger.brand,
                                                        " Charger"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-accessory-content p-6 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "ztm-trainair-tshiamo-coded-accessory-title text-2xl font-light tracking-wide text-white",
                                            children: [
                                                charger.brand,
                                                " Chargers"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ztm-trainair-tshiamo-coded-accessory-specs space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/60",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/80 font-light",
                                                            children: charger.types
                                                        }, void 0, false, {
                                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/60",
                                                            children: "Wattage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/80 font-light",
                                                            children: charger.wattage
                                                        }, void 0, false, {
                                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ztm-trainair-tshiamo-coded-accessory-footer flex items-center justify-between pt-4 border-t border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ztm-trainair-tshiamo-coded-accessory-price text-2xl font-light text-white",
                                                    children: charger.price
                                                }, void 0, false, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleBuyNow,
                                                    className: "ztm-trainair-tshiamo-coded-buy-button px-6 py-3 text-sm font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white",
                                                    children: "BUY NOW"
                                                }, void 0, false, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/accessories-section.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/video-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-ssr] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
'use client';
;
;
;
function VideoCard({ videoId, title, duration, onExpand, index, isVisible, isActivePreview, onHoverStart, onHoverEnd }) {
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use isActivePreview from parent to determine if this card should show video
    const isHovering = isActivePreview;
    const showControls = isActivePreview;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Detect touch device
        const checkTouchDevice = ()=>{
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);
        return ()=>window.removeEventListener('resize', checkTouchDevice);
    }, []);
    // Reset mute state when user stops hovering - ensures fresh state when they return
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActivePreview) {
            setIsMuted(true);
        }
    }, [
        isActivePreview
    ]);
    const handleMouseEnter = ()=>{
        if (!isTouchDevice) {
            onHoverStart();
        }
    };
    const handleMouseLeave = ()=>{
        if (!isTouchDevice) {
            onHoverEnd();
        }
    };
    const handleTouchStart = (e)=>{
        if (isTouchDevice) {
            e.preventDefault();
            if (isActivePreview) {
                onHoverEnd();
            } else {
                onHoverStart();
            }
        }
    };
    const toggleMute = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        // Use YouTube iframe API via postMessage to mute/unmute without reloading
        if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: newMuted ? 'mute' : 'unMute'
            }), '*');
        }
    };
    const handleExpand = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        onExpand();
    };
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const thumbnailUrlFallback = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    // YouTube embed URL with autoplay - starts muted, use enablejsapi for postMessage control
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&enablejsapi=1&origin=${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: `ztm-trainair-tshiamo-coded-video-card group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#111111] transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
        style: {
            transitionDelay: `${index * 0.1}s`
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onTouchStart: handleTouchStart,
        onClick: handleExpand,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-video-thumbnail relative aspect-video overflow-hidden lg:aspect-[21/9]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: thumbnailUrl || "/placeholder.svg",
                        alt: title,
                        className: `absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovering ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`,
                        onError: (e)=>{
                            e.target.src = thumbnailUrlFallback;
                        }
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        ref: iframeRef,
                        src: embedUrl,
                        title: `${title} preview`,
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${isHovering ? 'opacity-70' : 'opacity-60'}`
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-animate-scan absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovering ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-video-play-btn w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "h-7 w-7 lg:h-9 lg:w-9 text-white ml-1",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full border border-white/30 animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-3.5 w-3.5 text-white animate-bounce",
                                            style: {
                                                animationDuration: '1s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping"
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold text-white tracking-wide uppercase",
                                    children: "Preview"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-0.5 ml-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-0.5 h-2 bg-white rounded-full animate-pulse",
                                            style: {
                                                animationDelay: '0ms',
                                                animationDuration: '0.5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-0.5 h-3 bg-white rounded-full animate-pulse",
                                            style: {
                                                animationDelay: '100ms',
                                                animationDuration: '0.5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-0.5 h-2 bg-white rounded-full animate-pulse",
                                            style: {
                                                animationDelay: '200ms',
                                                animationDuration: '0.5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-0.5 h-3.5 bg-white rounded-full animate-pulse",
                                            style: {
                                                animationDelay: '300ms',
                                                animationDuration: '0.5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-0.5 h-2 bg-white rounded-full animate-pulse",
                                            style: {
                                                animationDelay: '400ms',
                                                animationDuration: '0.5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg flex items-center gap-2 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-3.5 w-3.5 text-white/80"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-white tracking-wide",
                                children: duration
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `ztm-trainair-tshiamo-coded-video-controls absolute bottom-0 left-0 right-0 p-4 transition-all duration-400 ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleMute,
                                    className: "ztm-trainair-tshiamo-coded-video-control-btn hidden lg:flex w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center transition-all hover:bg-white/25 hover:border-white/40 active:scale-90",
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                        className: "h-5 w-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: "h-5 w-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExpand,
                                    className: "ztm-trainair-tshiamo-coded-video-control-btn w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all hover:bg-white/35 hover:border-white/50 active:scale-90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                        className: "h-4 w-4 lg:h-5 lg:w-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-video-info p-5 lg:p-6 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `ztm-trainair-tshiamo-coded-video-title text-base lg:text-lg font-medium tracking-wide text-white leading-snug transition-all duration-500 ${isHovering ? 'text-white' : 'text-white/90'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block transition-transform duration-700 ${isHovering ? 'translate-x-1' : 'translate-x-0'}`,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs lg:text-sm text-white/40 font-light flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-3 w-3 lg:h-3.5 lg:w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this),
                                            isTouchDevice ? 'Tap to preview' : 'Hover to preview'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${isHovering ? 'bg-white/10 border-white/20 rotate-12' : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "h-4 w-4 lg:h-5 lg:w-5 text-white/60",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 pointer-events-none rounded-xl transition-all duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`,
                style: {
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)'
                }
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/video-card.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$components$2f$video$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/components/video-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
'use client';
;
;
;
;
// Dynamic video data - add new videos here and cards will be auto-generated
const videos = [
    {
        id: '5WXWTCRCN2s',
        title: 'Things to Avoid With Your Laptop',
        duration: '8:42'
    },
    {
        id: 'vu5aAyy0zCU',
        title: 'Laptop Care Tips & Tricks',
        duration: '12:15'
    },
    {
        id: 'tABqVrSs2vA',
        title: 'How to Download Drivers',
        duration: '6:33'
    },
    {
        id: 'uOEL7DJYw_o',
        title: 'Common Laptop Mistakes',
        duration: '9:18'
    },
    {
        id: 'YPJAtG3roYw',
        title: 'How to Update Drivers',
        duration: '7:45'
    }
];
function VideosSection() {
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasShownPopup, setHasShownPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedVideo, setExpandedVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProgrammaticScroll, setIsProgrammaticScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activePreviewId, setActivePreviewId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check for programmatic scroll flag from sessionStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkProgrammaticScroll = ()=>{
            const flag = window.sessionStorage.getItem('ztm-programmatic-scroll');
            setIsProgrammaticScroll(flag === 'true');
        };
        // Check immediately
        checkProgrammaticScroll();
        // Set up interval to check periodically
        const interval = setInterval(checkProgrammaticScroll, 100);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                // Only show popup if:
                // 1. Section is visible
                // 2. Popup hasn't been shown yet
                // 3. Not a programmatic scroll (from referral button)
                if (entry.isIntersecting && !hasShownPopup && !isProgrammaticScroll) {
                    // Add a small delay to ensure it's a natural scroll
                    setTimeout(()=>{
                        if (!isProgrammaticScroll) {
                            setShowPopup(true);
                            setHasShownPopup(true);
                        }
                    }, 300);
                }
            });
        }, {
            threshold: 0.3
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, [
        hasShownPopup,
        isProgrammaticScroll
    ]);
    const handleClosePopup = ()=>{
        setShowPopup(false);
    };
    const handleExpandVideo = (videoId)=>{
        setExpandedVideo(videoId);
    };
    const handleCloseExpanded = ()=>{
        setExpandedVideo(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-popup-backdrop",
                        onClick: handleClosePopup
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-popup-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-popup",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClosePopup,
                                    className: "ztm-trainair-tshiamo-coded-close-btn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-popup-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ztm-trainair-tshiamo-coded-popup-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "64",
                                                height: "64",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "ztm-trainair-tshiamo-coded-icon-path-1",
                                                        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "ztm-trainair-tshiamo-coded-icon-path-2",
                                                        d: "M10 9l5 3-5 3V9z",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "ztm-trainair-tshiamo-coded-popup-title ztm-trainair-tshiamo-coded-text-animate",
                                            style: {
                                                animationDelay: '0.2s'
                                            },
                                            children: "Help Videos"
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "ztm-trainair-tshiamo-coded-popup-message ztm-trainair-tshiamo-coded-text-animate",
                                            style: {
                                                animationDelay: '0.4s'
                                            },
                                            children: "Learn how to take care of your laptop and keep it running smoothly with our curated video guides."
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "ztm-trainair-tshiamo-coded-popup-submessage ztm-trainair-tshiamo-coded-text-animate",
                                            style: {
                                                animationDelay: '0.6s'
                                            },
                                            children: "Hover or tap on any video to preview. Click to expand and watch."
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleClosePopup,
                                            className: "ztm-trainair-tshiamo-coded-cta-btn ztm-trainair-tshiamo-coded-text-animate",
                                            style: {
                                                animationDelay: '0.8s'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ztm-trainair-tshiamo-coded-cta-shine"
                                                }, void 0, false, {
                                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                "Got it!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            expandedVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-video-expanded-backdrop",
                        onClick: handleCloseExpanded
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-video-expanded-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-video-expanded",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCloseExpanded,
                                    className: "ztm-trainair-tshiamo-coded-video-expanded-close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-video-expanded-player",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: `https://www.youtube.com/embed/${expandedVideo}?autoplay=1&rel=0`,
                                        title: "Video player",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true,
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-video-expanded-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: videos.find((v)=>v.id === expandedVideo)?.title
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Duration: ",
                                                videos.find((v)=>v.id === expandedVideo)?.duration
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                id: "videos",
                className: "ztm-trainair-tshiamo-coded-videos-section py-24 md:py-32 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-videos-container mx-auto max-w-7xl px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-videos-header mb-16 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-videos-badge inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-light tracking-wider",
                                            children: "HELP VIDEOS"
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "ztm-trainair-tshiamo-coded-videos-title text-4xl md:text-5xl font-extralight tracking-tight text-balance",
                                    children: "Learn & Protect Your Investment"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "ztm-trainair-tshiamo-coded-videos-subtitle mt-4 text-lg text-white/60 font-light max-w-2xl mx-auto",
                                    children: "Watch these helpful videos to keep your laptop in perfect condition"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-videos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 lg:max-w-4xl lg:mx-auto",
                            children: videos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$components$2f$video$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    videoId: video.id,
                                    title: video.title,
                                    duration: video.duration,
                                    onExpand: ()=>handleExpandVideo(video.id),
                                    index: index,
                                    isVisible: true,
                                    isActivePreview: activePreviewId === video.id,
                                    onHoverStart: ()=>setActivePreviewId(video.id),
                                    onHoverEnd: ()=>setActivePreviewId(null)
                                }, video.id, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/videos-section.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
'use client';
;
;
;
function ContactSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('ztm-trainair-tshiamo-coded-animate-fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    const handleWhatsAppClick = ()=>{
        window.open('https://api.whatsapp.com/send/?phone=27813556089&text=Hi+there%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0', '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "ztm-trainair-tshiamo-coded-contact-section py-24 px-6 lg:px-8 border-t border-white/5",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ztm-trainair-tshiamo-coded-contact-container mx-auto max-w-4xl text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-contact-icon mb-8 inline-flex h-20 w-20 items-center justify-center border-2 border-white bg-white/5 animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "h-10 w-10 text-white"
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6",
                        children: [
                            "Get In ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/50",
                                children: "Touch"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                                lineNumber: 44,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed",
                        children: "Have questions about our laptops? Ready to make a purchase? Contact us directly on WhatsApp for fast, friendly service."
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleWhatsAppClick,
                        className: "ztm-trainair-tshiamo-coded-whatsapp-button group relative inline-flex items-center justify-center gap-3 px-12 py-5 text-base font-medium tracking-wide border-2 border-white bg-white text-black transition-all hover:bg-transparent hover:text-white hover:scale-105",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Chat on WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ztm-trainair-tshiamo-coded-contact-availability mt-8 text-sm font-light text-white/40",
                        children: "Available during business hours • Fast response guaranteed"
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/contact-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReferralSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
'use client';
;
;
;
const terms = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
        text: 'Provided The Sale Goes Through'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        text: 'All laptops are carefully inspected and cleaned before being sold'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        text: 'We do not accept laptop trade-ins'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        text: 'No Layby'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        text: 'All laptops receive a 3-month warranty'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
        text: 'NO REFUNDS*** (ONLY SWAPPING PROVIDED THE REASON IS VALID)'
    }
];
function ReferralSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('ztm-trainair-tshiamo-coded-animate-fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "referrals",
        className: "ztm-trainair-tshiamo-coded-referral-section py-24 px-6 lg:px-8 border-t border-white/5",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ztm-trainair-tshiamo-coded-referral-container mx-auto max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "ztm-trainair-tshiamo-coded-section-title text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6",
                            children: [
                                "Get ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/50",
                                    children: "R100"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                " For Each Referral"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ztm-trainair-tshiamo-coded-section-description text-lg font-light text-white/60 max-w-2xl mx-auto",
                            children: "Refer a friend and earn R100 when they make a purchase"
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-terms-list space-y-4",
                    children: terms.map((term, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-term-item opacity-0 ztm-trainair-tshiamo-coded-animate-fade-in flex items-start gap-4 border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04]",
                            style: {
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'forwards'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(term.icon, {
                                    className: "h-5 w-5 text-white/40 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-light text-white/70 leading-relaxed",
                                    children: term.text
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-section.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function LoadingScreen() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const progressInterval = setInterval(()=>{
            setProgress((prev)=>{
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 2500);
        return ()=>{
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);
    if (!isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ztm-trainair-tshiamo-coded-loading-screen fixed inset-0 z-50 flex items-center justify-center bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-loading-bg absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-loading-content relative z-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-laptop-animation relative mx-auto mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-laptop-screen relative mx-auto h-32 w-44 border-2 border-white/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-laptop-inner absolute inset-3 border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ztm-trainair-tshiamo-coded-logo-text text-2xl font-light tracking-[0.3em] text-white/90 animate-pulse",
                                                children: "TLG"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ztm-trainair-tshiamo-coded-scan-line absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent ztm-trainair-tshiamo-coded-animate-scan"
                                        }, void 0, false, {
                                            fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-laptop-base relative mx-auto h-3 w-52 border-x-2 border-b-2 border-white/20 bg-gradient-to-b from-white/10 to-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-laptop-trackpad absolute left-1/2 top-0 h-full w-16 -translate-x-1/2 bg-white/5"
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-glow-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ztm-trainair-tshiamo-coded-glow-orb-1 absolute h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ztm-trainair-tshiamo-coded-glow-orb-2 absolute h-40 w-40 rounded-full bg-white/5 blur-3xl animate-pulse",
                                        style: {
                                            animationDelay: '1s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-progress-container mx-auto w-64 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-progress-bar h-[2px] bg-white/10 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-progress-fill h-full bg-white transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-progress-info flex items-center justify-between text-sm font-light",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ztm-trainair-tshiamo-coded-progress-label text-white/50 tracking-widest",
                                        children: "LOADING"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ztm-trainair-tshiamo-coded-progress-percent text-white/70 tabular-nums",
                                        children: [
                                            progress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ztm-trainair-tshiamo-coded-loading-dots mt-8 flex justify-center gap-2",
                        children: [
                            0,
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ztm-trainair-tshiamo-coded-loading-dot h-1 w-1 rounded-full bg-white/40",
                                style: {
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.15}s`
                                }
                            }, i, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NewTheLaptopGuyWebsite/components/loading-screen.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReferralPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/NewTheLaptopGuyWebsite/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
function ReferralPopup() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Show popup after loading screen (3 seconds delay)
        const timer = setTimeout(()=>{
            setIsVisible(true);
        }, 3000);
        return ()=>clearTimeout(timer);
    }, []);
    const handleClose = ()=>{
        setIsVisible(false);
    };
    const handleTakeMeThere = ()=>{
        setIsVisible(false);
        // Set a flag to indicate programmatic scroll is happening
        // This prevents the video popup from showing during this scroll
        window.sessionStorage.setItem('ztm-programmatic-scroll', 'true');
        // Scroll to referral section
        const referralSection = document.getElementById('referrals');
        if (referralSection) {
            referralSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Clear the flag after scroll completes
        setTimeout(()=>{
            window.sessionStorage.removeItem('ztm-programmatic-scroll');
        }, 2000);
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-popup-backdrop",
                onClick: handleClose
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ztm-trainair-tshiamo-coded-popup-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ztm-trainair-tshiamo-coded-popup",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "ztm-trainair-tshiamo-coded-close-btn",
                            "aria-label": "Close popup",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ztm-trainair-tshiamo-coded-popup-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-popup-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-16 h-16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 2L2 7L12 12L22 7L12 2Z",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "ztm-trainair-tshiamo-coded-icon-path-1"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 17L12 22L22 17",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "ztm-trainair-tshiamo-coded-icon-path-2"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 12L12 17L22 12",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "ztm-trainair-tshiamo-coded-icon-path-3"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "ztm-trainair-tshiamo-coded-popup-title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ztm-trainair-tshiamo-coded-text-animate",
                                        children: "Earn Rewards!"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "ztm-trainair-tshiamo-coded-popup-message",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ztm-trainair-tshiamo-coded-text-animate",
                                        style: {
                                            animationDelay: '0.2s'
                                        },
                                        children: [
                                            "Refer a friend and get ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "R100 for"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                                lineNumber: 109,
                                                columnNumber: 40
                                            }, this),
                                            " each referral!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "ztm-trainair-tshiamo-coded-popup-submessage",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ztm-trainair-tshiamo-coded-text-animate",
                                        style: {
                                            animationDelay: '0.4s'
                                        },
                                        children: "Your friend also gets a discount. It's a win-win!"
                                    }, void 0, false, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ztm-trainair-tshiamo-coded-popup-buttons",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleTakeMeThere,
                                        className: "ztm-trainair-tshiamo-coded-cta-btn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Take Me There"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NewTheLaptopGuyWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ztm-trainair-tshiamo-coded-cta-shine"
                                            }, void 0, false, {
                                                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NewTheLaptopGuyWebsite/components/referral-popup.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c41b52ac._.js.map