<template>
  <div class="wrapper flex-h-v">
    <div class="footer-element">
      <a href="https://github.com/maxthemillion">
        <div class="icon-wrapper flex-h">
          <div class="icon" id="github"></div>
          <div class="icon-text">Visit me on GitHub!</div>
        </div>
      </a>
    </div>

    <div class="footer-element">
      <a href="https//www.maxrahn.eu">
        <div class="icon-wrapper flex-h">
          <div class="icon" id="max"></div>
          <div class="icon-text">Visit my DataBlog!</div>
        </div>
      </a>
    </div>

    <div class="footer-element">
      <a href="https://t.me/maxthemillion">
        <div class="icon-wrapper flex-h">
          <div class="icon" id="telegram"></div>
          <div class="icon-text">Ask me on Telegram!</div>
        </div>
      </a>
    </div>

    <div class="footer-element">
      <a href="www.linkedin.com/in/maximilian-rahn-21132311b">
        <div class="icon-wrapper flex-h">
          <div class="icon" id="linkedin"></div>
          <div class="icon-text">Say hi on LinkedIn</div>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "VisitBar"
};
</script>

<style lang="scss" scoped>
@import "~@bit/maxthemillion.d3charts.styles";

#github {
  background-image: url("./assets/GitHub.png");
}

#max {
  background-image: url("./assets/Max.png");
}

#linkedin {
  border-radius: 0px;
}

#telegram{
    background-image: url("./assets/t_logo.png");
}

.icon {
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  margin-left: 0.3rem;
}

.icon-wrapper {
  background-color: #ebebeb;
  border-radius: 2rem;
  text-align: left;
  align-items: center;
  height: 3rem;
  width: 18rem;
  justify-content: left !important;
}

.icon-text {
  font-size: $psize * 0.8;
}

.wrapper {
  height: 10vh;
  min-height: 6em;
  justify-content: space-around;
  width: 100%;
}

.footer-element {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.flex-h-v {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

</style>
