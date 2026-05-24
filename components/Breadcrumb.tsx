import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex flex-wrap items-center gap-2 text-sm sm:text-base ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          {item.href ? (
            <Link
              to={item.href}
              className="whitespace-nowrap text-slate-100/80 hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="whitespace-nowrap text-slate-100/80">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="shrink-0 text-slate-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
