import { useSpring, animated, Spring } from "@react-spring/web";

const VerticalProgress = () => {
    const transition = useSpring({
        from:{height:'0vw'},
        to:{height:'40vw'}
    })
    return (
        <Spring from={{ percent: 0 }} to={{ percent: 100 }}>
        {({ percent }) => (
          <div className="vertical">
            <div style={{ height: `${percent}%` }} className="progress-bar">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
      </Spring>
    );
};

export default VerticalProgress;