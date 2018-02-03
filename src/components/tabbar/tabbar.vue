<template>
    <div class="m-tabbar">
        <div class="flex-content">
            <slot></slot>
        </div> 
    </div>
</template>
<script>
    import mTabbarItem from './tabbar_item';
    export default {
        props: ['value']
    }
</script>
<style lang="less">
.m-tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 52px;
    overflow: hidden;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    z-index: 999;
    .flex-content {
        display: flex;
        height: 52px;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
</style>