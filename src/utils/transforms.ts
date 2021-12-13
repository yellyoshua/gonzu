export const copyObject = <T = Object>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};

export const parsePermaLink = (
  host: string,
  permalink: string | string[]
): string => {
  if (Array.isArray(permalink)) {
    const newPermalink = permalink.join("/");
    return parsePermaLink(host, newPermalink);
  }

  let newHost: string, newPermalink: string;

  {
    const endsWithSlash = (host[host.length - 1] ?? "").includes("/");
    newHost = host.slice(0, endsWithSlash ? host.length - 1 : host.length);
  }

  {
    const startWithSlash = (permalink.split("")[0] ?? "").includes("/");
    newPermalink = `${startWithSlash ? "" : "/"}${permalink}`;
  }

  return newHost.concat(newPermalink);
};
