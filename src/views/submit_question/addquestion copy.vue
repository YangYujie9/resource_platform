<template>
  <div class="home">
    <div class="content">
      <div class="content-wrap">
        <div class="cleft">
          <div class="tab-class">
            <el-tabs stretch v-model="activeType" @tab-click="handleClick">
              <el-tab-pane label="按章节" name="chapter">
                <div class="tree-class">
                  <el-tree
                    :data="treeData"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                  ></el-tree>
                </div>
              </el-tab-pane>
              <el-tab-pane label="按考点" name="detial">
                <div class="tree-class">
                  <el-tree
                    :data="treeData"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                  ></el-tree>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="cright">
						<div class="content-class">
							<div class="div1">
								<p>选择考核范围</p>
								<div class="tag-class">
									<el-tag
										v-for="tag in tags"
										:key="tag.name"
										closable
										type="warning">
										{{tag.name}}
								</el-tag>
								</div>
							</div>

							<div>
								<p>题干内容</p>
								<Ueditor :writeMsg="defaultMsg0" :id="ueditor0" :config="config0" ref="ue0"></Ueditor>

							</div>

							<div class="form-class">
								<el-form :model="form">
									<el-form-item label="题数：">
                    <el-select
                      v-model="questionNum"
                      placeholder="请选择"
                      style="width:60px;"
                      size="mini">
                      <el-option v-for="item in questionOtions" :key="item.label" :label="item.label" :value="item.label"></el-option>
                    </el-select>
									</el-form-item>
									<el-form-item label="序号：">
										<el-button
											v-for="(list,index) in questionOtions"
											v-if="index<questionNum"
											size="mini"
											type="primary"
											plain
											:class="{active: list.check}"
											@click="choose_quesnum(list)"
										>第{{list.label}}题</el-button>
									</el-form-item>
									<el-form-item label="难度：">
										<el-button
											v-for="list in difficultyList"
											size="mini"
											type="primary"
											plain
											:class="{active: list.check}"
											@click="choose_difficulty(list)"
										>{{list.label}}</el-button>
									</el-form-item>
									<el-form-item label="题型：">
										<el-button
											v-for="list in typeList"
											size="mini"
											type="primary"
											plain
											:class="{active: list.check}"
											@click="choose_type(list)"
										>{{list.label}}</el-button>
									</el-form-item>
								</el-form>
							</div>
							<div class="set-form">
                <el-form>
                  <el-form-item>
                    <el-tabs v-model="activeName" type="card">
                      <el-tab-pane label="问题" name="stems">
                        <div v-show="activeName=='stems'">
                          <Ueditor
                            :writeMsg="defaultMsg1"
                            :id="ueditor1"
                            :config="config1"
                            ref="ue1"
                          ></Ueditor>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="分析" name="analysis">
                        <div v-show="activeName=='analysis'">
                          <Ueditor
                            :writeMsg="defaultMsg2"
                            :id="ueditor2"
                            :config="config2"
                            ref="ue2"
                          ></Ueditor>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="解答" name="answer">
                        <div v-show="activeName=='answer'">
                          <Ueditor
                            :writeMsg="defaultMsg3"
                            :id="ueditor3"
                            :config="config3"
                            ref="ue3"
                          ></Ueditor>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </el-form-item>
                </el-form>
              </div>
							<div class="set-form">
                <el-form>
                  <el-form-item>
                    <el-tabs v-model="activeName" type="card">
                      <el-tab-pane label="问题" name="stems">
                        <div v-show="activeName=='stems'">
                          <Ueditor
                            :writeMsg="defaultMsg1"
                            :id="ueditor1"
                            :config="config1"
                            ref="ue1"
                          ></Ueditor>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="分析" name="analysis">
                        <div v-show="activeName=='analysis'">
                          <Ueditor
                            :writeMsg="defaultMsg2"
                            :id="ueditor2"
                            :config="config2"
                            ref="ue2"
                          ></Ueditor>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="解答" name="answer">
                        <div v-show="activeName=='answer'">
                          <Ueditor
                            :writeMsg="defaultMsg3"
                            :id="ueditor3"
                            :config="config3"
                            ref="ue3"
                          ></Ueditor>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </el-form-item>
                </el-form>
              </div>


						</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Ueditor from "@/components/Ueditor/Ueditor";
