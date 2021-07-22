import React from "react";
import { SvgIcon } from "@material-ui/core";

export interface SvgIconProps {
  viewBox: string;
  color: string;
}

export const AddIcon = ({ viewBox, color }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox}>
    <path
      d="M12 6V18"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12L6 12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export const BackIcon = ({ viewBox, color }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox}>
    <path
      d="M0.646446 4.14645C0.451185 4.34171 0.451185 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM21 4L1 4V5L21 5V4Z"
      fill={color}
    />
  </SvgIcon>
);

export const EditIcon = ({ viewBox, color }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox}>
    <path
      d="M8.75401 2.62895L11.6008 5.47105L2.84683 14.2105H0V11.3684L8.75401 2.62895ZM9.75041 1.63421L11.3873 0L14.2342 2.84211L12.5972 4.47632L9.75041 1.63421Z"
      fill={color}
    />
  </SvgIcon>
);

export const TrashIcon = ({ viewBox, color }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox}>
    <path
      d="M9.69231 2.125H12.9231C13.5692 2.125 14 2.55 14 3.1875V4.25H0V3.1875C0 2.55 0.538462 2.125 1.07692 2.125H4.30769C4.52308 0.95625 5.70769 0 7 0C8.29231 0 9.47692 0.95625 9.69231 2.125ZM5.38462 2.125H8.61539C8.4 1.4875 7.64615 1.0625 7 1.0625C6.35385 1.0625 5.6 1.4875 5.38462 2.125ZM1.07692 5.3125H12.9231L11.9538 16.0438C11.9538 16.575 11.4154 17 10.8769 17H3.12308C2.58462 17 2.15385 16.575 2.04615 16.0438L1.07692 5.3125Z"
      fill={color}
    />
  </SvgIcon>
);

export const ArrowUpIcon = ({ viewBox, color }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox}>
    <path
      d="M7 15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15L7 15ZM8.70711 0.292893C8.31658 -0.0976315 7.68342 -0.0976315 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 15L9 1L7 1L7 15L9 15Z"
      fill={color}
    />
  </SvgIcon>
);

export const ArrowDownIcon = ({ viewBox, color }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox}>
    <path
      d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538408 8.31946 0.538408 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 1L7 15H9L9 1L7 1Z"
      fill={color}
    />
  </SvgIcon>
);
