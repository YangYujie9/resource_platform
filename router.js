import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'
// import test from './components/normalMap/testVue'

Vue.use(Router)


const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            //入口登录
            path: '/',
            component: () => import('@/views/Login/login'),
            meta: {
                notRequiresAuth: true //是否需要登录权限
            }
        },
        {
            //进入选中页面
            path: '/system/index',
            name: '',
            component: () => import('@/views/System/system'),
        },
        {
            //进入权限页面
            path: '/AuthorityManagement/index',
            name: "AuthorityManagement",
            component: () => import('@/views/Jurisdiction/AuthorityManagement'),
        },
        {
            //进入字典设置页面
            path: '/Dictionaries/index',
            name: "Dictionaries",
            component: () => import('@/views/Jurisdiction/Dictionaries.vue'),
        },
        {
            //进入权限人员管理页面
            path: '/PersonnelManagement/index',
            name: "PersonnelManagement",
            component: () => import('@/views/Jurisdiction/PersonnelManagement.vue'),
        },
        {
            //点击选中页面进来 进入到home计量管理系统页面 加载home组件同时 redirect: '/Index'是默认显示的下面的子页面
            path: '/home/index',
            name: 'home',
            redirect: '/Index',
            component: () => import('@/views/metering/Home'),
            children: [
                {
                    //默认加载第一个子路由 但是这里点击的时候 点击logo再次回到这个页面
                    path: '/Index', //主页
                    name: 'Index',
                    component: () => import('@/views/metering/Index/index'),
                },
                {
                    path: '/Monitor/Alarm', //实时监控-监控告警
                    name: 'MonitorAlarm',
                    component: () => import('@/views/metering/Monitor/alarm'),
                },
                {
                    path: '/Monitor/Manage', //实时监控-区域管理
                    name: 'MonitorManage',
                    component: () => import('@/views/metering/Monitor/manage'),
                },
                {
                    path: '/water/w_supply', //分析统计-区域供水统计
                    name: 'wsupply',
                    component: () => import('@/views/metering/water/w_supply'),
                },
                {
                    path: '/water/water_use',//分析统计-区域用水统计
                    name: 'water_use',
                    component: () => import('@/views/metering/water/water_use'),
                },
                {
                    path: '/admin/a_config',//
                    name: 'a_config',
                    component: () => import('@/views/metering/Administration/a_configure'),
                },
                {
                    path: '/admin_s',
                    redirect: '/admin_s/s_supper',//数据管理
                    name: 'admin_s',
                    component: () => import('@/views/metering/Administration/Statistics/index'),
                    children: [
                        {
                            path: '/admin_s/s_supper',//数据管理 -统计报表-供水量统计
                            name: 's_supper',
                            component: () => import('@/views/metering/Administration/Statistics/s_supper'),
                        }, {
                            path: '/admin_s/Sell_water',//数据管理 -统计报表-售水量统计
                            name: 'Sell_water',
                            component: () => import('@/views/metering/Administration/Statistics/Sell_water'),
                        },
                        {
                            path: '/admin_s/s_pressure',////数据管理 -统计报表-压力统计
                            name: 's_pressure',
                            component: () => import('@/views/metering/Administration/Statistics/s_pressure'),
                        },
                        {
                            path: '/admin_s/s_abnormalx',//数据管理 -统计报表-异常数据统计
                            name: 's_abnormalx',
                            component: () => import('@/views/metering/Administration/Statistics/s_abnormal'),
                            redirect: "/admin_s/s_abnormalx/abnormal_yl",
                            children: [
                                {
                                    path: '/admin_s/s_abnormalx/abnormal_yl',// 数据管理 - 统计报表 - 异常数据统计 - 压力
                                    name: 'abnormal_yl',
                                    component: () => import('@/views/metering/Administration/Statistics/abnormal/abnormal_yl'),
                                },
                                {
                                    path: '/admin_s/s_abnormalx/abnormal_sz',// 数据管理 -统计报表- 异常数据统计 - 水质
                                    name: 'abnormal_sz',
                                    component: () => import('@/views/metering/Administration/Statistics/abnormal/abnormal_sz'),
                                }
                            ]
                        },
                        {
                            path: '/admin_s/s_Callpolic',////数据管理 -统计报表-告警统计
                            name: 's_Callpolic',
                            component: () => import('@/views/metering/Administration/Statistics/s_Callpolice'),
                        },
                    ]
                },
                {
                    path: '/Quantitative/leakage',//计量分析-漏失分析
                    name: 'Quantitative',
                    component: () => import('@/views/metering/Quantitative/leakage'),
                },
                {
                    path: '/Quantitative/nightTraffic',//计量分析-夜间流量分析
                    name: 'NightTraffic',
                    component: () => import('@/views/metering/Quantitative/nightTraffic'),
                },
                {
                    path: '/Quantitative/aggregate',//计量分析-总分表差分析
                    name: 'Aggregate',
                    component: () => import('@/views/metering/Quantitative/aggregate'),
                },
                {
                    path: '/admin',
                    redirect: '/admin/assessment',//数据管理
                    name: 'admin',
                    component: () => import('@/views/metering/Administration/admin/index'),
                    children: [
                        {
                            path: '/admin/assessment',//数据管理-数据管理-考核表
                            name: 'assessment',
                            component: () => import('@/views/metering/Administration/admin/assessment'),
                        }, {
                            path: '/admin/charging',//数据管理-数据管理-计费表
                            name: 'charging',
                            component: () => import('@/views/metering/Administration/admin/charging'),
                        },
                        {
                            path: '/admin/pressure',//数据管理-数据管理-压力表
                            name: 'pressure',
                            component: () => import('@/views/metering/Administration/admin/pressure'),
                        },
                    ]
                },
                {
                    path: '/Install/install_alarm',//设置-监测数据
                    name: 'install_alarm',
                    component: () => import('@/views/metering/Install/install_alarm'),
                },
                {
                    path: '/Install/monitor',//设置-报警数据
                    name: 'Monitor',
                    component: () => import('@/views/metering/Install/monitor'),
                },
                {
                    path: '/ZoningPlanning/ZoningPlanning',//分区规划
                    name: 'ZoningPlanning',
                    component: () => import('@/views/metering/ZoningPlanning/ZoningPlanning'),
                },
            ]
        },
        {
            path: '/earlyWarning/index',
            name: 'earlyWarning', //预警系统
            redirect: '/earlyWarningIndex',
            component: () => import('@/views/earlywarning/home'),
            children: [
                {
                    path: '/earlyWarningIndex', //首页
                    name: 'timemap',
                    component: () => import('@/views/earlywarning/views/index/index'),
                },
                {
                    path: '/TheWarningIsSet',//预警设置
                    name: 'TheWarningIsSet',
                    component: () => import('@/views//earlywarning/views/index/TheWarningIsSet/TheWarningIsSet')
                },
                {
                    path: '/statisticaStatement',  //统计报表
                    name: 'statisticaStatement',
                    component: () => import('@/views/earlywarning/views/index/statisticaStatement/statisticaStatement'),
                    children: [
                        {
                            path: '/statisticaStatement/TheWarningStatistics',
                            name: 'TheWarningStatistics', //告警统计
                            component: () => import('@/views/earlywarning/components/TheWarningStatistics')
                        },
                    ]
                }
            ]
        },
        {
            path: '/bi/index',//BI
            name: 'bi',
            redirect: '/biIndex',
            component: () => import('@/views/bi/home'),
            children: [
                {
                    path: '/biIndex', //首页
                    name: 'biIndex',
                    component: () => import('@/views/bi/views/index/index')
                },
                {
                    path: '/cockpit/c_shop', //日常营销
                    name: 'c_shop',
                    component: () => import('@/views/bi/views/cockpit/c_shop')
                },
                {
                    path: '/cockpit/c_suply', //日常供水
                    name: 'c_suply',
                    component: () => import('@/views/bi/views/cockpit/c_suply')
                },
                {
                    path: '/cockpit/c_revenue', //营收月报
                    name: 'c_revenue',
                    component: () => import('@/views/bi/views/cockpit/c_revenue')
                },
                {
                    path: '/cockpit/c_customization', //自主定制
                    name: 'c_customization',
                    component: () => import('@/views/bi/views/cockpit/c_customization')
                },
                {
                    path: '/historical/h_pressure', //压力
                    name: 'h_pressure',
                    component: () => import('@/views/bi/views/historical/h_pressure')
                },
                {
                    path: '/historical/h_flow', //流量
                    name: 'h_flow',
                    component: () => import('@/views/bi/views/historical/h_flow')
                },
                {
                    path: '/historical/h_waterworks', //水厂
                    name: 'h_waterworks',
                    component: () => import('@/views/bi/views/historical/h_waterworks')
                },
                {
                    path: '/historical/h_pressure_p', //加压泵站
                    name: 'h_pressure_p',
                    component: () => import('@/views/bi/views/historical/h_pressure_p')
                },
                {
                    path: '/historical/h_dvr', //视频监控
                    name: 'h_dvr',
                    component: () => import('@/views/bi/views/historical/h_dvr')
                },
                {
                    path: '/reports/r_wsupply', //报表分析供水
                    name: 'r_wsupply',
                    component: () => import('@/views/bi/views/reports/r_wsupply')
                },
                {
                    path: '/reports/r_wselling', //报表分析售水
                    name: 'r_wselling',
                    component: () => import('@/views/bi/views/reports/r_wselling')
                },
                {
                    path: '/reports/r_pressure', //报表分析压力
                    name: 'r_pressure',
                    component: () => import('@/views/bi/views/reports/r_pressure')
                },
                {
                    path: '/reports/r_quality', //报表分析水质
                    name: 'r_quality',
                    component: () => import('@/views/bi/views/reports/r_quality')
                },
                {
                    path: '/making/marking', //辅助决策
                    name: 'marking',
                    component: () => import('@/views/bi/views/making/marking')
                }
            ]
        },
        {
            // 用来匹配非法输入等意外页面
            path: '/404',
            name: "404",
            component: () => import('./views/errorPage/notfind'),
            meta: {
                notRequiresAuth: true //是否需要登录权限
            }
        }
    ]
})

/**
 * 路由级别拦截,判断登录和非法输入 需要登录未登录的跳转到登录页面，非法地址跳转到意外页面
 */
router.beforeEach((to, from, next) => {
    if (to.meta.notRequiresAuth) {
        //不需要登录权限
        next();
    } else {
        // 需要登录权限
        if (store.getters["isLogin"]) {
            //已经登录了
            next();
        } else {
            //没有登录 将会重定向到登录页面，带着原来的页面地址
            next({
                path: '/',
                query: {redirect: to.fullPath}
            })
        }
    }
});

export default router;
