document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector('.card');
  const boards = document.querySelectorAll('.watch-column');
  let dragged

  for(const board of boards) {
    board.addEventListener("dragover", dragover)
    board.addEventListener("dragstart", storeDragged)
    board.addEventListener("dragenter", dragenter)
    board.addEventListener("drop", drop)
  }

  function storeDragged(e) {
  // e.preventDefault()
  dragged = e.target;
  console.log('dragged =', dragged);
  }

  function dragover(e) {
  e.preventDefault();
  }
  function dragenter(e) {
    e.preventDefault()
    // e.dataTransfer.setData("text/plain", e.target.id);
  }
  function drop(e) {
    e.preventDefault();
    // const data = e.dataTransfer.getData("text");
    // e.target.appendChild(document.getElementById(data));
    dragged.parentNode.removeChild( dragged );
    e.target.appendChild( dragged );
  }

});
