import "@total-typescript/ts-reset";

declare global {
  function gtag(
    eventName: string,
    eventAction: string,
    options: {
      event_category: string;
      event_label: string;
      event_value?: number;
      non_interaction?: boolean;
    },
  ): void;
  function gtag(
    configName: "config",
    eventAction: "GTM-WNL7DNDR" | "GTM-XV3R6QT4W3",
    options: {
      page_path?: string;
      user_id?: string;
      debug_mode?: true;
    },
  ): void;
  function gtag(
    configName: "set",
    userProperties: "user_properties",
    options: {
      team_name?: string;
    },
  ): void;
}

export {};
