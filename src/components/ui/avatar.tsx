'use client'

import { cn } from '@/lib/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

type AvatarProps = {
    className?: string
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        className={cn(
            'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
            className
        )}
        ref={ref}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

type AvatarImageProps = {
    className?: string
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    AvatarImageProps
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        className={cn('aspect-square h-full w-full', className)}
        ref={ref}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

type AvatarFallbackProps = {
    className?: string
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    AvatarFallbackProps
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        className={cn(
            'flex h-full w-full items-center justify-center rounded-full bg-muted',
            className
        )}
        ref={ref}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
