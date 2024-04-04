import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  textColor: string;
}

export default function ReturnBtn({ textColor }: IProps) {
  return (
    <button
      className="
        flex items-center justify-center
        w-12 
        h-12 
        border
        border-b-1 
        border-solid 
        border-neutral-900 
        rounded-full 
        text-center
        py-2
      "
      style={{ color: textColor }}
      type="button"
    >
      <FontAwesomeIcon icon={faChevronLeft} 
        className="
          w-2.5
          h-4
          font-normal
          text-xs
          leading-4
          text-center
        "
        style={{ color: textColor }} 
      />
    </button>
  );
}

ReturnBtn.propTypes = {
  textColor: PropTypes.string.isRequired
};

