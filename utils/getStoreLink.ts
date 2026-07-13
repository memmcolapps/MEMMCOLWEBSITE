export function getStoreLink(playStoreUrl: string, appStoreUrl: string): string {
  if (typeof window === "undefined") return playStoreUrl;

  const ua = window.navigator.userAgent || window.navigator.vendor;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
  const isAndroid = /android/i.test(ua);

  if (isIOS) return appStoreUrl;
  if (isAndroid) return playStoreUrl;
  return playStoreUrl; 
}