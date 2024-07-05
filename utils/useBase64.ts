export function useBase64(img: string) {
    if(typeof img !== 'string') return undefined;
    
    return 'data:image/png;base64,' + img;
}
  