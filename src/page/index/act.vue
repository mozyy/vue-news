<template>
<div>
      <p v-for='tel in telephone'>{{tel | newtel}}</p>
      <a v-for='(url,index) in urlList' :href='url.url | getquery(url.name,url.age)'>{{url.url}}</a>
      <textarea v-model="content" :maxlength="totalcount"></textarea>
        <p>你还可以输入{{reduceCount}}字</p>
         <h1>比赛时间{{time}}s</h1>
        <h2>直播播报{{result}}</h2>
        <div>
            <p>中国队进球数：{{team.china}}</p>
            <button @click="team.china++">点击中国队进一球</button>
            <p>韩国队进球数：{{team.korea}}</p>
            <button @click="team.korea++">点击韩国队进一球</button>
        </div>
        <ul id="con1" ref="con1" :class="{anim:animate==true}">
            <li v-for='item in items'>{{item.name}}</li>
        </ul>
        <transition-group tag="ul"  name="uls">
            <li v-for="(item,index) in list" class="lis" :key="index" v-show="index===num">{{item.text}}</li>
        </transition-group>
        <div>111111111111111111</div>
        <div>111111111111111111</div>
        <div>111111111111111111</div>
        <div>111111111111111111</div>
</div>
</template>
<script>
export default {
  data () {
     return {
             telephone : [
                 10000000000,
                 10000000001,
                 10000000002,
                 10000000003,
                 10000000004,
                 10000000005,
                 10000000006,
                 10000000007,
                 10000000008,
                 10000000009,
                 10000000000,
            ],
            urlList : [
                 {url : 'http://www.baidu.com',name :'ziksang',age : 20},
                 {url : 'http://www.google.com',name :'ziksang2',age : 30}
            ],
            totalcount : 10 , //总共只给输入200字
            content : '',
            time : 0,
            team : {
                china : 0,
                korea : 0
            },
            animate:false,
            items:[  //消息列表对应的数组
                {name:"马云"},
                {name:"雷军"},
                {name:"王勤"}
            ],
            num:0,
            list:[
                {text:111111111111111},
                {text:222222222222222},
                {text:333333333333333},
                {text:444444444444444},
            ],
             show: false
         }
    },
    created () {
            let time =  setInterval(()=>{
                this.time++
                if(this.time == 90){
                    clearInterval(time)
                }
            },1000)
            this.playauto()
    },
    filters : {
        newtel (value) {
             if(!value) return ''
             value = value.toString().substr(7,4)
             value = '*'.repeat(7)+value
             let endMember = value.substr(-1,1)
             if(endMember % 2){
                 value = value+'中奖'
             }else{
                 value = value+'谢谢参与'
             }
             return value
        },
        getquery (value,name,age) {
             if(!value) return ""
             return `${value}?name=${name}&age=${age}`
        }
     },
     computed : {
        reduceCount () {
            return this.totalcount - this.content.length
        },
         text () {
                return this.show ? '收' : '开';
            },
        result () {
               if(this.time<90){
                   if(this.team.china>this.team.korea){
                       return '中国队领先'
                   }else if(this.team.china<this.team.korea){
                       return '韩国队领先'
                   }else{
                       return '双方僵持'
                   }
               }else{
                   if(this.team.china>this.team.korea){
                       return '中国队赢'
                   }else if(this.team.china<this.team.korea){
                       return '韩国队赢'
                   }else{
                       return '平局'
                   }
               }
        }
    },
    methods: {
        play(){
            this.num++;
            if (this.num ===this.list.length){
            this.num = 0
            }
        },
        playauto(){
            setInterval(this.play,3000)
        },
        showMenu () {
                this.show = !this.show;
            }
    }
};
</script>
<style lang='less'>
.scroll-wrap{
  width: 200px;
  height: 50px;
  border: 1px solid blue;
  overflow: hidden;
}

.scroll-content{
  position: relative;
  transition: top 0.5s;

  li{
    line-height: 50px;
    text-align: center;
  }
}
ul {
    height: 20px;
    overflow: hidden;
}
.lis{
    width: 100px;
    height: 20px;
    line-height:20px;
}
// .list {
//     display: flex;
//     width: 100%;
//     height: 40px;
//     line-height: 40px;
//     margin-bottom: 10px;
//     color: #666;
//     font-size: 14px;
//     background: #eee;
//     transition: all .4s;
//     &.slide-move {
//         transition: transform 1s;
//     }
//     &.slide-enter {
//         transform: translate3d(-100%, 0, 0);
//     }
        
//     &.slide-leave-active {
//         position: absolute;
//         transform: translate3d(-100%, 0, 0);
//     }
        
//     &:last-child {
//         margin-bottom: 0;
//     } 
// }
    .del-btn {
        flex: 0 0 60px;
        border: none;
        outline: none;
        color: #fff;
        background: red;
        transition: all .4s;
        &.move-enter, &.move-leave-active {
            transform: translate3d(70px, 0, 0);
        }
    }
                 
    .text {
        flex: 1;
        padding-left: 20px;
    }
        
</style>
