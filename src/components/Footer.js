import React from 'react';
import PropTypes from 'prop-types'

export default function Footer(props) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-2 text-center bg-indigo-400 text-white font-mono font-medium">
        {props.footNote}
    </footer>
  )
}

Footer.propTypes = {
    footNote: PropTypes.string.isRequired
}

Footer.defaultProps = {
    footNote: "Your Footer Text goes here ..."
}