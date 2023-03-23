import { useSpring, animated, Spring } from "@react-spring/web";

const HorizontalProgress = ({progress}) => {
    const transition = useSpring({
        from:{width:'20vw'},
        to:{width: progress}
    })
    return (
      <animated.div style={transition}>
          <div className="vertical">
            <div className="progress-bar">
              <span className="sr-only"></span>
            </div>
          </div>
      </animated.div>
    );
};

export default HorizontalProgress;