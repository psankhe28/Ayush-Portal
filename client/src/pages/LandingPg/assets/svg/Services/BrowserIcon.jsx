import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={39.581} height={39.58} viewBox="0 0 39.581 39.58" {...props}>
      <g data-name="Group 72">
        <circle cx="19.79" cy="19.79" r="18.79" fill="#ffd700" /> {/* Change the outer circle to yellow */}
        <path
          data-name="Path 127"
          d="M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z"
          fill="#4cd5c5"
        />
        <g data-name="Group 69" fill="#0b093b">
          {/* Replace the browser icon with a trophy/prize icon */}
          <path
            data-name="Path 128"
            d="M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"
          />
          {/* Customize the trophy/prize shape */}
          <path
            data-name="Path 129"
            d="M25.905 5.182a1 1 0 00-1-1 1 1 0 00-1 1v6a1 1 0 102 0z"
            fill="#ffd700" // Change the trophy/prize color to yellow
          />
          <path
            data-name="Path 130"
            d="M32.673 5.182a1 1 0 00-1-1 1 1 0 00-1 1v6a1 1 0 102 0z"
            fill="#ffd700" // Change the trophy/prize color to yellow
          />
          <path
            data-name="Path 131"
            d="M21.905 12.182a3 3 0 00-3 3v4a3 3 0 003 3 1 1 0 000-2 1 1 0 010-2 1 1 0 000-2h-6a1 1 0 100 2h1a1 1 0 010 2 1 1 0 000 2 3 3 0 003-3v-4a3 3 0 00-3-3 1 1 0 000 2 1 1 0 010 2 1 1 0 000 2h6a1 1 0 000-2h-1a1 1 0 010-2 1 1 0 000-2z"
            fill="#ffd700" // Change the trophy/prize color to yellow
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