export default {
  components: {
    Ueditor
  },
  data() {
    return {
      activeType: "chapter",
			activeName: "stems",
			questionNum:2,
			questionOtions: [        
				{ label: 1, check: true },
        { label: 2, check: false },
        { label: 3, check: false },
        { label: 4, check: false },
        { label: 5, check: false },
        { label: 6, check: false },
        { label: 7, check: false },
        { label: 8, check: false }],
      optionNum: 4,
      chooseAns: "A",
      ansOptions: [2, 3, 4, 5, 6, 7, 8],
      optionList: [
        { label: "A", check: true },
        { label: "B", check: false },
        { label: "C", check: false },
        { label: "D", check: false },
        { label: "E", check: false },
        { label: "F", check: false },
        { label: "G", check: false },
        { label: "H", check: false }
      ],
      relOptionNum: 1,
      relOptions: [2, 3, 4, 5, 6, 7, 8],
      answers: ["A", "A", "A", "A", "A", "A", "A", "A"],
      form: {
        level: "",
        grade: "",
        subject: "",
        version: "",
        knowledge: "",
        difficulty: "",
        type: ""
      },
      difficultyList: [
        { label: "不限", check: true },
        { label: "易", check: false },
        { label: "较难", check: false }
      ],
      typeList: [
        { label: "单选题", check: true },
        { label: "多选题", check: false },
        { label: "判断题", check: false }
      ],


      treeData: [
        {
          id: 1,
          label: "第1章 有理数",
          children: [
            {
              id: 9,
              label: "1.1正数和负数"
            },
            {
              id: 10,
              label: "1.1正数和负数"
            },
            {
              id: 11,
              label: "1.1正数和负数"
            }
          ]
        },
        {
          id: 1,
          label: "第1章 有理数",
          children: [
            {
              id: 9,
              label: "1.1正数和负数"
            },
            {
              id: 10,
              label: "1.1正数和负数"
            },
            {
              id: 11,
              label: "1.1正数和负数"
            }
          ]
        },
        {
          id: 1,
          label: "第1章 有理数",
          children: [
            {
              id: 9,
              label: "1.1正数和负数"
            },
            {
              id: 10,
              label: "1.1正数和负数"
            },
            {
              id: 11,
              label: "1.1正数和负数"
            }
          ]
        },
        {
          id: 1,
          label: "第1章 有理数",
          children: [
            {
              id: 9,
              label: "1.1正数和负数"
            },
            {
              id: 10,
              label: "1.1正数和负数"
            },
            {
              id: 11,
              label: "1.1正数和负数"
            }
          ]
        },
        {
          id: 1,
          label: "第1章 有理数",
          children: [
            {
              id: 9,
              label: "1.1正数和负数"
            },
            {
              id: 10,
              label: "1.1正数和负数"
            },
            {
              id: 11,
              label: "1.1正数和负数"
            }
          ]
        },
        {
          id: 2,
          label: "第2章 整式的加减",
          children: [
            {
              id: 5,
              label: "2.2 函数和元素"
            },
            {
              id: 6,
              label: "2.2 函数和元素"
            }
          ]
        },
        {
          id: 7,
          label: "第2章 整式的加减",
          children: [
            {
              id: 8,
              label: "2.2 函数和元素"
            },
            {
              id: 3,
              label: "2.2 函数和元素"
            }
          ]
        },
        {
          id: 4,
          label: "第2章 整式的加减",
          children: [
            {
              id: 13,
              label: "2.2 函数和元素"
            },
            {
              id: 14,
              label: "2.2 函数和元素"
            }
          ]
        },
        {
          id: 15,
          label: "第2章 整式的加减",
          children: [
            {
              id: 16,
              label: "2.2 函数和元素"
            },
            {
              id: 17,
              label: "2.2 函数和元素"
            }
          ]
        }
			],
			defaultMsg0: "",
      ueditor0: "ueditor0",
      config0: {
        initialContent: "题干内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
      },
      defaultMsg1: "",
      defaultMsg2: "",
      defaultMsg3: "",
      ueditor1: "ueditor1",
      ueditor2: "ueditor2",
      ueditor3: "ueditor3",
      config1: {
        initialContent: "请输入题干内容...(如果是填空题请用{***}来表示横线)", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/Ueditor/'
      },
      config2: {
        initialContent: "请输入分析内容...", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
      },
      config3: {
        initialContent: "请输入解答内容...", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
      },
      defaultMsgA: "",
      ueditorA: "ueditorA",
      configA: {
        initialContent: "A选项内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
      },
      defaultMsgB: "",
      ueditorB: "ueditorB",
      configB: {
        initialContent: "B选项内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
      },
      defaultMsgC: "",
      ueditorC: "ueditorC",
      configC: {
        initialContent: "C选项内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
      },
      defaultMsgD: "",
      ueditorD: "ueditorD",
      configD: {
        initialContent: "D选项内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        BaseUrl: ""
        //UEDITOR_HOME_URL: 'static/ueditor/'
			},
			tags: [
				{ name: '标签一' },
				{ name: '标签二' },
				{ name: '标签三' },
				{ name: '标签四' },
				{ name: '标签五' },
			]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    choose_level(list) {
      this.levelList.forEach(item => {
        item.check = false;
      });
      list.check = true;
    },

    choose_grade(list) {
      this.gradeList.forEach(item => {
        item.check = false;
      });
      list.check = true;
    },

    choose_subject(list) {
      this.subjectList.forEach(item => {
        item.check = false;
      });
      list.check = true;
    },

    choose_version(list) {
      this.versionList.forEach(item => {
        item.check = false;
      });
      list.check = true;
    },

    choose_difficulty(list) {
      this.difficultyList.forEach(item => {
        item.check = false;
      });
      list.check = true;
    },

    choose_type(list) {
      this.typeList.forEach(item => {
        item.check = false;
      });
      list.check = true;
    },

    choose_ansoption(list) {
      this.optionList.forEach(item => {
        item.check = false;
      });
      list.check = true;
      this.chooseAns = list.label;
		},
		choose_quesnum(list) {
      this.questionOtions.forEach(item => {
        item.check = false;
      });
      list.check = true;
      
		},

    submit_question() {
      this.activePage = 3;
      console.log(this.answers);
    }
  }
};
</script>
<style lang="less">
.home {
  .cleft {
    .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    .el-tabs__nav-wrap::after {
      height: 0px;
    }
  }

  .cright {

    .el-form-item {
      margin-bottom: 0px;
		}
		

    .set-form {
      .el-tabs__header {
        margin: 0px;
      }

      .el-tabs--card > .el-tabs__header {
        border-bottom: 0px;
      }

      .el-form-item__content {
        line-height: 20px;
      }

      .el-tabs__item {
        height: 30px;
        line-height: 30px;
        color: #606266;
      }
      .el-tabs__item:hover {
        color: #409eff;
      }
      .el-tabs__item.is-active {
        color: #409eff;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.home {
  width: 100%;
  //height: 100%;

  .content {
    margin-top: 20px;
    //height: calc(100vh - 269px);

    &-wrap {
      width: 80%;
      min-width: 1200px;
      margin: 0 auto;
      display: flex;

      .cleft {
        width: 20%;
        min-width: 270px;
        margin-right: 20px;
        //flex-shrink: 0;
        padding: 20px 10px;
				min-height: 300px;
				height: auto;
        max-height: calc(100vh - 289px);
        border: 1px solid #e2e2e2;

        .tab-class {
          padding: 0 20px;

          .tree-class {
            overflow: auto;
            max-height: calc(100vh - 389px);
          }
        }
      }

      .cright {
				width: 80%;
				max-height: calc(100vh - 289px);
				overflow: auto;

        .content-class {
					font-size: 12px;
					p {
						line-height: 30px;
					}

					.tag-class {
						margin-left: -10px;
					}

					.form-class {
						margin:20px 0;
					}
          

          .active {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
            outline: 0;
          }
        }


      }
    }
  }
}
</style>