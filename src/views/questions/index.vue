<template>
  <div class="home">
      <page-head :NauList="navList"></page-head>
      <div class="content">
					<router-view />
			</div>
  </div>
</template>

<script>
import pageHead from '@/components/Nav/pageHead'
export default {
    components: {
        pageHead
    },
    data() {
        return {
					navList: [{
							label: '章节挑题',
							route: '/Home',
							check: false,
						},{
							label: '知识点挑题',
							route: '/questions',
							check: false,
						},{
							label: '智能挑题',
							route: '/Home',
							check: false,
						},{
							label: '学生错题',
							route: '/questions',
							check: false,
						},{
							label: '试卷中心',
							route: '/Home',
							check: false,
						},{
							label: '资源中心',
							route: '/questions',
							check: false,
						}
					],
        }
    }
}
</script>

<style lang="less">
.home {
    width: 100%;
    height: 100%;

    .content {
			height: calc(100vh - 249px);

    }
}
</style>