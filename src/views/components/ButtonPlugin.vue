<template>
  <div class="login">
    <button class="cool-btn btn-neon btn-particle" @click="createParticles($event)">
      点击进入Blog
    </button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      message: '',
      messageColor: '#00e5ff',
      particleColors: ['#ffffff', '#ff0080', '#00e5ff', '#38ef7d', '#ff8c00', '#6a11cb', '#fc00ff'],
      particleSize: [3, 6],
      disabled: false
    }
  },
  methods: {
    handleClick() {
      this.messageColor = this.getRandomColor();
      console.log('111');

      // 3秒后清除消息
      setTimeout(() => {
        this.message = '';
      }, 2000);
    },

    createParticles(event) {
      this.handleClick();
      const button = event.target;
      const rect = button.getBoundingClientRect();

      // 创建粒子
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // 随机位置
        const x = rect.width / 2;
        const y = rect.height / 2;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        button.appendChild(particle);

        // 随机动画
        const angle = Math.random() * Math.PI * 2;
        const size = this.particleSize[0] + Math.random() * (this.particleSize[1] - this.particleSize[0]);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        const colorIndex = Math.floor(Math.random() * this.particleColors.length);
        particle.style.background = this.particleColors[colorIndex];

        button.appendChild(particle);
        const animation = particle.animate([
          {
            transform: `translate(0, 0)`,
            opacity: 1
          },
          {
            transform: `translate(${Math.cos(angle) * 60}px, ${Math.sin(angle) * 60}px)`,
            opacity: 0
          }
        ], {
          duration: 800 + Math.random() * 400,
          easing: 'cubic-bezier(0, .9, .57, 1)',
          fill: 'forwards'
        });


        animation.onfinish = () => {
          particle.remove();
        };
      }
    },

    getRandomColor() {
      const colors = [
        '#ff0080', '#00e5ff', '#38ef7d',
        '#ff8c00', '#6a11cb', '#fc00ff'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.login-title {
  color: white;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
  text-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
}

/* 炫酷按钮样式 */
.cool-btn {
  position: relative;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  outline: none;
  color: white;
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* 霓虹效果 */
.btn-neon {
  background: linear-gradient(45deg, #ff0080, #ff8c00);
  box-shadow: 0 0 10px rgba(255, 0, 128, 0.4),
    0 0 20px rgba(255, 0, 128, 0.3),
    0 0 30px rgba(255, 0, 128, 0.2),
    inset 0 0 10px rgba(255, 0, 128, 0.1);
}

/* 渐变彩色边框效果 */
.btn-neon::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(45deg,
      #ff0080, #00e5ff, #38ef7d, #ff8c00,
      #6a11cb, #fc00ff, #ff0080);
  background-size: 400% 400%;
  border-radius: 18px;
  z-index: -1;
  animation: gradient-border 6s ease infinite;
}

@keyframes gradient-border {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

/* 渐变放大字体效果 */
.btn-neon span {
  display: block;
  background: linear-gradient(45deg,
      #ffffff, #ffeb3b, #00e5ff, #38ef7d);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-text 4s ease infinite, text-pulse 2s ease-in-out infinite;
}

@keyframes gradient-text {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes text-pulse {

  0%,
  100% {
    transform: scale(1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  50% {
    transform: scale(1.05);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
}

/* 悬停效果 */
.cool-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(255, 0, 128, 0.6),
    0 0 30px rgba(255, 0, 128, 0.4),
    0 0 45px rgba(255, 0, 128, 0.3),
    inset 0 0 15px rgba(255, 0, 128, 0.2);
}

/* 点击效果 */
.cool-btn:active {
  transform: translateY(2px);
  box-shadow: 0 0 5px rgba(255, 0, 128, 0.4),
    0 0 10px rgba(255, 0, 128, 0.3),
    inset 0 0 5px rgba(255, 0, 128, 0.2);
}

/* 光泽效果 */
.cool-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: all 0.6s ease;
}

.cool-btn:hover::after {
  left: 100%;
}

/* 粒子样式 */
.particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  z-index: 1;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .login-container {
    padding: 20px;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .cool-btn {
    width: 180px;
    height: 55px;
    font-size: 16px;
  }
}
</style>