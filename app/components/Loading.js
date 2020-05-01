import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default function Loading({ text, speed }) {
  const [textContent, setText] = React.useState(text);
  const id = React.useRef();

  React.useEffect(() => {
    id.current = setInterval(() => {
      textContent === text + '...'
        ? setText(text)
        : setText((text) => text + '.');
    }, speed);

    return () => {
      clearInterval(id.current);
    };
  });

  return <p style={styles.content}>{textContent}</p>;
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};
