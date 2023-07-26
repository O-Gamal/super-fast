import { cn } from '@/lib/utils';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  type: 'single' | 'multiple';
  defaultValue: string | string[];
}

const ToggleList = ({ children, type, defaultValue }: AccordionProps) => {
  return (
    <>
      {type === 'multiple' ? (
        <Accordion.Root
          className='w-full'
          type={type}
          defaultValue={defaultValue as string[]}
        >
          {children}
        </Accordion.Root>
      ) : (
        <Accordion.Root
          className='w-full'
          type={type}
          defaultValue={defaultValue as string}
        >
          {children}
        </Accordion.Root>
      )}
    </>
  );
};

interface AccordionItemProps {
  title: string;
  value: string;
  children: React.ReactNode;
}

const ToggleListItem = ({ title, value, children }: AccordionItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

const AccordionItem = React.forwardRef(
  (
    {
      children,
      className,
      value,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
      value: string;
    },
    forwardedRef: React.Ref<HTMLDivElement>
  ) => (
    <Accordion.Item
      className={cn(className)}
      value={value}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  (
    {
      children,
      className,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
    },
    forwardedRef: React.Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className='flex'>
      <Accordion.Trigger
        className={cn(
          'text-sm text-gray-400 group flex h-[45px] flex-1 items-center justify-between px-2',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className='w-4 h-4 stroke-2 ease-[cubic-bezier(0.87,_0,_0.13,_1)] -rotate-90 transition-transform duration-300 group-data-[state=open]:rotate-0'
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  (
    {
      children,
      className,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
    },
    forwardedRef: React.Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      className={cn(
        'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className='pb-2'>{children}</div>
    </Accordion.Content>
  )
);

export default ToggleList;

ToggleList.Item = ToggleListItem;
