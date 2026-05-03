'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { Providers } from "@/components/common/Providers";

const SmoothScroll = dynamic(() => import("@/components/common/SmoothScroll").then(mod => mod.SmoothScroll), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/common/CustomCursor").then(mod => mod.CustomCursor), { ssr: false });
const Navbar = dynamic(() => import("@/components/common/Navbar").then(mod => mod.Navbar), { ssr: false });

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <Providers>
        {children}
      </Providers>
    </SmoothScroll>
  );
}
