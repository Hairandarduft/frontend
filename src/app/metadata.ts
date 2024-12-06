import { useEffect } from "react";

function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
}

export default usePageMetadata;