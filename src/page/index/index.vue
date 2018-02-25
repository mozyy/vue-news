<template>
    <div id="index">
        <!-- tab-container -->
        <mt-tab-container class="page-wrap" v-model="selected">
            <mt-tab-container-item id="1">
                <!-- 头部 -->
                <m-header/>
                <!-- 内容区域 -->
                <swiper-container/>
                <!-- 底部 -->
                <m-footer/>
                <!-- 子页面视图 -->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
               <m-activity></m-activity>
               <m-act></m-act>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="(n,m) in 10" :key="m" :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell v-for="(n,m) in 3" :key="m" :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <mt-cell v-for="(n,m) in 4" :key="m" :title="'content ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
        <m-tabbar v-model="selected">
            <m-tabbar-item id='1'>
                <img src="~@/assets/img/camera.png" alt="" slot="icon-normal"> 
                <img src="~@/assets/img/camera_fill.png" alt="" slot="icon-active"> 
                <span>首页</span>
            </m-tabbar-item>
            <m-tabbar-item id='2'>
                <img src="~@/assets/img/mark.png" alt="" slot="icon-normal"> 
                <img src="~@/assets/img/mark_fill.png" alt="" slot="icon-active"> 
                <span>消息</span>
            </m-tabbar-item>
            <m-tabbar-item id='3'>
                <img src="~@/assets/img/sponsor.png" alt="" slot="icon-normal"> 
                <img src="~@/assets/img/sponsor_fill.png" alt="" slot="icon-active"> 
                <span>佣金</span>
            </m-tabbar-item>
            <m-tabbar-item id='4'>
                <img src="~@/assets/img/upstage.png" alt="" slot="icon-normal"> 
                <img src="~@/assets/img/upstage_fill.png" alt="" slot="icon-active"> 
                <span>成就</span>
            </m-tabbar-item>
            <m-tabbar-item id='5'>
                <img src="~@/assets/img/my.png" alt="" slot="icon-normal"> 
                <img src="~@/assets/img/my_fill.png" alt="" slot="icon-active"> 
                <span>我的</span>
            </m-tabbar-item>
        </m-tabbar> 
        <!-- 子页面视图 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import mHeader from './components/index_header'
import mFooter from './components/index_footer'
import swiperContainer from './components/swiperContainer'
import mTabbar from '@/components/tabbar/tabbar'
import mTabbarItem from '@/components/tabbar/tabbar_item'
import mActivity from './activity'
import mAct from './act'
import { mapActions } from 'vuex'
export default {
   data() {
        return {
            selected: '1'
        }
    },
    created() {
        this.get_indexColumn_data()
    },
    methods: {
        ...mapActions('index', [
            'get_indexColumn_data'
        ])
    },
    components: { mHeader, mTabbar, mTabbarItem, mFooter, swiperContainer, mActivity, mAct }
}
</script>
<style lang='less'>
#index {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .page-wrap {
        position: relative;
        overflow: auto;
        height: 100%;
    }
}
</style>
