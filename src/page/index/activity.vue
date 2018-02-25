<template>	
    <div id="demo" class="demo">
    <div class="in-out-translate-demo-wrapper mui-text-center">
      <transition name="in-out-translate-fade">
        <button v-if="show" v-on:click="start" key="start" type="button" class="mui-btn mui-btn-blue mui-btn-outlined">开始</button>
        <button v-else key="end" v-on:click="end" type="button" class="mui-btn mui-btn-yellow mui-btn-outlined">结束</button>
      </transition>
 
    </div>
    <div class="num mui-text-center">
      <div class="span">
        <div>1</div>
      </div>       
      <div class="span">
        <transition name="down-up-translate-fade">
          <div :key="i">{{i}}</div>
        </transition>
      </div>
      <div class="span">
        <transition name="down-up-translate-fade">
          <div :key="j">{{j}}</div>
        </transition>
      </div>
      <div class="span">
        <div>*</div>
      </div>
      <div class="span">
        <div>*</div>
      </div> 
      <div class="span">
        <div>*</div>
      </div> 
      <div class="span">
        <div>*</div>
      </div>         
      <div class="span">
        <transition name="down-up-translate-fade">
          <div :key="k">{{k}}</div>
        </transition>
      </div>
      <div class="span">
        <transition name="down-up-translate-fade">
          <div :key="l">{{l}}</div>
        </transition>
      </div> 
      <div class="span">
        <transition name="down-up-translate-fade">
          <div :key="i">{{i}}</div>
        </transition>
      </div>
      <div class="span">
        <transition name="down-up-translate-fade">
          <div :key="j">{{j}}</div>
        </transition>
      </div>       
    </div>
    <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="20" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)">1</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)">2</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)">3</div>
    </mt-palette-button>
  </div>
</template>
<script>
import { PaletteButton } from 'mint-ui';
 export default {
     data() {
         return {
            show: true,
            i: 0,
            j:0,
            k: 0,
            l: 0,
            interval: null
         }   
      },
      methods: {
        start: function() {
          this.show = !this.show
          var _this = this;
 
          if(!this.interval) {
            this.interval = setInterval(function() {
              _this.i = Math.floor(Math.random() * 10);
              _this.j = Math.floor(Math.random() * 10);
              _this.k = Math.floor(Math.random() * 10);
              _this.l = Math.floor(Math.random() * 10);
            }, 10)
          }
        },
        end: function() {
          this.show = !this.show
 
          clearInterval(this.interval)
          this.interval = null
        },
         main_log(val) {
        console.log('main_log', val);
        },
        sub_log(val) {
          console.log('sub_log', val);
          this.$refs.target_1.collapse();
        }
      },
     components: {
      PaletteButton  
     }
 }   
</script>
<style>
    .num {
      /*position: relative;*/
      width: 100%;
      height: 50px;
      overflow: hidden;
    }
     
    .num .span {
      /*position: absolute;*/
      background: #0062CC;
      color: #fff;
      width: 30px;
      height: 50px;
      line-height: 50px;
      font-size: 40px;
      font-weight: bold;
      float: left;
      margin-right: 2px;
    }
     
    .num .span div {
      background: #0062CC;
      color: #fff;
      width: 30px;
      height: 50px;
      line-height: 50px;
      font-size: 40px;
      font-weight: bold;
    }
.pb {
      width: 60px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    position: absolute;
    bottom: 30px;
}
</style>
