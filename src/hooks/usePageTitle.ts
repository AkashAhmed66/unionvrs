import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    const baseTitle = 'Union - Comprehensive HR Solutions';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    
    // Also set the favicon to ensure logo.png is used
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/logo.png';
    }
  }, [title]);
};

export default usePageTitle; 