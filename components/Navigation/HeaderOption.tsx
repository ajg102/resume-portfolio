import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

type HeaderOptionProps = {
  Icon(props: any): JSX.Element;
  title?: string;
  selected?: boolean;
};

function HeaderOption({
  Icon,
  title = "",
  selected = false,
}: HeaderOptionProps) {
  const router = useRouter();

  const onHeaderOptionClickedHandler = (e: SyntheticEvent) => {
    if (selected || title === "More") return;
    router.push(`/search?q=${router.query.q}&f=${title.toLowerCase()}`);
  };

  return (
    <div
      onClick={onHeaderOptionClickedHandler}
      className={`flex items-center space-x-1 border-b-2 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
