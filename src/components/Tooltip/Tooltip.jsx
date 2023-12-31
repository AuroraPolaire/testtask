import React from 'react';
import PropTypes from 'prop-types';
import { TooltipBox } from './Tooltip.styled';

export const Tooltip = ({ info }) => {
  if (info.length <= 28) {
    return info;
  } else {
    const truncatedInfo = info.slice(0, 25) + '...';
    return (
      <TooltipBox>
        <div className="hover-tooltip">
          {truncatedInfo}
          <span className="tooltip">{info}</span>
        </div>
      </TooltipBox>
    );
  }
};

Tooltip.propTypes = {
  info: PropTypes.string.isRequired,
};
