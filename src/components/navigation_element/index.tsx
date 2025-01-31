import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

interface NavigationElementProps {
  icon: any;
  title: string;
  description: string;
  path?: string;
  onClick?: () => void;
}

const NavigationElement: React.FC<NavigationElementProps> = ( props ) => {
  if (props.path && props.path.includes("https")) {
    return (
      <a href={props.path} target="_blank" rel="noreferrer">
        <div onClick={props.onClick} className="flex mb-4 group items-center gap-4">
          <div className="text-[#83d656] text-[24px] group-hover:text-[#5a9439] transition-all">
            {props.icon}
          </div>
          <div>
            <p className="group-hover:text-[#5a9439] text-[14px] transition-all text-[#83d656]">{props.title}</p>
            <p className="text-[#818896] text-[14px]">{props.description}</p>
          </div>
          <div className="ml-6 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            <BiLinkExternal className="text-[#5a9439]" />
          </div>
        </div>
      </a>
    )
  }
  return (
    <Link to={props.path || '/'}>
      <div onClick={props.onClick} className="flex mb-4 group items-center gap-4">
        <div className="text-[#83d656] text-[24px] group-hover:text-[#5a9439] transition-all">
          {props.icon}
        </div>
        <div>
          <p className="group-hover:text-[#5a9439] text-[14px] transition-all text-[#83d656]">{props.title}</p>
          <p className="text-[#818896] text-[14px]">{props.description}</p>
        </div>
        <div className="ml-6 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          <BiLinkExternal className="text-[#5a9439]" />
        </div>
      </div>
    </Link>
  );
}

export default NavigationElement;