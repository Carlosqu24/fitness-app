import { useState } from 'react';

interface AccordionProps {
    className?: string;
    children: React.ReactNode;
    title: React.ReactNode;
}


export default function Accordion({ title, children, className }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className + "border rounded-md p-4 mb-2 flex flex-col"} onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-lg font-bold">{title}</h2>
      {isOpen && <div className="mt-2 w-full flex justify-between">{children}</div>}
    </div>
  );
}