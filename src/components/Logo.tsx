import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * ATFi Logo - Blue lock with white checkmark
 * Based on user-provided design
 */
export function ATFiLogo({ className = '', size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lock shackle (arch) */}
      <path
        d="M25 50V35C25 21.193 36.193 10 50 10C63.807 10 75 21.193 75 35V50"
        stroke="#2563EB"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Lock body - rounded rectangle */}
      <rect
        x="10"
        y="50"
        width="80"
        height="60"
        rx="12"
        fill="#2563EB"
      />
      
      {/* Checkmark - white */}
      <path
        d="M32 80L45 93L68 67"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ATFiLogoWithText({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ATFiLogo size={36} />
      <span className="text-2xl font-bold tracking-tight">
        ATFi
      </span>
    </div>
  );
}
