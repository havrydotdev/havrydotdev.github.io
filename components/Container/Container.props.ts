import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
