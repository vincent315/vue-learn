<style scoped>
	.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
	<div class="layout">
		<Layout>
			<Header>
				<Menu mode="horizontal" theme="dark" active-name="1">
					<div class="">
						<MenuItem name="0">
						<Icon type="ios-navigate"></Icon>
						调度器平台
						</MenuItem>
						<MenuItem name="1">
						<Icon type="ios-keypad"></Icon>
						任务管理
						</MenuItem>
					</div>

				</Menu>
			</Header>
			<Layout>
				<Sider hide-trigger :style="{background: '#fff'}">
					<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
						<Submenu name="1">
							<template slot="title">
								<Icon type="ios-navigate"></Icon>
								任务配置
							</template>
							<router-link to="/e3">
								<MenuItem name="1-1">配置1</MenuItem>
							</router-link>
							<router-link to="/e4">
								<MenuItem name="1-2">配置2</MenuItem>
							</router-link>
						</Submenu>
						<Submenu name="2">
							<template slot="title">
								<Icon type="ios-keypad"></Icon>
								数据展示
							</template>
							<router-link to="/e1">
								<MenuItem name="2-1">展示1</MenuItem>
							</router-link>

							<router-link to="/e2">
								<MenuItem name="2-2">展示2</MenuItem>
							</router-link>

						</Submenu>

					</Menu>
				</Sider>
				<Layout :style="{padding: '0 24px 24px'}">
					<!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb> -->
					<Content :style="{padding: '24px', minHeight: '580px', background: '#fff'}">
						<router-view />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	</div>
</template>
<script>
	export default {
		name: 'App'
	}
</script>
