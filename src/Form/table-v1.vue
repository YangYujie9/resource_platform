<template>
  <div class="jf-table jf-table-v1 clearfix">
    <Scroller
      freeScroll
      :scrollbar="{fade: false, interactive: true}"
      class="jf-table-scroller">
      <Table
        border
        class="jf-table"
        ref="selection"
        :columns="tableColumns"
        :data="tableData"
        :style="tableStyle"
        @on-select-all="onSelectAll"
        @on-select-all-cancel="onSelectCancel"
        @on-selection-change="onSelect"
        @on-sort-change="onSorted">
      </Table>
    </Scroller>
    <template v-if="showDeleteInfo">
      <Checkbox class="del-checkbox" v-model="isCheckedAll" @on-change="handleSelectAll">
        <span class="check-all">全选</span>
        <Button type="text" class="delete-selected" @click="deleteSelected">删除</Button>
      </Checkbox>
    </template>
    <template v-if="showPageInfo && !hidePageable">
      <Page
        :current="current"
        :page-size="pageSize"
        :total="totalElements"
        show-sizer
        show-elevator
        show-total
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      ></Page>
    </template>
  </div>
</template>
<script>
  import iView from 'iview';
export default {
  props: {
    tableColumns: Array, // table header
    tableData: Array, // table data
    totalElements: Number, // 分页总数
    currentPage:Number,
    size:Number,
    hidePageable:{type:Boolean,default:false},
    onPageChange: Function, // 翻页触发, return current，pageSize
    onOrdered: Function, // 排序，return {column key order}
    onDeleteSelected: Function, // 批量/全部删除 返回selectionData
    tableStyle: Object,//table样式，避免多度挤压内容
  },
  data() {
    return {
      isCheckedAll: false,

      // 翻页信息
      current: 1, // 前端显示第一页，对应api第0页, 下面所有返回  current-1
      pageSize: 20 // 和api一致，默认20
    };
  },
  computed: {
    showPageInfo: function() {
      return this.onPageChange instanceof Function;
    },
    showDeleteInfo: function() {
      let isShow = false;
      this.tableColumns.forEach(element => {
        if (element.type === "selection") {
          isShow = true;
        }
      });
      return isShow;
    }
  },
  methods: {
    // 表格 header全选触发
    onSelectAll(selection) {
      this.isCheckedAll = true;
    },
    // 表格 header 全不选触发
    onSelectCancel() {
      this.isCheckedAll = false;
    },
    // 任意一行选择时触发
    onSelect(selections) {
      // MAX_SIZE为页面能展示出来的最多数据 对应 '全选'
      const MAX_SIZE = Math.min(this.pageSize, this.totalElements);
      this.isCheckedAll = selections.length === MAX_SIZE;
    },
    // 排序
    onSorted(params) {
      this.onOrdered(params);
    },
    // 表格底部全选触发
    handleSelectAll() {
      this.$refs.selection.selectAll(this.isCheckedAll);
    },
    // 批量删除
    deleteSelected() {
      // console.log(this.$refs.selection.getSelection())
      if(this.$refs.selection.getSelection() && this.$refs.selection.getSelection().length === 0){
        iView.Message.error('请至少选择一条数据！');
      }else{
        this.onDeleteSelected(this.$refs.selection.getSelection());
      }
    },
    // 翻页: 页码更变
    pageChange(current) {
      this.current = current;
      this.onPageChange(this.current - 1, this.pageSize);
    },
    // 翻页：每页条数变化
    pageSizeChange(pageSize) {
      this.current = 1;
      this.pageSize = pageSize;
      this.onPageChange(this.current - 1, this.pageSize);
    }
  },
  watch:{
    currentPage:{
      handler:function (newVal,oldVal){
        this.current = newVal;
      }
    },
    size:{
      handler:function (newVal,oldVal){
        this.pageSize = newVal;
      }
    }
  }
};
</script>
<style lang='less'>
@import "@/assets/css/config.scss";
.jf-table {
  height: 100%;
  &-scroller{
    height: fit-content;
    max-height: calc(100% - 44px);
  }
  .ivu-table {
    font-size: 14px;
    color: $contentColor1;
  }
  .ivu-table-cell {
    padding: 0 0 0 13px;
  }
  // table line height
  .ivu-table td,
  .ivu-table th {
    height: 44px;
  } // table header, font-weight
  .ivu-table-header .ivu-table-cell {
    font-weight: normal;
    color: #000000;
  } // table row hover background-color
  tr.ivu-table-row-hover td {
    background: #ecfaec;
  }

  .ivu-checkbox-wrapper {
    float: left;
    display: flex;
    align-items: center;
  }
  .del-checkbox {
    margin-top: 17px;
    margin-left: -7px;
    .ivu-checkbox {
      padding-left: 14px;
    }
    .check-all {
      font-size: 13px;
      color: #686868;
      font-weight: normal;
      padding: 0 3px 0 16px;
      position: relative;
    }
    .delete-selected {
      position: relative;
      padding-left: 10px;
      color: #c93736;
      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 1px;
        height: 14px;
        left: 0;
        top: 2px;
        background: #e5e5e5;
      }
    }
  }
  // 去除第一列勾选栏border
  .ivu-table-border td:first-child,
  .ivu-table-border th:first-child {
    /*border-right: 0;*/
  }
  .ivu-table-border .ivu-table-cell-with-selection
  {
    margin-left: -7px;
  }

  // 通常只有操作类才会设置 align:center
  // 设置居中后清除左右padding
  .ivu-table-column-center:last-child .ivu-table-cell {
    padding: 0;
    i {
      font-size: 18px;
      padding: 0 3px;
      cursor: pointer;
    }
  }
}
</style>


