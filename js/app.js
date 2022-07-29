function generateModalHtml(videoId) {
    let modalHtml = `<div class="modal" id="modal-video" data-animation="slideInOutLeft">
    <div class="modal-dialog">
      <section class="modal-content">
        <iframe width="800" height="500" src="https://www.youtube.com/embed/${videoId}?autoplay=1"
         title="YouTube video player" frameborder="0"
         allow='autoplay'
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>
      </section>
    </div>
  </div>`
    return modalHtml
}

const isVisible = "is-visible";

function closeModal() {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    document.getElementById("modal-video").outerHTML = "";
}

function openModal(videoId) {
    if (document.getElementById("modal-video")) {
        closeModal()
    }

    const modalHtml = generateModalHtml(videoId);
    document.getElementById("body").insertAdjacentHTML("beforeend", modalHtml);
    const modal = document.getElementById("modal-video");
    modal.classList.add(isVisible);

    document.addEventListener("click", e => {
        if (e.target == document.querySelector(".modal.is-visible")) {
            closeModal()
        }
    });

    document.addEventListener("keyup", e => {
        // if we press the ESC
        if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
            closeModal()
        }
    });
}

function copyToClipboard(text) {
    window.navigator.clipboard.writeText(text);
    alert("Đã copy số điện thoại: " + text);
}