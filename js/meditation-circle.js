fetch('../assets/images/meditation-circle.svg')
  .then(r => r.text())
  .then(svg => {
    document.getElementById('meditation-circle').innerHTML = svg;
    console.log('SVG loaded'); // add this to confirm it's running
  })
  .catch(err => console.error(err)); // add this to catch errors