import React from 'react';

import { Timeline } from '@/src/shared/components/landing/time-line';
import { Card } from "@/components/ui/card";
import { AuroraText } from '@/components/ui/aurora-text';

export function ChangelogSection() {
    const data = [
        {
            title: 'Currently',
            content: (
                <div>
                    <p className=" mb-8 dark:text-white">
                        I'm working as a collaborator at CyberSkill. This has been an excellent environment for me to grow my professional skills and expand my practical knowledge.
                    </p>
                </div>
            ),
        },
        {
            title: '2024',
            content: (
                <div>
                    <p className=" mb-8 dark:text-white">
                        In 2024, I completed an internship at CyberSkill. During this time, I gained hands-on experience, adapted to a real-world work environment, and learned invaluable lessons.
                    </p>
                </div>
            ),
        },
        {
            title: '2021 - 2023',
            content: (
                <div>
                    <p className=" mb-8 dark:text-white">
                        From 2021 to 2023, I was a student at Ho Chi Minh University of Industry and Trade (HUIT). This was a pivotal time for me to focus on learning, participating in team projects, and nurturing my passion for programming.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="mt-20 px-8">
            <div className='max-w-5xl mx-auto'>
                <Card className='border border-slate-200'>
                    <div className='mx-auto container p-10'>
                        <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
                            My <AuroraText>Journey.</AuroraText>
                        </h1>
                    </div>
                    <Timeline data={data} />
                </Card>
            </div>
        </div>
    );
}
