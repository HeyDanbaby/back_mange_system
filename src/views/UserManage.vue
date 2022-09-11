<template>
  <div id="userManage" ref="userManageRef">
    <!-- 新增+搜索 -->
    <div class="handleArea">
      <!-- 新增 -->
      <div class="addBtn">
        <el-button type="primary" icon="el-icon-plus">新增</el-button>
      </div>
      <!-- 搜索 -->
      <div class="searchBtn">
        <el-input placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>

    <!-- 用户列表 -->
    <div class="userList">
      <el-table :data="tableData" border style="width: 100%" height="550px">
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
    </div>

    <!-- 编辑对话框 -->
    <el-dialog title="更新用户" :visible="dialogVisible" width="30%">
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
          <el-date-picker v-model="userForm.birth" type="date">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userForm.address"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
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
          name: "刘德华",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "002",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "003",
          name: "范冰冰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "004",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "005",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "006",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "007",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "008",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "009",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "010",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "011",
          name: "赵秀兰",
          age: 24,
          sex: "女",
          birth: "2022-01-29",
          address: "上海市杨浦区新江湾城街道",
        },
        {
          id: "012",
          name: "赵秀兰",
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
      dialogVisible: false,
      userForm: {
        name: "",
        age: "",
        address: "",
        sex: "",
        birth: "",
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index);
      console.log(row);
      this.userForm.name = row.name;
      this.userForm.age = row.age;
      this.userForm.address = row.address;
      this.userForm.sex = row.sex;
      this.userForm.birth = row.birth;

      this.dialogVisible = true;
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
}
</style>
