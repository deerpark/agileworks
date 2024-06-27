export * from "./button";
export * from "./card";
export * from "./select";

export const getMetadata = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
} = {}) => ({
  title: title ? `${title} - AWDS` : "AgileWorks Design System",
  description,
});
