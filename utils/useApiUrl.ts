export function useApiUrl() {
    const URL = useRuntimeConfig().public.url;
    return URL;
}
  