const yuzde = document.querySelector(".yuzde");
const baslik = document.querySelector(".baslik");
let yuzdelik = 0;

const arttir = () => {
  yuzdelik++;
  console.log(yuzdelik);
  if (yuzdelik == 200) {
    clearInterval(interval);
  } else if (yuzdelik == 148) {
    yuzde.classList.add("buyu");

    baslik.innerHTML = "Dolacak mı sandın?";
    setTimeout(() => {
      baslik.classList.add("baslik-buyu");
    }, 2000);

    setTimeout(() => {
      baslik.classList.remove("baslik-buyu");
      baslik.innerHTML = "Ne bu gün ne yarın asla dolmayacak...";
      setTimeout(() => {
        baslik.classList.add("baslik-buyu");
      }, 1000);
      setTimeout(() => {
        baslik.classList.remove("baslik-buyu");
        baslik.innerHTML = "Seni Seviyorum";
        setTimeout(() => {
          baslik.classList.add("baslik-buyu");
        }, 1000);
      }, 6000);
      setTimeout(() => {
        baslik.classList.remove("baslik-buyu");
        baslik.innerHTML = "Şimdi bilgisayarın altındaki çekmeceyi açar mısın?";
      }, 10000);
    }, 6000);
  }
  yuzde.innerHTML = `% ${yuzdelik}`;
};
const interval = setInterval(arttir, 80);
