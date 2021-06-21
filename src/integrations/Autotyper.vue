<template>
  <h3 class="typer-text">
    BUY
    <span class="typed-text">{{ typer.value }}</span>
    <span class="cursor" :class="{ typing: typer.status }">&nbsp;</span>
  </h3>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      typer: {
        value: "",
        status: false,
        words: [
          "AND SELL MUSA USING CRYPTO",
          "FOR SEE THE FUTURE E-COMMERCE",
          "PROJECTS",
          "MUSA",
        ],
        speed: 200,
        erasingSpeed: 200,
        newTextDelay: 50,
      },
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typer.words[this.typeArrayIndex].length) {
        if (!this.typer.status) this.typer.status = true;
        this.typer.value += this.typer.words[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typer.speed);
      } else {
        this.typer.status = false;
        setTimeout(this.eraseText, this.typer.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typer.status) this.typer.status = true;
        this.typer.value = this.typer.words[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typer.status = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typer.words.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typer.speed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.typer.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
h3{
  color:#000; 
}
.typer-text {
  color: #0000 ;
  font-weight: bold;
  span.typed-text {
    color: #8854b4;
  }
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>