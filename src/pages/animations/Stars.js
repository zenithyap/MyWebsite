import '../styling/stars.css'

export default function Stars({ numStars }) {
  const starsArr = [];
  const shootingStarArr = [];
  const max = 3;
  const min = 1.5;
  const delayMax = 30;
  const delayMin = 0;
  const sMax = 1.5;
  const sMin = 1;
  var w = window.innerWidth;
  var h = window.innerHeight;

  for (let i = 0; i < Math.floor(numStars / 3); i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 20;
    starsArr.push({
      top: `${top}px`,
      left: `${left}px`,
      starClass: 'stars',
      animation: `blinking ${Math.random() * (max - min) + min}s linear infinite forwards`,
    })

    top = Math.random() * h;
    left = Math.random() * w - 20;
    starsArr.push({
      top: `${top}px`,
      left: `${left}px`,
      starClass: 'stars2',
      animation: `blinking ${Math.random() * (max - min) + min}s linear infinite forwards`,
    })

    top = Math.random() * h;
    left = Math.random() * w - 20;
    starsArr.push({
      top: `${top}px`,
      left: `${left}px`,
      starClass: 'diamondStar',
      animation: `blinking ${Math.random() * (max - min) + min}s linear infinite forwards`,
    })
  }

  for (let i = 0; i < 20; i++) {
    let top = Math.random() * h;
    let left = Math.random() * w - 250;
    shootingStarArr.push({
      top: `${top}px`,
      left: `${left}px`,
      starClass: 'shootingStar',
      animation: `move-along-path ${Math.random() * (sMax - sMin) + sMin}s linear forwards`,
      'animation-delay': `${Math.random() * (delayMax - delayMin) + delayMin}s`,
    })
  }

  return (
    <div>
      {
        starsArr.map((item, id) => {
          return (
            <div key={id} style={{
              top: item.top,
              left: item.left,
              position: 'absolute',
              animation: item.animation,
            }}
              className={item.starClass} />
          )
        })
      }
      {
        shootingStarArr.map((item, id) => {
          return (
            <div key={id} style={{
              top: item.top,
              left: item.left,
              position: 'absolute',
              animation: item.animation,
              animationDelay: item['animation-delay'],
            }}
              className={item.starClass} />
          )
        })
      }
    </div>
  )
}


