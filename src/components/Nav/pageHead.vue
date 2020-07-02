<template>
  <div class="header">
    <div class="top">
			<div class="top-wrap">
        <p>UFO您好，欢迎来到教育云资源平台！</p>
				<div class="fr">
					<ul>
						<li>
							<img src="@/assets/images/user.png" alt />
							<span class="ziyuia">UFO</span>
						</li>
						<li>
							<img src="@/assets/images/ben.png" alt />
							<span class="ziyuia">校本资源</span>
						</li>
						<li>
							<img src="@/assets/images/zi.png" alt />
							<span class="ziyuia">公共资源</span>
						</li>
					</ul>
				</div>
			</div>
			</div>


    <div class="middle">
			<div class="middle-wrap">
				<div class="logo">
					<img src="@/assets/images/logo3.png" alt />
				</div>
				<div class="search">
					<el-radio-group v-model="type">
						<el-radio-button label="课件"></el-radio-button>
						<el-radio-button label="学案"></el-radio-button>
						<el-radio-button label="教案"></el-radio-button>
						<el-radio-button label="习题"></el-radio-button>
						<el-radio-button label="微课"></el-radio-button>
						<el-radio-button label="教学反思"></el-radio-button>
						<el-radio-button label="在线课程"></el-radio-button>
						<el-radio-button label="学校"></el-radio-button>
						<el-radio-button label="老师"></el-radio-button>
					</el-radio-group>

					<div class="search_s">
						<el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
							<el-button slot="append" type="primary">搜索</el-button>
						</el-input>
					</div>
				</div>
			</div>

		</div>

  </div>
</template>

<script>
export default {
	props: {
	//	NauList: Array,
	},
  data() {
    return {
			type: '上海',
			keyword:'',

    };
  },
  methods: {
		choose_nau(index) {
			this.NauList.forEach(item=>{
				item.check = false
			})
			this.NauList[index].check = true
			this.$router.push(this.NauList[index].route)
		}
  }
};
</script>


<style lang="less">
.header {
	.el-input__inner {
		border-radius: 0px;
	}
	.el-radio-button__inner {
		border:none;
	}
	.el-radio-button:first-child .el-radio-button__inner {
		border-left:none;
		border-radius: 0px;
	}
	.el-radio-button:last-child .el-radio-button__inner {
		border-radius: 0px;
	}
  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
		background-color: #5182f4;
		border-color: #5182f4;
	}
	.el-input-group__append, .el-input-group__prepend {
		background-color: #5182f4;
		border: 1px solid #5182f4;
		color: #fff;
		border-radius: 0px;
	}

}
</style>
<style lang="less" scoped>
.header {
		width: 100%;
		min-width: 1400px;

    .top {
				height: 48px;
        background-color: #f2f2f2;
        color: #909399;

				&-wrap {
					height: 100%;
					width: 80%;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.fr ul{
							display: flex;
							li {
								margin-left: 20px;
								cursor: pointer;
							}
					}			
				}
        
		}
		
		.middle {
			height: 160px;

			&-wrap {
				width: 80%;
				height: 100%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.search{
					width: 780px;
					.search_s {
						border: 2px solid #5182f4;
					}
				}

				
			}
		}

		.nav {
			height: 40px;
			line-height: 40px;
			color: #ffffff;
			background-color: #5182f4;
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
			top: 2.25rem;
			left: 0;
			width: 100%;
			border-top: 0.05rem solid #f5f5f5;
			border-bottom: 0.05rem solid #f5f5f5;
			background: #f5f5f5;
		}
}

</style>