import React from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const ActivityCalendar = () => {
  const theme = {
    light: [
      '#f4f4f5',
      '#d4d4d8',
      '#a1a1aa',
      '#52525b',
      '#18181b',
    ],
    dark: [
      '#f4f4f5',
      '#d4d4d8',
      '#a1a1aa',
      '#52525b',
      '#18181b',
    ],
  };

  return (
    <div className="w-full flex justify-center select-none">
      <div className="w-full max-w-fit overflow-hidden">
        <GitHubCalendar
          username="albedim"
          theme={theme}
          blockSize={11}
          blockMargin={1.4}
          fontSize={12}
          renderBlock={(block: any, activity: any) =>
            React.cloneElement(block, {
              className: 'calendar-block hover:cursor-pointer hover:opacity-80 transition-opacity duration-300 outline-none focus:outline-none',
              'data-tooltip-id': 'react-tooltip',
              'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
              rx: 2,
              ry: 2,
            })
          }
        />
        <Tooltip
          id="react-tooltip"
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        />
      </div>
    </div>
  );
};

export default ActivityCalendar;