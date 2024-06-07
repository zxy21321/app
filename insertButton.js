/**
 * 加载插件 1.0
 */
document.addEventListener('DOMContentLoaded', function () {
  function checkReadyState() {
    if (document.readyState === 'complete') {
      // 页面加载完成，隐藏刷新按钮和loading SVG
      const button = document.getElementById('refreshButton');
      const loading = document.getElementById('loadingSVG');
      if (button) {
        button.style.display = 'none';
      }
      if (loading) {
        loading.style.display = 'none';
      }
    } else {
      // 页面未加载完成，显示刷新按钮和loading SVG
      let button = document.getElementById('refreshButton');
      let loading = document.getElementById('loadingSVG');
      let progressText = document.getElementById('progressText');
      if (!button) {
        button = document.createElement('button');
        button.id = 'refreshButton';
        button.innerText = 'Reload';
        button.onclick = function () {
          window.location.reload();
        };
        document.body.appendChild(button);
        // 插入CSS样式
        insertButtonStyles();
      }
      if (!loading) {
        loading = document.createElement('div');
        loading.id = 'loadingSVG';
        loading.innerHTML = `
        <div class="spinner"></div>
        <div id="progressText">0%</div>
        `;
        document.body.appendChild(loading);
        // 插入CSS样式
        insertLoadingStyles();
      }
      if (!progressText) {
        progressText = document.getElementById('progressText');
      }
      button.style.display = 'block';
      loading.style.display = 'block';
      // 500毫秒后再次检查
      setTimeout(checkReadyState, 500);
    }
  }

  //加载按钮主色调
  const mainColor = '#007bff';

  function insertButtonStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      #refreshButton {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color:  ${mainColor};
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  }

  function insertLoadingStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      #loadingSVG {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 19px !important;
        box-sizing: border-box;
        text-align: center;
      }
      .spinner {
        border: 8px solid rgba(0, 123, 255, 0.2);
        border-top: 8px solid ${mainColor};
        border-radius: 50%;
        width: 2.6rem;
        height: 2.6rem;
        animation: spin 1s linear infinite;
        box-sizing: border-box;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      #progressText {
        margin-top: 10px;
        color: ${mainColor};
        font-size: 19px !important;
      }
    `;
    document.head.appendChild(style);
  }
  let initialProgressSet = false;

  function updateProgress() {
    const progressText = document.getElementById('progressText');
    if (progressText) {
      const resourcesLoaded = performance.getEntriesByType('resource').length;
      const totalResources = resourcesLoaded + 1; // 加1用于document加载
      const percentComplete = Math.min(
        100,
        Math.round((resourcesLoaded / totalResources) * 100),
      );
      progressText.innerText = percentComplete + '%';
    }
  }

  function monitorResources() {
    if (!initialProgressSet) {
      updateProgress(); // 初始设置进度
      initialProgressSet = true;
    }
    if (document.readyState !== 'complete') {
      updateProgress();
      requestAnimationFrame(monitorResources);
    }
  }

  // 初始检查
  checkReadyState();
  monitorResources();
});
