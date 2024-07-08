export function useBaseUrl(src: string) {
  const URL = useRuntimeConfig().public.baseUrl;

  return URL + src;
}
