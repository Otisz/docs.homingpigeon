import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import type { ReactNode } from "react";

const docsComponents = getDocsMDXComponents();

export const useMDXComponents = (components?: ReactNode[]) => ({
  ...docsComponents,
  ...components,
});
