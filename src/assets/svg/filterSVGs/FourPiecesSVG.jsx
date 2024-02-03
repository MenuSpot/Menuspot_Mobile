import React from 'react'

const FourPiecesSVG = ({ onClick, isChosen }) => {
    return (
        <svg
            onClick={onClick}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
                clipPath="url(#clip0_271_151)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 13C9.53043 13 10.0391 13.2107 10.4142 13.5858C10.7893 13.9609 11 14.4696 11 15V19C11 19.5304 10.7893 20.0391 10.4142 20.4142C10.0391 20.7893 9.53043 21 9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15C3 14.4696 3.21071 13.9609 3.58579 13.5858C3.96086 13.2107 4.46957 13 5 13H9ZM19 13C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15C14.4696 21 13.9609 20.7893 13.5858 20.4142C13.2107 20.0391 13 19.5304 13 19V15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H19ZM9 3C9.53043 3 10.0391 3.21071 10.4142 3.58579C10.7893 3.96086 11 4.46957 11 5V9C11 9.53043 10.7893 10.0391 10.4142 10.4142C10.0391 10.7893 9.53043 11 9 11H5C4.46957 11 3.96086 10.7893 3.58579 10.4142C3.21071 10.0391 3 9.53043 3 9V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9C21 9.53043 20.7893 10.0391 20.4142 10.4142C20.0391 10.7893 19.5304 11 19 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3H19Z"
                    fill={isChosen ? "#D98880" : "#BDBEC4"}
                />
            </g>
            <defs>
                <clipPath
                    id="clip0_271_151">
                    <rect
                        width="24"
                        height="24"
                        fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export default FourPiecesSVG
