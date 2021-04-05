
setInterval(function() {
   let items = document.body.childNodes;
   let item = items[Math.floor(Math.random() * items.length)];
   item.setAttribute("visibility","hidden");
  },120);