document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector('.card');
  const boards = document.querySelectorAll('.watch-column');
  let dragged

  for(const board of boards) {
    board.addEventListener("dragstart", storeDragged);
    board.addEventListener("dragover", dragOver);
    board.addEventListener("drop", drop);
  };

  function storeDragged(e) {
    dragged = e.target;
  };

  function dragOver(e) {
    e.preventDefault();
  };

  function drop(e) {
    e.preventDefault();
    if ( e.target.className === "watch-column" && e.target !== dragged.parentNode ) {
      dragged.parentNode.removeChild(dragged);
      e.target.appendChild(dragged);
    } else if (e.target.className === "watch-column") {
      e.target.appendChild(dragged);
    }
  };

});
