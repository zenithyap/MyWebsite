import '../styling/stars.css'

export default function Stars({ numStars }) {
  const starsArr = [];
  var w = window.innerWidth;
  var h = window.innerHeight;

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    let starClass = 'stars';
    starsArr.push({top:`${top}px`, left:`${left}px`, starClass:starClass})
  }

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    let starClass = 'stars2';
    starsArr.push({top:`${top}px`, left:`${left}px`, starClass:starClass})
  }

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    let starClass = 'stars3';
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


