<template>
  <div class="ques-home" ref="home">
    <page-head></page-head>
		<div class="ques-home-wrap">

      <div class="nav" :class="{ fixedNavbar: isfixTab}" ref="navBar">
          <ul>
            <li v-for="(list,index) in NauList" @click="choose_nau(index)" :class="{active:list.check}">{{list.label}}</li>
          </ul>

      </div>

      <router-view :isfixLeft="isfixLeft"></router-view>

      <!-- <div class="content-wrap">
        <div class="cleft">
          <slot name="left"></slot>
        </div>
        <div class="cright">
          <slot name="right"></slot>
        </div>

      </div> -->

      
			
		</div>
  </div>
</template>

<script>
import pageHead from "@/components/Nav/pageHead";
export default {
    components: {
      pageHead
    },
    data() {
        return {
          isfixTab: false,
          isfixLeft: false,
          NauList: [
            {
              label: "首页",
              route: "/Home",
              check: false
            },
            {
              label: "课件",
              route: "/questions",
              check: false
            },
            {
              label: "教案",
              route: "/Home",
              check: false
            },
            {
              label: "学案",
              route: "/questions",
              check: false
            },
            {
              label: "套题试卷",
              route: "/Home",
              check: false
            },
            {
              label: "教学反思",
              route: "/questions",
              check: false
            },
            {
              label: "微课",
              route: "/Home",
              check: false
            },
            {
              label: "题库",
              route: "/questions"
            }
          ],
        }
    },
    mounted () {
        //window.addEventListener('scroll', this.handleTabFix, true)
      this.$refs.home.addEventListener('scroll', this.handleTabFix, true)
    },
    methods: {
      	// 先分别获得id为testNavBar的元素距离顶部的距离和页面滚动的距离
	// 比较他们的大小来确定是否添加fixedNavbar样式
      handleTabFix() {
        let scrollTop = this.$refs.home.scrollTop
        //window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = this.$refs.navBar.scrollTop
        scrollTop > 208 ? this.isfixTab = true : this.isfixTab = false
        scrollTop > 268 ? this.isfixLeft = true : this.isfixLeft = false
      }

    }
}
</script>

<style lang="less">
.ques-home {
	//width: 100%;
  height: calc(100% - 20px);
  //background-color: blue;
  overflow: auto;

	&-wrap {
    width: 100%;
    position: relative;
    //height: 100%;
    
    .nav {
			height: 40px;
			line-height: 40px;
			color: #ffffff;
      background-color: #5182f4;
      margin-bottom: 20px;
      z-index: 1000;
			ul {
				display: flex;
				justify-content: center;

				li {
					margin: 0px 30px;
					padding: 0 20px;
					cursor: pointer;

					&:hover {
						background-color: rgba(0, 0, 0, 0.1);
					}
				}

				.active {
					background-color: rgba(0, 0, 0, 0.1);
				}

				
			}
		}
		.fixedNavbar{
			position: fixed;
			top: 0;
			left: 0;
      width: 100%;
      margin-bottom: 20px;
			// border-top: 0.05rem solid #f5f5f5;
			// border-bottom: 0.05rem solid #f5f5f5;
			// background: #f5f5f5;
		}
	}

}
</style>