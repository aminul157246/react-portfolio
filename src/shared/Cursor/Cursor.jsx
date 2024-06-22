
import AnimatedCursor from "react-animated-cursor"


const AnimCursor = () => {
  return (
      <div>
          <AnimatedCursor
          innerSize={25}
          outerSize={25}
          color='225,225,225'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          />
      </div>
  );
};

export default AnimCursor;