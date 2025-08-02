import { Link, useLocation } from "react-router-dom";
import { type ReactNode, useEffect, useState, type MouseEvent } from "react";
import useTheme from "../hooks/useTheme.tsx";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

interface NavigationButtonProps {
  to: string;
  title: string;
  icon: ReactNode;
}

export default function NavigationButton({
  to,
  title,
  icon,
}: NavigationButtonProps) {
  const location = useLocation();
  const [isRoute, setIsRoute] = useState<boolean>(false);

  const { theme } = useTheme();

  useEffect(() => {
    setIsRoute(location.pathname.replace(/\//g, "") === to.replace(/\//g, ""));
  }, [location, to]);

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [nextId, setNextId] = useState(0);

  const createRipple = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = { id: nextId, x, y };
    setRipples((prev) => [...prev, newRipple]);
    setNextId((id) => id + 1);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <Link to={to}>
      <div onClick={createRipple} className={"py-1"}>
        <div
          style={{
            backgroundColor: isRoute ? theme.focusButton : theme.root,
            borderStyle: "solid",
            borderColor: isRoute ? theme.focusButtonOutline : theme.root,
            borderWidth: "1px",
            color: isRoute ? "black" : theme.focusText,
            borderRadius: 5,
          }}
          className={"p-2 text-sm flex flex-row overflow-hidden relative"}
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute rounded-full opacity-20 pointer-events-none animate-ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 20,
                height: 20,
                backgroundColor: theme.focusText,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          <div className={" grid content-center mr-1"}>{icon}</div>
          {title}
        </div>
      </div>
    </Link>
  );
}
