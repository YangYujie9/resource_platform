<template>
  <div class="home">
    <page-head :NauList="navList"></page-head>
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
          <div
            style="font-size:12px;color:#c2c2c2;line-height:30px;display:flex;justify-content: space-between;"
          >
            <p>添加试题</p>
            <p>/添加试题</p>
          </div>
          <div>
            <el-steps :active="activePage" simple>
              <el-step title="选择试题知识点" icon="el-icon-edit"></el-step>
              <el-step title="设置题目" icon="el-icon-upload"></el-step>
              <el-step title="完成" icon="el-icon-picture"></el-step>
            </el-steps>
          </div>

          <div class="form-class" v-show="activePage==1">
            <el-form label-width="80px" :model="form">
              <el-form-item label="学段">
                <el-button
                  v-for="list in levelList"
                  size="mini"
                  type="primary"
                  plain
                  :class="{active: list.check}"
                  @click="choose_level(list)"
                >{{list.label}}</el-button>
              </el-form-item>
              <el-form-item label="年级">
                <el-button
                  v-for="list in gradeList"
                  size="mini"
                  type="primary"
                  plain
                  :class="{active: list.check}"
                  @click="choose_grade(list)"
                >{{list.label}}</el-button>
              </el-form-item>
              <el-form-item label="科目">
                <el-button
                  v-for="list in subjectList"
                  size="mini"
                  type="primary"
                  plain
                  :class="{active: list.check}"
                  @click="choose_subject(list)"
                >{{list.label}}</el-button>
              </el-form-item>
              <el-form-item label="教材">
                <el-button
                  v-for="list in versionList"
                  size="mini"
                  type="primary"
                  plain
                  :class="{active: list.check}"
                  @click="choose_version(list)"
                >{{list.label}}</el-button>
              </el-form-item>
              <el-form-item label="知识点">
                <el-button size="mini" type="primary" plain>添加</el-button>
              </el-form-item>
            </el-form>
            <div style="text-align:center">
              <el-button size="mini" type="primary" @click="activePage=2">下一步</el-button>
            </div>
          </div>

          <div>
            <div class="form-class" v-show="activePage==2">
              <el-form label-width="80px" :model="form">
                <el-form-item label="难度">
                  <el-button
                    v-for="list in difficultyList"
                    size="mini"
                    type="primary"
                    plain
                    :class="{active: list.check}"
                    @click="choose_difficulty(list)"
                  >{{list.label}}</el-button>
                </el-form-item>
                <el-form-item label="题型">
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
              <div class="set-form">
                <el-form>
                  <el-form-item>
                    <el-tabs v-model="activeName" type="card">
                      <el-tab-pane label="题干" name="stems">
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
              <div v-show="activeName=='stems'">
                <el-form label-width="80px" :model="form">
                  <el-form-item label="答案">
                    <span>选项数</span>
                    <el-select
                      v-model="optionNum"
                      placeholder="请选择"
                      style="width:60px;"
                      size="mini"
                    >
                      <el-option v-for="item in ansOptions" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                    <el-button
                      v-for="(item,index) in optionList"
                      v-if="index<optionNum"
                      size="mini"
                      type="primary"
                      plain
                      :class="{active: item.check}"
                      @click="choose_ansoption(item)"
                    >{{item.label}}</el-button>
                  </el-form-item>
                </el-form>
                <div class="set-form" style="margin-top:0px;">
                  <div v-show="chooseAns == 'A'">
                    <Ueditor :writeMsg="defaultMsgA" :id="ueditorA" :config="configA" ref="ueA"></Ueditor>
                  </div>
                  <div v-show="chooseAns == 'B'">
                    <Ueditor :writeMsg="defaultMsgB" :id="ueditorB" :config="configB" ref="ueB"></Ueditor>
                  </div>
                  <div v-show="chooseAns == 'C'">
                    <Ueditor :writeMsg="defaultMsgC" :id="ueditorC" :config="configC" ref="ueC"></Ueditor>
                  </div>
                  <div v-show="chooseAns == 'D'">
                    <Ueditor :writeMsg="defaultMsgD" :id="ueditorD" :config="configD" ref="ueD"></Ueditor>
                  </div>
                </div>
              </div>
              <div v-show="activeName=='answer'">
                <el-form label-width="110px" :model="form">
                  <el-form-item label="正确答案">
                    <span>答案个数</span>
                    <el-select
                      v-model="relOptionNum"
                      placeholder="请选择"
                      style="width:60px;"
                      size="mini"
                    >
                      <el-option v-for="item in relOptions" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                    <span style="margin-left:20px;">正确选项</span>
                    <el-select
                      v-model="answers[index]"
                      placeholder="请选择"
                      style="width:60px;margin-right:10px;"
                      size="mini"
                      v-for="(i,index) in answers"
                      v-if="index<relOptionNum"
                    >
                      <el-option
                        v-for="item in optionList"
                        :key="item.label"
                        :label="item.label"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
              <div style="text-align:center;margin-top:20px;">
                <el-button size="mini" type="primary" @click="submit_question">提交</el-button>
              </div>
            </div>
            <div v-show="activePage==3">
              <p style="text-align:center;margin-top:40px;">试题添加成功！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHead from "@/components/Nav/pageHead";
import Ueditor from "@/components/Ueditor/Ueditor";
export default {
  components: {
    pageHead,
    Ueditor
  },
  data() {
    return {
      activeType: "chapter",
      activeName: "stems",
      activePage: 1,
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

      levelList: [
        { label: "小学", check: true },
        { label: "初中", check: false },
        { label: "高中", check: false }
      ],
      gradeList: [
        { label: "一年级", check: true },
        { label: "二年级", check: false },
        { label: "三年级", check: false }
      ],
      subjectList: [
        { label: "语文", check: true },
        { label: "数学", check: false },
        { label: "英语", check: false }
      ],
      versionList: [
        { label: "人教版", check: true },
        { label: "苏教版", check: false },
        { label: "沪教版", check: false }
      ],
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
      navList: [
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
      }
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
    .el-steps--simple {
      background-color: #ffffff;
      border: 1px solid #eee;
      padding: 5px 8%;
    }

    .el-form-item {
      margin-bottom: 10px;
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
  height: 100%;

  .content {
    margin-top: 20px;
    height: calc(100vh - 269px);

    &-wrap {
      width: 80%;
      min-width: 1200px;
      margin: 0 auto;
      display: flex;

      .cleft {
        width: 20%;
        min-width: 270px;
        margin-right: 20px;
        flex-shrink: 0;
        padding: 20px 10px;
        min-height: 300px;
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

        .form-class {
          margin-top: 20px;

          .active {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
            outline: 0;
          }
        }

        .set-form {
          padding-left: 40px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>