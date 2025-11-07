<template>
    <div class="page">
        <div class="blog">
            <button v-for="(value, key) in map" :key="key" :class="`btn btn-${key + 1}`">{{ value }}</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            map: [
                'map', 'music', 'echarts', 'Background', 'book', 'game'
            ]
        }
    },
    methods: {

    },
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.btn');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    // 添加点击效果
                    button.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        button.style.transform = '';
                        console.log('click');

                    }, 150);
                    this.map.forEach(item => {
                        if (item === button.textContent) {
                            this.$router.push('/' + button.textContent)
                        }
                    })
                    // 这里可以添加按钮的具体功能
                    console.log(`点击了${button.textContent}`);
                });
            });
        });
    }
}
</script>
<style lang="scss" scoped>
.page {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 30px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    padding: 20px;
}


.blog {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 25px;
}

.btn {
    aspect-ratio: 4/3;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border: none;
    position: relative;
    overflow: hidden;
}

.btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(0);
}

/* 各个按钮的渐变背景 */
.btn-1 {
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
}

.btn-2 {
    background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
}

.btn-3 {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.btn-4 {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.btn-5 {
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
}

.btn-6 {
    background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
}

.btn-7 {
    background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
}

.btn-8 {
    background: linear-gradient(135deg, #a6c0fe 0%, #f68084 100%);
}

/* 添加光晕效果 */
.btn::after {
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

.btn:hover::after {
    transform: translateX(100%);
}

/* 响应式设计 */
@media (max-width: 900px) {
    .blog {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 20px;
    }

    .btn {
        aspect-ratio: 3/2;
    }
}

@media (max-width: 500px) {
    .blog {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 1fr);
    }
}
</style>