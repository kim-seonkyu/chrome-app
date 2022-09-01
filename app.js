// 제공되는 보일러 플레이트를 사용해 아래의 예시와 동일하게 작동하는 애플리케이션을 만드세요.

// 1.마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
// 2.마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
// 3.브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
// 4.마우스를 우 클릭하면 title이 바뀌어야 합니다.
// 5.title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
// 6. .css 와 .html 파일은 수정하지 마세요.
// 7.모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
// 8.모든 조건이 충족되지 못하면 ❌를 받습니다.
let title = document.getElementById("title");
let colors = ["DarkCyan", "DodgerBlue", "Crimson", "DarkOrchid"];

const superEventHandler = {
  onMouse: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  leaveMouse: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  rightClick: function () {
    title.innerText = "That was right click!";
    title.style.color = colors[2];
  },

  resizing: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.onMouse);

title.addEventListener("mouseleave", superEventHandler.leaveMouse);

document.addEventListener("contextmenu", superEventHandler.rightClick);

window.addEventListener("resize", superEventHandler.resizing);
