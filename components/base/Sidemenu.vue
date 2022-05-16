<template>
  <div class="sidemenu">
    <button class="hamburger">
      <div class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
		<p>menu</p>
  </div>
</template>

<style lang="scss" scoped>
.sidemenu {
	display: none;
	@include respond('md') {
		display: flex;
	}
	position: fixed;
	height: 100vh;
	top: 0;
	bottom: 0;
	width: 80px;
	right: 0;
	align-items: center;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
	border-left: 1px solid $light-grey;
	background-color: $white;
	cursor: pointer;
	z-index: 9999;
  .hamburger {
    display: flex;
    align-items: center;
    background: none;
    cursor: pointer;
    .hamburger-icon {
      height: 12px;
      width: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        height: 2px;
        width: 100%;
        background-color: $secondary;
      }
    }
  }
	p {
		text-transform: uppercase;
		writing-mode: vertical-lr;
		font-weight: 900;
		font-size: 26px;
		color: $light-grey;
	}
}
</style>
