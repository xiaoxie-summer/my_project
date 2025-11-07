<template>
  <div class="page">
    <div class="header">
      <h1 class="title">个人空间</h1>
      <p class="subtitle">探索我的兴趣与项目</p>
    </div>
    
    <div class="blog">
      <button 
        v-for="(item, index) in menuItems" 
        :key="index"
        @click="handleClick(item)"
        :class="['btn', `btn-${index + 1}`]"
      >
        <div class="btn-content">
          <span class="btn-text">{{ item.name }}</span>
          <div class="btn-icon">{{ item.icon }}</div>
        </div>
      </button>
    </div>
    
    <div class="footer">
      <p>点击按钮探索不同内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationPage',
  data() {
    return {
      menuItems: [
        { name: '地图', icon: '🗺️', route: '/map' },
        { name: '音乐', icon: '🎵', route: '/music' },
        { name: '图表', icon: '📊', route: '/echarts' },
        { name: '背景', icon: '🎨', route: '/background' },
        { name: '书籍', icon: '📚', route: '/book' },
        { name: '游戏', icon: '🎮', route: '/game' }
      ]
    }
  },
  methods: {
    handleClick(item) {
      // 添加点击动画效果
      const button = event.currentTarget;
      button.classList.add('btn-clicked');
      
      // 模拟加载延迟
      setTimeout(() => {
        button.classList.remove('btn-clicked');
        
        // 路由跳转
        if (this.$router) {
          this.$router.push(item.route);
        } else {
          console.log(`跳转到: ${item.route}`);
          alert(`即将跳转到: ${item.name}`);
        }
      }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.header {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeInDown 0.8s ease-out;
  
  .title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #4a4a4a;
    margin-bottom: 10px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
    font-weight: 300;
  }
}

.blog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  animation: fadeIn 1s ease-out 0.2s both;
}

.btn {
  aspect-ratio: 4/3;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: none;
  position: relative;
  overflow: hidden;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    &::before {
      transform: translateX(100%);
    }
    
    .btn-content {
      transform: scale(1.05);
    }
  }
  
  &.btn-clicked {
    animation: pulse 0.3s ease;
  }
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.3s ease;
  z-index: 1;
}

.btn-text {
  font-size: 1.5rem;
}

.btn-icon {
  font-size: 2.5rem;
  opacity: 0.9;
}

/* 各个按钮的渐变背景 */
.btn-1 {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
}

.btn-2 {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
}

.btn-3 {
  background: linear-gradient(135deg, #ffd166 0%, #ffb347 100%);
}

.btn-4 {
  background: linear-gradient(135deg, #a882dd 0%, #8a6bc9 100%);
}

.btn-5 {
  background: linear-gradient(135deg, #1a8fe3 0%, #0d5d9c 100%);
}

.btn-6 {
  background: linear-gradient(135deg, #06d6a0 0%, #04a777 100%);
}

.footer {
  text-align: center;
  margin-top: 40px;
  animation: fadeIn 1s ease-out 0.4s both;
  
  p {
    color: #666;
    font-size: 1rem;
    font-weight: 300;
  }
}

/* 动画定义 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

/* 响应式设计 */
@media (max-width: 900px) {
  .blog {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
  }
  
  .header .title {
    font-size: 2.2rem;
  }
}

@media (max-width: 600px) {
  .blog {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 15px;
  }
  
  .page {
    padding: 20px;
  }
  
  .header .title {
    font-size: 1.8rem;
  }
  
  .btn-text {
    font-size: 1.3rem;
  }
  
  .btn-icon {
    font-size: 2rem;
  }
}
</style>