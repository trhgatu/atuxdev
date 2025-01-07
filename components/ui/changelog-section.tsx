import React from 'react';

import { Timeline } from '@/src/shared/components/landing/time-line';

export function ChangelogSection() {
    const data = [
        {
            title: 'Currently',
            content: (
                <div>
                    <p className="text-neutral-800  text-xs md:text-sm font-normal mb-8 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            ),
        },
        {
            title: '2024',
            content: (
                <div>
                    <p className="text-neutral-800  text-xs md:text-sm font-normal mb-8 dark:text-white">
                        I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800  text-xs md:text-sm font-normal mb-8 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            ),
        },
        {
            title: 'Changelog',
            content: (
                <div>
                    <p className="text-neutral-800  text-xs md:text-sm font-normal mb-4 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}