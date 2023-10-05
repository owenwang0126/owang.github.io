let particles = [];
let homepageURLs = [
  "https://www.bilibili.com/video/BV1vG4y1j7g2/?spm_id_from=333.788.recommend_more_video.3&vd_source=dcc5df7b97a1f0e1d2621be962a84218",
  "https://www.bilibili.com/video/BV1Y24y1f7Rk/?spm_id_from=333.788.recommend_more_video.0&vd_source=dcc5df7b97a1f0e1d2621be962a84218",
  "https://www.bilibili.com/video/BV1Fg4y1n7mW/?spm_id_from=333.337.search-card.all.click"
];
let currentURLIndex = 0;

function setup() {
  createCanvas(800, 600);
  
  // 创建粒子系统
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(220); // 设置背景为云朵的颜色
  
  // 显示粒子效果
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

// 粒子类
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height / 2, height); // 使粒子只出现在画布的上半部分
    this.vx = random(-1, 1);
    this.vy = random(-0.2, 0.2); // 垂直速度较小，看起来像云朵
    this.size = random(10, 30);
    this.color = color(255, 255, 255, random(200, 255)); // 设置颜色为白色，透明度随机
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // 如果粒子超出画布边界，重新放置到画布左侧
    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    // 打开当前URL
    window.open(homepageURLs[currentURLIndex], "_self");
  } else if (keyCode === RIGHT_ARROW) {
    // 切换到下一个URL
    currentURLIndex = (currentURLIndex + 1) % homepageURLs.length;
  }
}
