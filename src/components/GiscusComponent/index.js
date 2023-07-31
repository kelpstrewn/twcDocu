            import React from 'react';
            import Giscus from "@giscus/react";
            import { useColorMode } from '@docusaurus/theme-common';
            
            export default function GiscusComponent() {
              const { colorMode } = useColorMode();
            
              return (
                <Giscus    
                  repo="kelpstrewn/giscusdocu"
                  repoId="R_kgDOJ8UF0g"
                  category="General"
                  categoryId="DIC_kwDOJ8UF0s4CX7kj"  // E.g. id of "General"
                  mapping="url"                        // Important! To map comments to URL
                  term="Welcome to @giscus/react component!"
                  strict="0"
                  reactionsEnabled="1"
                  emitMetadata="1"
                  inputPosition="top"
                  theme={colorMode}
                  lang="en"
                  loading="lazy"
                  crossorigin="anonymous"
                  async
                />
              );
            }           