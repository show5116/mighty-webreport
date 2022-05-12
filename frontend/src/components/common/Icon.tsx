import { iconName, IconSet } from "../../assets/svg/constants";

interface IconProps {
    icon : iconName;
    size : number;
    color? : string;
}

const Icon = ({ icon , size , color }: IconProps) => {
    return (
        <svg
            height={size}
            viewBox={IconSet[icon].viewBox}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={IconSet[icon].path}/>
        </svg>
    );
};

export default Icon;