const handleClick = () => {
  const data = { p1: "fgdfg", p2: "gfdgdhgd", p3: "dfgdfgdgs" };
  fetch(
    `https://script.google.com/macros/s/AKfycbybafjp4FqvByk4uKikz8OlZzsIEWkIRHpk8v7JmUXrv0ESU-uBz7yCm2v08ifloBko/exec`,
    {
      redirect: "follow",
      method: "POST",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  ).then((resp) => console.log(resp));
};

const butt = document.querySelector("button");
butt.addEventListener("click", handleClick);
