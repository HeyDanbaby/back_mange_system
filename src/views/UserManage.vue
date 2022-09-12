<template>
  <div id="userManage" ref="userManageRef">
    <!-- 新增+搜索 -->
    <div class="handleArea">
      <!-- 新增 -->
      <div class="addBtn">
        <el-button type="primary" icon="el-icon-plus" @click="handleAdd"
          >新增</el-button
        >
      </div>
      <!-- 搜索 -->
      <div class="searchBtn">
        <el-input placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>

    <!-- 用户列表 -->
    <div class="userList">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        border
        style="width: 100%"
        height="550px"
      >
        <el-table-column
          v-for="(item, index) in tableMap"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <!-- 编辑对话框 -->
    <el-dialog title="更新用户" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="userForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="userForm.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="userForm.sex">
            <el-option label="女" value="female"></el-option>
            <el-option label="男" value="male"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            v-model="userForm.birth"
            type="date"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userForm.address"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureAddOrEdit()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 删除弹框 -->
    <el-dialog title="删除" :visible.sync="deleteDialogVisible" width="30%">
      <span>您确定删除吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "001",
          name: "刘德华1",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "002",
          name: "赵秀兰1",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "003",
          name: "范冰冰1",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "004",
          name: "赵秀兰2",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "005",
          name: "赵秀兰3",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "006",
          name: "赵秀兰4",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "007",
          name: "赵秀兰5",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "008",
          name: "赵秀兰6",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "009",
          name: "赵秀兰7",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "010",
          name: "赵秀兰8",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "011",
          name: "赵秀兰9",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "012",
          name: "赵秀兰10",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
      ],
      tableMap: [
        { prop: "name", label: "姓名" },
        { prop: "age", label: "年龄" },
        { prop: "sex", label: "性别" },
        { prop: "birth", label: "出生日期" },
        { prop: "address", label: "地址" },
      ],
      // 控制新增-编辑的 弹框的开关
      dialogVisible: false,

      // 删除弹框开关
      deleteDialogVisible: false,
      userForm: {
        name: "",
        age: "",
        address: "",
        sex: "",
        birth: "",
      },
      // 当前点击的那一行 index
      userFormIndex: "",
      currentPage: 1,
      pageSize: 5,

      // 控制新增or编辑状态
      mode: "",
    };
  },
  methods: {
    // 新增
    handleAdd() {
      this.mode = "add";
      // 先清理上一次的数据
      this.userForm.name = "";
      this.userForm.age = "";
      this.userForm.sex = "";
      this.userForm.birth = "";
      this.userForm.address = "";
      this.dialogVisible = true;
    },
    // 编辑
    handleEdit(index, row) {
      this.mode = "edit";
      console.log(index);
      console.log(row);
      // 获取index
      this.userFormIndex = index;
      // 先有数据
      this.userForm.name = row.name;
      this.userForm.age = row.age;
      this.userForm.address = row.address;
      this.userForm.sex = row.sex;
      this.userForm.birth = row.birth;
      // 再打开弹框
      this.dialogVisible = true;
    },
    // 确认新增或者编辑
    sureAddOrEdit() {
      if (this.mode === "add") {
        // 新增状态
        this.tableData.unshift(this.userForm);
      } else {
        // 编辑状态打开的弹框
        // 修改表单数据
        this.tableData[this.userFormIndex].name = this.userForm.name;
        this.tableData[this.userFormIndex].age = this.userForm.age;
        this.tableData[this.userFormIndex].address = this.userForm.address;
        this.tableData[this.userFormIndex].sex = this.userForm.sex;
        this.tableData[this.userFormIndex].birth = this.userForm.birth;
      }
      // 关闭弹框
      this.dialogVisible = false;
    },

    // 删除
    handleDelete(index, row) {
      this.deleteDialogVisible = true;
      this.userFormIndex = index;
    },
    // 确认删除
    sureDelete() {
      // 从当前索引值删除，删除1个元素
      console.log(this.userFormIndex);

      this.tableData.splice(this.userFormIndex, 1);
      // 关闭弹框
      this.deleteDialogVisible = false
    },
    // 分页
    handleCurrentChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" scoped>
#userManage {
  display: flex;
  flex-direction: column;
  width: 99%;
  box-sizing: border-box;
  padding: 0 20px;
}
.handleArea {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  .addBtn {
    display: flex;
    align-items: center;
  }
  .searchBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input .el-input__inner {
      height: 50px;
    }
    .el-button {
      margin-left: 20px;
    }
  }
}
.userList {
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 550px;
  align-items: center;
}
</style>
