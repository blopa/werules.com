'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { projects } from '@/lib/projects';
import { useTranslation } from 'next-i18next';
import * as React from 'react'

export default function ProjectCarousel() {
    const { t } = useTranslation();

    return (
        <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <img
                                        alt={project.name}
                                        className="w-16 h-16 mb-4 rounded-lg"
                                        src={project.image}
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                    <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                                        {t(project.description)}
                                    </p>
                                    <a href={project.website}>
                                        {t('access_website')}
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

