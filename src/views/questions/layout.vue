<template>
  <div class="layout">
		<div class="layout-wrap">
			<div class="left" >
				<slot name="left"></slot>
			</div>
      <div class="right">
				<slot name="right"></slot>
			</div>
			
		</div>
  </div>
</template>

<script>

export default {

    data() {
        return {

        }
    }
}
</script>

<style lang="less">
.layout {
	//width: 100%;
	height: calc(100vh - 248px);

	&-wrap {
		width: 80%;
		height: 100%;
		min-width: 1200px;
		margin: 0 auto;
		display: flex;

		.left {
			width: 20%;
			width: 270px;
			margin-right: 20px;
			flex-shrink: 0;


		}

		.right {
			width: 80%;

		}
	}

}
</style>