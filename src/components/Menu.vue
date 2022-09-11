<template>
  <div class="menu">
    <div class="title">后台管理系统</div>
    <el-menu
      background-color="#636e72"
      text-color="#fff"
      active-text-color="#f1c40f"
      :router="true"
    >
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="productManage">
        <i class="el-icon-document"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>

      <el-menu-item index="userManage">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

      <el-submenu index="other">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>其他</span>
        </template>
        <el-menu-item index="otherOne">选项1</el-menu-item>
        <el-menu-item index="otherTwo">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  background: #636e72;
  height: 100%;
  width: 200px;
}
.title {
  color: #fff;
  font-size: 22px;
  text-align: center;
  padding-top: 10px;
}
.is-opened .el-submenu__title span {
  color: #f1c40f;
}
.el-menu {
  border-right: none;
}
</style>
