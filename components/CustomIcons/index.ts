import BookIcon from "./BooksIcon";
import GitHubIcon from "./GitHubIcon";
import InstagramIcon from "./InstagramIcon";
import MicrophoneIcon from "./Microphone";
import NewspaperIcon from "./NewspaperIcon";
import PhotographIcon from "./PhotographIcon";
import PlayIcon from "./PlayIcon";
import SearchIcon from "./SearchIcon";

export {
  BookIcon,
  MicrophoneIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  GitHubIcon,
  InstagramIcon,
};

export type IconProps = {
  className?: string;
  fillColor?: string;
  //rest props if any
  [x: string]: any;
};
