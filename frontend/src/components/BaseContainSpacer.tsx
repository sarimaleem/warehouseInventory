import { Children, isValidElement, type ReactNode } from "react";
import useTheme from "../hooks/useTheme.tsx";

interface BaseContainSpacerProps {
  children: ReactNode;
}

export default function BaseContainSpacer({
  children,
}: BaseContainSpacerProps) {
  const items = Children.toArray(children);
  const { theme } = useTheme();

  const selfTitle = items.find(
    (child) => isValidElement(child) && child.type === BaseContainSpacer.Title,
  );
  const selfItem = items.filter(
    (child) => !isValidElement(child) || child.type !== BaseContainSpacer.Title,
  );
  return (
    <div className={"flex flex-row w-full h-min "}>
      {selfTitle && (
        <>
          <div
            style={{ color: theme.focusText }}
            className={"h-full grid content-center text-xl mx-2"}
          >
            {selfTitle}
          </div>
          <div
            style={{ backgroundColor: theme.unfocusText }}
            className={"h-full w-[2px] mr-2"}
          />
        </>
      )}
      <div className={"flex flex-row justify-between w-full "}>
        {selfItem.map((child: ReactNode) => child)}
      </div>
    </div>
  );
}
BaseContainSpacer.Item = function BaseContainSpacerItem({
  children,
}: BaseContainSpacerProps) {
  return <div className={"flex flex-row gap-1 "}>{children}</div>;
};
interface BaseContainSpacerTitleProps {
  title: string;
}
BaseContainSpacer.Title = function BaseContainSpacerTitle({
  title,
}: BaseContainSpacerTitleProps) {
  return <div className={"flex flex-row gap-1 "}>{title}</div>;
};
