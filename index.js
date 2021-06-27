fetch("https://api.unsplash.com/photos/?client_id=cl1f0ZPa6hgwoazEYPwh_otBP90I7Es5ozZ1VgVK8Vw&per_page=20")
.then((res) => {
  const data = res.json();
  return data;
})
.then((data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let container = document.querySelector("#data-here");
    // only get straight photos
    if (data[i].height > data[i].width) {
      let img = document.createElement("img");
      img.setAttribute("src", data[i].urls.small);
      container.append(img);
    }
  }
});