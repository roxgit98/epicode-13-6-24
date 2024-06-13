const url = "https://api.pexels.com/v1/search?query=dog";

const loadImages = () => {
  fetch(url, {
    headers: {
      Authorization: "RuM5mHDt3GPzYkYBEbNWLQhkjVaQDBZ2W4M8v6U4HcHWWJrpRDUkAKl7",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore");
      }
    })

    .then((imgsObj) => {
      imgsObj.photos.forEach((cards, index) => {
        const card = document.querySelectorAll(".card .card-img-top");
        if (card[index]) {
          card[index].src = cards.src.original;
        }
      });
    })

    .catch((err) => console.log(err));
};

const button = document.getElementById("load");

button.addEventListener("click", loadImages);
