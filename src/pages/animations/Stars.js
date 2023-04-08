import '../styling/stars.css'

export default function Stars({ numStars }) {
  const starsArr = [];
  let stars = ""
  var w = window.innerWidth;
  var h = window.innerHeight;

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    let starClass = 'stars';
    stars += `<div style='top:${top}px; left:${left}px; position:absolute' class='stars'></div>`
    starsArr.push({top:`${top}px`, left:`${left}px`, starClass:starClass})
  }

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    let starClass = 'stars2';
    stars += `<div style='top:${top}px; left:${left}px; position:absolute' class='stars2'></div>`
    starsArr.push({top:`${top}px`, left:`${left}px`, starClass:starClass})
  }

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    let starClass = 'stars3';
    stars += `<div style='top:${top}px; left:${left}px; position:absolute' class='stars3'></div>`
    starsArr.push({top:`${top}px`, left:`${left}px`, starClass:starClass})
  }
  console.log(starsArr)
  return (
    <div>
      {
        starsArr.map((item, id) => {
            return (
              <div key={id} style={{top:item.top, left:item.left, position:'absolute'}} className={item.starClass}/>
            )
        })
      }
    </div>
  )
}


