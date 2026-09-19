/**
 * base URL を考慮した安全なパスを生成するヘルパー関数
 * @param path ルート相対パス (例: '/', '/about', '/favicon.svg')
 * @returns base が付与されたパス
 */
export function getPath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (cleanPath === '/') {
    return `${base}/`;
  }
  return `${base}${cleanPath}`;
}
