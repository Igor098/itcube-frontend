export function getInitialFromName(name?: string) {
  return name?.trim()?.charAt(0)?.toUpperCase() ?? 'U';
}
