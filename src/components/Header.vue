<template>
  <div class="header">
    <div class="headerLeft">
      <el-button icon="el-icon-edit"></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hhh' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="headerRight">
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-avatar
          slot="reference"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;

  background-color: #2d3436;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .headerLeft {
    display: flex;
    align-items: center;
  }
}
:deep(.el-breadcrumb) .el-breadcrumb__item .el-breadcrumb__inner {
  color: #fff;
}
.el-button {
  margin-right: 20px;
}

</style>
