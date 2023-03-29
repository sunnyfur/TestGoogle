const handleClick = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("entry.1108936293", document.querySelector("#id1").value);
  formData.append("entry.1055028752", document.querySelector("#id2").value);
  formData.append("entry.122502251", document.querySelector("#id3").value);
  console.log(document.querySelector("#id1").value);
  fetch(
    `https://docs.google.com/forms/d/e/1FAIpQLSfX44GKzXNEZLQwePNWDiHOH1u63aqgVchfYwO3RCRK0bioEA/formResponse`,
    {
      // redirect: "follow",
      method: "POST",
      mode: "no-cors",
      body: formData,
      header: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err));
};

const butt = document.querySelector("form");
butt.addEventListener("submit", handleClick);
